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
  const detailRefs = document.getElementById('genealogy-detail-refs');
  const detailNote = document.getElementById('genealogy-detail-note');

  const expanded = new Set();
  let selectedId = null;
  let matches = new Set();
  let query = '';
  let layoutBounds = { width: 600, height: 600, minX: 0, minY: 0 };
  let transform = { x: 0, y: 22, scale: 1 };
  let hasActivated = false;
  let dragState = null;
  let suppressClick = false;

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const NODE_WIDTH = 148;
  const NODE_HEIGHT = 43;
  const X_GAP = 250;
  const Y_GAP = 108;
  const MARGIN = 120;

  function svgElement(tag, attrs = {}) {
    const element = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function countWithSpouses(nodes) {
    return nodes.reduce((sum, node) => sum + (node.group ? 0 : 1) + node.spouses.length, 0);
  }

  function isVisibleChild(node) {
    return expanded.has(node.id) ? node.children : [];
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
    let leafIndex = 0;
    const visibleSet = new Set(visible.map((node) => node.id));

    function place(node) {
      const children = isVisibleChild(node).filter((child) => visibleSet.has(child.id));
      children.forEach(place);
      if (children.length) {
        node.layoutX = (children[0].layoutX + children.at(-1).layoutX) / 2;
      } else {
        node.layoutX = leafIndex * X_GAP;
        leafIndex += 1;
      }
      node.layoutY = node.visibleDepth * Y_GAP;
    }

    place(data.root);
    const xs = visible.map((node) => node.layoutX);
    const ys = visible.map((node) => node.layoutY);
    const minX = Math.min(...xs) - MARGIN;
    const maxX = Math.max(...xs) + NODE_WIDTH + MARGIN;
    const minY = -MARGIN / 2;
    const maxY = Math.max(...ys) + NODE_HEIGHT + MARGIN;
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

  function makeLink({ source, target }) {
    const startX = source.layoutX + NODE_WIDTH / 2;
    const startY = source.layoutY + NODE_HEIGHT;
    const endX = target.layoutX + NODE_WIDTH / 2;
    const endY = target.layoutY;
    const middleY = startY + (endY - startY) * .52;
    const path = svgElement('path', {
      class: `genealogy-link${target.kind === 'promise' ? ' promise-link' : ''}`,
      d: `M ${startX} ${startY} C ${startX} ${middleY}, ${endX} ${middleY}, ${endX} ${endY}`,
      'data-source': source.id,
      'data-target': target.id
    });
    if (query && !matches.has(source.id) && !matches.has(target.id)) path.classList.add('dimmed');
    if (query && (matches.has(source.id) || matches.has(target.id))) path.classList.add('highlighted');
    return path;
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
        const width = Math.min(118, Math.max(70, spouse.length * 9 + 18));
        const x = NODE_WIDTH + 24;
        const y = 4 + index * 30;
        group.appendChild(svgElement('line', { class: 'spouse-link', x1: NODE_WIDTH, y1: NODE_HEIGHT / 2, x2: x, y2: y + 14 }));
        group.appendChild(svgElement('rect', { class: 'spouse-pill', x, y, width, height: 27, rx: 13.5 }));
        const spouseText = svgElement('text', { class: 'spouse-name', x: x + 10, y: y + 17.5 });
        spouseText.textContent = spouse;
        group.appendChild(spouseText);
      });
      if (node.spouses.length > 2) {
        const more = svgElement('text', { class: 'node-meta', x: NODE_WIDTH + 30, y: 71 });
        more.textContent = `외 ${node.spouses.length - 2}명`;
        group.appendChild(more);
      }
    }

    group.addEventListener('click', (event) => {
      event.stopPropagation();
      if (suppressClick) return;
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
    linksLayer.replaceChildren(...links.map(makeLink));
    nodesLayer.replaceChildren(...visible.map(makeNode));
    addRouteLabels(visible);
    visibleCount.textContent = `${countWithSpouses(visible).toLocaleString('ko-KR')}명`;
    totalCount.textContent = `${countWithSpouses(data.people).toLocaleString('ko-KR')}명 수록`;
    emptyState.hidden = !query || matches.size > 0;
    applyTransform();
  }

  function applyTransform() {
    viewport.setAttribute('transform', `translate(${transform.x} ${transform.y}) scale(${transform.scale})`);
    zoomLabel.textContent = `${Math.round(transform.scale * 100)}%`;
  }

  function fitToScreen(animated = false) {
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

  function zoomAt(clientX, clientY, factor) {
    const rect = stage.getBoundingClientRect();
    const pointerX = clientX - rect.left;
    const pointerY = clientY - rect.top;
    const nextScale = Math.max(.008, Math.min(3.2, transform.scale * factor));
    const worldX = (pointerX - transform.x) / transform.scale;
    const worldY = (pointerY - transform.y) / transform.scale;
    transform.x = pointerX - worldX * nextScale;
    transform.y = pointerY - worldY * nextScale;
    transform.scale = nextScale;
    applyTransform();
  }

  function selectNode(node) {
    selectedId = node.id;
    detailName.textContent = node.name;
    const parentText = node.parent ? `${node.parent.name}의 계보` : '인류의 계보 시작';
    const motherText = node.mother ? ` · 어머니 ${node.mother}` : '';
    detailRelation.textContent = `${parentText}${motherText}`;
    detailSpouse.textContent = node.spouses.length ? node.spouses.join(', ') : '성경 본문에 이름이 기록되지 않음';
    detailRefs.textContent = node.refs || '계보 병행 본문';
    detailNote.textContent = node.note || `${getNodeLabel(node)}에 속한 인물입니다. 연결선을 따라 부모와 후손을 확인할 수 있습니다.`;
    detail.classList.add('show');
    nodesLayer.querySelectorAll('.genealogy-node').forEach((entry) => entry.classList.toggle('selected', entry.dataset.id === node.id));
  }

  function revealMatches(value) {
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

  document.getElementById('genealogy-expand-all').addEventListener('click', () => {
    data.people.forEach((node) => { if (node.children.length) expanded.add(node.id); });
    render();
    requestAnimationFrame(() => fitToScreen(true));
  });

  document.getElementById('genealogy-collapse-all').addEventListener('click', () => {
    expanded.clear();
    query = '';
    matches.clear();
    searchInput.value = '';
    detail.classList.remove('show');
    render();
    requestAnimationFrame(() => fitToScreen(true));
  });

  document.getElementById('genealogy-fit').addEventListener('click', () => fitToScreen(true));
  document.getElementById('genealogy-fullscreen').addEventListener('click', async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (page.requestFullscreen) await page.requestFullscreen();
    window.setTimeout(() => fitToScreen(true), 80);
  });
  document.getElementById('genealogy-zoom-in').addEventListener('click', () => {
    const rect = stage.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, 1.24);
  });
  document.getElementById('genealogy-zoom-out').addEventListener('click', () => {
    const rect = stage.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, .8);
  });
  document.getElementById('genealogy-detail-close').addEventListener('click', () => detail.classList.remove('show'));
  searchInput.addEventListener('input', (event) => revealMatches(event.target.value));
  searchInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    const first = data.people.find((node) => matches.has(node.id) && node.name.toLocaleLowerCase('ko-KR').includes(query));
    if (first) focusNode(first);
  });

  stage.addEventListener('wheel', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    zoomAt(event.clientX, event.clientY, event.deltaY < 0 ? 1.12 : .89);
  }, { passive: false });

  stage.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || event.target.closest('.genealogy-node')) return;
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
    transform.x = dragState.originX + dx;
    transform.y = dragState.originY + dy;
    applyTransform();
  });
  const endDrag = () => {
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
  if (initialParams.get('view') === 'all') {
    data.people.forEach((node) => { if (node.children.length) expanded.add(node.id); });
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
