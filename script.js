const earlyRange = { start: 2166, end: 1050, tick: 100 };
const unitedRange = { start: 1050, end: 931, tick: 10 };
const israelRange = { start: 931, end: 586, tick: 25 };
const judahRange = { start: 931, end: 586, tick: 25 };
const exileRange = { start: 586, end: 430, tick: 25 };

const earlyEvents = [
  { name: '아브라함', start: 2166, end: 1991, type: 'era', period: 'BCE 약 2166~1991', event: '족장 시대의 시작. 부르심과 언약(창 12~25장).' },
  { name: '이삭·야곱', start: 2066, end: 1859, type: 'era', period: 'BCE 약 2066~1859', event: '언약 계승, 야곱 가족의 애굽 이주(창 25~50장).' },
  { name: '요셉', start: 1915, end: 1805, type: 'era', period: 'BCE 약 1915~1805', event: '애굽 총리로 기근 속 가족을 보존(창 37~50장).' },
  { name: '애굽 체류', start: 1876, end: 1446, type: 'era', period: 'BCE 약 1876~1446', event: '이스라엘 자손이 애굽에서 큰 민족으로 성장.' },
  { name: '출애굽·광야', start: 1446, end: 1406, type: 'era', period: 'BCE 약 1446~1406', event: '출애굽, 시내산 언약, 광야 40년.' },
  { name: '정복·정착', start: 1406, end: 1375, type: 'era', period: 'BCE 약 1406~1375', event: '여호수아 시대의 가나안 정복과 지파별 분배.' },
  { name: '사사 시대', start: 1375, end: 1050, type: 'era', period: 'BCE 약 1375~1050', event: '왕정 이전 지파 연맹과 반복되는 사사들의 구원.' }
];

const earlyProphetsPriests = [
  { name: '모세', start: 1526, end: 1406, role: 'prophet', period: 'BCE 약 1526~1406', event: '출애굽의 지도자이자 선지자. 율법과 언약의 중재자.' },
  { name: '아론', start: 1529, end: 1406, role: 'priest', period: 'BCE 약 1529~1406', event: '초대 대제사장. 제사장 계보의 출발점.' },
  { name: '미리암', start: 1520, end: 1406, role: 'prophet', period: 'BCE 약 1520~1406', event: '출애굽 세대의 여선지자(출 15장).' },
  { name: '여호수아', start: 1406, end: 1375, role: 'prophet', period: 'BCE 약 1406~1375', event: '모세 이후 가나안 정착을 이끈 지도자.' },
  { name: '드보라', start: 1200, end: 1170, role: 'prophet', period: 'BCE 약 1200년대', event: '사사이자 여선지자. 바락과 함께 가나안 왕 야빈을 물리침.' },
  { name: '엘리', start: 1120, end: 1080, role: 'priest', period: 'BCE 약 1120~1080', event: '실로의 제사장. 사무엘의 어린 시절 배경.' },
  { name: '사무엘', start: 1080, end: 1015, role: 'prophet', period: 'BCE 약 1080~1015', event: '마지막 사사이자 선지자. 사울과 다윗에게 기름 부음.' }
];

const unitedKings = [
  { name: '사울', start: 1050, end: 1010, rating: 'bad', father: '기스', reign: '약 40년', event: '이스라엘 초대 왕, 불순종으로 왕권 약화(삼상).' },
  { name: '다윗', start: 1010, end: 970, rating: 'good', father: '이새', reign: '40년', event: '예루살렘 수도화, 언약궤 안치, 다윗 언약(삼하).' },
  { name: '솔로몬', start: 970, end: 931, rating: 'bad', father: '다윗', reign: '40년', event: '성전 건축, 말년 우상숭배로 분열 배경 형성(왕상 1~11장).' }
];

