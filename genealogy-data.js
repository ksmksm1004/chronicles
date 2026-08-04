(() => {
  const person = (name, refs = '', children = [], extra = {}) => ({ name, refs, children, ...extra });
  const people = (names, refs, extra = {}) => names.split('|').filter(Boolean).map((name) => person(name, refs, [], extra));
  const line = (names, refs, extra = {}) => {
    const entries = names.split('>').map((name) => person(name, refs, [], extra));
    entries.forEach((entry, index) => {
      if (entries[index + 1]) entry.children.push(entries[index + 1]);
    });
    return { root: entries[0], nodes: entries };
  };

  const adam = person('아담', '창 2–5장 · 대상 1:1', [], {
    spouses: ['하와'],
    kind: 'promise',
    note: '성경 족보의 첫 인물이며 모든 인류 계보의 시작입니다.'
  });
  const cain = person('가인', '창 4:1–24', [], { spouses: ['이름이 기록되지 않은 아내'], kind: 'nation' });
  const cainLine = line('에녹>이랏>므후야엘>므드사엘>라멕', '창 4:17–24', { kind: 'nation' });
  cain.children.push(cainLine.root);
  cainLine.nodes.at(-1).spouses = ['아다', '씰라'];
  cainLine.nodes.at(-1).children.push(...people('야발|유발|두발가인|나아마', '창 4:19–22', { kind: 'nation' }));
  adam.children.push(person('아벨', '창 4:2–8', [], { kind: 'nation' }), cain);

  const sethLine = line('셋>에노스>게난>마할랄렐>야렛>에녹>므두셀라>라멕>노아', '창 5장 · 대상 1:1–4', { kind: 'promise' });
  adam.children.push(sethLine.root);
  const noah = sethLine.nodes.at(-1);
  noah.spouses = ['이름이 기록되지 않은 아내'];
  noah.note = '홍수 이후 셈·함·야벳을 통해 민족 계보가 펼쳐집니다.';

  const japheth = person('야벳', '창 10:2–5 · 대상 1:5–7', [], { kind: 'nation' });
  const ham = person('함', '창 10:6–20 · 대상 1:8–16', [], { kind: 'nation' });
  const shem = person('셈', '창 10:21–31 · 11:10–26 · 대상 1:17–27', [], { kind: 'promise' });
  noah.children.push(shem, ham, japheth);

  const gomer = person('고멜', '창 10:2–3 · 대상 1:5–6', people('아스그나스|디밧|도갈마', '창 10:3 · 대상 1:6', { kind: 'nation' }), { kind: 'nation' });
  const javan = person('야완', '창 10:2,4 · 대상 1:5,7', people('엘리사|다시스|깃딤|도다님', '창 10:4 · 대상 1:7', { kind: 'nation' }), { kind: 'nation' });
  japheth.children.push(gomer, ...people('마곡|마대', '창 10:2 · 대상 1:5', { kind: 'nation' }), javan, ...people('두발|메섹|디라스', '창 10:2 · 대상 1:5', { kind: 'nation' }));

  const cush = person('구스', '창 10:6–12 · 대상 1:8–10', [], { kind: 'nation' });
  const raamah = person('라아마', '창 10:7 · 대상 1:9', people('스바|드단', '창 10:7 · 대상 1:9', { kind: 'nation' }), { kind: 'nation' });
  cush.children.push(...people('스바|하윌라|삽다', '창 10:7 · 대상 1:9', { kind: 'nation' }), raamah, person('삽드가', '창 10:7 · 대상 1:9', [], { kind: 'nation' }), person('니므롯', '창 10:8–12 · 대상 1:10', [], { kind: 'nation', note: '세상에 첫 용사로 기록됩니다.' }));
  const mizraim = person('미스라임', '창 10:6,13–14 · 대상 1:8,11–12', people('루딤|아나밈|르하빔|납두힘|바드루심|가슬루힘|갑도림', '창 10:13–14 · 대상 1:11–12', { kind: 'nation' }), { kind: 'nation' });
  const canaan = person('가나안', '창 10:6,15–18 · 대상 1:8,13–16', people('시돈|헷|여부스 족속|아모리 족속|기르가스 족속|히위 족속|알가 족속|신 족속|아르왓 족속|스말 족속|하맛 족속', '창 10:15–18 · 대상 1:13–16', { kind: 'nation' }), { kind: 'nation' });
  ham.children.push(cush, mizraim, person('붓', '창 10:6 · 대상 1:8', [], { kind: 'nation' }), canaan);

  const aram = person('아람', '창 10:22–23 · 대상 1:17', people('우스|훌|게델|마스', '창 10:23 · 대상 1:17', { kind: 'nation' }), { kind: 'nation' });
  const arphaxad = person('아르박삿', '창 10:22,24 · 11:10–13 · 대상 1:17–18', [], { kind: 'promise' });
  shem.children.push(...people('엘람|앗수르', '창 10:22 · 대상 1:17', { kind: 'nation' }), arphaxad, person('룻', '창 10:22 · 대상 1:17', [], { kind: 'nation' }), aram);
  const eberLine = line('셀라>에벨', '창 10:24 · 11:12–15 · 대상 1:18–19', { kind: 'promise' });
  arphaxad.children.push(eberLine.root);
  const eber = eberLine.nodes.at(-1);
  const joktan = person('욕단', '창 10:25–30 · 대상 1:19–23', people('알모닷|셀렙|하살마웻|예라|하도람|우살|디글라|오발|아비마엘|스바|오빌|하윌라|요밥', '창 10:26–29 · 대상 1:20–23', { kind: 'nation' }), { kind: 'nation' });
  const pelegLine = line('벨렉>르우>스룩>나홀>데라', '창 11:16–26 · 대상 1:19,24–27', { kind: 'promise' });
  eber.children.push(pelegLine.root, joktan);
  const terah = pelegLine.nodes.at(-1);

  const abraham = person('아브람 (아브라함)', '창 11:26–25장 · 대상 1:27–34', [], {
    spouses: ['사래 (사라)', '하갈', '그두라'], kind: 'promise', note: '언약의 조상. 이스마엘과 이삭, 그두라의 아들들의 아버지입니다.'
  });
  const nahor = person('나홀', '창 11:26–29 · 22:20–24', people('우스|부스|그므엘|게셋|하소|빌다스|이들랍|브두엘|데바|가함|다하스|마아가', '창 22:20–24', { kind: 'nation' }), { spouses: ['밀가', '르우마'], kind: 'nation' });
  const haran = person('하란', '창 11:26–31', people('롯|밀가|이스가', '창 11:27–29', { kind: 'nation' }), { kind: 'nation' });
  terah.children.push(abraham, nahor, haran);

  const ishmael = person('이스마엘', '창 16장 · 25:12–18 · 대상 1:28–31', people('느바욧|게달|앗브엘|밉삼|미스마|두마|맛사|하닷|데마|여둘|나비스|게드마', '창 25:13–16 · 대상 1:29–31', { kind: 'nation' }), { kind: 'nation', mother: '하갈' });
  const midian = person('미디안', '창 25:2–4 · 대상 1:32–33', people('에바|에벨|하녹|아비다|엘다아', '창 25:4 · 대상 1:33', { kind: 'nation' }), { kind: 'nation', mother: '그두라' });
  const isaac = person('이삭', '창 21–35장 · 대상 1:34', [], { spouses: ['리브가'], kind: 'promise', mother: '사라' });
  abraham.children.push(ishmael, ...people('시므란|욕산|므단', '창 25:2 · 대상 1:32', { kind: 'nation', mother: '그두라' }), midian, ...people('이스박|수아', '창 25:2 · 대상 1:32', { kind: 'nation', mother: '그두라' }), isaac);
  const jokshan = abraham.children.find((entry) => entry.name === '욕산');
  jokshan.children.push(person('스바', '창 25:3 · 대상 1:32', [], { kind: 'nation' }), person('드단', '창 25:3 · 대상 1:32', people('앗수르 족속|르두시 족속|르움미 족속', '창 25:3', { kind: 'nation' }), { kind: 'nation' }));

  const esau = person('에서 (에돔)', '창 25–36장 · 대상 1:34–54', [], { spouses: ['아다', '오홀리바마', '바스맛'], kind: 'nation' });
  const jacob = person('야곱 (이스라엘)', '창 25–50장 · 대상 2:1–2', [], { spouses: ['레아', '라헬', '빌하', '실바'], kind: 'promise' });
  isaac.children.push(jacob, esau);
  const eliphaz = person('엘리바스', '창 36:4,10–12 · 대상 1:35–36', people('데만|오말|스비|가담|그나스|딤나|아말렉', '창 36:11–12 · 대상 1:36', { kind: 'nation' }), { kind: 'nation', mother: '아다' });
  const reuel = person('르우엘', '창 36:4,13 · 대상 1:35,37', people('나핫|세라|삼마|미사', '창 36:13 · 대상 1:37', { kind: 'nation' }), { kind: 'nation', mother: '바스맛' });
  const seir = person('세일', '창 36:20–30 · 대상 1:38–42', [], { kind: 'nation' });
  const lotan = person('로단', '대상 1:38–39', people('호리|호맘|딤나', '대상 1:39', { kind: 'nation' }), { kind: 'nation' });
  const anah = person('아나', '대상 1:38,40–41', [person('디손', '대상 1:41', people('하므란|에스반|이드란|그란', '대상 1:41', { kind: 'nation' }), { kind: 'nation' })], { kind: 'nation' });
  const dishon = person('디손', '대상 1:38,41', people('암람|에스반|이드란|그란', '대상 1:41', { kind: 'nation' }), { kind: 'nation' });
  seir.children.push(lotan, person('소발', '대상 1:38,40', people('알랸|마나핫|에발|스비|오남', '대상 1:40', { kind: 'nation' }), { kind: 'nation' }), person('시브온', '대상 1:38,40', people('아야|아나', '대상 1:40', { kind: 'nation' }), { kind: 'nation' }), anah, dishon, person('에셀', '대상 1:38,42', people('빌한|사아완|야아간', '대상 1:42', { kind: 'nation' }), { kind: 'nation' }), person('디산', '대상 1:38,42', people('우스|아란', '대상 1:42', { kind: 'nation' }), { kind: 'nation' }));
  esau.children.push(eliphaz, reuel, ...people('여우스|얄람|고라', '창 36:5 · 대상 1:35', { kind: 'nation', mother: '오홀리바마' }), seir);
  esau.children.push(person('에돔의 왕들', '대상 1:43–50', people('벨라|요밥|후삼|하닷|삼라|사울|바알하난|하닷', '대상 1:43–50', { kind: 'nation' }), { kind: 'nation', note: '이스라엘에 왕이 있기 전 에돔을 다스린 왕들의 계열입니다.' }));

  const tribes = {};
  ['르우벤','시므온','레위','유다','잇사갈','스불론','단','납달리','갓','아셀','요셉','베냐민'].forEach((name) => {
    tribes[name] = person(name, '창 29–30장 · 35:23–26 · 대상 2:1–2', [], { kind: 'tribe', tribe: name });
    jacob.children.push(tribes[name]);
  });
  tribes['르우벤'].mother = '레아'; tribes['시므온'].mother = '레아'; tribes['레위'].mother = '레아'; tribes['유다'].mother = '레아'; tribes['잇사갈'].mother = '레아'; tribes['스불론'].mother = '레아';
  tribes['단'].mother = '빌하'; tribes['납달리'].mother = '빌하'; tribes['갓'].mother = '실바'; tribes['아셀'].mother = '실바'; tribes['요셉'].mother = '라헬'; tribes['베냐민'].mother = '라헬';

  tribes['르우벤'].children.push(person('하녹', '대상 5:3', [], { kind: 'tribe' }), person('발루', '대상 5:3', [person('엘리압', '대상 5:5–8', [person('느무엘', '대상 5:4'), person('다단', '대상 5:4'), person('아비람', '대상 5:4'), person('브에라', '대상 5:6–8', [person('벨라', '대상 5:8', people('아사스|세마', '대상 5:8', { kind: 'tribe' }), { kind: 'tribe' })], { kind: 'tribe' })], { kind: 'tribe' })], { kind: 'tribe' }), ...people('헤스론|갈미', '대상 5:3', { kind: 'tribe' }));
  const joelReuben = person('요엘', '대상 5:4–6', [line('스마야>곡>시므이>미가>르아야>바알>브에라', '대상 5:4–6', { kind: 'tribe' }).root], { kind: 'tribe' });
  tribes['르우벤'].children.push(joelReuben, person('르우벤의 족장들', '대상 5:7–8', people('여이엘|스가랴|벨라|아사스|세마', '대상 5:7–8', { kind: 'tribe' }), { kind: 'tribe', group: true }));
  const simeon = tribes['시므온'];
  simeon.children.push(...people('느무엘|야민|야립|세라|사울', '대상 4:24', { kind: 'tribe' }));
  const simeonSaul = simeon.children.at(-1);
  const simeonLine = line('살룸>밉삼>미스마>함무엘>삭굴>시므이', '대상 4:25–27', { kind: 'tribe' });
  simeonSaul.children.push(simeonLine.root);
  simeon.children.push(...people('므소밥|야믈렉|요사|요엘|예후|엘료에내|야아고바|여소하야|아사야|아디엘|여시미엘|브나야|시사', '대상 4:34–37', { kind: 'tribe' }));
  const gad = tribes['갓'];
  gad.children.push(
    person('갓의 족장들', '대상 5:11–13', people('요엘|사밤|야내|사밧|미가엘|므술람|세바|요래|야간|시아|에벨', '대상 5:11–13', { kind: 'tribe' }), { kind: 'tribe', group: true }),
    line('부스>야도>여시새>미가엘>길르앗>야로아>후리>아비하일', '대상 5:14', { kind: 'tribe' }).root,
    line('구니>압디엘>아히', '대상 5:15', { kind: 'tribe' }).root
  );

  const levi = tribes['레위'];
  const gershon = person('게르손', '대상 6:1,16–21', [], { kind: 'tribe' });
  const kohath = person('그핫', '대상 6:1–15,22–28', [], { kind: 'tribe' });
  const merari = person('므라리', '대상 6:1,19,29–30', [], { kind: 'tribe' });
  levi.children.push(gershon, kohath, merari);
  const gershonLine = line('립니>야핫>심마>요아>잇도>세라>여아드래', '대상 6:17–21', { kind: 'tribe' });
  gershon.children.push(gershonLine.root, person('시므이', '대상 6:17', [], { kind: 'tribe' }));
  const amram = person('아므람', '출 6:18–20 · 대상 6:2–3', [], { spouses: ['요게벳'], kind: 'promise' });
  kohath.children.push(amram, person('이스할', '대상 6:2,18,38', people('고라|네벡|시그리', '대상 6:38', { kind: 'tribe' }), { kind: 'tribe' }), person('헤브론', '대상 6:2,18', [], { kind: 'tribe' }), person('웃시엘', '대상 6:2,18', people('미가|잇시야', '대상 6:47', { kind: 'tribe' }), { kind: 'tribe' }));
  const aaron = person('아론', '출 6:20–25 · 대상 6:3–15', [], { spouses: ['엘리세바'], kind: 'promise', note: '이스라엘의 첫 대제사장입니다.' });
  amram.children.push(person('미리암', '출 6:20 · 대상 6:3', [], { kind: 'woman', gender: 'female' }), aaron, person('모세', '출 2–신 34장 · 대상 6:3', people('게르솜|엘리에셀', '출 18:3–4 · 대상 23:15', { kind: 'tribe' }), { spouses: ['십보라'], kind: 'promise' }));
  aaron.children.push(person('나답', '대상 6:3'), person('아비후', '대상 6:3'), person('엘르아살', '대상 6:3–15', [], { kind: 'promise' }), person('이다말', '대상 6:3', [], { kind: 'tribe' }));
  const eleazar = aaron.children[2];
  const priestLine = line('비느하스>아비수아>북기>웃시>스라히야>므라욧>아마랴>아히둡>사독>아히마아스>아사랴>요하난>아사랴>아마랴>아히둡>사독>살룸>힐기야>아사랴>스라야>여호사닥', '대상 6:4–15', { kind: 'promise' });
  eleazar.children.push(priestLine.root);
  const merariLine = line('말리>립니>시므이>웃사>시므아>학기야>아사야', '대상 6:19,29–30', { kind: 'tribe' });
  merari.children.push(merariLine.root, person('무시', '대상 6:19', [], { kind: 'tribe' }));
  kohath.children.push(person('헤만의 찬양 계보', '대상 6:33–38', [line('헤만>요엘>사무엘>엘가나>여로함>엘리엘>도아>숩>엘가나>마핫>아마새>엘가나>요엘>아사랴>스바냐>다핫>앗실>에비아삽>고라>이스할>그핫>레위', '대상 6:33–38', { kind: 'tribe' }).root], { kind: 'tribe' }));

  const judah = tribes['유다'];
  judah.spouses = ['수아의 딸', '다말'];
  const perez = person('베레스', '창 38장 · 대상 2:4–5 · 마 1:3', [], { mother: '다말', kind: 'promise' });
  const zerah = person('세라', '창 38장 · 대상 2:4,6', people('시므리|에단|헤만|갈골|다라', '대상 2:6', { kind: 'tribe' }), { mother: '다말', kind: 'tribe' });
  judah.children.push(...people('엘|오난|셀라', '대상 2:3–4', { kind: 'tribe', mother: '수아의 딸' }), perez, zerah);
  const hezron = person('헤스론', '대상 2:5,9 · 마 1:3', [], { kind: 'promise' });
  perez.children.push(hezron, person('하물', '대상 2:5', [], { kind: 'tribe' }));
  const jerahmeel = person('여라므엘', '대상 2:9,25–41', [], { spouses: ['아다라'], kind: 'tribe' });
  const ram = person('람', '대상 2:9–10 · 마 1:3–4', [], { kind: 'promise' });
  const caleb = person('글루배 (갈렙)', '대상 2:9,18–24,42–50', [], { spouses: ['아수바', '여리옷', '에브랏'], kind: 'tribe' });
  hezron.children.push(jerahmeel, ram, caleb, person('스굽', '대상 2:21–22', [person('야일', '대상 2:22–23', [], { kind: 'tribe' })], { mother: '마길의 딸', kind: 'tribe' }), person('아스훌', '대상 2:24', [], { mother: '아비야', kind: 'tribe' }));
  jerahmeel.children.push(...people('람|그나|오렌|오셈', '대상 2:25', { kind: 'tribe' }), person('아히야', '대상 2:25', [], { kind: 'woman', gender: 'female' }), person('오남', '대상 2:26,28', people('삼매|야다', '대상 2:28', { kind: 'tribe' }), { mother: '아다라', kind: 'tribe' }));
  const jerahmeelRam = jerahmeel.children[0];
  const maaz = person('마아스', '대상 2:27', [], { kind: 'tribe' });
  jerahmeelRam.children.push(maaz, ...people('야민|에겔', '대상 2:27', { kind: 'tribe' }));
  caleb.children.push(...people('예셀|소밥|아르돈', '대상 2:18', { kind: 'tribe', mother: '아수바' }), person('훌', '대상 2:19–20', [person('우리', '대상 2:20', [person('브살렐', '대상 2:20', [], { kind: 'tribe' })], { kind: 'tribe' })], { mother: '에브랏', kind: 'tribe' }));
  const otherJudahClans = person('유다의 여러 가문', '대상 4:1–23', [], { kind: 'tribe', group: true, note: '역대상 4장이 별도의 직계 연결 없이 묶어 기록한 유다 지파의 여러 가문입니다.' });
  const shobal = person('소발', '대상 4:1–2', [person('르아야', '대상 4:2', [person('야핫', '대상 4:2', people('아후매|라핫', '대상 4:2', { kind: 'tribe' }), { kind: 'tribe' })], { kind: 'tribe' })], { kind: 'tribe' });
  const etam = person('에담', '대상 4:3', people('이스르엘|이스마|잇바스|하셀렐보니', '대상 4:3', { kind: 'tribe' }), { kind: 'tribe' });
  const hurJudah = person('훌', '대상 4:4', [person('브누엘', '대상 4:4', [], { kind: 'tribe' }), person('에셀', '대상 4:4', [], { kind: 'tribe' })], { kind: 'tribe' });
  const ashhur = person('아스훌', '대상 4:5–7', [], { spouses: ['헬라', '나아라'], kind: 'tribe' });
  ashhur.children.push(...people('아훗삼|헤벨|데므니|하아하스다리', '대상 4:6', { kind: 'tribe', mother: '나아라' }), ...people('세렛|이소할|에드난', '대상 4:7', { kind: 'tribe', mother: '헬라' }));
  const coz = person('고스', '대상 4:8', [person('아눕', '대상 4:8', [], { kind: 'tribe' }), person('소베바', '대상 4:8', [], { kind: 'tribe' }), person('하룸', '대상 4:8', [person('아하헬', '대상 4:8', [], { kind: 'tribe' })], { kind: 'tribe' })], { kind: 'tribe' });
  const jabez = person('야베스', '대상 4:9–10', [], { kind: 'tribe', note: '하나님께 복과 지경의 확장을 구한 인물입니다.' });
  const chelub = person('글룹', '대상 4:11–12', [person('므힐', '대상 4:11', [person('에스돈', '대상 4:11–12', people('벧라바|바세아|드힌나', '대상 4:12', { kind: 'tribe' }), { kind: 'tribe' })], { kind: 'tribe' })], { kind: 'tribe' });
  const kenaz = person('그나스', '대상 4:13–15', [person('옷니엘', '대상 4:13', people('핫닷|므오노대', '대상 4:13–14', { kind: 'tribe' }), { kind: 'tribe' }), person('스라야', '대상 4:13–14', [person('요압', '대상 4:14', [], { kind: 'tribe' })], { kind: 'tribe' })], { kind: 'tribe' });
  const jephunnehCaleb = person('여분네의 아들 갈렙', '대상 4:15', people('이루|엘라|나암', '대상 4:15', { kind: 'tribe' }), { kind: 'tribe' });
  const jehallelel = person('여할렐렐', '대상 4:16', people('십|시바|디리아|아사렐', '대상 4:16', { kind: 'tribe' }), { kind: 'tribe' });
  const ezrah = person('에스라', '대상 4:17–18', [], { kind: 'tribe' });
  const mered = person('메렛', '대상 4:17–18', people('예렛|헤벨|여구디엘|미리암|삼매|이스바', '대상 4:17–18', { kind: 'tribe' }), { spouses: ['바로의 딸 비디아', '유다 여인인 아내'], kind: 'tribe' });
  ezrah.children.push(...people('예델|에벨|얄론', '대상 4:17', { kind: 'tribe' }), mered);
  const hodiah = person('호디야', '대상 4:19', people('그일라|에스드모아', '대상 4:19', { kind: 'tribe' }), { spouses: ['나함의 누이'], kind: 'tribe' });
  const shimon = person('시몬', '대상 4:20', people('암논|린나|벤하난|딜론', '대상 4:20', { kind: 'tribe' }), { kind: 'tribe' });
  const ishi = person('이시', '대상 4:20', people('소헷|벤소헷', '대상 4:20', { kind: 'tribe' }), { kind: 'tribe' });
  const shelahClans = person('셀라의 가문', '대상 4:21–23', people('엘|라아다|마레사|아스베야|요김|고세바 사람들|요아스|사랍|야수비레헴', '대상 4:21–23', { kind: 'tribe' }), { kind: 'tribe', group: true });
  otherJudahClans.children.push(shobal, etam, hurJudah, ashhur, coz, jabez, chelub, kenaz, jephunnehCaleb, jehallelel, ezrah, hodiah, shimon, ishi, shelahClans);
  judah.children.push(otherJudahClans);
  const messiahLine = line('암미나답>나손>살몬>보아스>오벳>이새>다윗', '룻 4:18–22 · 대상 2:10–15 · 마 1:4–6', { kind: 'promise' });
  ram.children.push(messiahLine.root);
  const [amminadab, nahshon, salmon, boaz, obed, jesse, david] = messiahLine.nodes;
  salmon.spouses = ['라합']; boaz.spouses = ['룻']; obed.mother = '룻';
  jesse.children.unshift(...people('엘리압|아비나답|시므아|느다넬|랏대|오셈', '대상 2:13–15', { kind: 'tribe' }));
  jesse.children.push(person('스루야', '대상 2:16', people('아비새|요압|아사헬', '대상 2:16', { kind: 'tribe' }), { kind: 'woman', gender: 'female' }), person('아비가일', '대상 2:16–17', [person('아마사', '대상 2:17', [], { father: '이드라', kind: 'tribe' })], { kind: 'woman', gender: 'female' }));
  david.spouses = ['아히노암', '아비가일', '마아가', '학깃', '아비달', '에글라', '밧세바'];
  david.note = '마태복음은 솔로몬 계열을, 누가복음은 나단 계열을 통해 예수님의 계보를 기록합니다.';
  david.children.push(...people('암논|다니엘 (길르압)|압살롬|아도니야|스바댜|이드르암', '대상 3:1–3', { kind: 'tribe' }));
  const nathan = person('나단', '대상 3:5 · 눅 3:31', [], { mother: '밧세바', kind: 'promise', route: 'luke' });
  const solomon = person('솔로몬', '대상 3:5 · 마 1:6', [], { spouses: ['나아마'], mother: '밧세바', kind: 'promise', route: 'matthew' });
  david.children.push(person('시므아', '대상 3:5', [], { mother: '밧세바', kind: 'tribe' }), person('소밥', '대상 3:5', [], { mother: '밧세바', kind: 'tribe' }), nathan, solomon, ...people('입할|엘리사마|엘리벨렛|노가|네벡|야비아|엘리사마|엘랴다|엘리벨렛', '대상 3:6–8', { kind: 'tribe' }), person('다말', '대상 3:9', [], { kind: 'woman', gender: 'female' }));

  const matthew = line('르호보암>아비야>아사>여호사밧>요람>웃시야>요담>아하스>히스기야>므낫세>아몬>요시야>여고냐>스알디엘>스룹바벨>아비훗>엘리아김>아소르>사독>아킴>엘리웃>엘르아살>맛단>야곱>요셉>예수 그리스도', '대상 3:10–19 · 마 1:7–16', { kind: 'promise', route: 'matthew' });
  solomon.children.push(matthew.root);
  const matthewNodes = matthew.nodes;
  const joramMatthew = matthewNodes.find((entry) => entry.name === '요람');
  joramMatthew.children.push(line('아하시야>요아스>아마샤>아사랴 (웃시야)', '대상 3:11–12', { kind: 'promise' }).root);
  matthewNodes.find((entry) => entry.name === '르호보암').mother = '나아마';
  const josephMatthew = matthewNodes.at(-2);
  josephMatthew.spouses = ['마리아'];
  josephMatthew.note = '마태복음에서 야곱의 아들이며 마리아의 남편으로 기록됩니다.';
  const jesusMatthew = matthewNodes.at(-1);
  jesusMatthew.mother = '마리아';
  jesusMatthew.note = '마태복음의 왕권 계보가 도달하는 메시아입니다.';
  const josiah = matthewNodes.find((entry) => entry.name === '요시야');
  josiah.children.push(...people('요하난|여호야김|시드기야|살룸', '대상 3:15', { kind: 'tribe' }));
  const jeconiah = matthewNodes.find((entry) => entry.name === '여고냐');
  jeconiah.children.push(...people('앗실|말기람|브다야|세낫살|여가먀|호사마|느다뱌', '대상 3:17–18', { kind: 'tribe' }));
  const zerubbabel = matthewNodes.find((entry) => entry.name === '스룹바벨');
  zerubbabel.children.push(...people('므술람|하나냐|슬로밋|오헬|베레갸|하사댜|유삽헤셋', '대상 3:19–20', { kind: 'tribe' }));
  const hananiah = zerubbabel.children.find((entry) => entry.name === '하나냐');
  const shecaniah = person('스가냐', '대상 3:21–22', [], { kind: 'tribe' });
  hananiah.children.push(...people('블라댜|여사야|르바야|아르난|오바댜', '대상 3:21', { kind: 'tribe' }), shecaniah);
  const shemaiahPostExile = person('스마야', '대상 3:22', people('핫두스|이갈|바리야|느아랴|사밧', '대상 3:22', { kind: 'tribe' }), { kind: 'tribe' });
  shecaniah.children.push(shemaiahPostExile);
  const neariahPostExile = shemaiahPostExile.children.find((entry) => entry.name === '느아랴');
  const elioenaiPostExile = person('엘료에내', '대상 3:23–24', people('호다위야|엘리아십|블라야|악굽|요하난|들라야|아나니', '대상 3:24', { kind: 'tribe' }), { kind: 'tribe' });
  neariahPostExile.children.push(elioenaiPostExile, ...people('히스기야|아스리감', '대상 3:23', { kind: 'tribe' }));

  const luke = line('맛다다>멘나>멜레아>엘리아김>요남>요셉>유다>시므온>레위>맛닷>요림>엘리에서>여호수아>엘>엘마담>고삼>앗디>멜기>네리>스알디엘>스룹바벨>레사>요아난>요다>요섹>서머인>맛다디아>마앗>낙개>에슬리>나훔>아모스>맛다디아>요셉>얀나>멜기>레위>맛닷>헬리>요셉>예수 그리스도', '눅 3:23–31', { kind: 'promise', route: 'luke' });
  nathan.children.push(luke.root);
  const josephLuke = luke.nodes.at(-2);
  josephLuke.spouses = ['마리아'];
  josephLuke.note = '누가복음에서 헬리의 아들로 불리며, 마리아 계통 또는 법적 계보로 해석됩니다.';
  luke.nodes.at(-1).mother = '마리아';
  luke.nodes.at(-1).note = '누가복음의 인류 계보가 도달하는 하나님의 아들입니다.';

  tribes['잇사갈'].children.push(...people('돌라|부아|야숩|시므론', '대상 7:1', { kind: 'tribe' }));
  const tola = tribes['잇사갈'].children[0];
  tola.children.push(...people('웃시|르바야|여리엘|야매|입삼|스므엘', '대상 7:2', { kind: 'tribe' }));
  const uzziIssachar = tola.children[0];
  uzziIssachar.children.push(person('이스라히야', '대상 7:3', people('미가엘|오바댜|요엘|잇시야', '대상 7:3', { kind: 'tribe' }), { kind: 'tribe' }));
  tribes['스불론'].children.push(...people('세렛|엘론|얄르엘', '창 46:14', { kind: 'tribe' }));
  tribes['단'].children.push(person('후심', '창 46:23', [], { kind: 'tribe' }));
  tribes['납달리'].children.push(...people('야시엘|구니|예셀|살룸', '대상 7:13', { kind: 'tribe' }));
  tribes['갓'].children.push(...people('스본|학기|수니|에스본|에리|아로디|아렐리', '창 46:16', { kind: 'tribe' }));
  const asher = tribes['아셀'];
  const beriah = person('브리아', '대상 7:30–31', [person('헤벨', '대상 7:31–32', people('야블렛|소멜|호담|수아', '대상 7:32', { kind: 'tribe' }), { kind: 'tribe' }), person('말기엘', '대상 7:31', [], { kind: 'tribe' })], { kind: 'tribe' });
  asher.children.push(...people('임나|이스와|이스위', '대상 7:30', { kind: 'tribe' }), beriah, person('세라', '대상 7:30', [], { kind: 'woman', gender: 'female' }));

  const joseph = tribes['요셉'];
  joseph.spouses = ['아스낫'];
  const manasseh = person('므낫세', '창 41:50–52 · 대상 7:14–19', [], { kind: 'tribe' });
  const ephraim = person('에브라임', '창 41:50–52 · 대상 7:20–27', [], { kind: 'tribe' });
  joseph.children.push(manasseh, ephraim);
  const machir = person('마길', '대상 7:14–17', [], { spouses: ['마아가'], kind: 'tribe' });
  manasseh.children.push(person('아스리엘', '대상 7:14', [], { kind: 'tribe' }), machir);
  manasseh.children.push(person('동쪽 므낫세의 족장들', '대상 5:23–24', people('에벨|이시|엘리엘|아스리엘|예레미야|호다위야|야디엘', '대상 5:24', { kind: 'tribe' }), { kind: 'tribe', group: true }));
  machir.children.push(person('길르앗', '대상 7:14,17', [person('슬로브핫', '대상 7:15', people('말라|노아|호글라|밀가|디르사', '민 26:33', { kind: 'woman', gender: 'female' }), { kind: 'tribe' }), ...people('이에셀|헬렉|아스리엘|세겜|스미다|헤벨', '민 26:30–32', { kind: 'tribe' })], { kind: 'tribe' }), person('브레스', '대상 7:16', people('울람|라겜', '대상 7:16', { kind: 'tribe' }), { kind: 'tribe' }), person('세레스', '대상 7:16', people('울람|라겜', '대상 7:16', { kind: 'tribe' }), { kind: 'tribe' }));
  const ephraimLine = line('수델라>베렛>다핫>엘르아다>다핫>사밧>수델라', '대상 7:20–21', { kind: 'tribe' });
  ephraim.children.push(ephraimLine.root, ...people('에셀|엘르앗', '대상 7:21', { kind: 'tribe' }), person('브리아', '대상 7:23', [line('레바>레셉>델라>다한>라단>암미훗>엘리사마>눈>여호수아', '대상 7:25–27', { kind: 'tribe' }).root], { kind: 'tribe' }), person('세에라', '대상 7:24', [], { kind: 'woman', gender: 'female', note: '아래 벧호론과 윗 벧호론, 우센세에라를 세운 여성으로 기록됩니다.' }));

  const benjamin = tribes['베냐민'];
  const bela = person('벨라', '대상 7:6–7 · 8:3–5', people('에스본|웃시|웃시엘|여리못|이리|앗달|게라|아비훗|아비수아|나아만|아호아|게라|스부반|후람', '대상 7:7 · 8:3–5', { kind: 'tribe' }), { kind: 'tribe' });
  const becher = person('베겔', '대상 7:6,8', people('스미라|요아스|엘리에셀|엘료에내|오므리|여레못|아비야|아나돗|알레멧', '대상 7:8', { kind: 'tribe' }), { kind: 'tribe' });
  const jeiel = person('여이엘', '대상 8:29–32 · 9:35–38', [], { spouses: ['마아가'], kind: 'tribe' });
  jeiel.children.push(...people('압돈|술|기스|바알|넬|나답|그돌|아히오|세겔|미글롯', '대상 8:30–32 · 9:36–38', { kind: 'tribe' }));
  const ner = jeiel.children.find((entry) => entry.name === '넬');
  const kish = person('기스', '대상 8:33 · 9:39', [], { kind: 'tribe' });
  ner.children.push(kish);
  const saul = person('사울', '대상 8:33 · 9:39', [], { spouses: ['아히노암'], kind: 'tribe' });
  kish.children.push(saul);
  saul.children.push(...people('요나단|말기수아|아비나답|에스바알', '대상 8:33 · 9:39', { kind: 'tribe' }));
  const jonathan = saul.children[0];
  const meribLine = line('므립바알>미가>비돈>멜렉>다레아>아하스>여호앗다>알레멧>아스마웻>시므리>모사>비느아>라바>엘르아사>아셀', '대상 8:34–38 · 9:40–44', { kind: 'tribe' });
  jonathan.children.push(meribLine.root);
  meribLine.nodes.at(-1).children.push(...people('아스리감|보그루|이스마엘|스아랴|오바댜|하난', '대상 8:38 · 9:44', { kind: 'tribe' }));
  benjamin.children.push(bela, becher, person('여디아엘', '대상 7:6,10–11', [person('빌한', '대상 7:10', people('여우스|베냐민|에훗|그나아나|세단|다시스|아히사할', '대상 7:10', { kind: 'tribe' }), { kind: 'tribe' })], { kind: 'tribe' }), person('아하라', '대상 8:1', [], { kind: 'tribe' }), person('노하', '대상 8:2', [], { kind: 'tribe' }), person('라바', '대상 8:2', [], { kind: 'tribe' }), jeiel);

  const postExile = person('포로 귀환 후 예루살렘 계보', '대상 9:1–34', [], { kind: 'nation', note: '역대상 9장에 기록된 귀환 공동체의 대표 가문과 성전 직무자들입니다.' });
  jacob.children.push(postExile);
  postExile.children.push(
    person('유다 자손', '대상 9:4–6', [
      line('베레스>바니>임리>오므리>암미훗>우대', '대상 9:4', { kind: 'tribe' }).root,
      person('실로', '대상 9:5', [person('아사야', '대상 9:5', [], { kind: 'tribe' })], { kind: 'tribe' }),
      person('세라', '대상 9:6', [person('여우엘', '대상 9:6', [], { kind: 'tribe' })], { kind: 'tribe' })
    ], { kind: 'tribe', group: true }),
    person('베냐민 자손', '대상 9:7–9', [
      line('핫스누아>호다위야>므술람>살루', '대상 9:7', { kind: 'tribe' }).root,
      line('여로함>이브느야', '대상 9:8', { kind: 'tribe' }).root,
      line('미그리>웃시>엘라', '대상 9:8', { kind: 'tribe' }).root,
      line('이브니야>르우엘>스바댜>므술람', '대상 9:8', { kind: 'tribe' }).root
    ], { kind: 'tribe', group: true }),
    person('제사장', '대상 9:10–13', [
      ...people('여다야|여호야립|야긴', '대상 9:10', { kind: 'tribe' }),
      line('아히둡>므라욧>사독>므술람>힐기야>아사랴', '대상 9:11', { kind: 'tribe' }).root,
      line('말기야>바스훌>여로함>아다야', '대상 9:12', { kind: 'tribe' }).root,
      line('임멜>므실레밋>므술람>야세라>아디엘>마아새', '대상 9:12', { kind: 'tribe' }).root
    ], { kind: 'tribe', group: true }),
    person('레위인', '대상 9:14–16', [
      line('므라리>하사뱌>아스리감>핫숩>스마야', '대상 9:14', { kind: 'tribe' }).root,
      ...people('박박갈|헤레스|갈랄', '대상 9:15', { kind: 'tribe' }),
      line('아삽>시그리>미가>맛다냐', '대상 9:15', { kind: 'tribe' }).root,
      line('여두둔>갈랄>스마야>오바댜', '대상 9:16', { kind: 'tribe' }).root,
      line('엘가나>아사>베레갸', '대상 9:16', { kind: 'tribe' }).root
    ], { kind: 'tribe', group: true }),
    person('문지기·성전 직무자', '대상 9:17–34', people('살룸|악굽|달몬|아히만|스가랴|므셀레먀|호사|오바댜|엘르아살|시므리|여히엘|맛디댜', '대상 9:17–34', { kind: 'tribe' }), { kind: 'tribe', group: true })
  );

  let idCounter = 0;
  const assignIds = (node, parent = null, depth = 0) => {
    node.id = `person-${++idCounter}`;
    node.parent = parent;
    node.depth = depth;
    node.children = node.children || [];
    node.spouses = node.spouses || [];
    node.children.forEach((child) => assignIds(child, node, depth + 1));
  };
  assignIds(adam);

  const flat = [];
  const flatten = (node) => {
    flat.push(node);
    node.children.forEach(flatten);
  };
  flatten(adam);

  window.GENEALOGY_DATA = { root: adam, people: flat };
})();
