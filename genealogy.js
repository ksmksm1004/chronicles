(() => {
  const data = window.GENEALOGY_DATA;
  const page = document.getElementById('genealogy');
  if (!data || !page) return;

  const stage = document.getElementById('genealogy-stage');
  const svg = document.getElementById('genealogy-svg');
  const viewport = document.getElementById('genealogy-viewport');
  const linksLayer = document.getElementById('genealogy-links');
  const nodesLayer = document.getElementById('genealogy-nodes');
  const searchInput = document.getElementById('genealogy-search');
  const emptyState = document.getElementById('genealogy-empty');
  const visibleCount = document.getElementById('genealogy-visible-count');
  const totalCount = document.getElementById('genealogy-total-count');
  const zoomLabel = document.getElementById('genealogy-zoom-label');
  const detail = document.getElementById('genealogy-detail');
  const detailName = document.getElementById('genealogy-detail-name');
  const detailRelation = document.getElementById('genealogy-detail-relation');
  const detailSpouse = document.getElementById('genealogy-detail-spouse');
  const detailLifespanRow = document.getElementById('genealogy-detail-lifespan-row');
  const detailLifespan = document.getElementById('genealogy-detail-lifespan');
  const detailParenthoodRow = document.getElementById('genealogy-detail-parenthood-row');
  const detailParenthood = document.getElementById('genealogy-detail-parenthood');
  const detailRefs = document.getElementById('genealogy-detail-refs');
  const detailNote = document.getElementById('genealogy-detail-note');
  const detailClose = document.getElementById('genealogy-detail-close');

  const expanded = new Set();
  let selectedId = null;
  let matches = new Set();
  let query = '';
  let layoutBounds = { width: 600, height: 600, minX: 0, minY: 0 };
  let transform = { x: 0, y: 22, scale: 1 };
  let hasActivated = false;
  let dragState = null;
  let suppressClick = false;
  let activePreset = null;
  let zoomTarget = null;
  let zoomFrame = null;
  let panFrame = null;
  let pendingPan = null;
  let lastZoomPercent = null;

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const NODE_WIDTH = 148;
  const NODE_HEIGHT = 43;
  const X_GAP = 184;
  const Y_GAP = 164;
  const DENSE_X_GAP = 232;
  const DENSE_Y_GAP = 250;
  const DENSE_NODE_THRESHOLD = 180;
  const MARGIN = 120;
  const BASE_COLUMN_RADIUS = 4;
  const MAX_COLUMN_RADIUS = 24;
  const COLUMN_EXPANSION_STEP = 4;
  const SIBLINGS_PER_ROW = 9;

  function svgElement(tag, attrs = {}) {
    const element = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function countWithSpouses(nodes) {
    return nodes.reduce((sum, node) => sum + (node.group ? 0 : 1) + node.spouses.length, 0);
  }

  function getFamilyHeight(node) {
    if (!node.spouses.length) return NODE_HEIGHT;
    const spouseRows = Math.min(2, node.spouses.length);
    return NODE_HEIGHT + 12 + spouseRows * 28 + (node.spouses.length > 2 ? 18 : 0);
  }

  function isVisibleChild(node) {
    if (!expanded.has(node.id)) return [];
    return activePreset ? node.children.filter((child) => !child.supplemental) : node.children;
  }

  function collectVisible(node, parent = null, visible = [], links = [], visibleDepth = 0) {
    node.visibleDepth = visibleDepth;
    visible.push(node);
    isVisibleChild(node).forEach((child) => {
      links.push({ source: node, target: child });
      collectVisible(child, node, visible, links, visibleDepth + 1);
    });
    return { visible, links };
  }

  function layoutTree(visible) {
    const visibleSet = new Set(visible.map((node) => node.id));
    const occupied = new Map();
    const queue = [data.root];

    function rowSlots(row) {
      if (!occupied.has(row)) occupied.set(row, new Set());
      return occupied.get(row);
    }

    function candidateStarts(count, parentColumn, radius) {
      const starts = [];
      for (let start = -radius; start <= radius - count + 1; start += 1) starts.push(start);
      return starts.sort((a, b) => {
        const aCenter = a + (count - 1) / 2;
        const bCenter = b + (count - 1) / 2;
        return Math.abs(aCenter - parentColumn) - Math.abs(bCenter - parentColumn) || a - b;
      });
    }

    function placeChunk(chunk, parentColumn, startingRow) {
      let row = startingRow;
      while (true) {
        const slots = rowSlots(row);
        for (let radius = BASE_COLUMN_RADIUS; radius <= MAX_COLUMN_RADIUS; radius += COLUMN_EXPANSION_STEP) {
          const start = candidateStarts(chunk.length, parentColumn, radius)
            .find((candidate) => chunk.every((_, index) => !slots.has(candidate + index)));
          if (start !== undefined) {
            chunk.forEach((node, index) => {
              node.layoutColumn = start + index;
              node.layoutRow = row;
              slots.add(node.layoutColumn);
            });
            return row;
          }
        }
        row += 1;
      }
    }

    data.root.layoutColumn = 0;
    data.root.layoutRow = 0;
    rowSlots(0).add(0);

    while (queue.length) {
      const parent = queue.shift();
      const children = isVisibleChild(parent).filter((child) => visibleSet.has(child.id));
      let nextRow = parent.layoutRow + 1;
      for (let index = 0; index < children.length; index += SIBLINGS_PER_ROW) {
        const chunk = children.slice(index, index + SIBLINGS_PER_ROW);
        const placedRow = placeChunk(chunk, parent.layoutColumn, nextRow);
        nextRow = placedRow + 1;
      }
      queue.push(...children);
    }

    const denseLayout = visible.length >= DENSE_NODE_THRESHOLD;
    const horizontalGap = denseLayout ? DENSE_X_GAP : X_GAP;
    const verticalGap = denseLayout ? DENSE_Y_GAP : Y_GAP;
    visible.forEach((node) => {
      node.layoutX = node.layoutColumn * horizontalGap;
      node.layoutY = node.layoutRow * verticalGap;
    });
    const xs = visible.map((node) => node.layoutX);
    const minX = Math.min(...xs) - MARGIN;
    const maxX = Math.max(...xs) + NODE_WIDTH + MARGIN;
    const minY = -MARGIN / 2;
    const maxY = Math.max(...visible.map((node) => node.layoutY + getFamilyHeight(node))) + MARGIN;
    visible.forEach((node) => {
      node.layoutX -= minX;
      node.layoutY -= minY;
    });
    layoutBounds = { width: maxX - minX, height: maxY - minY, minX: 0, minY: 0 };
  }

  function getNodeLabel(node) {
    if (node.group) return '본문의 가문 묶음';
    if (node.name === '예수 그리스도') return node.route === 'luke' ? '누가 계보의 도착점' : '마태 계보의 도착점';
    if (node.route === 'matthew') return '마태복음 계보';
    if (node.route === 'luke') return '누가복음 계보';
    if (node.kind === 'promise') return '메시아 계보';
    if (node.kind === 'tribe') return node.tribe ? `${node.tribe} 지파` : '이스라엘 계보';
    if (node.kind === 'woman') return '성경에 기록된 여성';
    return '민족·가문 계보';
  }

  function truncate(value, max) {
    return value.length > max ? `${value.slice(0, max - 1)}…` : value;
  }

  function makeLinkSegment({ source, target }) {
    const startX = source.layoutX + NODE_WIDTH / 2;
    const startY = source.layoutY + getFamilyHeight(source);
    const endX = target.layoutX + NODE_WIDTH / 2;
    const endY = target.layoutY;
    const middleY = startY + (endY - startY) * .52;
    return `M ${startX} ${startY} C ${startX} ${middleY}, ${endX} ${middleY}, ${endX} ${endY}`;
  }

  function makeLinkPaths(links) {
    const buckets = new Map();
    links.forEach((link) => {
      const promise = link.target.kind === 'promise';
      const highlighted = query && matches.has(link.source.id) && matches.has(link.target.id);
      const state = query ? (highlighted ? 'highlighted' : 'dimmed') : 'normal';
      const key = `${promise ? 'promise' : 'regular'}-${state}`;
      if (!buckets.has(key)) buckets.set(key, { promise, state, segments: [] });
      buckets.get(key).segments.push(makeLinkSegment(link));
    });
    return Array.from(buckets.values()).map(({ promise, state, segments }) => {
      const classes = ['genealogy-link'];
      if (promise) classes.push('promise-link');
      if (state !== 'normal') classes.push(state);
      return svgElement('path', { class: classes.join(' '), d: segments.join(' ') });
    });
  }

  function makeNode(node) {
    const group = svgElement('g', {
      class: 'genealogy-node',
      transform: `translate(${node.layoutX} ${node.layoutY})`,
      tabindex: '0',
      role: 'button',
      'data-id': node.id,
      'data-kind': node.kind || 'nation',
      'aria-label': `${node.name}. ${getNodeLabel(node)}${node.children.length ? '. 눌러서 후손 가지 열기 또는 닫기' : ''}`
    });
    if (selectedId === node.id) group.classList.add('selected');
    if (node.group) group.classList.add('group');
    if (query && matches.has(node.id)) group.classList.add('search-match');
    if (query && !matches.has(node.id)) group.classList.add('search-dim');

    group.appendChild(svgElement('rect', { class: 'node-card', x: 0, y: 0, width: NODE_WIDTH, height: NODE_HEIGHT, rx: 8 }));
    const name = svgElement('text', { class: 'node-name', x: 12, y: 18 });
    name.textContent = truncate(node.name, 20);
    group.appendChild(name);
    const meta = svgElement('text', { class: 'node-meta', x: 12, y: 33 });
    meta.textContent = truncate(getNodeLabel(node), 23);
    group.appendChild(meta);

    if (node.children.length) {
      const toggle = svgElement('g', { transform: `translate(${NODE_WIDTH - 1} ${NODE_HEIGHT / 2})` });
      toggle.appendChild(svgElement('circle', { class: 'node-toggle-ring', r: 8.5 }));
      toggle.appendChild(svgElement('path', { class: 'node-toggle-symbol', d: 'M -3.5 0 H 3.5' }));
      if (!expanded.has(node.id)) toggle.appendChild(svgElement('path', { class: 'node-toggle-symbol', d: 'M 0 -3.5 V 3.5' }));
      group.appendChild(toggle);
    }

    if (node.spouses.length) {
      node.spouses.slice(0, 2).forEach((spouse, index) => {
        const x = 10;
        const y = NODE_HEIGHT + 10 + index * 28;
        group.appendChild(svgElement('line', { class: 'spouse-link', x1: NODE_WIDTH / 2, y1: index ? y - 4 : NODE_HEIGHT, x2: NODE_WIDTH / 2, y2: y }));
        group.appendChild(svgElement('rect', { class: 'spouse-pill', x, y, width: NODE_WIDTH - 20, height: 24, rx: 12 }));
        const spouseText = svgElement('text', { class: 'spouse-name', x: NODE_WIDTH / 2, y: y + 15.5, 'text-anchor': 'middle' });
        spouseText.textContent = truncate(spouse, 18);
        group.appendChild(spouseText);
      });
      if (node.spouses.length > 2) {
        const more = svgElement('text', { class: 'node-meta', x: NODE_WIDTH / 2, y: NODE_HEIGHT + 79, 'text-anchor': 'middle' });
        more.textContent = `외 ${node.spouses.length - 2}명`;
        group.appendChild(more);
      }
    }

    group.addEventListener('click', (event) => {
      event.stopPropagation();
      if (suppressClick) return;
      activePreset = null;
      selectNode(node);
      if (node.children.length) {
        if (expanded.has(node.id)) expanded.delete(node.id);
        else expanded.add(node.id);
        render();
      }
    });
    group.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      activePreset = null;
      selectNode(node);
      if (node.children.length) {
        if (expanded.has(node.id)) expanded.delete(node.id);
        else expanded.add(node.id);
        render();
      }
    });
    return group;
  }

  function addRouteLabels(visible) {
    visible.forEach((node) => {
      if (!node.route || node.parent?.route === node.route) return;
      const label = svgElement('g', {
        class: `route-label ${node.route}`,
        transform: `translate(${node.layoutX - 4} ${node.layoutY - 29})`
      });
      label.appendChild(svgElement('rect', { x: 0, y: 0, width: 104, height: 19, rx: 9.5 }));
      const text = svgElement('text', { x: 10, y: 13 });
      text.textContent = node.route === 'matthew' ? '마태복음 계보' : '누가복음 계보';
      label.appendChild(text);
      nodesLayer.appendChild(label);
    });
  }

  function render() {
    const { visible, links } = collectVisible(data.root);
    layoutTree(visible);
    viewport.dataset.density = visible.length > 300 ? 'high' : 'normal';
    linksLayer.replaceChildren(...makeLinkPaths(links));
    nodesLayer.replaceChildren(...visible.map(makeNode));
    addRouteLabels(visible);
    visibleCount.textContent = `${countWithSpouses(visible).toLocaleString('ko-KR')}명`;
    totalCount.textContent = `${countWithSpouses(data.people).toLocaleString('ko-KR')}명 수록`;
    emptyState.hidden = !query || matches.size > 0;
    applyTransform();
  }

  function applyTransform() {
    viewport.setAttribute('transform', `translate(${transform.x} ${transform.y}) scale(${transform.scale})`);
    const lod = transform.scale < .16 ? 'overview' : transform.scale < .4 ? 'compact' : 'detail';
    if (viewport.dataset.lod !== lod) viewport.dataset.lod = lod;
    const zoomPercent = Math.round(transform.scale * 100);
    if (zoomPercent !== lastZoomPercent) {
      lastZoomPercent = zoomPercent;
      zoomLabel.textContent = `${zoomPercent}%`;
    }
  }

  function cancelSmoothZoom() {
    zoomTarget = null;
    if (zoomFrame) cancelAnimationFrame(zoomFrame);
    zoomFrame = null;
  }

  function animateZoom() {
    if (!zoomTarget) {
      zoomFrame = null;
      return;
    }
    const easing = .2;
    transform.x += (zoomTarget.x - transform.x) * easing;
    transform.y += (zoomTarget.y - transform.y) * easing;
    transform.scale += (zoomTarget.scale - transform.scale) * easing;
    const remaining = Math.abs(zoomTarget.x - transform.x) + Math.abs(zoomTarget.y - transform.y);
    const scaleRemaining = Math.abs(zoomTarget.scale - transform.scale);
    if (remaining < .08 && scaleRemaining < .00008) {
      transform = { ...zoomTarget };
      zoomTarget = null;
      zoomFrame = null;
      applyTransform();
      return;
    }
    applyTransform();
    zoomFrame = requestAnimationFrame(animateZoom);
  }

  function fitToScreen(animated = false) {
    cancelSmoothZoom();
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const padding = 54;
    const nextScale = Math.max(.008, Math.min(1.15,
      Math.min((rect.width - padding * 2) / layoutBounds.width, (rect.height - padding * 2) / layoutBounds.height)
    ));
    transform = {
      scale: nextScale,
      x: (rect.width - layoutBounds.width * nextScale) / 2,
      y: Math.max(26, (rect.height - layoutBounds.height * nextScale) / 2)
    };
    if (animated) viewport.style.transition = 'transform .28s ease';
    applyTransform();
    if (animated) window.setTimeout(() => { viewport.style.transition = ''; }, 300);
  }

  function zoomAt(clientX, clientY, factor, smooth = true) {
    const rect = stage.getBoundingClientRect();
    const pointerX = clientX - rect.left;
    const pointerY = clientY - rect.top;
    const base = zoomTarget || transform;
    const nextScale = Math.max(.008, Math.min(3.2, base.scale * factor));
    const worldX = (pointerX - base.x) / base.scale;
    const worldY = (pointerY - base.y) / base.scale;
    const next = {
      x: pointerX - worldX * nextScale,
      y: pointerY - worldY * nextScale,
      scale: nextScale
    };
    if (!smooth) {
      cancelSmoothZoom();
      transform = next;
      applyTransform();
      return;
    }
    zoomTarget = next;
    if (!zoomFrame) zoomFrame = requestAnimationFrame(animateZoom);
  }

  function selectNode(node) {
    selectedId = node.id;
    detailName.textContent = node.name;
    const parentText = node.parent ? `${node.parent.name}의 계보` : '인류의 계보 시작';
    const motherText = node.mother ? ` · 어머니 ${node.mother}` : '';
    detailRelation.textContent = `${parentText}${motherText}`;
    detailSpouse.textContent = node.spouses.length ? node.spouses.join(', ') : '성경 본문에 이름이 기록되지 않음';
    detailLifespanRow.hidden = !node.lifespan;
    detailLifespan.textContent = node.lifespan || '';
    detailParenthoodRow.hidden = !node.parenthood;
    detailParenthood.textContent = node.parenthood || '';
    detailRefs.textContent = node.refs || '계보 병행 본문';
    detailNote.textContent = node.note || `${getNodeLabel(node)}에 속한 인물입니다. 연결선을 따라 부모와 후손을 확인할 수 있습니다.`;
    detail.classList.add('show');
    nodesLayer.querySelectorAll('.genealogy-node').forEach((entry) => entry.classList.toggle('selected', entry.dataset.id === node.id));
  }

  function revealMatches(value) {
    activePreset = null;
    query = value.trim().toLocaleLowerCase('ko-KR');
    matches = new Set();
    if (!query) {
      render();
      return;
    }
    const found = data.people.filter((node) =>
      node.name.toLocaleLowerCase('ko-KR').includes(query) ||
      node.spouses.some((spouse) => spouse.toLocaleLowerCase('ko-KR').includes(query))
    );
    found.forEach((node) => {
      matches.add(node.id);
      let ancestor = node.parent;
      while (ancestor) {
        expanded.add(ancestor.id);
        matches.add(ancestor.id);
        ancestor = ancestor.parent;
      }
    });
    render();
    if (found.length) {
      requestAnimationFrame(() => focusNode(found[0]));
    }
  }

  function focusNode(node) {
    cancelSmoothZoom();
    const rect = stage.getBoundingClientRect();
    const nextScale = Math.max(.55, Math.min(1.25, transform.scale));
    transform.scale = nextScale;
    transform.x = rect.width / 2 - (node.layoutX + NODE_WIDTH / 2) * nextScale;
    transform.y = rect.height / 2 - (node.layoutY + NODE_HEIGHT / 2) * nextScale;
    viewport.style.transition = 'transform .28s ease';
    applyTransform();
    window.setTimeout(() => { viewport.style.transition = ''; }, 300);
    selectNode(node);
  }

  function seedDefaultExpansion() {
    let current = data.root;
    while (current) {
      expanded.add(current.id);
      if (current.name === '노아') break;
      current = current.children.find((child) => child.kind === 'promise');
    }
  }

  function configureExpansionPreset(targetName, includeTargetChildren, presetName) {
    const target = data.people.find((node) => node.name === targetName);
    if (!target) return false;
    cancelSmoothZoom();
    activePreset = presetName;
    expanded.clear();
    query = '';
    matches.clear();
    searchInput.value = '';
    detail.classList.remove('show');
    let ancestor = target.parent;
    while (ancestor) {
      expanded.add(ancestor.id);
      ancestor = ancestor.parent;
    }
    if (includeTargetChildren) expanded.add(target.id);
    return true;
  }

  function showExpansionPreset(targetName, includeTargetChildren, presetName) {
    if (!configureExpansionPreset(targetName, includeTargetChildren, presetName)) return;
    render();
    requestAnimationFrame(() => fitToScreen(true));
  }

  document.getElementById('genealogy-expand-all').addEventListener('click', () => {
    activePreset = null;
    data.people.forEach((node) => { if (node.children.length) expanded.add(node.id); });
    render();
    requestAnimationFrame(() => fitToScreen(true));
  });

  document.getElementById('genealogy-collapse-all').addEventListener('click', () => {
    activePreset = null;
    expanded.clear();
    query = '';
    matches.clear();
    searchInput.value = '';
    detail.classList.remove('show');
    render();
    requestAnimationFrame(() => fitToScreen(true));
  });

  document.getElementById('genealogy-expand-tribes').addEventListener('click', () => {
    showExpansionPreset('야곱 (이스라엘)', true, 'tribes');
  });
  document.getElementById('genealogy-expand-david').addEventListener('click', () => {
    showExpansionPreset('다윗', false, 'david');
  });

  document.getElementById('genealogy-fit').addEventListener('click', () => fitToScreen(true));
  document.getElementById('genealogy-fullscreen').addEventListener('click', async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (page.requestFullscreen) await page.requestFullscreen();
    window.setTimeout(() => fitToScreen(true), 80);
  });
  document.getElementById('genealogy-zoom-in').addEventListener('click', () => {
    const rect = stage.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, 1.12);
  });
  document.getElementById('genealogy-zoom-out').addEventListener('click', () => {
    const rect = stage.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, .89);
  });
  detailClose.addEventListener('pointerdown', (event) => event.stopPropagation());
  detailClose.addEventListener('click', (event) => {
    event.stopPropagation();
    selectedId = null;
    detail.classList.remove('show');
    nodesLayer.querySelectorAll('.genealogy-node.selected').forEach((node) => node.classList.remove('selected'));
  });
  searchInput.addEventListener('input', (event) => revealMatches(event.target.value));
  searchInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    const first = data.people.find((node) => matches.has(node.id) && node.name.toLocaleLowerCase('ko-KR').includes(query));
    if (first) focusNode(first);
  });

  stage.addEventListener('wheel', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const restrainedDelta = Math.max(-120, Math.min(120, event.deltaY));
    zoomAt(event.clientX, event.clientY, Math.exp(-restrainedDelta * .00045));
  }, { passive: false });

  stage.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || event.target.closest('.genealogy-node, .genealogy-detail, button, input')) return;
    cancelSmoothZoom();
    viewport.style.transition = '';
    stage.setPointerCapture(event.pointerId);
    dragState = { x: event.clientX, y: event.clientY, originX: transform.x, originY: transform.y };
    suppressClick = false;
    stage.classList.add('dragging');
  });
  stage.addEventListener('pointermove', (event) => {
    if (!dragState) return;
    const dx = event.clientX - dragState.x;
    const dy = event.clientY - dragState.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) suppressClick = true;
    pendingPan = { x: dragState.originX + dx, y: dragState.originY + dy };
    if (!panFrame) {
      panFrame = requestAnimationFrame(() => {
        if (pendingPan) {
          transform.x = pendingPan.x;
          transform.y = pendingPan.y;
          pendingPan = null;
          applyTransform();
        }
        panFrame = null;
      });
    }
  });
  const endDrag = () => {
    if (pendingPan) {
      transform.x = pendingPan.x;
      transform.y = pendingPan.y;
      pendingPan = null;
      applyTransform();
    }
    dragState = null;
    stage.classList.remove('dragging');
    window.setTimeout(() => { suppressClick = false; }, 0);
  };
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);

  window.addEventListener('genealogy:activate', () => {
    if (!hasActivated) {
      hasActivated = true;
      requestAnimationFrame(() => fitToScreen(false));
    }
  });
  window.addEventListener('resize', () => {
    if (page.classList.contains('active') && !query) fitToScreen(false);
  });

  const initialParams = new URLSearchParams(window.location.search);
  const initialView = initialParams.get('view');
  if (initialView === 'all') {
    data.people.forEach((node) => { if (node.children.length) expanded.add(node.id); });
  } else if (initialView === 'tribes') {
    configureExpansionPreset('야곱 (이스라엘)', true, 'tribes');
  } else if (initialView === 'david') {
    configureExpansionPreset('다윗', false, 'david');
  } else {
    seedDefaultExpansion();
  }
  render();
  const initialQuery = initialParams.get('q');
  if (initialQuery) {
    searchInput.value = initialQuery;
    revealMatches(searchInput.value);
  }
  if (page.classList.contains('active')) {
    hasActivated = true;
    if (!initialQuery) requestAnimationFrame(() => fitToScreen(false));
  }
})();
