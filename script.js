const earlyRange = { start: 2166, end: 1050, tick: 100 };
const unitedRange = { start: 1050, end: 931, tick: 10 };
const israelRange = { start: 931, end: 586, tick: 25 };
const judahRange = { start: 931, end: 586, tick: 25 };
const exileRange = { start: 605, end: 424, tick: 25 };
const gospelRange = { start: 26, end: 33.5, tick: 1, era: 'CE' };
const actsRange = { start: 30, end: 70, tick: 5, era: 'CE' };
const epistlesRange = { start: 30, end: 100, tick: 5, era: 'CE' };

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
  { name: '드보라', start: 1209, end: 1169, role: 'prophet', period: 'BCE 약 1209~1169', event: '사사이자 여선지자. 바락과 함께 가나안 왕 야빈을 물리침.' },
  { name: '엘리', start: 1120, end: 1080, role: 'priest', period: 'BCE 약 1120~1080', event: '실로의 제사장. 사무엘의 어린 시절 배경.' },
  { name: '사무엘', start: 1080, end: 1015, role: 'prophet', period: 'BCE 약 1080~1015', event: '마지막 사사이자 선지자. 왕정 전환기에 이스라엘을 이끌고 사울과 다윗에게 기름 부음.' }
];

const earlyJudges = [
  { name: '옷니엘', start: 1350, end: 1310, role: 'judge', period: 'BCE 약 1350~1310', event: '갈렙의 조카로, 메소보다미아 압제에서 이스라엘을 구원한 초기 사사.' },
  { name: '에훗', start: 1290, end: 1210, role: 'judge', period: 'BCE 약 1290~1210', event: '모압 왕 에글론의 압제에서 이스라엘을 구원한 왼손잡이 사사.' },
  { name: '바락', start: 1209, end: 1169, role: 'judge', period: 'BCE 약 1209~1169', event: '야빈과 시스라를 물리친 사사 시대의 대표적 승리.' },
  { name: '기드온', start: 1162, end: 1122, role: 'judge', period: 'BCE 약 1162~1122', event: '미디안 압제에서 이스라엘을 구원한 사사.' },
  { name: '입다', start: 1087, end: 1081, role: 'judge', period: 'BCE 약 1087~1081', event: '암몬과의 전쟁에서 활약한 길르앗 출신 사사.' },
  { name: '삼손', start: 1085, end: 1065, role: 'judge', period: 'BCE 약 1085~1065', event: '블레셋 압제기에 활동한 단 지파 사사.' }
];

const unitedKings = [
  { name: '사울', start: 1050, end: 1010, rating: 'bad', father: '기스', reign: '약 40년', event: '이스라엘 초대 왕, 불순종으로 왕권 약화(삼상).' },
  { name: '다윗', start: 1010, end: 970, rating: 'good', father: '이새', reign: '40년', event: '예루살렘 수도화, 언약궤 안치, 다윗 언약(삼하).' },
  { name: '솔로몬', start: 970, end: 931, rating: 'bad', father: '다윗', reign: '40년', event: '성전 건축, 말년 우상숭배로 분열 배경 형성(왕상 1~11장).' }
];

const unitedProphetsPriests = [
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
  { name: '바벨론 포로', start: 586, end: 539, type: 'era', period: 'BCE 586~539', row: 0, event: '예루살렘 함락 이후 바벨론 포로기.' },
  { name: '귀환 시작', start: 539, end: 536, type: 'era', period: 'BCE 539~536', row: 1, event: '고레스 칙령 이후 스룹바벨을 중심으로 첫 귀환이 시작되고 제단 회복과 성전 기초 준비가 이어진 시기.' },
  { name: '성전 재건', start: 536, end: 516, type: 'era', period: 'BCE 536~516', row: 0, event: '제2성전 재건의 전체 흐름. 기초가 놓인 뒤 방해와 중단을 거쳐 다리오 1세 때 완공된다.' },
  { name: '공사 방해·중단', start: 536, end: 520, type: 'era', period: 'BCE 약 536~520', row: 1, event: '주변 민족의 방해와 바사 행정 압박으로 성전 공사가 장기간 지연·중단된 시기(스 4장).' },
  { name: '에스더 사건', start: 483, end: 473, type: 'era', period: 'BCE 약 483~473', row: 0, event: '페르시아 궁정에서 유다 백성이 보존된 사건.' },
  { name: '성벽 재건', start: 458, end: 445, type: 'era', period: 'BCE 458~445', row: 1, event: '에스라의 율법 개혁과 느헤미야의 성벽 재건.' },
  { name: '구약 말기', start: 445, end: 430, type: 'era', period: 'BCE 약 445~430', row: 0, event: '말라기 전후로 구약 예언 전통이 마무리되는 시기.' }
];

const exileMilestones = [
  { name: '예루살렘 함락', year: 586, labelTop: 268, event: '바벨론이 예루살렘을 함락하고 성전을 파괴한 시점(왕하 25장).' },
  { name: '고레스 칙령', year: 539, labelTop: 282, event: '고레스가 바벨론을 정복한 뒤 유다 귀환과 성전 재건을 허락한 칙령의 시점(스 1장).' },
  { name: '제2성전 완공', year: 516, labelTop: 268, event: '다리오 1세 제6년에 제2성전이 완공된 시점(스 6장).' }
];

const exileProphetsPriests = [
  { name: '에스겔', start: 593, end: 570, role: 'prophet', period: 'BCE 약 593~570', event: '바벨론 포로지에서 심판과 회복, 새 성전 환상을 선포.' },
  { name: '다니엘', start: 605, end: 536, role: 'prophet', period: 'BCE 약 605~536', event: '바벨론과 페르시아 궁정에서 활동한 포로기 인물.' },
  { name: '학개', start: 520, end: 515, role: 'prophet', period: 'BCE 약 520~515', event: '성전 재건을 촉구한 귀환기 선지자.' },
  { name: '스가랴', start: 520, end: 480, role: 'prophet', period: 'BCE 약 520~480', event: '성전 재건과 메시아적 회복을 환상으로 선포.' },
  { name: '에스더', start: 483, end: 473, role: 'leader', period: 'BCE 약 483~473', event: '페르시아 궁정에서 유다인을 위해 중재한 왕후.' },
  { name: '에스라', start: 458, end: 430, role: 'priest', period: 'BCE 약 458~430', event: '제사장 겸 율법학자. 귀환 공동체의 율법 개혁을 이끎.' },
  { name: '느헤미야', start: 445, end: 433, role: 'leader', period: 'BCE 약 445~433', event: '예루살렘 성벽 재건과 공동체 개혁을 이끈 총독.' },
  { name: '말라기', start: 440, end: 430, role: 'prophet', period: 'BCE 약 440~430', event: '제사장과 백성의 언약 불성실을 책망한 구약 말기의 선지자.' }
];

const foreignKings = [
  { name: '느부갓네살 2세', start: 605, end: 562, rating: 'babylon', empire: '신바벨론', reign: '43년', books: '에스겔, 다니엘, 에스라', event: '예루살렘 포위와 포로 사건의 중심 왕. 다니엘과 세 친구가 활동한 바벨론 왕(단 1~4장).' },
  { name: '에윌므로닥', start: 562, end: 560, rating: 'babylon', empire: '신바벨론', reign: '2년', books: '열왕기하, 예레미야', event: '여호야긴을 옥에서 풀어 높인 왕. 포로기 후반 배경을 잇는 바벨론 왕(왕하 25장, 렘 52장).' },
  { name: '네리글리살', start: 560, end: 556, rating: 'babylon', empire: '신바벨론', reign: '4년', books: '역사 자료', event: '성경에는 왕명으로 직접 등장하지 않지만 느부갓네살 이후 바벨론 왕위 계승 흐름에 포함된다.' },
  { name: '라바시마르둑', start: 556, end: 556, rating: 'babylon', empire: '신바벨론', reign: '수개월', books: '역사 자료', row: 1, event: '짧게 통치한 바벨론 왕. 포로기 바벨론 왕조 말기의 과도기 인물이다.' },
  { name: '나보니두스', start: 556, end: 539, rating: 'babylon', empire: '신바벨론', reign: '17년', books: '역사 자료, 다니엘 배경', event: '바벨론의 마지막 왕. 그의 아들 벨사살이 바벨론에서 왕권을 대행한 것으로 설명된다.' },
  { name: '벨사살', start: 553, end: 539, rating: 'babylon', empire: '신바벨론', reign: '공동/섭정 통치', books: '다니엘', event: '벽에 쓰인 글 사건과 바벨론 함락 밤의 왕으로 등장한다(단 5장).' },
  { name: '고레스 2세', start: 559, end: 530, rating: 'persia', empire: '바사', reign: '29년(바사), BCE 539부터 바벨론 통치', books: '다니엘, 에스라, 역대하', row: 3, event: '바사 왕으로 바벨론을 정복하고 유다 귀환과 성전 재건 칙령을 내린 왕(스 1장).' },
  { name: '다리오 메대', start: 539, end: 538, rating: 'uncertain', empire: '메대/바사 관련', reign: '성경상 단기 통치', books: '다니엘', row: 4, event: '다니엘 6장에 등장한다. 역사적 동일시는 고레스 휘하 총독 또는 문학적/왕명 전승 등으로 논의된다.' },
  { name: '캄비세스 2세', start: 530, end: 522, rating: 'persia', empire: '바사', reign: '8년', books: '역사 자료', event: '고레스의 후계자. 성경 본문에 뚜렷이 이름이 나오지는 않지만 귀환기 바사 제국 배경에 해당한다.' },
  { name: '스메르디스/바르디야', start: 522, end: 522, rating: 'persia', empire: '바사', reign: '수개월', books: '역사 자료', event: '바사 왕위 찬탈 또는 단기 통치자로 전해진다. 다리오 1세 즉위 직전의 과도기 왕이다.' },
  { name: '다리오 1세', start: 522, end: 486, rating: 'persia', empire: '바사', reign: '36년', books: '에스라, 학개, 스가랴', event: '성전 재건 재개와 완공을 확인한 바사 왕. 귀환 공동체 재건의 핵심 배경이다(스 5~6장).' },
  { name: '아하수에로', start: 486, end: 465, rating: 'persia', empire: '바사', reign: '21년', books: '에스더, 에스라', event: '일반적으로 크세르크세스 1세로 본다. 에스더서의 왕이며 하만 사건의 배경 왕이다.' },
  { name: '아닥사스다 1세', start: 465, end: 424, rating: 'persia', empire: '바사', reign: '41년', books: '에스라, 느헤미야', event: '에스라의 귀환과 느헤미야의 예루살렘 성벽 재건 허가에 등장하는 바사 왕(스 7장, 느 2장).' }
];

