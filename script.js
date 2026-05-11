const unitedRange = { start: 1050, end: 931, tick: 10 };
const israelRange = { start: 931, end: 722, tick: 20 };
const judahRange = { start: 931, end: 586, tick: 25 };

const unitedKings = [
  { name: '사울', start: 1050, end: 1010, rating: 'bad', father: '기스', reign: '약 40년', event: '이스라엘 초대 왕, 불순종으로 왕권 약화(삼상).' },
  { name: '다윗', start: 1010, end: 970, rating: 'good', father: '이새', reign: '40년', event: '예루살렘 수도화, 언약궤 안치, 다윗 언약(삼하).' },
  { name: '솔로몬', start: 970, end: 931, rating: 'bad', father: '다윗', reign: '40년', event: '성전 건축, 말년 우상숭배로 분열 배경 형성(왕상 1~11장).' }
];

const israeliKings = [
  { name: '여로보암 1세', start: 931, end: 910, rating: 'bad', father: '느밧', reign: '22년', event: '금송아지 제단을 벧엘/단에 세워 북왕국 종교 분리(왕상 12장).' },
  { name: '나답', start: 910, end: 909, rating: 'bad', father: '여로보암 1세', reign: '2년', event: '블레셋과 전쟁 중 바아사 반역으로 피살(왕상 15장).' },
  { name: '바아사', start: 909, end: 886, rating: 'bad', father: '아히야(잇사갈)', reign: '24년', event: '여로보암 가문 멸절, 유다와 상시 충돌(왕상 15~16장).' },
  { name: '엘라', start: 886, end: 885, rating: 'bad', father: '바아사', reign: '2년', event: '시므리의 쿠데타로 몰락(왕상 16장).' },
  { name: '시므리', start: 885, end: 885, rating: 'worst', father: '불명', reign: '7일', event: '7일 천하 후 왕궁 방화 자결(왕상 16장).' },
  { name: '오므리', start: 885, end: 874, rating: 'bad', father: '불명', reign: '12년', event: '사마리아를 수도로 확정, 오므리 왕조 수립(왕상 16장).' },
  { name: '아합', start: 874, end: 853, rating: 'worst', father: '오므리', reign: '22년', event: '이세벨과 결혼, 바알 숭배 확산. 엘리야와 갈멜 대결(왕상 16~22장).' },
  { name: '아하시야', start: 853, end: 852, rating: 'worst', father: '아합', reign: '2년', event: '병상에서 에그론 바알세붑 신탁 시도, 엘리야 책망(왕하 1장).' },
  { name: '여호람(요람)', start: 852, end: 841, rating: 'bad', father: '아합', reign: '12년', event: '예후 혁명으로 아합 왕조 종결(왕하 3~9장).' },
  { name: '예후', start: 841, end: 814, rating: 'bad', father: '여호사밧(님시의 손자)', reign: '28년', event: '바알 숭배 대청소, 그러나 금송아지 죄는 지속(왕하 9~10장).' },
  { name: '여호아하스', start: 814, end: 798, rating: 'bad', father: '예후', reign: '17년', event: '아람에게 큰 압박을 받음(왕하 13장).' },
  { name: '요아스(북이스라엘)', start: 798, end: 782, rating: 'bad', father: '여호아하스', reign: '16년', event: '엘리사 임종 시 세 번 화살 사건, 아람 일부 회복(왕하 13장).' },
  { name: '여로보암 2세', start: 793, end: 753, rating: 'bad', father: '요아스', reign: '41년', event: '영토 최대 확장, 그러나 사회적 불의 심화(왕하 14장, 아모스/호세아 배경).' },
  { name: '스가랴', start: 753, end: 752, rating: 'bad', father: '여로보암 2세', reign: '6개월', event: '살룸에게 암살, 예후 왕조 종료(왕하 15장).' },
  { name: '살룸', start: 752, end: 752, rating: 'bad', father: '야베스', reign: '1개월', event: '므나헴에게 살해됨(왕하 15장).' },
  { name: '므나헴', start: 752, end: 742, rating: 'bad', father: '가디', reign: '10년', event: '앗수르 디글랏빌레셀에게 조공(왕하 15장).' },
  { name: '브가히야', start: 742, end: 740, rating: 'bad', father: '므나헴', reign: '2년', event: '브가의 반역으로 사망(왕하 15장).' },
  { name: '브가', start: 740, end: 732, rating: 'bad', father: '르말랴', reign: '20년(중복 집계 가능)', event: '유다를 압박한 시리아-에브라임 동맹 주도(왕하 15~16장).' },
  { name: '호세아', start: 732, end: 722, rating: 'bad', father: '엘라', reign: '9년', event: '사마리아 함락으로 북이스라엘 멸망(왕하 17장).' }
];