const unitedProphetsPriests = [
  { name: '사무엘', start: 1050, end: 1015, role: 'prophet', period: 'BCE 약 1080~1015', event: '사울을 세우고 책망했으며, 이후 다윗에게 기름 부음.' },
  { name: '갓', start: 1010, end: 970, role: 'prophet', period: 'BCE 약 1010~970', event: '다윗 곁에서 활동한 선견자(삼상 22장, 삼하 24장).' },
  { name: '나단', start: 1005, end: 970, role: 'prophet', period: 'BCE 약 1005~970', event: '다윗 언약을 전하고 밧세바 사건을 책망한 선지자.' },
  { name: '사독', start: 1000, end: 960, role: 'priest', period: 'BCE 약 1000~960', event: '다윗·솔로몬 시대의 제사장. 솔로몬 즉위에 핵심 역할.' },
  { name: '아히야', start: 970, end: 931, role: 'prophet', period: 'BCE 약 970~930', event: '여로보암에게 북쪽 열 지파의 분리를 예고.' }
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

const israelProphetsPriests = [
  { name: '아히야', start: 931, end: 910, role: 'prophet', period: 'BCE 약 970~910', event: '여로보암의 등장과 심판을 예고한 실로 사람.' },
  { name: '엘리야', start: 870, end: 850, role: 'prophet', period: 'BCE 약 870~850', event: '아합 시대 바알 숭배와 맞선 선지자. 갈멜산 사건.' },
  { name: '엘리사', start: 850, end: 800, role: 'prophet', period: 'BCE 약 850~800', event: '엘리야의 후계자. 예후 왕조 전후 북왕국에서 활동.' },
  { name: '요나', start: 790, end: 760, role: 'prophet', period: 'BCE 약 790~760', event: '여로보암 2세 전후 시대의 선지자. 니느웨 선포 전승.' },
  { name: '아모스', start: 760, end: 755, role: 'prophet', period: 'BCE 약 760~755', event: '북왕국의 번영 속 사회적 불의와 예배 타락을 책망.' },
  { name: '호세아', start: 755, end: 715, role: 'prophet', period: 'BCE 약 755~715', event: '북왕국 말기부터 멸망 이후까지 언약적 불신실함을 고발.' }
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

const judahProphetsPriests = [
  { name: '스마야', start: 931, end: 913, role: 'prophet', period: 'BCE 약 931~913', event: '르호보암에게 북왕국과의 전쟁을 멈추라고 전함.' },
  { name: '잇도', start: 930, end: 900, role: 'prophet', period: 'BCE 약 930~900', event: '르호보암·아비야 시대의 선견자로 언급됨.' },
  { name: '아사랴', start: 910, end: 880, role: 'prophet', period: 'BCE 약 910~880', event: '아사 왕의 개혁을 격려한 오뎃의 아들.' },
  { name: '여호야다', start: 835, end: 796, role: 'priest', period: 'BCE 약 835~796', event: '아달랴를 몰아내고 요아스를 세운 제사장.' },
  { name: '요엘', start: 835, end: 800, role: 'prophet', period: 'BCE 약 9세기 추정', event: '연대 논쟁이 큰 선지자. 여호와의 날을 선포.' },
  { name: '이사야', start: 740, end: 686, role: 'prophet', period: 'BCE 약 740~686', event: '웃시야 말년부터 히스기야 시대까지 유다와 열방을 향해 예언.' },
  { name: '미가', start: 735, end: 700, role: 'prophet', period: 'BCE 약 735~700', event: '요담·아하스·히스기야 시대의 사회 정의와 회복 예언.' },
  { name: '스바냐', start: 640, end: 609, role: 'prophet', period: 'BCE 약 640~609', event: '요시야 시대 전후 여호와의 날과 남은 자를 선포.' },
  { name: '훌다', start: 622, end: 620, role: 'prophet', period: 'BCE 약 622', event: '율법책 발견 때 요시야에게 하나님의 말씀을 전한 여선지자.' },
  { name: '나훔', start: 663, end: 612, role: 'prophet', period: 'BCE 약 663~612', event: '니느웨 멸망을 선포한 선지자.' },
  { name: '하박국', start: 620, end: 605, role: 'prophet', period: 'BCE 약 620~605', event: '바벨론의 부상 속 의인의 믿음을 노래.' },
  { name: '예레미야', start: 627, end: 586, role: 'prophet', period: 'BCE 약 627~586 이후', event: '요시야부터 예루살렘 함락까지 회개와 새 언약을 선포.' },
  { name: '오바댜', start: 586, end: 560, role: 'prophet', period: 'BCE 약 586 이후 추정', event: '에돔의 교만과 형제 폭력을 책망.' }
];

const exileEvents = [
  { name: '바벨론 포로', start: 586, end: 539, type: 'era', period: 'BCE 586~539', event: '예루살렘 함락 이후 바벨론 포로기.' },
  { name: '귀환 시작', start: 539, end: 516, type: 'era', period: 'BCE 539~516', event: '고레스 칙령 이후 귀환과 제2성전 재건.' },
  { name: '성벽 재건', start: 458, end: 445, type: 'era', period: 'BCE 458~445', event: '에스라의 율법 개혁과 느헤미야의 성벽 재건.' },
  { name: '구약 말기', start: 445, end: 430, type: 'era', period: 'BCE 약 445~430', event: '말라기 전후로 구약 예언 전통이 마무리되는 시기.' }
];

const exileProphetsPriests = [
  { name: '에스겔', start: 593, end: 570, role: 'prophet', period: 'BCE 약 593~570', event: '바벨론 포로지에서 심판과 회복, 새 성전 환상을 선포.' },
  { name: '다니엘', start: 605, end: 536, role: 'prophet', period: 'BCE 약 605~536', event: '바벨론과 페르시아 궁정에서 활동한 포로기 인물.' },
  { name: '학개', start: 520, end: 515, role: 'prophet', period: 'BCE 약 520~515', event: '성전 재건을 촉구한 귀환기 선지자.' },
  { name: '스가랴', start: 520, end: 480, role: 'prophet', period: 'BCE 약 520~480', event: '성전 재건과 메시아적 회복을 환상으로 선포.' },
  { name: '에스라', start: 458, end: 430, role: 'priest', period: 'BCE 약 458~430', event: '제사장 겸 율법학자. 귀환 공동체의 율법 개혁을 이끎.' },
  { name: '말라기', start: 440, end: 430, role: 'prophet', period: 'BCE 약 440~430', event: '제사장과 백성의 언약 불성실을 책망한 구약 말기의 선지자.' }
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

function clampYear(year, range) {
  return Math.min(range.start, Math.max(range.end, year));
}

function addAxisTicks(axisEl, range) {
  for (let year = range.start; year >= range.end; year -= range.tick) {
    const tick = document.createElement('span');
    tick.className = 'tick';
    tick.style.left = `${toPercent(year, range)}%`;
    tick.textContent = `BCE ${year}`;
    axisEl.appendChild(tick);
  }
}

function showTooltip(event, item) {
  const roleLabel = item.role === 'priest' ? '제사장' : item.role === 'prophet' ? '선지자' : '시대';
  const detail = item.reign
    ? `<span>부친/가문: ${item.father}</span><br><span>재위: BCE ${item.start}~${item.end} (${item.reign})</span>`
    : `<span>구분: ${roleLabel}</span><br><span>기간: ${item.period || `BCE 약 ${item.start}~${item.end}`}</span>`;
  tooltip.innerHTML = `<strong>${item.name}</strong><br>${detail}<br><span>요약: ${item.event}</span>`;
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

function renderEraLane(data, laneEl, range) {
  data.forEach((item, index) => {
    const bar = document.createElement('button');
    const start = clampYear(item.start, range);
    const end = clampYear(item.end, range);
    bar.type = 'button';
    bar.className = 'era-bar';
    bar.style.left = `${toPercent(start, range)}%`;
    bar.style.width = `${Math.max(1.2, toPercent(end, range) - toPercent(start, range))}%`;
    bar.style.top = `${18 + (index % 2) * 46}px`;
    bar.innerText = item.name;
    bar.addEventListener('mousemove', (e) => showTooltip(e, item));
    bar.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
    laneEl.appendChild(bar);
  });
}

function renderMinistryLines(data, laneEl, range, topBase = 72) {
  data.forEach((item, index) => {
    if (item.start < range.end || item.end > range.start) return;

    const start = clampYear(item.start, range);
    const end = clampYear(item.end, range);

    const line = document.createElement('button');
    line.type = 'button';
    line.className = 'ministry-line';
    line.dataset.role = item.role;
    line.style.left = `${toPercent(start, range)}%`;
    line.style.width = `${Math.max(1.4, toPercent(end, range) - toPercent(start, range))}%`;
    line.style.top = `${topBase + (index % 4) * 26}px`;
    line.innerHTML = `<span>${item.name}</span>`;
    line.addEventListener('mousemove', (e) => showTooltip(e, item));
    line.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
    laneEl.appendChild(line);
  });
}

function setZoom(val) {
  const zoom = Math.max(1, Math.min(4, Number(val)));
  document.documentElement.style.setProperty('--divided-zoom', zoom.toFixed(1));
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

addAxisTicks(document.getElementById('early-axis'), earlyRange);
addAxisTicks(document.getElementById('united-axis'), unitedRange);
addAxisTicks(document.getElementById('israel-axis'), israelRange);
addAxisTicks(document.getElementById('judah-axis'), judahRange);
addAxisTicks(document.getElementById('exile-axis'), exileRange);

renderEraLane(earlyEvents, document.getElementById('early-lane'), earlyRange);
renderMinistryLines(earlyProphetsPriests, document.getElementById('early-lane'), earlyRange, 116);

renderLane(unitedKings, document.getElementById('united-lane'), unitedRange, true);
renderMinistryLines(unitedProphetsPriests, document.getElementById('united-lane'), unitedRange, 72);

renderLane(israeliKings, document.getElementById('israel-lane'), israelRange);
renderMinistryLines(israelProphetsPriests, document.getElementById('israel-lane'), israelRange, 172);

renderLane(judahKings, document.getElementById('judah-lane'), judahRange);
renderMinistryLines(judahProphetsPriests, document.getElementById('judah-lane'), judahRange, 172);

renderEraLane(exileEvents, document.getElementById('exile-lane'), exileRange);
renderMinistryLines(exileProphetsPriests, document.getElementById('exile-lane'), exileRange, 112);
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
  splitLabel.style.paddingLeft = `${toPercent(931, israelRange)}%`;
}