const gospelBooks = ['마태', '마가', '누가', '요한'];
const gospelEvents = [
  { name: '세례 요한의 사역 시작', year: 26.7, books: ['마태', '마가', '누가', '요한'], refs: '마 3:1-12, 막 1:1-8, 눅 3:1-18, 요 1:19-28', event: '광야에서 회개와 하나님 나라를 선포하며 메시아의 길을 준비한다.', phase: '준비기', major: true },
  { name: '예수님 세례', year: 27.0, books: ['마태', '마가', '누가'], refs: '마 3:13-17, 막 1:9-11, 눅 3:21-22', event: '요단강에서 세례를 받으시고 성령이 임하며 하늘의 음성이 들린다.', phase: '준비기', major: true },
  { name: '광야 시험', year: 27.1, books: ['마태', '마가', '누가'], refs: '마 4:1-11, 막 1:12-13, 눅 4:1-13', event: '성령에게 이끌려 광야에서 시험을 받으시고 말씀으로 이기신다.', phase: '준비기' },
  { name: '첫 제자들의 부름', year: 27.2, books: ['요한'], refs: '요 1:35-51', event: '안드레, 베드로, 빌립, 나다나엘 등이 예수님을 따르기 시작한다.', phase: '초기 유대 사역' },
  { name: '가나 혼인잔치', year: 27.3, books: ['요한'], refs: '요 2:1-12', event: '물을 포도주로 바꾸신 첫 표적으로 영광을 나타내신다.', phase: '초기 유대 사역' },
  { name: '첫 성전 정화', year: 27.4, books: ['요한'], refs: '요 2:13-25', event: '예루살렘 성전에서 장사하는 자들을 내쫓으신다.', phase: '초기 유대 사역' },
  { name: '니고데모와 대화', year: 27.5, books: ['요한'], refs: '요 3:1-21', event: '거듭남과 하나님의 사랑을 가르치신다.', phase: '초기 유대 사역' },
  { name: '사마리아 여인', year: 27.8, books: ['요한'], refs: '요 4:1-42', event: '수가성 우물가에서 참 예배와 생수를 선포하신다.', phase: '사마리아 경유' },
  { name: '왕의 신하 아들 치유', year: 28.0, books: ['요한'], refs: '요 4:43-54', event: '가나에서 말씀만으로 가버나움의 병든 아이를 고치신다.', phase: '갈릴리 사역' },
  { name: '나사렛 회당 선포', year: 28.1, books: ['누가'], refs: '눅 4:16-30', event: '이사야 말씀을 읽고 은혜의 해가 성취되었다고 선포하신다.', phase: '갈릴리 사역' },
  { name: '네 어부 부르심', year: 28.2, books: ['마태', '마가'], refs: '마 4:18-22, 막 1:16-20', event: '베드로, 안드레, 야고보, 요한을 사람 낚는 어부로 부르신다.', phase: '갈릴리 사역' },
  { name: '가버나움 귀신 축출', year: 28.3, books: ['마가', '누가'], refs: '막 1:21-28, 눅 4:31-37', event: '회당에서 더러운 귀신을 꾸짖어 내쫓으신다.', phase: '갈릴리 사역' },
  { name: '베드로 장모 치유', year: 28.35, books: ['마태', '마가', '누가'], refs: '마 8:14-17, 막 1:29-34, 눅 4:38-41', event: '베드로의 장모와 많은 병자를 고치신다.', phase: '갈릴리 사역' },
  { name: '첫 갈릴리 순회', year: 28.45, books: ['마태', '마가', '누가'], refs: '마 4:23-25, 막 1:35-39, 눅 4:42-44', event: '갈릴리 여러 회당에서 복음을 전하고 병자를 고치신다.', phase: '갈릴리 사역' },
  { name: '나병환자 정결', year: 28.55, books: ['마태', '마가', '누가'], refs: '마 8:1-4, 막 1:40-45, 눅 5:12-16', event: '나병환자를 만져 깨끗하게 하신다.', phase: '갈릴리 사역' },
  { name: '중풍병자 치유', year: 28.65, books: ['마태', '마가', '누가'], refs: '마 9:1-8, 막 2:1-12, 눅 5:17-26', event: '죄 사함을 선포하시고 지붕을 통해 내려온 중풍병자를 고치신다.', phase: '갈릴리 사역' },
  { name: '마태 부르심', year: 28.75, books: ['마태', '마가', '누가'], refs: '마 9:9-13, 막 2:13-17, 눅 5:27-32', event: '세리 마태/레위를 부르시고 죄인들과 식탁 교제를 하신다.', phase: '갈릴리 사역' },
  { name: '금식 논쟁', year: 28.82, books: ['마태', '마가', '누가'], refs: '마 9:14-17, 막 2:18-22, 눅 5:33-39', event: '새 포도주는 새 부대에 담아야 한다고 말씀하신다.', phase: '갈릴리 사역' },
  { name: '안식일 이삭 논쟁', year: 28.9, books: ['마태', '마가', '누가'], refs: '마 12:1-8, 막 2:23-28, 눅 6:1-5', event: '인자는 안식일의 주인이라고 선언하신다.', phase: '갈릴리 사역' },
  { name: '손 마른 사람 치유', year: 28.95, books: ['마태', '마가', '누가'], refs: '마 12:9-14, 막 3:1-6, 눅 6:6-11', event: '안식일에 선을 행하는 것이 옳다고 보이시며 치유하신다.', phase: '갈릴리 사역' },
  { name: '베데스다 병자 치유', year: 29.0, books: ['요한'], refs: '요 5:1-47', event: '38년 된 병자를 고치시고 아버지와 아들의 관계를 증언하신다.', phase: '예루살렘 방문' },
  { name: '열두 사도 선택', year: 29.1, books: ['마가', '누가'], refs: '막 3:13-19, 눅 6:12-16', event: '밤새 기도하신 뒤 열둘을 사도로 세우신다.', phase: '갈릴리 사역', major: true },
  { name: '산상수훈/평지설교', year: 29.15, books: ['마태', '누가'], refs: '마 5~7장, 눅 6:17-49', event: '하나님 나라 백성의 의와 삶을 가르치신다.', phase: '갈릴리 사역', major: true },
  { name: '백부장 종 치유', year: 29.25, books: ['마태', '누가'], refs: '마 8:5-13, 눅 7:1-10', event: '이방 백부장의 믿음을 칭찬하시고 종을 고치신다.', phase: '갈릴리 사역' },
  { name: '나인성 과부 아들', year: 29.32, books: ['누가'], refs: '눅 7:11-17', event: '과부의 외아들을 살리신다.', phase: '갈릴리 사역' },
  { name: '죄 많은 여인', year: 29.38, books: ['누가'], refs: '눅 7:36-50', event: '예수님의 발에 향유를 부은 여인에게 죄 사함과 평안을 선포하신다.', phase: '갈릴리 사역' },
  { name: '씨 뿌리는 비유', year: 29.45, books: ['마태', '마가', '누가'], refs: '마 13:1-23, 막 4:1-20, 눅 8:4-15', event: '하나님 나라 말씀을 받는 네 가지 마음밭을 가르치신다.', phase: '갈릴리 사역' },
  { name: '바다를 잠잠케 하심', year: 29.55, books: ['마태', '마가', '누가'], refs: '마 8:23-27, 막 4:35-41, 눅 8:22-25', event: '풍랑을 꾸짖어 잠잠하게 하시고 제자들의 믿음을 묻는다.', phase: '갈릴리 사역' },
  { name: '거라사 귀신 들린 자', year: 29.6, books: ['마태', '마가', '누가'], refs: '마 8:28-34, 막 5:1-20, 눅 8:26-39', event: '군대 귀신을 내쫓아 한 사람을 회복시키신다.', phase: '갈릴리 사역' },
  { name: '야이로 딸과 혈루증 여인', year: 29.7, books: ['마태', '마가', '누가'], refs: '마 9:18-26, 막 5:21-43, 눅 8:40-56', event: '믿음으로 나온 여인을 고치고 야이로의 딸을 살리신다.', phase: '갈릴리 사역' },
  { name: '고향 나사렛 배척', year: 29.8, books: ['마태', '마가'], refs: '마 13:53-58, 막 6:1-6', event: '고향 사람들이 예수님을 배척한다.', phase: '갈릴리 사역' },
  { name: '열두 제자 파송', year: 29.9, books: ['마태', '마가', '누가'], refs: '마 10장, 막 6:7-13, 눅 9:1-6', event: '열둘을 보내어 회개를 전하고 병자를 고치게 하신다.', phase: '갈릴리 사역' },
  { name: '세례 요한 순교', year: 30.0, books: ['마태', '마가'], refs: '마 14:1-12, 막 6:14-29', event: '헤롯 안티파스가 세례 요한을 죽인다.', phase: '갈릴리 사역' },
  { name: '오천 명 먹이심', year: 30.15, books: ['마태', '마가', '누가', '요한'], refs: '마 14:13-21, 막 6:30-44, 눅 9:10-17, 요 6:1-15', event: '떡 다섯 개와 물고기 두 마리로 무리를 먹이신다.', phase: '갈릴리 사역', major: true },
  { name: '물 위를 걸으심', year: 30.2, books: ['마태', '마가', '요한'], refs: '마 14:22-33, 막 6:45-52, 요 6:16-21', event: '풍랑 중 배로 오시며 “나다”라고 말씀하신다.', phase: '갈릴리 사역' },
  { name: '생명의 떡 강론', year: 30.25, books: ['요한'], refs: '요 6:22-71', event: '자신을 하늘에서 내려온 생명의 떡으로 계시하신다.', phase: '갈릴리 사역' },
  { name: '정결 논쟁', year: 30.35, books: ['마태', '마가'], refs: '마 15:1-20, 막 7:1-23', event: '사람을 더럽게 하는 것은 마음에서 나온다고 가르치신다.', phase: '갈릴리 사역' },
  { name: '수로보니게 여인', year: 30.45, books: ['마태', '마가'], refs: '마 15:21-28, 막 7:24-30', event: '이방 여인의 믿음을 보시고 딸을 고치신다.', phase: '갈릴리 주변' },
  { name: '사천 명 먹이심', year: 30.55, books: ['마태', '마가'], refs: '마 15:32-39, 막 8:1-10', event: '광야에서 다시 떡을 떼어 큰 무리를 먹이신다.', phase: '갈릴리 주변' },
  { name: '베드로의 신앙고백', year: 30.75, books: ['마태', '마가', '누가'], refs: '마 16:13-20, 막 8:27-30, 눅 9:18-21', event: '가이사랴 빌립보에서 “주는 그리스도”라는 고백이 나온다.', phase: '북방 사역', major: true },
  { name: '첫 수난 예고', year: 30.78, books: ['마태', '마가', '누가'], refs: '마 16:21-28, 막 8:31-9:1, 눅 9:22-27', event: '고난과 죽음, 부활을 처음 분명히 가르치신다.', phase: '북방 사역' },
  { name: '변화산 사건', year: 30.85, books: ['마태', '마가', '누가'], refs: '마 17:1-13, 막 9:2-13, 눅 9:28-36', event: '영광 중 모세와 엘리야와 함께 나타나시고 하늘의 음성이 들린다.', phase: '북방 사역', major: true },
  { name: '귀신 들린 아이 치유', year: 30.9, books: ['마태', '마가', '누가'], refs: '마 17:14-21, 막 9:14-29, 눅 9:37-43', event: '제자들이 고치지 못한 아이를 회복시키신다.', phase: '북방 사역' },
  { name: '성전세와 겸손 교훈', year: 31.0, books: ['마태', '마가', '누가'], refs: '마 17:24-18:35, 막 9:33-50, 눅 9:46-50', event: '성전세, 어린아이, 용서와 공동체 질서를 가르치신다.', phase: '예루살렘으로 향함' },
  { name: '초막절 예루살렘 논쟁', year: 31.3, books: ['요한'], refs: '요 7~8장', event: '성전에서 생수와 세상의 빛을 선포하시며 유대 지도자들과 논쟁한다.', phase: '예루살렘 방문' },
  { name: '날 때부터 맹인 치유', year: 31.35, books: ['요한'], refs: '요 9장', event: '실로암에 보내어 맹인을 고치시고 영적 눈멂을 드러내신다.', phase: '예루살렘 방문' },
  { name: '선한 목자 강론', year: 31.4, books: ['요한'], refs: '요 10:1-21', event: '자신을 양의 문과 선한 목자로 계시하신다.', phase: '예루살렘 방문' },
  { name: '칠십인 파송', year: 31.55, books: ['누가'], refs: '눅 10:1-24', event: '둘씩 보내어 하나님 나라가 가까이 왔음을 전하게 하신다.', phase: '예루살렘으로 향함' },
  { name: '선한 사마리아인', year: 31.6, books: ['누가'], refs: '눅 10:25-37', event: '이웃 사랑의 범위를 비유로 가르치신다.', phase: '예루살렘으로 향함' },
  { name: '마르다와 마리아', year: 31.65, books: ['누가'], refs: '눅 10:38-42', event: '말씀을 듣는 좋은 편을 칭찬하신다.', phase: '예루살렘으로 향함' },
  { name: '주기도문 가르침', year: 31.72, books: ['마태', '누가'], refs: '마 6:9-13, 눅 11:1-13', event: '아버지께 구하는 기도를 가르치신다.', phase: '예루살렘으로 향함' },
  { name: '나사로를 살리심', year: 32.15, books: ['요한'], refs: '요 11:1-44', event: '베다니에서 나사로를 살리시며 부활과 생명임을 선포하신다.', phase: '마지막 유대 사역', major: true },
  { name: '열 나병환자 치유', year: 32.35, books: ['누가'], refs: '눅 17:11-19', event: '열 명을 고치시고 감사하러 돌아온 사마리아인을 칭찬하신다.', phase: '마지막 여정' },
  { name: '부자 관원', year: 32.55, books: ['마태', '마가', '누가'], refs: '마 19:16-30, 막 10:17-31, 눅 18:18-30', event: '재물과 하나님 나라, 제자의 대가를 가르치신다.', phase: '마지막 여정' },
  { name: '세 번째 수난 예고', year: 32.62, books: ['마태', '마가', '누가'], refs: '마 20:17-19, 막 10:32-34, 눅 18:31-34', event: '예루살렘에서 죽임당하고 사흘 만에 살아날 것을 예고하신다.', phase: '마지막 여정' },
  { name: '여리고 맹인 치유', year: 32.72, books: ['마태', '마가', '누가'], refs: '마 20:29-34, 막 10:46-52, 눅 18:35-43', event: '다윗의 자손이라 부르짖는 맹인을 고치신다.', phase: '마지막 여정' },
  { name: '삭개오', year: 32.78, books: ['누가'], refs: '눅 19:1-10', event: '여리고에서 삭개오의 집에 머무시며 잃은 자를 찾으러 왔다고 하신다.', phase: '마지막 여정' },
  { name: '베다니 향유', year: 32.9, books: ['마태', '마가', '요한'], refs: '마 26:6-13, 막 14:3-9, 요 12:1-8', event: '마리아가 향유를 붓고 예수님의 장례를 준비한 일로 해석된다.', phase: '고난주간' },
  { name: '예루살렘 입성', year: 33.0, books: ['마태', '마가', '누가', '요한'], refs: '마 21:1-11, 막 11:1-11, 눅 19:28-44, 요 12:12-19', event: '나귀를 타고 예루살렘에 들어가시며 왕으로 환영받으신다.', phase: '고난주간', major: true },
  { name: '무화과나무와 성전 정화', year: 33.05, books: ['마태', '마가', '누가'], refs: '마 21:12-22, 막 11:12-26, 눅 19:45-48', event: '성전을 정화하시고 열매 없는 무화과나무를 심판 표지로 삼으신다.', phase: '고난주간' },
  { name: '종교 지도자 논쟁', year: 33.08, books: ['마태', '마가', '누가'], refs: '마 21:23-23:39, 막 11:27-12:44, 눅 20:1-21:4', event: '권위, 세금, 부활, 큰 계명, 외식에 대한 논쟁과 책망이 이어진다.', phase: '고난주간' },
  { name: '감람산 강화', year: 33.1, books: ['마태', '마가', '누가'], refs: '마 24~25장, 막 13장, 눅 21:5-36', event: '성전 파괴와 인자의 오심, 깨어 있음에 대해 가르치신다.', phase: '고난주간', major: true },
  { name: '최후의 만찬', year: 33.18, books: ['마태', '마가', '누가', '요한'], refs: '마 26:17-30, 막 14:12-26, 눅 22:7-38, 요 13~17장', event: '새 언약의 식탁, 발 씻김, 보혜사 약속과 대제사장적 기도가 이어진다.', phase: '고난주간', major: true, labelSlot: 1 },
  { name: '겟세마네 기도와 체포', year: 33.2, books: ['마태', '마가', '누가', '요한'], refs: '마 26:36-56, 막 14:32-52, 눅 22:39-53, 요 18:1-12', event: '겟세마네에서 기도하시고 유다의 배반으로 체포되신다.', phase: '고난주간', major: true, labelSlot: 2 },
  { name: '재판과 베드로 부인', year: 33.22, books: ['마태', '마가', '누가', '요한'], refs: '마 26:57-27:31, 막 14:53-15:20, 눅 22:54-23:25, 요 18:13-19:16', event: '유대 지도자와 빌라도 앞에서 재판을 받으시고 베드로가 세 번 부인한다.', phase: '고난주간', major: true },
  { name: '십자가와 죽으심', year: 33.25, books: ['마태', '마가', '누가', '요한'], refs: '마 27:32-56, 막 15:21-41, 눅 23:26-49, 요 19:17-37', event: '골고다에서 십자가에 못 박히시고 죽으신다.', phase: '고난주간', major: true, labelSlot: 3 },
  { name: '장사', year: 33.28, books: ['마태', '마가', '누가', '요한'], refs: '마 27:57-61, 막 15:42-47, 눅 23:50-56, 요 19:38-42', event: '아리마대 요셉의 무덤에 장사되신다.', phase: '고난주간', labelSlot: 1, labelCompact: true },
  { name: '부활', year: 33.31, books: ['마태', '마가', '누가', '요한'], refs: '마 28:1-10, 막 16:1-8, 눅 24:1-12, 요 20:1-18', event: '빈 무덤과 부활의 첫 증언이 선포된다.', phase: '부활 이후', major: true, labelSlot: 2, labelCompact: true },
  { name: '엠마오와 제자들에게 나타나심', year: 33.34, books: ['누가', '요한'], refs: '눅 24:13-49, 요 20:19-29', event: '부활하신 주께서 성경을 풀어주시고 제자들에게 평강을 선포하신다.', phase: '부활 이후' },
  { name: '갈릴리 현현과 사명', year: 33.38, books: ['마태', '요한'], refs: '마 28:16-20, 요 21장', event: '대위임령과 베드로 회복 사건이 이어진다.', phase: '부활 이후', major: true, labelSlot: 1 },
  { name: '승천', year: 33.42, books: ['마가', '누가'], refs: '막 16:19-20, 눅 24:50-53', event: '제자들을 축복하시고 하늘로 올려지신다.', phase: '부활 이후', major: true }
];