const judahKings = [/* unchanged data */
  { name: '르호보암', start: 931, end: 913, rating: 'bad', father: '솔로몬', reign: '17년', event: '강경정책으로 왕국 분열. 시삭 침공(왕상 12~14장).' },
  { name: '아비얌(아비야)', start: 913, end: 911, rating: 'bad', father: '르호보암', reign: '3년', event: '여로보암과 전쟁 지속(왕상 15장).' },
  { name: '아사', start: 911, end: 870, rating: 'good', father: '아비얌', reign: '41년', event: '우상 개혁, 말년에 아람 의존 문제(왕상 15장, 대하 14~16장).' },
  { name: '여호사밧', start: 870, end: 848, rating: 'good', father: '아사', reign: '25년', event: '신앙개혁·재판제도 정비, 아합과 동맹의 한계(왕상 22장, 대하 17~20장).' },
  { name: '여호람(남유다)', start: 848, end: 841, rating: 'bad', father: '여호사밧', reign: '8년', event: '아합 가문과 혼인 동맹 영향으로 악행(왕하 8장).' },
  { name: '아하시야(남유다)', start: 841, end: 841, rating: 'bad', father: '여호람', reign: '1년', event: '예후 혁명에 휘말려 사망(왕하 8~9장).' },
  { name: '아달랴(여왕)', start: 841, end: 835, rating: 'worst', father: '오므리 가문(아합의 딸)', reign: '6년', event: '왕족 학살 후 찬탈, 요아스 즉위로 종결(왕하 11장).' },
  { name: '요아스(남유다)', start: 835, end: 796, rating: 'good', father: '아하시야', reign: '40년', event: '성전 수리, 말년 배교와 정치 불안(왕하 12장, 대하 24장).' },
  { name: '아마샤', start: 796, end: 767, rating: 'bad', father: '요아스', reign: '29년', event: '초기 순종 후 우상 숭배, 북이스라엘과 충돌(왕하 14장).' },
  { name: '웃시야(아사랴)', start: 792, end: 740, rating: 'good', father: '아마샤', reign: '52년', event: '국력 확장, 교만으로 나병 판정(왕하 15장, 대하 26장).' },
  { name: '요담', start: 750, end: 732, rating: 'good', father: '웃시야', reign: '16년(+공동통치)', event: '성전 윗문 건축, 백성 부패는 지속(왕하 15장).' },
  { name: '아하스', start: 735, end: 715, rating: 'worst', father: '요담', reign: '16년', event: '앗수르 의존·우상숭배 심화, 성전 기구 훼손(왕하 16장).' },
  { name: '히스기야', start: 715, end: 686, rating: 'good', father: '아하스', reign: '29년', event: '대개혁·유월절 회복, 앗수르 침공에서 구원(왕하 18~20장).' },
  { name: '므낫세', start: 686, end: 642, rating: 'worst', father: '히스기야', reign: '55년', event: '극심한 우상숭배로 심판 선언, 말년 회개 기록(왕하 21장, 대하 33장).' },
  { name: '아몬', start: 642, end: 640, rating: 'worst', father: '므낫세', reign: '2년', event: '부친 악행 계승, 신복 반역으로 사망(왕하 21장).' },
  { name: '요시야', start: 640, end: 609, rating: 'good', father: '아몬', reign: '31년', event: '율법책 발견 기반 대개혁, 므깃도 전사(왕하 22~23장).' },
  { name: '여호아하스', start: 609, end: 609, rating: 'bad', father: '요시야', reign: '3개월', event: '애굽 느고에게 폐위되어 포로(왕하 23장).' },
  { name: '여호야김', start: 609, end: 598, rating: 'bad', father: '요시야', reign: '11년', event: '바벨론 종속과 반역 반복, 예레미야와 갈등(왕하 23~24장).' },
  { name: '여호야긴', start: 598, end: 597, rating: 'bad', father: '여호야김', reign: '3개월', event: '1차 대규모 바벨론 포로(왕하 24장).' },
  { name: '시드기야', start: 597, end: 586, rating: 'bad', father: '요시야(숙부)', reign: '11년', event: '반바벨론 반란 실패, 예루살렘 함락·성전 파괴(왕하 25장).' }
];