const actsEvents = [
  { name: '오순절 성령강림', year: 33.45, type: 'acts', refs: '행 2장', event: '성령이 임하고 베드로의 설교로 예루살렘 교회가 시작된다.', row: 0, major: true },
  { name: '성전 미문 앉은뱅이 치유', year: 33.7, type: 'acts', refs: '행 3~4장', event: '사도들이 예수의 이름으로 치유하고 공회 앞에서 증언한다.', row: 1 },
  { name: '아나니아와 삽비라', year: 34.0, type: 'acts', refs: '행 5장', event: '초기 공동체 안의 거짓과 심판 사건.', row: 2 },
  { name: '일곱 집사 세움', year: 34.5, type: 'acts', refs: '행 6장', event: '헬라파 과부 구제 문제 속에 일곱 사람이 세워진다.', row: 0 },
  { name: '스데반 순교', year: 35.0, type: 'acts', refs: '행 7장', event: '스데반의 설교와 순교 이후 큰 박해가 시작된다.', row: 1, major: true },
  { name: '사마리아 복음화', year: 35.3, type: 'acts', refs: '행 8:1-25', event: '빌립이 사마리아에 복음을 전하고 베드로와 요한이 방문한다.', row: 2 },
  { name: '에디오피아 내시', year: 35.6, type: 'acts', refs: '행 8:26-40', event: '빌립이 이사야 말씀으로 그리스도를 전하고 세례를 베푼다.', row: 3 },
  { name: '사울 회심', year: 36.0, type: 'acts', refs: '행 9:1-31, 갈 1:15-18', event: '다메섹 길에서 부활하신 예수를 만나 사도가 된다.', row: 0, major: true },
  { name: '베드로의 룻다·욥바 사역', year: 39.0, type: 'acts', refs: '행 9:32-43', event: '애니아 치유와 다비다 부활 사건.', row: 1 },
  { name: '고넬료 회심', year: 40.0, type: 'acts', refs: '행 10~11장', event: '이방인 고넬료 집에 성령이 임하며 이방 선교의 문이 열린다.', row: 2, major: true },
  { name: '안디옥 교회 성장', year: 43.0, type: 'acts', refs: '행 11:19-30', event: '제자들이 처음 그리스도인이라 불리고 바나바와 사울이 가르친다.', row: 3 },
  { name: '야고보 순교와 베드로 투옥', year: 44.0, type: 'acts', refs: '행 12장, 요세푸스 역사 배경', event: '헤롯 아그립바 1세가 야고보를 죽이고 베드로를 가두나 베드로는 구출된다.', row: 0, major: true },
  { name: '1차 전도여행', start: 46.0, end: 48.0, type: 'journey', refs: '행 13:1-14:28', route: '안디옥, 구브로, 비시디아 안디옥, 이고니온, 루스드라, 더베', event: '바울과 바나바가 구브로와 남갈라디아 지역을 순회한다.', row: 0 },
  { name: '예루살렘 공의회', year: 49.0, type: 'acts', refs: '행 15장, 갈 2장', event: '이방 신자에게 율법 멍에를 지우지 않기로 결정한다.', row: 1, major: true },
  { name: '2차 전도여행', start: 49.5, end: 52.0, type: 'journey', refs: '행 15:36-18:22', route: '수리아, 길리기아, 갈라디아, 드로아, 빌립보, 데살로니가, 베뢰아, 아덴, 고린도, 에베소', event: '마게도냐 환상 이후 유럽 선교가 시작되고 고린도에 장기 체류한다.', row: 1 },
  { name: '빌립보 감옥', year: 50.0, type: 'acts', refs: '행 16장', event: '루디아 회심, 귀신 들린 여종, 감옥 찬송과 간수 회심 사건.', row: 2 },
  { name: '아덴 아레오바고 설교', year: 50.6, type: 'acts', refs: '행 17장', event: '바울이 알지 못하는 신 제단을 접점으로 창조주 하나님을 선포한다.', row: 3 },
  { name: '고린도 사역', year: 51.0, type: 'acts', refs: '행 18:1-17', event: '아굴라와 브리스길라를 만나고 갈리오 총독 앞에 선다.', row: 4 },
  { name: '3차 전도여행', start: 53.0, end: 57.0, type: 'journey', refs: '행 18:23-21:16', route: '갈라디아, 브루기아, 에베소, 마게도냐, 헬라, 드로아, 밀레도', event: '에베소를 중심으로 아시아 사역이 확장되고 여러 교회 헌금이 준비된다.', row: 2 },
  { name: '에베소 두란노 서원', year: 54.5, type: 'acts', refs: '행 19장', event: '두 해 동안 말씀을 가르치며 아시아에 복음이 퍼진다.', row: 3 },
  { name: '에베소 소동', year: 56.0, type: 'acts', refs: '행 19:23-41', event: '아데미 신전 관련 장인들의 소동이 일어난다.', row: 4 },
  { name: '드로아 유두고', year: 57.0, type: 'acts', refs: '행 20:7-12', event: '바울의 긴 강론 중 떨어진 유두고가 살아난다.', row: 0 },
  { name: '밀레도 장로 고별', year: 57.1, type: 'acts', refs: '행 20:17-38', event: '에베소 장로들에게 양 떼를 부탁하며 고별한다.', row: 1 },
  { name: '예루살렘 체포', year: 57.5, type: 'acts', refs: '행 21~23장', event: '성전 소동으로 체포되어 천부장에게 보호받고 공회 앞에 선다.', row: 2, major: true },
  { name: '가이사랴 구금', start: 57.6, end: 59.8, type: 'journey', refs: '행 23:23-26:32', route: '가이사랴, 벨릭스와 베스도 총독 심문, 아그립바 2세 앞 변론', event: '바울이 로마 시민권에 따라 가이사에게 상소하기 전까지 구금된다.', row: 3 },
  { name: '로마행 항해와 난파', start: 59.8, end: 60.2, type: 'journey', refs: '행 27:1-28:16', route: '가이사랴, 시돈, 그레데, 멜리데, 수라구사, 보디올, 로마', event: '유라굴로 광풍과 멜리데 난파를 거쳐 로마로 향한다.', row: 4 },
  { name: '로마 1차 연금', start: 60.2, end: 62.2, type: 'journey', refs: '행 28:17-31', route: '로마 셋집', event: '바울이 로마에서 비교적 자유롭게 하나님 나라와 예수 그리스도를 전한다.', row: 0 },
  { name: '바울 석방 후 사역 추정', start: 62.5, end: 66.0, type: 'journey', refs: '사도행전 이후, 딤전·딛·딤후 배경', route: '그레데, 마게도냐, 에베소, 니고볼리, 스페인 가능성 논의', event: '목회서신 배경으로 추정되는 후기 사역. 세부 경로는 전승과 학계 논의가 갈린다.', row: 1 }
];

const epistleEvents = [
  { name: '야고보서', year: 45.0, kind: 'letter', refs: '약', event: '야고보가 흩어진 열두 지파에게 행함 있는 믿음을 권면한다.', row: 0 },
  { name: '갈라디아서', year: 48.5, kind: 'letter', refs: '갈', event: '율법 행위가 아니라 믿음으로 의롭다 함을 받는 복음을 변호한다.', row: 1 },
  { name: '데살로니가전서', year: 51.0, kind: 'letter', refs: '살전', event: '재림 소망과 거룩한 삶을 격려하는 바울 초기 서신.', row: 2 },
  { name: '데살로니가후서', year: 51.5, kind: 'letter', refs: '살후', event: '주의 날 오해를 바로잡고 인내를 권면한다.', row: 3 },
  { name: '고린도전서', year: 55.0, kind: 'letter', refs: '고전', event: '분쟁, 성, 은사, 부활 등 고린도 교회 문제를 다룬다.', row: 0 },
  { name: '고린도후서', year: 56.0, kind: 'letter', refs: '고후', event: '바울의 사도직 변호와 화해, 연보 권면이 중심이다.', row: 1 },
  { name: '로마서', year: 57.0, kind: 'letter', refs: '롬', event: '복음의 의, 유대인과 이방인, 그리스도인의 삶을 체계적으로 설명한다.', row: 2 },
  { name: '마가복음', year: 60.0, kind: 'letter', refs: '막', event: '예수 그리스도의 권위와 고난받는 종의 길을 기록한 복음서.', row: 3 },
  { name: '에베소서', year: 61.0, kind: 'letter', refs: '엡', event: '그리스도 안에서 하나 된 교회와 새 사람의 삶을 가르친다.', row: 0 },
  { name: '골로새서', year: 61.0, kind: 'letter', refs: '골', event: '그리스도의 충만한 우월성과 거짓 가르침에 대한 경계를 말한다.', row: 1 },
  { name: '빌레몬서', year: 61.0, kind: 'letter', refs: '몬', event: '오네시모를 형제로 받아 달라는 바울의 개인 서신.', row: 2 },
  { name: '빌립보서', year: 62.0, kind: 'letter', refs: '빌', event: '기쁨, 겸손, 복음 동역을 권면하는 옥중서신.', row: 3 },
  { name: '누가복음', year: 62.0, kind: 'letter', refs: '눅', event: '데오빌로에게 예수의 생애와 구원의 보편성을 질서 있게 기록한다.', row: 4 },
  { name: '사도행전', year: 63.0, kind: 'letter', refs: '행', event: '예루살렘에서 로마까지 성령을 통한 복음 확장을 기록한다.', row: 5 },
  { name: '마태복음', year: 65.0, kind: 'letter', refs: '마', event: '예수를 다윗의 자손, 새 모세, 하나님 나라의 왕으로 제시한다.', row: 0 },
  { name: '디모데전서', year: 64.5, kind: 'letter', refs: '딤전', event: '에베소 사역을 맡은 디모데에게 교회 질서와 목회를 권면한다.', row: 1 },
  { name: '디도서', year: 65.0, kind: 'letter', refs: '딛', event: '그레데 교회 장로 세움과 선한 행실을 권면한다.', row: 2 },
  { name: '베드로전서', year: 64.0, kind: 'letter', refs: '벧전', event: '고난받는 성도에게 산 소망과 거룩한 삶을 격려한다.', row: 3 },
  { name: '디모데후서', year: 66.5, kind: 'letter', refs: '딤후', event: '순교를 앞둔 바울이 복음과 말씀 사역을 끝까지 지키라고 당부한다.', row: 4 },
  { name: '베드로후서', year: 67.0, kind: 'letter', refs: '벧후', event: '거짓 교사 경계와 주의 날을 기다리는 삶을 권면한다.', row: 5 },
  { name: '히브리서', year: 68.0, kind: 'letter', refs: '히', event: '그리스도의 대제사장직과 새 언약의 탁월함을 논증한다.', row: 0 },
  { name: '유다서', year: 68.0, kind: 'letter', refs: '유', event: '거짓 교사와 방탕함에 맞서 믿음의 도를 위해 힘써 싸우라고 권면한다.', row: 1 },
  { name: '요한복음', year: 90.0, kind: 'letter', refs: '요', event: '예수가 하나님의 아들 그리스도임을 믿게 하려는 표적 중심 복음서.', row: 2 },
  { name: '요한일서', year: 90.5, kind: 'letter', refs: '요일', event: '참된 사귐, 사랑, 성육신 신앙을 분별하도록 권면한다.', row: 3 },
  { name: '요한이서', year: 91.0, kind: 'letter', refs: '요이', event: '진리와 사랑 안에 거하며 미혹하는 자를 경계하라고 말한다.', row: 4 },
  { name: '요한삼서', year: 91.2, kind: 'letter', refs: '요삼', event: '가이오의 환대와 디오드레베의 문제를 다루는 개인 서신.', row: 5 },
  { name: '요한계시록', year: 95.0, kind: 'letter', refs: '계', event: '소아시아 일곱 교회와 온 교회에 주어진 묵시와 예배, 새 창조의 소망.', row: 0, major: true }
];