const tooltip = document.getElementById('tooltip');
const zoomInput = document.getElementById('zoom');
const zoomLabel = document.getElementById('zoom-label');
const timelineWrap = document.getElementById('timeline-wrap');
const splitLabel = document.getElementById('split-label');
const syncScrollAreas = Array.from(document.querySelectorAll('.section-scroll[data-sync-group="divided"]'));

function toPercent(year, range) {
  const total = range.start - range.end;
  return ((range.start - year) / total) * 100;
}

function stackedRow(index) { return (index % 3) * 50 + 18; }

function addAxisTicks(axisEl, range) {
  for (let year = range.start; year >= range.end; year -= range.tick) {
    const tick = document.createElement('span');
    tick.className = 'tick';
    tick.style.left = `${toPercent(year, range)}%`;
    tick.textContent = `BCE ${year}`;
    axisEl.appendChild(tick);
  }
}

function showTooltip(event, king) {
  tooltip.innerHTML = `<strong>${king.name}</strong><br><span>부친/가문: ${king.father}</span><br><span>재위: BCE ${king.start}~${king.end} (${king.reign})</span><br><span>요약: ${king.event}</span>`;
  tooltip.style.left = `${event.clientX + 16}px`;
  tooltip.style.top = `${event.clientY + 16}px`;
  tooltip.classList.add('show');
}

function renderLane(data, laneEl, range, singleRow = false) {
  data.forEach((king, index) => {
    const bar = document.createElement('button');
    bar.type = 'button';
    bar.className = 'bar';
    bar.dataset.rating = king.rating;
    bar.style.left = `${toPercent(king.start, range)}%`;
    bar.style.width = `${Math.max(1.2, toPercent(king.end, range) - toPercent(king.start, range))}%`;
    bar.style.top = `${singleRow ? 22 : stackedRow(index)}px`;
    bar.innerText = king.name;
    bar.addEventListener('mousemove', (e) => showTooltip(e, king));
    bar.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
    laneEl.appendChild(bar);
  });
}

function setZoom(val) {
  const zoom = Math.max(1, Math.min(4, Number(val)));
  document.documentElement.style.setProperty('--zoom', zoom.toFixed(1));
  zoomInput.value = zoom.toFixed(1);
  zoomLabel.textContent = `${zoom.toFixed(1)}x`;
}

zoomInput.addEventListener('input', (e) => setZoom(e.target.value));
timelineWrap.addEventListener('wheel', (e) => {
  if (!e.target.closest('.section-scroll') && e.target.id !== 'timeline-wrap') return;

  const isPinchZoom = e.ctrlKey || e.metaKey;
  if (!isPinchZoom) return;

  e.preventDefault();
  const delta = e.deltaY < 0 ? 0.1 : -0.1;
  setZoom(Number(zoomInput.value) + delta);
}, { passive: false });

addAxisTicks(document.getElementById('united-axis'), unitedRange);
addAxisTicks(document.getElementById('israel-axis'), israelRange);
addAxisTicks(document.getElementById('judah-axis'), judahRange);
renderLane(unitedKings, document.getElementById('united-lane'), unitedRange, true);
renderLane(israeliKings, document.getElementById('israel-lane'), israelRange);
renderLane(judahKings, document.getElementById('judah-lane'), judahRange);
setZoom(zoomInput.value);


let syncing = false;
syncScrollAreas.forEach((area) => {
  area.addEventListener('scroll', () => {
    if (syncing) return;
    syncing = true;
    syncScrollAreas.forEach((other) => {
      if (other !== area) other.scrollLeft = area.scrollLeft;
    });
    syncing = false;
  });
});

if (splitLabel) {
  splitLabel.style.paddingLeft = `${toPercent(931, unitedRange)}%`;
}