const apostleLines = [
  { name: '베드로', start: 30, end: 67, kind: 'apostle', period: 'CE 약 30~67', event: '예루살렘 교회의 대표 사도에서 이방인 선교의 문을 여는 역할까지 감당하고, 전승상 로마에서 순교한다.', row: 0 },
  { name: '요한', start: 30, end: 100, kind: 'apostle', period: 'CE 약 30~100', event: '예루살렘 초기 교회와 후기 에베소 전승, 요한문헌과 계시록의 배경 인물.', row: 1 },
  { name: '야고보(세베대의 아들)', start: 30, end: 44, kind: 'apostle', period: 'CE 약 30~44', event: '헤롯 아그립바 1세 때 순교한 사도(행 12장).', row: 2 },
  { name: '야고보(주의 형제)', start: 35, end: 62, kind: 'apostle', period: 'CE 약 35~62', event: '예루살렘 교회의 지도자. 요세푸스 전승상 CE 62년 순교.', row: 3 },
  { name: '바울', start: 36, end: 67, kind: 'apostle', period: 'CE 약 36~67', event: '이방인의 사도로 회심 후 안디옥, 소아시아, 그리스, 로마를 향해 복음을 전한다.', row: 4 },
  { name: '바나바', start: 40, end: 52, kind: 'apostle', period: 'CE 약 40~52', event: '안디옥 교회와 1차 전도여행의 핵심 동역자.', row: 5 }
];

const ntHistoricalEvents = [
  { name: '글라우디오 추방령', year: 49, refs: '행 18:2, 수에토니우스', event: '유대인들이 로마에서 추방되어 아굴라와 브리스길라가 고린도에 오게 된 배경.', row: 0 },
  { name: '네로 박해', year: 64, refs: '타키투스, 교회사 전승', event: '로마 대화재 이후 그리스도인 박해가 일어나 베드로와 바울 순교 전승의 배경이 된다.', row: 1, major: true },
  { name: '예루살렘 성전 파괴', year: 70, refs: '요세푸스, 공관복음 예언 배경', event: '로마 장군 티투스가 예루살렘과 성전을 파괴한다.', row: 2, major: true },
  { name: '도미티아누스 시대', start: 81, end: 96, kind: 'apostle', period: 'CE 81~96', event: '소아시아 교회 압박과 요한계시록 저작 배경으로 자주 논의되는 황제 시대.', row: 3 }
];

const ntMapImage = {
  href: 'assets/paul-journeys-map-knecht.png',
  source: 'https://commons.wikimedia.org/wiki/File:Map_missionary_journeys_stpaul_knecht.png'
};

const ntMapLocations = {
  jerusalem: { name: '예루살렘', lat: 31.78, lng: 35.23 },
  samaria: { name: '사마리아', lat: 32.28, lng: 35.2 },
  gazaRoad: { name: '가사로 내려가는 길', lat: 31.5, lng: 34.55 },
  damascus: { name: '다메섹', lat: 33.51, lng: 36.29 },
  lydda: { name: '룻다', lat: 31.95, lng: 34.9 },
  joppa: { name: '욥바', lat: 32.05, lng: 34.75 },
  caesarea: { name: '가이사랴', lat: 32.5, lng: 34.89 },
  antioch: { name: '수리아 안디옥', lat: 36.2, lng: 36.16 },
  salamis: { name: '살라미', lat: 35.17, lng: 33.36 },
  paphos: { name: '바보', lat: 34.77, lng: 32.42 },
  pisidianAntioch: { name: '비시디아 안디옥', lat: 38.3, lng: 31.19 },
  iconium: { name: '이고니온', lat: 37.87, lng: 32.49 },
  lystra: { name: '루스드라', lat: 37.58, lng: 32.45 },
  derbe: { name: '더베', lat: 37.35, lng: 33.26 },
  troas: { name: '드로아', lat: 39.75, lng: 26.16 },
  philippi: { name: '빌립보', lat: 41.01, lng: 24.28 },
  thessalonica: { name: '데살로니가', lat: 40.64, lng: 22.94 },
  berea: { name: '베뢰아', lat: 40.52, lng: 22.2 },
  athens: { name: '아덴', lat: 37.98, lng: 23.73 },
  corinth: { name: '고린도', lat: 37.94, lng: 22.93 },
  ephesus: { name: '에베소', lat: 37.94, lng: 27.34 },
  colossae: { name: '골로새', lat: 37.78, lng: 29.26 },
  galatia: { name: '갈라디아', lat: 38.4, lng: 32.1 },
  phrygia: { name: '브루기아', lat: 38.5, lng: 30.5 },
  miletus: { name: '밀레도', lat: 37.53, lng: 27.28 },
  sidon: { name: '시돈', lat: 33.56, lng: 35.37 },
  crete: { name: '그레데', lat: 35.24, lng: 24.81 },
  malta: { name: '멜리데', lat: 35.9, lng: 14.51 },
  syracuse: { name: '수라구사', lat: 37.07, lng: 15.29 },
  puteoli: { name: '보디올', lat: 40.82, lng: 14.12 },
  rome: { name: '로마', lat: 41.9, lng: 12.5 },
  nicopolis: { name: '니고볼리', lat: 39.0, lng: 20.74 },
  asiaMinor: { name: '소아시아 교회들', lat: 38.5, lng: 29.2 },
  pontusAsia: { name: '본도·갈라디아·갑바도기아·아시아·비두니아', lat: 39.6, lng: 32.7 },
  sevenChurches: { name: '소아시아 일곱 교회', lat: 38.5, lng: 28.3 },
  diaspora: { name: '디아스포라 유대 공동체', lat: 37.2, lng: 30.0 },
  judea: { name: '유대/예루살렘권', lat: 31.78, lng: 35.23 },
  spain: { name: '스페인 가능성', lat: 40.4, lng: -3.7 }
};

const ntGeo = {
  '오순절 성령강림': { points: ['jerusalem'], kind: 'acts' },
  '성전 미문 앉은뱅이 치유': { points: ['jerusalem'], kind: 'acts' },
  '아나니아와 삽비라': { points: ['jerusalem'], kind: 'acts' },
  '일곱 집사 세움': { points: ['jerusalem'], kind: 'acts' },
  '스데반 순교': { points: ['jerusalem'], kind: 'acts' },
  '사마리아 복음화': { points: ['samaria'], kind: 'acts' },
  '에디오피아 내시': { points: ['gazaRoad'], kind: 'acts', note: '행 8장의 “예루살렘에서 가사로 내려가는 길”을 개략 표시' },
  '사울 회심': { points: ['damascus'], kind: 'acts' },
  '베드로의 룻다·욥바 사역': { points: ['lydda', 'joppa'], kind: 'acts' },
  '고넬료 회심': { points: ['caesarea'], kind: 'acts' },
  '안디옥 교회 성장': { points: ['antioch'], kind: 'acts' },
  '야고보 순교와 베드로 투옥': { points: ['jerusalem'], kind: 'acts' },
  '1차 전도여행': { route: ['antioch', 'salamis', 'paphos', 'pisidianAntioch', 'iconium', 'lystra', 'derbe', 'lystra', 'iconium', 'pisidianAntioch', 'paphos', 'antioch'], kind: 'journey' },
  '예루살렘 공의회': { points: ['jerusalem'], kind: 'acts' },
  '2차 전도여행': { route: ['antioch', 'galatia', 'troas', 'philippi', 'thessalonica', 'berea', 'athens', 'corinth', 'ephesus', 'caesarea', 'antioch'], kind: 'journey' },
  '빌립보 감옥': { points: ['philippi'], kind: 'acts' },
  '아덴 아레오바고 설교': { points: ['athens'], kind: 'acts' },
  '고린도 사역': { points: ['corinth'], kind: 'acts' },
  '3차 전도여행': { route: ['antioch', 'galatia', 'phrygia', 'ephesus', 'troas', 'philippi', 'corinth', 'troas', 'miletus', 'caesarea', 'jerusalem'], kind: 'journey' },
  '에베소 두란노 서원': { points: ['ephesus'], kind: 'acts' },
  '에베소 소동': { points: ['ephesus'], kind: 'acts' },
  '드로아 유두고': { points: ['troas'], kind: 'acts' },
  '밀레도 장로 고별': { points: ['miletus'], kind: 'acts' },
  '예루살렘 체포': { points: ['jerusalem'], kind: 'acts' },
  '가이사랴 구금': { points: ['caesarea'], kind: 'acts' },
  '로마행 항해와 난파': { route: ['caesarea', 'sidon', 'crete', 'malta', 'syracuse', 'puteoli', 'rome'], kind: 'journey' },
  '로마 1차 연금': { points: ['rome'], kind: 'acts' },
  '바울 석방 후 사역 추정': { route: ['crete', 'ephesus', 'nicopolis', 'rome'], kind: 'journey', uncertain: true, note: '사도행전 이후 경로는 전승과 학계 논의가 갈리며, 스페인 가능성은 이 배경 지도 범위 밖이라 선으로 표시하지 않음' },
  '야고보서': { points: ['diaspora'], kind: 'uncertain', note: '“흩어진 열두 지파” 수신 범위를 동지중해 디아스포라로 개략 표시' },
  '갈라디아서': { route: ['pisidianAntioch', 'iconium', 'lystra', 'derbe'], kind: 'letter', note: '남갈라디아 교회 수신 가설 기준' },
  '데살로니가전서': { points: ['thessalonica'], kind: 'letter' },
  '데살로니가후서': { points: ['thessalonica'], kind: 'letter' },
  '고린도전서': { points: ['corinth'], kind: 'letter' },
  '고린도후서': { points: ['corinth'], kind: 'letter' },
  '로마서': { points: ['rome'], kind: 'letter' },
  '마가복음': { points: ['rome'], kind: 'uncertain', note: '전승상 로마 공동체 관련으로 자주 논의됨' },
  '에베소서': { points: ['ephesus'], kind: 'letter' },
  '골로새서': { points: ['colossae'], kind: 'letter' },
  '빌레몬서': { points: ['colossae'], kind: 'letter' },
  '빌립보서': { points: ['philippi'], kind: 'letter' },
  '누가복음': { points: ['rome'], kind: 'uncertain', note: '수신자 데오빌로의 정확한 거주지는 불확실' },
  '사도행전': { route: ['jerusalem', 'samaria', 'antioch', 'ephesus', 'corinth', 'caesarea', 'rome'], kind: 'uncertain', note: '책 전체의 지리적 진행 방향을 요약한 선' },
  '마태복음': { points: ['antioch'], kind: 'uncertain', note: '수신 공동체는 유대-그리스도인권으로 논의되며 안디옥은 대표 가설' },
  '디모데전서': { points: ['ephesus'], kind: 'letter' },
  '디도서': { points: ['crete'], kind: 'letter' },
  '베드로전서': { route: ['pontusAsia', 'galatia', 'ephesus'], kind: 'letter', note: '벧전 1:1의 본도·갈라디아·갑바도기아·아시아·비두니아를 광역으로 표시' },
  '디모데후서': { points: ['ephesus'], kind: 'letter', note: '디모데의 사역지로 보이는 에베소권 기준' },
  '베드로후서': { route: ['pontusAsia', 'galatia', 'ephesus'], kind: 'letter', note: '베드로전서 수신권과 이어지는 광역 교회로 표시' },
  '히브리서': { points: ['judea'], kind: 'uncertain', note: '수신지는 불확실하며 유대-그리스도인권으로 개략 표시' },
  '유다서': { points: ['judea'], kind: 'uncertain', note: '수신 공동체가 특정 도시로 고정되지 않음' },
  '요한복음': { points: ['ephesus'], kind: 'uncertain', note: '후기 에베소 전승 기준' },
  '요한일서': { points: ['asiaMinor'], kind: 'letter' },
  '요한이서': { points: ['asiaMinor'], kind: 'letter' },
  '요한삼서': { points: ['asiaMinor'], kind: 'letter' },
  '요한계시록': { points: ['sevenChurches'], kind: 'letter', note: '에베소·서머나·버가모·두아디라·사데·빌라델비아·라오디게아 권역' },
  '글라우디오 추방령': { points: ['rome'], kind: 'acts' },
  '네로 박해': { points: ['rome'], kind: 'acts' },
  '예루살렘 성전 파괴': { points: ['jerusalem'], kind: 'acts' },
  '도미티아누스 시대': { points: ['asiaMinor'], kind: 'uncertain' }
};

const tooltip = document.getElementById('tooltip');
const zoomInput = document.getElementById('zoom');
const zoomLabel = document.getElementById('zoom-label');
const timelinePages = Array.from(document.querySelectorAll('.timeline-page'));
const splitLabel = document.getElementById('split-label');
const syncScrollAreas = Array.from(document.querySelectorAll('.section-scroll[data-sync-group="divided"]'));
const ntMap = document.getElementById('nt-map');
const ntMapInfo = document.getElementById('nt-map-info');
const ntMapEventList = document.getElementById('nt-map-event-list');
const mapBindings = new Map();
const timelineBindings = new Map();
let activeMapId = null;
const zoomTargets = {
  early: { cssVar: '--early-zoom', value: 1 },
  united: { cssVar: '--united-zoom', value: 1 },
  divided: { cssVar: '--divided-zoom', value: Number(zoomInput.value) },
  exile: { cssVar: '--exile-zoom', value: 1 },
  gospel: { cssVar: '--gospel-zoom', value: Number(zoomInput.value) },
  acts: { cssVar: '--acts-zoom', value: Number(zoomInput.value) },
  epistles: { cssVar: '--epistles-zoom', value: Number(zoomInput.value) }
};

function toPercent(year, range) {
  if (range.start > range.end) {
    const total = range.start - range.end;
    return ((range.start - year) / total) * 100;
  }

  const total = range.end - range.start;
  return ((year - range.start) / total) * 100;
}

function clampYear(year, range) {
  if (range.start > range.end) {
    return Math.min(range.start, Math.max(range.end, year));
  }

  return Math.max(range.start, Math.min(range.end, year));
}

function getNtGeo(item) {
  return item?.name ? ntGeo[item.name] : null;
}

function getMapId(item) {
  return getNtGeo(item) ? item.name : '';
}

function getMapLocationNames(item) {
  const geo = getNtGeo(item);
  if (!geo) return '';

  const keys = geo.route || geo.points || [];
  const names = [...new Set(keys.map((key) => ntMapLocations[key]?.name).filter(Boolean))];
  return names.join(' → ');
}

function getMapItemYear(item) {
  if (Number.isFinite(item.year)) return item.year;
  if (Number.isFinite(item.start)) return item.start;
  return 999;
}

function getMapItemPeriod(item) {
  if (Number.isFinite(item.year)) return `CE 약 ${item.year}`;
  if (Number.isFinite(item.start) && Number.isFinite(item.end)) return `CE 약 ${item.start}~${item.end}`;
  return item.period || 'CE';
}

function getMapKindLabel(item) {
  const geo = getNtGeo(item);
  if (!geo) return '';
  if (geo.uncertain || geo.kind === 'uncertain') return '추정/광역';
  if (geo.kind === 'letter') return '서신 수신지';
  if (geo.kind === 'journey') return '전도여행/항해';
  return '사건';
}

function getMapInfoHtml(item) {
  const mapLocations = getMapLocationNames(item);
  const mapNote = getNtGeo(item)?.note;
  const locationLine = mapLocations ? `위치: ${mapLocations}` : '';
  const noteLine = mapNote ? ` · ${mapNote}` : '';
  return `<strong>${item.name}</strong><span>${getMapItemPeriod(item)} · ${getMapKindLabel(item)}${locationLine ? `<br>${locationLine}${noteLine}` : noteLine}</span>`;
}

function updateMapInfo(item) {
  if (!ntMapInfo || !item) return;
  ntMapInfo.innerHTML = getMapInfoHtml(item);
}

function registerLinkedElement(store, id, element) {
  if (!id) return;
  if (!store.has(id)) store.set(id, []);
  store.get(id).push(element);
}

function setLinkedFocus(id, isActive) {
  if (!id) return;
  activeMapId = isActive ? id : activeMapId === id ? null : activeMapId;

  timelineBindings.forEach((elements, key) => {
    elements.forEach((element) => element.classList.toggle('timeline-active', activeMapId === key));
  });

  mapBindings.forEach((elements, key) => {
    elements.forEach((element) => {
      element.classList.toggle('map-active', activeMapId === key);
      element.classList.toggle('map-dim', Boolean(activeMapId) && activeMapId !== key);
    });
  });
}

function wireLinkedHover(element, item) {
  const id = getMapId(item);
  if (!id) return;

  registerLinkedElement(timelineBindings, id, element);
  element.dataset.mapId = id;
  element.addEventListener('mouseenter', () => {
    setLinkedFocus(id, true);
    updateMapInfo(item);
  });
  element.addEventListener('focus', () => {
    setLinkedFocus(id, true);
    updateMapInfo(item);
  });
  element.addEventListener('mouseleave', () => setLinkedFocus(id, false));
  element.addEventListener('blur', () => setLinkedFocus(id, false));
}

function addAxisTicks(axisEl, range) {
  const isReverse = range.start > range.end;
  const formatYear = (year) => `${range.era || 'BCE'} ${Number.isInteger(year) ? year : year.toFixed(1)}`;
  for (let year = range.start; isReverse ? year >= range.end : year <= range.end; year += isReverse ? -range.tick : range.tick) {
    const tick = document.createElement('span');
    tick.className = 'tick';
    tick.style.left = `${toPercent(year, range)}%`;
    tick.textContent = formatYear(year);
    axisEl.appendChild(tick);
  }
}

function showTooltip(event, item) {
  const roleLabels = {
    priest: '제사장',
    prophet: '선지자',
    judge: '사사',
    leader: '주요 인물'
  };
  const roleLabel = roleLabels[item.role] || '시대';
  const detail = item.refs
    ? `<span>본문/자료: ${item.refs}</span><br><span>시점: ${item.year ? `CE 약 ${item.year}` : item.period || `CE 약 ${item.start}~${item.end}`}</span>${item.books ? `<br><span>복음서: ${item.books.join(', ')}</span>` : ''}${item.phase ? `<br><span>구간: ${item.phase}</span>` : ''}${item.route ? `<br><span>경로: ${item.route}</span>` : ''}`
    : item.kind === 'letter'
    ? `<span>본문: ${item.refs}</span><br><span>저작 시기: CE 약 ${item.year}</span>`
    : item.kind === 'apostle'
    ? `<span>구분: 사도 활동/역사 배경</span><br><span>기간: ${item.period || `CE 약 ${item.start}~${item.end}`}</span>`
    : item.type === 'journey'
    ? `<span>구분: 전도여행/구금/항해</span><br><span>기간: CE 약 ${item.start}~${item.end}</span><br><span>경로: ${item.route}</span>`
    : item.type === 'acts'
    ? `<span>본문/자료: ${item.refs}</span><br><span>시점: CE 약 ${item.year}</span>`
    : item.year
    ? `<span>구분: 일회적 사건</span><br><span>시점: BCE ${item.year}</span>`
    : item.empire
    ? `<span>제국: ${item.empire}</span><br><span>재위: BCE ${item.start}~${item.end} (${item.reign})</span><br><span>등장/참고: ${item.books}</span>`
    : item.reign
    ? `<span>부친/가문: ${item.father}</span><br><span>재위: BCE ${item.start}~${item.end} (${item.reign})</span>`
    : `<span>구분: ${roleLabel}</span><br><span>기간: ${item.period || `BCE 약 ${item.start}~${item.end}`}</span>`;
  const mapLocations = getMapLocationNames(item);
  const mapNote = getNtGeo(item)?.note;
  const mapDetail = mapLocations
    ? `<br><span>지도 위치: ${mapLocations}</span>${mapNote ? `<br><span>위치 주석: ${mapNote}</span>` : ''}`
    : '';
  tooltip.innerHTML = `<strong>${item.name}</strong><br>${detail}${mapDetail}<br><span>요약: ${item.event}</span>`;
  tooltip.classList.add('show');

  const gap = 16;
  const edgePadding = 12;
  const { width, height } = tooltip.getBoundingClientRect();
  let left = event.clientX + gap;
  let top = event.clientY + gap;

  if (left + width + edgePadding > window.innerWidth) {
    left = event.clientX - width - gap;
  }

  if (top + height + edgePadding > window.innerHeight) {
    top = event.clientY - height - gap;
  }

  tooltip.style.left = `${Math.max(edgePadding, Math.min(left, window.innerWidth - width - edgePadding))}px`;
  tooltip.style.top = `${Math.max(edgePadding, Math.min(top, window.innerHeight - height - edgePadding))}px`;
}

function renderLane(data, laneEl, range, singleRow = false, rowCount = 3, topBase = 18) {
  data.forEach((king, index) => {
    const bar = document.createElement('button');
    bar.type = 'button';
    bar.className = 'bar';
    bar.dataset.rating = king.rating;
    bar.style.left = `${toPercent(king.start, range)}%`;
    bar.style.width = `${Math.max(1.2, toPercent(king.end, range) - toPercent(king.start, range))}%`;
    bar.style.top = `${singleRow ? 22 : topBase + ((king.row ?? index) % rowCount) * 50}px`;
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
    bar.style.top = `${18 + ((item.row ?? index) % 2) * 46}px`;
    bar.innerText = item.name;
    bar.addEventListener('mousemove', (e) => showTooltip(e, item));
    bar.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
    laneEl.appendChild(bar);
  });
}

function renderMilestones(data, laneEl, range) {
  data.forEach((item, index) => {
    const marker = document.createElement('button');
    const year = clampYear(item.year, range);
    marker.type = 'button';
    marker.className = 'milestone';
    marker.style.left = `${toPercent(year, range)}%`;
    marker.style.top = '8px';
    marker.style.height = '524px';
    marker.innerHTML = `<span style="top:${item.labelTop ?? 250 + (index % 2) * 22}px">${item.name}</span>`;
    marker.addEventListener('mousemove', (e) => showTooltip(e, item));
    marker.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
    laneEl.appendChild(marker);
  });
}

function renderMinistryLines(data, laneEl, range, topBase = 72, rowCount = 4) {
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
    line.style.top = `${topBase + (index % rowCount) * 26}px`;
    line.innerHTML = `<span>${item.name}</span>`;
    line.addEventListener('mousemove', (e) => showTooltip(e, item));
    line.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
    laneEl.appendChild(line);
  });
}

function renderGospelLane(data, laneEl, range) {
  const rowTop = 48;
  const rowGap = 60;
  const labelGapPercent = 2.65;
  const labelSlots = Array.from({ length: gospelBooks.length }, () => []);
  gospelBooks.forEach((book, index) => {
    const label = document.createElement('span');
    label.className = 'gospel-row-label';
    label.style.top = `${rowTop + index * rowGap - 10}px`;
    label.textContent = book;
    laneEl.appendChild(label);
  });

  const setEventHighlight = (eventId, isActive) => {
    laneEl
      .querySelectorAll(`[data-event-id="${eventId}"]`)
      .forEach((eventPart) => eventPart.classList.toggle('event-highlight', isActive));
  };

  data.forEach((item, eventIndex) => {
    const eventId = `gospel-${eventIndex}`;
    const eventPercent = toPercent(clampYear(item.year, range), range);
    const eventRows = item.books
      .map((book) => gospelBooks.indexOf(book))
      .filter((rowIndex) => rowIndex >= 0);
    const labelRow = Math.max(...eventRows);
    let labelSlot = Number.isInteger(item.labelSlot)
      ? item.labelSlot
      : labelSlots[labelRow].findIndex((lastPercent) => eventPercent - lastPercent > labelGapPercent);

    if (labelSlot < 0) {
      labelSlot = labelSlots[labelRow].length;
    }

    labelSlots[labelRow][labelSlot] = eventPercent;

    const eventLabel = document.createElement('span');
    eventLabel.className = `gospel-event-label${item.major ? ' major' : ''}${item.labelCompact ? ' compact' : ''}`;
    eventLabel.dataset.eventId = eventId;
    eventLabel.style.left = `${eventPercent + (item.labelNudge || 0)}%`;
    eventLabel.style.top = `${rowTop + labelRow * rowGap + 22 + labelSlot * 27}px`;
    eventLabel.textContent = item.name;
    laneEl.appendChild(eventLabel);

    item.books.forEach((book) => {
      const rowIndex = gospelBooks.indexOf(book);
      if (rowIndex < 0) return;

      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `gospel-event-dot${item.major ? ' major' : ''}`;
      dot.dataset.eventId = eventId;
      dot.style.left = `${eventPercent}%`;
      dot.style.top = `${rowTop + rowIndex * rowGap}px`;
      dot.setAttribute('aria-label', `${item.name} - ${book}`);
      dot.addEventListener('mouseenter', () => setEventHighlight(eventId, true));
      dot.addEventListener('focus', () => setEventHighlight(eventId, true));
      dot.addEventListener('mousemove', (e) => showTooltip(e, item));
      dot.addEventListener('mouseleave', () => {
        setEventHighlight(eventId, false);
        tooltip.classList.remove('show');
      });
      dot.addEventListener('blur', () => {
        setEventHighlight(eventId, false);
        tooltip.classList.remove('show');
      });
      laneEl.appendChild(dot);
    });
  });
}

function createSvgElement(name, attrs = {}) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function projectMapPoint(location) {
  const bounds = { west: 11.6, east: 40.4, north: 42.3, south: 29.6 };
  const x = ((location.lng - bounds.west) / (bounds.east - bounds.west)) * 1378 + 28;
  const y = ((bounds.north - location.lat) / (bounds.north - bounds.south)) * 815 + 24;
  return { x, y };
}

function routePath(keys) {
  return keys
    .map((key, index) => {
      const location = ntMapLocations[key];
      if (!location) return '';
      const { x, y } = projectMapPoint(location);
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .filter(Boolean)
    .join(' ');
}

function renderMapBase(svg) {
  svg.innerHTML = '';
  svg.appendChild(createSvgElement('image', {
    class: 'map-source-image',
    href: ntMapImage.href,
    x: 0,
    y: 0,
    width: 1434,
    height: 864,
    preserveAspectRatio: 'none'
  }));

  for (let x = 90; x <= 1340; x += 250) {
    svg.appendChild(createSvgElement('line', { class: 'map-grid', x1: x, y1: 28, x2: x, y2: 830 }));
  }

  for (let y = 92; y <= 790; y += 170) {
    svg.appendChild(createSvgElement('line', { class: 'map-grid', x1: 35, y1: y, x2: 1400, y2: y }));
  }
}

function renderNtMap() {
  if (!ntMap) return;

  renderMapBase(ntMap);
  const plottedItems = [...actsEvents, ...epistleEvents, ...ntHistoricalEvents].filter(getNtGeo);

  plottedItems.forEach((item) => {
    const geo = getNtGeo(item);
    const id = getMapId(item);
    const pathKeys = geo.route;

    if (pathKeys) {
      const path = createSvgElement('path', {
        class: `map-route${geo.kind === 'letter' ? ' letter-route' : ''}`,
        d: routePath(pathKeys),
        tabindex: 0,
        'aria-label': item.name
      });
      registerLinkedElement(mapBindings, id, path);
      path.addEventListener('mouseenter', () => {
        setLinkedFocus(id, true);
        updateMapInfo(item);
      });
      path.addEventListener('focus', () => {
        setLinkedFocus(id, true);
        updateMapInfo(item);
      });
      path.addEventListener('mouseleave', () => setLinkedFocus(id, false));
      path.addEventListener('blur', () => setLinkedFocus(id, false));
      ntMap.appendChild(path);
    }
  });

  plottedItems.forEach((item) => {
    const geo = getNtGeo(item);
    const id = getMapId(item);
    const pointKeys = geo.points || geo.route || [];
    const uniquePointKeys = [...new Set(pointKeys)];

    uniquePointKeys.forEach((key, index) => {
      const location = ntMapLocations[key];
      if (!location) return;

      const { x, y } = projectMapPoint(location);
      const group = createSvgElement('g', {
        class: 'map-point',
        'data-kind': geo.uncertain ? 'uncertain' : geo.kind || 'acts',
        tabindex: 0,
        'aria-label': `${item.name} - ${location.name}`
      });
      const labelOffset = index % 2 === 0 ? -10 : 18;
      group.appendChild(createSvgElement('circle', { cx: x, cy: y, r: geo.kind === 'journey' ? 4.5 : 5.8 }));
      const label = createSvgElement('text', { x: x + 8, y: y + labelOffset });
      label.textContent = location.name;
      group.appendChild(label);
      registerLinkedElement(mapBindings, id, group);
      group.addEventListener('mouseenter', () => {
        setLinkedFocus(id, true);
        updateMapInfo(item);
      });
      group.addEventListener('focus', () => {
        setLinkedFocus(id, true);
        updateMapInfo(item);
      });
      group.addEventListener('mouseleave', () => setLinkedFocus(id, false));
      group.addEventListener('blur', () => setLinkedFocus(id, false));
      ntMap.appendChild(group);
    });
  });
}

function renderNtMapEventList() {
  if (!ntMapEventList) return;

  const plottedItems = [...actsEvents, ...epistleEvents, ...ntHistoricalEvents]
    .filter(getNtGeo)
    .sort((a, b) => getMapItemYear(a) - getMapItemYear(b) || a.name.localeCompare(b.name, 'ko'));

  plottedItems.forEach((item) => {
    const geo = getNtGeo(item);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nt-map-list-item';
    button.dataset.kind = geo.uncertain ? 'uncertain' : geo.kind || 'acts';
    button.innerHTML = `<time>${getMapItemPeriod(item)}</time><strong>${item.name}</strong><span>${getMapKindLabel(item)} · ${getMapLocationNames(item)}</span>`;
    button.setAttribute('aria-label', item.name);
    wireLinkedHover(button, item);
    ntMapEventList.appendChild(button);
  });
}

function renderNtEvents(data, laneEl, range, topBase = 74, rowGap = 48, className = 'nt-event-dot', showLabels = false) {
  data.forEach((item, index) => {
    if (!item.year) return;

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `${className}${item.major ? ' major' : ''}`;
    dot.style.left = `${toPercent(clampYear(item.year, range), range)}%`;
    dot.style.top = `${topBase + (item.row ?? index % 6) * rowGap}px`;
    if (showLabels) {
      dot.innerHTML = `<span class="event-label">${item.name}</span>`;
    }
    dot.setAttribute('aria-label', item.name);
    wireLinkedHover(dot, item);
    dot.addEventListener('mousemove', (e) => showTooltip(e, item));
    dot.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
    laneEl.appendChild(dot);
  });
}

function renderJourneyBars(data, laneEl, range, topBase = 190, rowGap = 48) {
  data.forEach((item, index) => {
    if (!item.start || !item.end) return;

    const start = clampYear(item.start, range);
    const end = clampYear(item.end, range);
    const bar = document.createElement('button');
    bar.type = 'button';
    bar.className = 'journey-bar';
    bar.dataset.kind = item.kind || item.type || 'journey';
    bar.style.left = `${toPercent(start, range)}%`;
    bar.style.width = `${Math.max(1.4, toPercent(end, range) - toPercent(start, range))}%`;
    bar.style.top = `${topBase + (item.row ?? index % 6) * rowGap}px`;
    bar.innerText = item.name;
    wireLinkedHover(bar, item);
    bar.addEventListener('mousemove', (e) => showTooltip(e, item));
    bar.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
    laneEl.appendChild(bar);
  });
}

function setZoom(val) {
  const zoom = Math.max(1, Math.min(4, Number(val)));
  Object.keys(zoomTargets).forEach((key) => setZoomFor(key, zoom));
  zoomInput.value = zoom.toFixed(1);
  zoomLabel.textContent = `${zoom.toFixed(1)}x`;
}

function setZoomFor(key, val) {
  const target = zoomTargets[key];
  if (!target) return;

  const zoom = Math.max(1, Math.min(4, Number(val)));
  target.value = zoom;
  document.documentElement.style.setProperty(target.cssVar, zoom.toFixed(1));
}

function getZoomContentWidth(sectionScroll) {
  const zoomContent = sectionScroll.querySelector('.lane, .gospel-lane, .axis');
  return zoomContent?.scrollWidth || sectionScroll.scrollWidth;
}

function zoomAroundPointer(sectionScroll, zoomKey, delta, clientX) {
  const target = zoomTargets[zoomKey];
  if (!target || !sectionScroll) return;

  const beforeWidth = getZoomContentWidth(sectionScroll);
  const rect = sectionScroll.getBoundingClientRect();
  const pointerX = clientX - rect.left;
  const anchorRatio = beforeWidth > 0
    ? (sectionScroll.scrollLeft + pointerX) / beforeWidth
    : 0;

  const nextZoom = Math.max(1, Math.min(4, target.value + delta));
  if (nextZoom === target.value) return;

  setZoomFor(zoomKey, nextZoom);

  requestAnimationFrame(() => {
    const linkedAreas = sectionScroll.dataset.syncGroup
      ? Array.from(document.querySelectorAll(`.section-scroll[data-sync-group="${sectionScroll.dataset.syncGroup}"]`))
      : [sectionScroll];

    linkedAreas.forEach((area) => {
      const areaRect = area.getBoundingClientRect();
      const areaPointerX = area === sectionScroll ? pointerX : Math.min(Math.max(clientX - areaRect.left, 0), area.clientWidth);
      const afterWidth = getZoomContentWidth(area);
      area.scrollLeft = anchorRatio * afterWidth - areaPointerX;
    });
  });
}

zoomInput.addEventListener('input', (e) => setZoom(e.target.value));
timelinePages.forEach((page) => {
  page.addEventListener('wheel', (e) => {
    const sectionScroll = e.target.closest('.section-scroll');
    if (!sectionScroll && !e.target.closest('.timeline-page')) return;

    const isPinchZoom = e.ctrlKey || e.metaKey;
    if (!isPinchZoom) return;

    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.1 : -0.1;
    const zoomKey = sectionScroll?.dataset.zoomKey || 'divided';
    zoomAroundPointer(sectionScroll, zoomKey, delta, e.clientX);
  }, { passive: false });
});

addAxisTicks(document.getElementById('early-axis'), earlyRange);
addAxisTicks(document.getElementById('united-axis'), unitedRange);
addAxisTicks(document.getElementById('israel-axis'), israelRange);
addAxisTicks(document.getElementById('judah-axis'), judahRange);
addAxisTicks(document.getElementById('exile-axis'), exileRange);
addAxisTicks(document.getElementById('gospel-axis'), gospelRange);
addAxisTicks(document.getElementById('acts-axis'), actsRange);
addAxisTicks(document.getElementById('epistles-axis'), epistlesRange);

renderEraLane(earlyEvents, document.getElementById('early-lane'), earlyRange);
renderMinistryLines(earlyProphetsPriests, document.getElementById('early-lane'), earlyRange, 116);
renderMinistryLines(earlyJudges, document.getElementById('early-lane'), earlyRange, 220, 3);

renderLane(unitedKings, document.getElementById('united-lane'), unitedRange, true);
renderMinistryLines(unitedProphetsPriests, document.getElementById('united-lane'), unitedRange, 72);

renderLane(israeliKings, document.getElementById('israel-lane'), israelRange);
renderMinistryLines(israelProphetsPriests, document.getElementById('israel-lane'), israelRange, 172);

renderLane(judahKings, document.getElementById('judah-lane'), judahRange);
renderMinistryLines(judahProphetsPriests, document.getElementById('judah-lane'), judahRange, 172);

renderEraLane(exileEvents, document.getElementById('exile-lane'), exileRange);
renderMilestones(exileMilestones, document.getElementById('exile-lane'), exileRange);
renderMinistryLines(exileProphetsPriests, document.getElementById('exile-lane'), exileRange, 112, 6);
renderLane(foreignKings, document.getElementById('exile-lane'), exileRange, false, 5, 300);

renderGospelLane(gospelEvents, document.getElementById('gospel-lane'), gospelRange);
renderNtMap();
renderNtMapEventList();
renderNtEvents(actsEvents, document.getElementById('acts-lane'), actsRange, 76, 58, 'nt-event-dot', true);
renderJourneyBars(actsEvents, document.getElementById('acts-lane'), actsRange, 400, 38);
renderNtEvents(epistleEvents, document.getElementById('epistles-lane'), epistlesRange, 72, 50, 'letter-dot', true);
renderNtEvents(ntHistoricalEvents, document.getElementById('epistles-lane'), epistlesRange, 510, 44, 'nt-event-dot', true);
renderJourneyBars(apostleLines, document.getElementById('epistles-lane'), epistlesRange, 350, 34);
renderJourneyBars(ntHistoricalEvents, document.getElementById('epistles-lane'), epistlesRange, 350, 34);
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

document.querySelectorAll('.page-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.pageTarget;
    document.querySelectorAll('.page-tab').forEach((item) => item.classList.toggle('active', item === tab));
    document.querySelectorAll('.page-intro').forEach((intro) => intro.classList.toggle('active', intro.id === `${target}-intro`));
    timelinePages.forEach((page) => page.classList.toggle('active', page.id === target));
    tooltip.classList.remove('show');
  });
});
