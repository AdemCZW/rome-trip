/* 羅馬四天 —— 全站資料。改行程只要改這個檔。
   座標為依地址估算（誤差約 20–80 m），導航前可用店名再搜一次。
   ⚠ 標記＝來源互相矛盾或資料偏舊，出發前請再確認。 */
window.TRIP = {
  updated: '2026-10-08',
  start: '2026-11-08',
  lead: '<b>2026/11/8（日）– 11/11（三）</b>。古羅馬、梵蒂岡、老城區、騎 Vespa 跑阿皮亞古道。四天行程排好路線、時間、吃飯的地方，每一站都能直接開 Google Maps 導航。',

  /* ================= 每日行程 ================= */
  days: [
    {
      title: '古羅馬一日',
      area: '競技場・古羅馬廣場・Monti',
      mode: 'walking',
      summary: '11/8（日）。週日梵蒂岡休館、阿皮亞古道禁行機動車，所以第一天排古羅馬：競技場一早入場人最少，中午在 Monti 吃 trattoria，下午去聖克萊門特教堂看三層地下遺跡（要先上網預約），16:30 上卡比托利歐山看古羅馬廣場的夕陽（11 月日落約 16:55）。',
      tags: [['全程步行', 'info'], ['競技場需預約', 'warn']],
      stops: [
        { t: '07:30', name: 'Pasticceria Regoli', it: '早餐：maritozzo 鮮奶油麵包', kind: 'food', lat: 41.89508, lng: 12.50189, note: '羅馬公認最好吃的 maritozzo 之一，配一杯 cappuccino（早上才喝）。週二休。', tags: [['€2–5'], ['週二休', 'warn']] },
        { t: '08:30', name: '羅馬競技場', it: 'Colosseo', kind: 'sight', lat: 41.89021, lng: 12.49223, note: '一定要上官方售票網站 ticketing.colosseo.it 預約實名制時段票，<b>參觀日前 30 天上午約 9:00 開賣</b>（11/8 的票約 10/9 開賣），之後會陸續釋出退票。挑 8:30 第一個時段。帶護照，入口會核對姓名。11 月開放 8:30–16:30，最後入場 15:30。', tags: [['€18 一般票'], ['€24 含地下層'], ['30 天前開賣', 'bad'], ['約 1.5 h']] },
        { t: '10:00', name: '古羅馬廣場＋帕拉提諾山', it: 'Foro Romano & Palatino', kind: 'sight', lat: 41.89246, lng: 12.48533, note: '和競技場同一張票（24 小時內各進一次），9:00 開門。先上帕拉提諾山看皇宮遺跡、俯瞰大競技場，再走下古羅馬廣場。幾乎沒有遮蔭，記得帶水，場內有 nasoni 飲水泉可以裝水。', tags: [['同票'], ['約 2–2.5 h']] },
        { t: '12:45', name: 'La Taverna dei Fori Imperiali', it: '午餐：cacio e pepe、gricia', kind: 'food', lat: 41.89395, lng: 12.48943, note: 'Monti 區的家族 trattoria，cacio e pepe 會加檸檬皮。必須先訂位，週二休。', tags: [['必訂位', 'bad'], ['€30–45']] },
        { t: '14:00', name: 'Monti 小巷散步', it: 'Rione Monti', kind: 'sight', lat: 41.89533, lng: 12.49152, note: '羅馬最文青的老區：古著店、手作店、常春藤爬滿的巷子。可以在 Piazza degli Zingari 的 Fatamorgana 吃一球天然口味 gelato。', tags: [['Fatamorgana gelato', 'gem']] },
        { t: '14:45', name: '聖克萊門特教堂', it: 'Basilica di San Clemente', kind: 'sight', lat: 41.88937, lng: 12.49761, note: '隱藏版景點。一棟教堂疊三層歷史：12 世紀教堂、4 世紀教堂，再往下是 1 世紀羅馬房屋和密特拉神廟，地底還聽得到伏流的水聲。<b>地下層要先在 basilicasanclemente.com 預約</b>，每天有人數上限。週日開放 12:00–18:00，最後入場 17:30。', tags: [['€10'], ['需預約', 'warn'], ['隱藏景點', 'gem']] },
        { t: '16:20', name: '卡比托利歐山＋夕陽觀景', it: 'Piazza del Campidoglio', kind: 'sight', lat: 41.89338, lng: 12.48297, note: '米開朗基羅設計的廣場。從市政廳兩側往後走，就能從上方看整個古羅馬廣場；11/8 日落約 16:55，16:30 前到最好。', tags: [['免費'], ['夕陽', 'hot']] },
        { t: '19:30', name: 'Ai Tre Scalini', it: '晚餐／酒館：葡萄酒＋肉丸', kind: 'food', lat: 41.89668, lng: 12.49170, note: '1895 年開業的老酒館，100 多款酒，點 polpette al sugo 茄汁肉丸和火腿起司拼盤。吧台不接受訂位。', tags: [['隱藏版', 'gem'], ['€12–25']] },
      ],
      side: {
        title: 'Day 1 小提醒',
        items: [
          '競技場票是<b>實名制</b>，入口會核對護照，名字要跟護照一樣。',
          '地鐵 B 線 Colosseo 站和新開的 <b>C 線 Colosseo/Fori Imperiali 站</b>就在門口，C 線站內有考古展示。',
          '競技場和古羅馬廣場周邊扒手多，背包背前面。',
          '穿防滑好走的鞋：遺跡區都是碎石和古羅馬石板路。',
        ],
      },
    },
    {
      title: '梵蒂岡與台伯河',
      area: '梵蒂岡・Prati・聖天使堡・納沃納',
      mode: 'walking',
      summary: '11/9（一）。一早進梵蒂岡博物館看西斯汀禮拜堂，中午在 Prati 吃切片披薩，下午進聖彼得大教堂、爬圓頂。聖天使堡週一休館，改成傍晚在聖天使橋看夕陽，再走到納沃納廣場吃晚餐。',
      tags: [['梵蒂岡需預約', 'warn'], ['教堂服裝規定', 'bad']],
      stops: [
        { t: '08:00', name: '梵蒂岡博物館＋西斯汀禮拜堂', it: 'Musei Vaticani', kind: 'sight', lat: 41.90649, lng: 12.45362, note: '一定要上官網 museivaticani.va 預約 8:00 第一個時段（約 60 天前開賣，實名制）。週一到六 8:00–20:00，最後入場 18:00。路線很長，西斯汀禮拜堂在最後面，禮拜堂內禁止拍照、要保持安靜。週日休館（每月最後一個週日免費但大排長龍）。', tags: [['€25（含線上預約費）'], ['實名預約', 'warn'], ['約 3 h']] },
        { t: '11:45', name: 'Pizzarium Bonci', it: '午餐：pizza al taglio 切片披薩', kind: 'food', lat: 41.90680, lng: 12.44690, note: '羅馬最有名的切片披薩，秤重計價、每天換口味，只能站著吃。順便點 supplì（炸飯糰）。⚠ 週一營業時間各來源不一致，撲空的話改去附近的 Trapizzino Prati 或 Forno 店。', tags: [['名店', 'hot'], ['€6–15']] },
        { t: '13:30', name: '聖彼得大教堂＋爬圓頂', it: 'Basilica di San Pietro & Cupola', kind: 'sight', lat: 41.90216, lng: 12.45393, note: '教堂免費但要排安檢。<b>服裝要遮肩、過膝</b>，否則會被擋在外面。爬圓頂要另外付費，搭電梯也還要再爬 320 階又窄又斜的樓梯，爬上去可以看到聖彼得廣場與整個羅馬。冬季圓頂約 17:00 關，要在 15:30 前上去。⚠ 為了大殿 400 週年，梵蒂岡正在推線上預約入場（basilicasanpietro.va），啟用日期未定，出發前看一下。', tags: [['教堂免費'], ['圓頂 €10 樓梯／€15 電梯', 'warn'], ['約 2 h']] },
                { t: '15:45', name: 'Gelateria dei Gracchi', it: '下午點心：松子奶霜 gelato', kind: 'food', lat: 41.90718, lng: 12.46356, note: 'Bourdain 生前最愛的冰淇淋店。推薦 crema di pinoli（松子）、pistacchio。從聖彼得廣場走過去約 12 分鐘。', tags: [['隱藏版', 'gem'], ['€3–5']] },
        { t: '16:30', name: '聖天使堡外觀＋聖天使橋', it: "Castel Sant'Angelo & Ponte", kind: 'sight', lat: 41.90199, lng: 12.46642, note: '<b>聖天使堡週一休館</b>，今天只看外觀。貝尼尼設計的天使雕像橋，16:50 左右夕陽打在聖天使堡上最上相。想進去頂樓露台，可以挪到 Day 3 早上（週二開）。', tags: [['免費'], ['拍照點', 'hot']] },
        { t: '17:15', name: '納沃納廣場', it: 'Piazza Navona', kind: 'sight', lat: 41.89892, lng: 12.47308, note: '巴洛克廣場，中間是貝尼尼的四河噴泉。廣場上的餐廳都是觀光價，散步拍照就好。', tags: [['免費']] },
        { t: '19:30', name: "Hosteria Grappolo d'Oro", it: '晚餐：carbonara、amatriciana', kind: 'food', lat: 41.89631, lng: 12.47121, note: '米其林 Bib Gourmand，客人多是本地人。建議先打電話訂位：06 689 7080。', tags: [['隱藏版', 'gem'], ['€30–45']] },
      ],
      side: {
        title: 'Day 2 小提醒',
        items: [
          '<b>梵蒂岡和聖彼得大教堂都有服裝規定</b>：不能穿無袖或短褲。夏天可以帶一條圍巾遮肩。',
          '地鐵 A 線 <b>Ottaviano</b> 站或 <b>Cipro</b> 站下車，走到博物館入口約 5–10 分鐘。',
          '博物館門口有很多人拉客賣「免排隊團」，不要理，已經預約就直接走預約通道。',
          '梵蒂岡博物館<b>週日休館</b>，所以排在 11/9 週一。週一是全羅馬很多國立博物館（聖天使堡、博爾蓋塞、卡拉卡拉）的休館日，梵蒂岡反而人潮集中，<b>一定要選第一個時段</b>。',
        ],
      },
    },
    {
      title: '老城巴洛克漫步',
      area: '許願池・萬神殿・西班牙階梯・博爾蓋塞',
      mode: 'walking',
      summary: '11/10（二）。趁一大早人少先去許願池，接著喝羅馬最有名的兩家咖啡、進萬神殿。中午在西班牙階梯附近吃 €5 手工麵，下午預約博爾蓋塞美術館，出來剛好在 Pincio 露台看夕陽。晚上吃 Armando al Pantheon，最後用 Giolitti 的 gelato 收尾。',
      tags: [['博爾蓋塞必預約', 'bad'], ['全程步行', 'info']],
      stops: [
        { t: '07:45', name: '許願池', it: 'Fontana di Trevi', kind: 'sight', lat: 41.90093, lng: 12.48331, note: '早上 8 點前人最少。背對噴泉、用右手把硬幣從左肩丟進去，傳說就會再回到羅馬。<b>2026/2/2 起水池邊內圈收費 €2</b>（週二 9:00–22:00 收費，入口只收電子支付），外圍廣場免費。早上 8:00 前和晚上 22:00 後不收費、不管制，所以 7:45 去剛好免費又沒人。', tags: [['早去免費', 'hot'], ['9:00 後 €2', 'warn']] },
        { t: '08:30', name: "Tazza d'Oro", it: '咖啡：granita di caffè con panna', kind: 'food', lat: 41.89951, lng: 12.47732, note: '1944 年開始自家烘焙。招牌是咖啡冰沙夾鮮奶油，站吧台喝最便宜（先到收銀台付錢拿收據）。', tags: [['名店', 'hot'], ['€1.5–4']] },
        { t: '09:00', name: '萬神殿', it: 'Pantheon', kind: 'sight', lat: 41.89861, lng: 12.47687, note: '將近兩千年的古羅馬神殿，圓頂中間的大圓洞（oculus）直接通天，下雨天雨水會落進殿內。拉斐爾葬在這裡。2026/7/1 起票價 <b>€7</b>，9:00 開門。可在 museiitaliani.it 預購（非歐盟信用卡偶爾刷不過）。', tags: [['€7'], ['約 40 min']] },
        { t: '10:00', name: "Sant'Eustachio Il Caffè", it: '咖啡：gran caffè', kind: 'food', lat: 41.89807, lng: 12.47530, note: '招牌 gran caffè 預設加糖，表面有一層綿密的泡沫；不要糖請說「amaro」。', tags: [['名店', 'hot']] },
        { t: '10:30', name: '勝利之后聖母堂', it: 'Santa Maria della Vittoria', kind: 'sight', lat: 41.90460, lng: 12.49430, note: '小教堂裡有貝尼尼的名作《聖女德蘭的神魂超拔》，免費，投幣可以點燈照亮雕像。約 8:30–12:00 開放，中午關門。附近的嘉布遣會骨頭教堂（Via Veneto 27）有興趣也可以順路。', tags: [['免費'], ['隱藏景點', 'gem']] },
        { t: '11:45', name: 'Pastificio Guerra', it: '午餐：€5 手工麵', kind: 'food', lat: 41.90582, lng: 12.47900, note: '景點區最便宜的手工麵，每天只有兩款，可以外帶。⚠ 不要拿到西班牙階梯上吃，坐在階梯上會被罰款。', tags: [['隱藏版', 'gem'], ['約 €5']] },
        { t: '11:15', name: '西班牙階梯', it: 'Piazza di Spagna', kind: 'sight', lat: 41.90599, lng: 12.48277, note: '135 階的巴洛克階梯。規定不能坐在階梯上，也不能在上面吃東西。爬到最上面的山上天主聖三教堂可以俯瞰 Via Condotti 精品街。', tags: [['免費'], ['禁止坐', 'bad']] },
                { t: '13:00', name: '博爾蓋塞美術館', it: 'Galleria Borghese', kind: 'sight', lat: 41.91420, lng: 12.49210, note: '<b>每個人都要預約</b>（galleriaborghese.cultura.gov.it 或 +39 06 32810），每小時一梯、限時 2 小時，預約 13:00 的時段。包包要寄放。貝尼尼的《阿波羅與達芙妮》《劫奪普洛塞庇娜》和卡拉瓦喬的畫都在這裡。通常提早好幾週就會額滿。週一休館。', tags: [['約 €18'], ['必預約', 'bad'], ['2 h']] },
        { t: '16:15', name: 'Pincio 露台', it: 'Terrazza del Pincio', kind: 'sight', lat: 41.91136, lng: 12.47661, note: '穿過博爾蓋塞公園走過來約 20 分鐘。俯瞰人民廣場和遠處聖彼得大教堂的圓頂，11/10 日落約 16:50，是羅馬最經典的夕陽點。', tags: [['免費'], ['夕陽', 'hot']] },
        { t: '17:15', name: '人民廣場→回老城區散步', it: 'Via dei Coronari', kind: 'sight', lat: 41.90003, lng: 12.47058, note: '從 Pincio 走下人民廣場，沿 Via di Ripetta 走回萬神殿一帶。Via dei Coronari 是石板骨董街，晚上點燈很好看。', tags: [['免費']] },
        { t: '19:30', name: 'Armando al Pantheon', it: '晚餐：cacio e pepe、amatriciana', kind: 'food', lat: 41.89910, lng: 12.47578, note: '萬神殿旁邊的家族老店，羅馬菜的標竿。<b>大約要提前 30 天上網訂位</b>。⚠ 週日休、週六可能只開午餐。', tags: [['必訂位', 'bad'], ['€35–55']] },
        { t: '21:30', name: 'Giolitti', it: '宵夜：gelato 加 panna', kind: 'food', lat: 41.90080, lng: 12.47781, note: '1900 年開業的老字號冰淇淋店，開到很晚。先到收銀台付錢，再拿收據點口味，panna（鮮奶油）免費加。', tags: [['名店', 'hot'], ['€3–6']] },
      ],
      side: {
        title: 'Day 3 小提醒',
        items: [
          '<b>博爾蓋塞美術館和 Armando 是這趟最難訂的兩個</b>，確定日期就先訂。',
          '這一天幾乎都在 Tridente 和萬神殿一帶，全部走路就到得了。',
          '許願池、西班牙階梯周邊的餐廳最容易踩雷，吃飯照清單走。',
          '如果想看夜景，晚上 22:00 以後再去一次許願池，打燈之後人也比較少。',
        ],
      },
    },
    {
      title: '騎 Vespa 跑南羅馬',
      area: '阿文提諾・Testaccio・阿皮亞古道・Trastevere',
      mode: 'driving',
      summary: '11/11（三）。最後一天租一台 125cc 機車，從阿文提諾山的鑰匙孔一路騎到 Testaccio 市場吃午餐，下午騎上阿皮亞古道看兩千年前的石板路和地下墓穴，16:15 上 Gianicolo 山看全羅馬的夕陽，最後還車到 Trastevere 吃晚餐。11 月雨天多，下雨就改搭公車＋計程車（見右側）。',
      tags: [['機車日', 'info'], ['需國際駕照（機車）', 'bad'], ['週三阿皮亞古道可騎', 'info']],
      stops: [
        { t: '09:00', name: '取車：Bici & Baci', it: '租 125cc Vespa', kind: 'move', lat: 41.90060, lng: 12.49600, mode: 'walking', note: '帶護照、台灣駕照正本、有機車類別的國際駕照、信用卡（押金預授權約 €300–750）。拍照記錄車身原有刮痕，確認保險有包含竊盜（Furto）。⚠ 價格請先上官網確認。', tags: [['約 €55–85/日'], ['押金刷卡', 'warn']] },
        { t: '09:30', name: '馬爾他騎士團鑰匙孔', it: 'Buco della Serratura, Aventino', kind: 'sight', lat: 41.88320, lng: 12.47870, note: '從一扇門的鑰匙孔看出去，剛好框住遠方聖彼得大教堂的圓頂，同時看得到三個國家（馬爾他騎士團、義大利、梵蒂岡）。早上排隊最短。', tags: [['免費'], ['隱藏景點', 'gem']] },
        { t: '09:50', name: '橘子花園', it: 'Giardino degli Aranci', kind: 'sight', lat: 41.88520, lng: 12.47950, note: '鑰匙孔旁邊的橘子樹花園，露台可以看台伯河和 Trastevere 的屋頂。', tags: [['免費']] },
        { t: '10:20', name: '真理之口', it: 'Bocca della Verità', kind: 'sight', lat: 41.88814, lng: 12.48164, note: '《羅馬假期》裡的經典場景，傳說說謊的人手伸進去會被咬斷。排隊拍照，每人只能拍幾秒。', tags: [['小額捐獻'], ['拍照', 'hot']] },
        { t: '11:00', name: 'Testaccio 市場', it: 'Mercato di Testaccio', kind: 'food', lat: 41.87613, lng: 12.47475, note: '真正的在地市場。Box 15 的 Mordi e Vai 點 allesso di scottona（燉牛胸肉夾麵包）。⚠ 創辦人據報已過世，先確認營業。週日休。', tags: [['隱藏版', 'gem'], ['€5–8']] },
        { t: '11:45', name: 'Trapizzino 創始店', it: '加點：三角披薩口袋', kind: 'food', lat: 41.87850, lng: 12.47302, note: '三角形披薩口袋，塞羅馬燉菜。推薦 pollo alla cacciatora（獵人燉雞）或 coda alla vaccinara（燉牛尾）。', tags: [['名店', 'hot'], ['€5–12']] },
        { t: '12:45', name: '卡拉卡拉浴場', it: 'Terme di Caracalla', kind: 'sight', lat: 41.87910, lng: 12.49250, note: '古羅馬最大的公共浴場遺跡之一，牆高 30 公尺以上，人比競技場少很多。週一休館，週三有開；冬季約 16:30 關門，⚠ 最後入場時間請查官網。可在 Musei Italiani 預購或現場自助機（只收電子支付）。', tags: [['€8'], ['約 1 h']] },
        { t: '13:45', name: '阿皮亞古道', it: 'Via Appia Antica', kind: 'sight', lat: 41.85860, lng: 12.51080, note: '兩千多年前的「條條大路通羅馬」第一條大路，兩旁是松樹和古墓。古石板路面很顛簸，慢騎。週日和國定假日禁止機動車通行，11/11 是週三，可以騎。', tags: [['騎車', 'info'], ['週日禁行', 'warn']] },
        { t: '14:15', name: '聖賽巴斯蒂安地下墓穴', it: 'Catacombe di San Sebastiano', kind: 'sight', lat: 41.85570, lng: 12.51560, note: '早期基督徒的地下墓穴，只能跟導覽團進去。<b>選這座是因為隔壁最有名的聖卡利斯托地下墓穴週三休</b>（聖賽巴斯蒂安是週日休）。大多 10:00–12:00、14:00–17:00 開放。⚠ 冬季時間請查官網。往南騎 1.5 km 還有切奇莉亞·梅特拉墓（Tomba di Cecilia Metella）。', tags: [['約 €10 含導覽'], ['約 45 min']] },
        { t: '16:15', name: 'Gianicolo 山', it: 'Terrazza del Gianicolo', kind: 'sight', lat: 41.89170, lng: 12.46110, note: '騎機車的最大好處：一路爬坡上 Gianicolo，途中經過泉水宮殿（Fontanone），從這裡可以看到全羅馬的屋頂和圓頂，11/11 日落約 16:50。每天中午 12 點會鳴放禮炮。', tags: [['免費'], ['夕陽', 'hot']] },
        { t: '17:15', name: '還車', it: '加滿油還車', kind: 'move', lat: 41.90060, lng: 12.49600, note: '還車前先加滿油（自助加油 Self 比較便宜）。如果要搭公車、計程車回 Trastevere，也可以先回飯店放東西再出發。', tags: [] },
        { t: '18:45', name: 'Trattoria Da Enzo al 29', it: '晚餐：carbonara、炸朝鮮薊', kind: 'food', lat: 41.88808, lng: 12.47723, mode: 'walking', note: 'Trastevere 最難排的 trattoria。未滿 4 人不接受訂位，<b>請 18:45 前到門口排隊</b>。週日休。', tags: [['名店', 'hot'], ['要排隊', 'warn'], ['€30–45']] },
        { t: '21:00', name: 'Trastevere 夜遊＋Otaleg', it: '甜點：gelato', kind: 'food', lat: 41.88765, lng: 12.46813, mode: 'walking', note: '晚上在 Santa Maria in Trastevere 廣場和石板巷子散步，再去 Otaleg 吃季節水果口味的 gelato。', tags: [['隱藏版', 'gem']] },
      ],
      side: {
        title: 'Day 4 騎車重點',
        items: [
          '<b>Tridente 區（西班牙廣場、Via del Corso 一帶）平日 06:30–19:00 禁止機車進入</b>，違規會被拍照，罰單由租車行轉寄，另收手續費。',
          'Trastevere 晚上有 ZTL 管制，保守起見<b>先還車再進去</b>，所以排成走路去吃晚餐。',
          '石板路下雨很滑，電車軌道要垂直跨過去。',
          '沒有機車駕照：改成上午走路逛阿文提諾山和 Testaccio，下午搭 118 號公車到阿皮亞古道，在遊客中心租<b>自行車</b>騎。',
          '<b>下雨備案</b>：11 月平均每 3 天下 1 天雨，石板路濕滑不要騎車。改成地鐵 B 線＋118 公車，Gianicolo 改搭計程車上去。',
        ],
      },
    },
  ],

  /* ================= 美食 ================= */
  food: [
    { name: 'Armando al Pantheon', type: 'meal', cat: '羅馬家常菜', area: 'Pantheon', addr: "Salita de' Crescenzi 31", lat: 41.89910, lng: 12.47578, order: '<b>Cacio e pepe</b>（羊奶起司黑胡椒麵）、<b>Rigatoni all\'amatriciana</b>、<b>Gricia</b>、Coda alla vaccinara（燉牛尾）', price: '€35–55', hours: '午、晚餐；⚠ 週六可能只開午餐，週日休', reserve: '必須，約提前 30 天上網訂', tag: 'famous', day: 3 },
    { name: 'Salumeria Roscioli', type: 'meal', cat: '羅馬菜・熟食酒窖', area: "Campo de' Fiori", addr: 'Via dei Giubbonari 21', lat: 41.89386, lng: 12.47358, order: '<b>Spaghetti alla carbonara</b>（羅馬人眼中 carbonara 的標竿）、cacio e pepe、burrata 和火腿起司拼盤', price: '€50–80', hours: '每天午、晚餐', reserve: '必須；晚餐提前 2–3 週', tag: 'famous' },
    { name: 'Antico Forno Roscioli', type: 'snack', cat: '麵包店・切片披薩', area: "Campo de' Fiori", addr: 'Via dei Chiavari 34', lat: 41.89435, lng: 12.47320, order: '<b>Pizza bianca</b>（只抹油和鹽的白披薩）、<b>pizza rossa</b>、supplì，秤重賣', price: '€3–10', hours: '週一到六約 07:00–19:30（⚠ 週日資料矛盾），12:00–14:30 口味最多', tag: 'famous' },
    { name: "Forno Campo de' Fiori", type: 'snack', cat: '白披薩', area: "Campo de' Fiori", addr: "Campo de' Fiori 22", lat: 41.89571, lng: 12.47197, order: '<b>Pizza bianca con mortadella</b>（白披薩夾波隆那香腸），站著吃最道地', price: '€2–6', hours: '週一到六 07:30–14:30、16:45–20:00，週日休；可能只收現金', tag: 'famous' },
    { name: "Hosteria Grappolo d'Oro", type: 'meal', cat: '羅馬家常菜', area: 'Navona', addr: 'Piazza della Cancelleria 80', lat: 41.89631, lng: 12.47121, order: '<b>Carbonara</b>、<b>amatriciana</b>、cacio e pepe、abbacchio al forno（烤羊肉）', price: '€30–45', hours: '午、晚餐（⚠ 可能週三休）', reserve: '建議，06 689 7080', tag: 'gem', day: 2, note: '米其林 Bib Gourmand，客人多是本地人。' },
    { name: "Giggetto al Portico d'Ottavia", type: 'meal', cat: '猶太羅馬菜', area: '猶太區 Ghetto', addr: "Via del Portico d'Ottavia 21a", lat: 41.89254, lng: 12.47758, order: '<b>Carciofi alla giudia</b>（整顆油炸朝鮮薊，像一朵炸花）、fiori di zucca（炸櫛瓜花）、filetti di baccalà（炸鱈魚條）', price: '€35–55', hours: '週二到日 12:30–15:00、19:00–23:00，週一休', reserve: '建議', tag: 'famous', note: '1923 年開業。朝鮮薊盛產期約 2–5 月，秋天吃到的可能不是當季。' },
    { name: "Sant'Eustachio Il Caffè", type: 'drink', cat: '咖啡', area: 'Pantheon', addr: "Piazza di S. Eustachio 82", lat: 41.89807, lng: 12.47530, order: '<b>Gran caffè</b>：預設加糖、泡沫綿密；不要糖說「amaro」', price: '€1.5–4', hours: '每天約 08:30–21:00（⚠ 打烊時間有出入）', tag: 'famous', day: 3 },
    { name: "Tazza d'Oro", type: 'drink', cat: '咖啡・咖啡冰沙', area: 'Pantheon', addr: 'Via degli Orfani 84', lat: 41.89951, lng: 12.47732, order: '<b>Granita di caffè con panna</b>（咖啡冰沙夾鮮奶油）、espresso', price: '€1.5–4', hours: '週一到六約 07:00–20:00（⚠ 週日不確定）', tag: 'famous', day: 3 },
    { name: 'Giolitti', type: 'dessert', cat: '冰淇淋', area: 'Pantheon', addr: 'Via degli Uffici del Vicario 40', lat: 41.90080, lng: 12.47781, order: 'Gelato 加 <b>panna</b>（鮮奶油免費）；早上也可以吃 cornetto', price: '€3–6', hours: '全年無休 07:00 到深夜', tag: 'famous', day: 3, note: '品質好但偏觀光。先到收銀台付錢。' },
    { name: 'Pastificio Guerra', type: 'snack', cat: '外帶手工麵', area: '西班牙階梯', addr: 'Via della Croce 8', lat: 41.90582, lng: 12.47900, order: '當天兩款手工麵（例如 cacio e pepe、amatriciana），可外帶', price: '約 €5', hours: '每天中午到晚上（⚠ 請確認）', tag: 'gem', day: 3, note: '景點區最便宜的手工麵。' },
    { name: 'Il Piccolo Arancio', type: 'meal', cat: '羅馬家常菜', area: 'Trevi', addr: 'Vicolo Scanderbeg 112', lat: 41.90054, lng: 12.48468, order: 'Carbonara、gricia、<b>Saltimbocca alla romana</b>（小牛肉片疊鼠尾草和生火腿）', price: '€30–45', hours: '午、晚餐（⚠ 可能週一休）', reserve: '建議', tag: 'gem', note: '許願池旁邊少數 CP 值高的店。' },
    { name: 'Trattoria Da Enzo al 29', type: 'meal', cat: '羅馬家常菜', area: 'Trastevere', addr: 'Via dei Vascellari 29', lat: 41.88808, lng: 12.47723, order: '<b>Carciofo alla giudia</b>、stracciatella、<b>rigatoni alla carbonara</b>、amatriciana', price: '€30–45', hours: '週一到六 12:30–15:30、19:30–23:00，週日休', reserve: '未滿 4 人不接受訂位；18:45 前排隊', tag: 'famous', day: 4 },
    { name: 'Supplì Roma', type: 'snack', cat: '炸飯糰 supplì', area: 'Trastevere', addr: 'Via di San Francesco a Ripa 137', lat: 41.88758, lng: 12.47029, order: '<b>Supplì classico</b>（番茄肉醬炸飯糰，咬開會拉絲，又叫 supplì al telefono）、pizza rossa', price: '€2–8', hours: '中午到晚上，週日休，只收現金', tag: 'famous', day: 4 },
    { name: 'Otaleg', type: 'dessert', cat: '冰淇淋', area: 'Trastevere', addr: 'Via di San Cosimato 14a', lat: 41.88765, lng: 12.46813, order: '季節水果、堅果口味現場製作（店名倒過來念就是 gelato）', price: '€3–5', hours: '每天約 12:00–24:00（⚠ 資料偏舊）', tag: 'gem', day: 4 },
    { name: 'Freni e Frizioni', type: 'drink', cat: '調酒・餐前酒', area: 'Trastevere', addr: 'Via del Politeama 4–6', lat: 41.89080, lng: 12.46837, order: '調酒加 aperitivo 自助吃（以蔬食為主）', price: '€10–15', hours: '每天 18:30–02:00', tag: 'famous', note: '2025 World\'s 50 Best Bars 第 58 名。' },
    { name: 'Il Maritozzaro', type: 'dessert', cat: '奶油麵包・宵夜', area: 'Trastevere 南', addr: 'Via Ettore Rolli 50', lat: 41.87763, lng: 12.46905, order: '<b>Maritozzo con la panna</b>、剛出爐的 cornetto caldo', price: '€2–4', hours: '⚠ 說法很多，有說 24 小時，也有說只開到下午', tag: 'gem', note: '1960 年開業，在地人半夜吃可頌的地方。' },
    { name: 'Mercato di Testaccio', type: 'snack', cat: '傳統市場', area: 'Testaccio', addr: 'Via Lorenzo Ghiberti / Via Aldo Manuzio', lat: 41.87613, lng: 12.47475, order: '在攤位間邊走邊吃，買起司、水果', price: '€5–15', hours: '週一到六 07:00–15:30，週日休', tag: 'gem', day: 4, note: '真正的在地市場，比 Campo de\' Fiori 好逛。' },
    { name: 'Mordi e Vai', type: 'snack', cat: '燉牛肉三明治', area: 'Testaccio 市場 Box 15', addr: 'Mercato di Testaccio, Box 15', lat: 41.87625, lng: 12.47490, order: '<b>Allesso di scottona</b>（燉牛胸肉夾麵包配菊苣）、trippa alla romana（番茄燉牛肚）', price: '€5–8', hours: '週一到六約 08:00–14:30，週日休', tag: 'gem', day: 4, note: '⚠ 2026 年有報導說創辦人過世，先確認營業。' },
    { name: 'Trapizzino Testaccio', type: 'snack', cat: '三角披薩口袋', area: 'Testaccio', addr: 'Via Giovanni Branca 88', lat: 41.87850, lng: 12.47302, order: '<b>Trapizzino</b> 三角披薩口袋：pollo alla cacciatora、coda alla vaccinara', price: '€5–12', hours: '每天約 12:00–24:00（⚠ 舊資料說週一休）', tag: 'famous', day: 4 },
    { name: 'Felice a Testaccio', type: 'meal', cat: '羅馬家常菜', area: 'Testaccio', addr: 'Via Mastro Giorgio 29', lat: 41.87809, lng: 12.47453, order: '<b>Tonnarelli cacio e pepe</b>（桌邊現拌）、<b>saltimbocca</b>、tiramisù', price: '€30–45', hours: '每天午、晚餐', reserve: '必須，約提前 2 週', tag: 'famous' },
    { name: 'Checchino dal 1887', type: 'meal', cat: '內臟料理老店', area: 'Testaccio', addr: 'Via di Monte Testaccio 30', lat: 41.87510, lng: 12.47575, order: '<b>Coda alla vaccinara</b>（番茄燉牛尾，據說是這家發明的）、rigatoni con la pajata', price: '€45–65', hours: '晚餐為主，週日、週一休（⚠）', reserve: '建議', tag: 'famous', note: '羅馬內臟料理（quinto quarto）的代表。' },
    { name: 'La Taverna dei Fori Imperiali', type: 'meal', cat: '羅馬家常菜', area: 'Monti', addr: 'Via della Madonna dei Monti 9', lat: 41.89395, lng: 12.48943, order: '<b>Cacio e pepe</b>（加檸檬皮）、gricia、carbonara、polpette', price: '€30–45', hours: '週三到一 12:30–15:00、19:30–22:30，週二休', reserve: '必須，+39 06 679 8643', tag: 'famous', day: 1 },
    { name: 'Ai Tre Scalini', type: 'drink', cat: '葡萄酒館', area: 'Monti', addr: 'Via Panisperna 251', lat: 41.89668, lng: 12.49170, order: '100 多款葡萄酒、火腿起司拼盤、<b>polpette al sugo</b>', price: '€12–25', hours: '每天約 12:00–01:00', reserve: '吧台不接受；19:00 後 4 人以上可訂桌', tag: 'gem', day: 1, note: '1895 年開業。' },
    { name: 'Er Buchetto', type: 'snack', cat: '烤豬三明治', area: 'Termini', addr: 'Via del Viminale 2F', lat: 41.90052, lng: 12.49693, order: '<b>Panino con la porchetta</b>（香草烤全豬夾麵包）配一杯 house wine', price: '€5–8（只收現金）', hours: '週一到五 10:00–15:00、17:00–21:00，週六中午，週日休', tag: 'gem', note: '⚠ 最新評論只到 2023 年，去之前看 IG 或打 329 965 2175。' },
    { name: 'Fatamorgana Monti', type: 'dessert', cat: '冰淇淋', area: 'Monti', addr: 'Piazza degli Zingari 5', lat: 41.89533, lng: 12.49152, order: '天然原料的特殊口味（巧克力配菸草、羅勒核桃蜂蜜），也有無麩質選項', price: '€3–5', hours: '每天中午到深夜', tag: 'gem', day: 1 },
    { name: 'Pasticceria Regoli', type: 'dessert', cat: '奶油麵包・甜點店', area: 'Esquilino', addr: 'Via dello Statuto 60', lat: 41.89508, lng: 12.50189, order: '<b>Maritozzo con la panna</b>、torta di ricotta e visciole（瑞可塔酸櫻桃塔）', price: '€2–5', hours: '06:45–19:30，週二休；週六 11 點前常賣完', tag: 'famous', day: 1 },
    { name: 'Pizzarium Bonci', type: 'snack', cat: '切片披薩', area: 'Prati', addr: 'Via della Meloria 43', lat: 41.90680, lng: 12.44690, order: '<b>Pizza al taglio</b>：馬鈴薯迷迭香、mortadella 配 stracciatella、supplì', price: '€6–15', hours: '約 11:00–22:00（⚠ 週一、週日午間有出入）', reserve: '不接受，站著吃', tag: 'famous', day: 2 },
    { name: 'Gelateria dei Gracchi', type: 'dessert', cat: '冰淇淋', area: 'Prati', addr: 'Via dei Gracchi 272', lat: 41.90718, lng: 12.46356, order: '<b>Crema di pinoli</b>（松子奶霜）、pistacchio、nocciola', price: '€3–5', hours: '每天 12:00–24:00', tag: 'gem', day: 2, note: 'Bourdain 生前最愛的冰淇淋店。' },
    { name: 'Tram Tram', type: 'meal', cat: '羅馬家常菜', area: 'San Lorenzo', addr: 'Via dei Reti 44', lat: 41.89849, lng: 12.51589, order: '<b>Coda alla vaccinara</b>、puntarelle（冬季菊苣嫩芽沙拉）、普利亞風海鮮麵', price: '€30–45', hours: '午、晚餐（⚠ 可能週一休）', reserve: '建議', tag: 'gem', note: '大學區的老 trattoria，幾乎沒有觀光客。' },
    { name: 'Flavio al Velavevodetto', type: 'meal', cat: '羅馬家常菜', area: 'Testaccio', addr: 'Via di Monte Testaccio 97', lat: 41.87560, lng: 12.47520, order: 'Carbonara、coda alla vaccinara；店蓋在古羅馬陶罐堆成的山裡', price: '€30–45', hours: '午、晚餐', reserve: '建議', tag: 'gem' },
  ],

  /* 美食分四大類，頁面依這個順序分組 */
  foodTypes: [
    { k: 'meal', icon: '🍝', label: '正餐', desc: '坐下來吃的 trattoria。晚餐多半要訂位，19:30 後才開。' },
    { k: 'snack', icon: '🍕', label: '小吃', desc: '站著吃、邊走邊吃：切片披薩、炸飯糰、三明治、市場，€2–10。' },
    { k: 'dessert', icon: '🍨', label: '甜點', desc: 'Gelato 冰淇淋、maritozzo 奶油麵包。' },
    { k: 'drink', icon: '☕', label: '咖啡・酒', short: '飲品', desc: '早上站吧台喝咖啡，傍晚來杯 aperitivo 餐前酒。' },
  ],

  foodNotes: [
    {
      title: '🚩 觀光陷阱警訊',
      items: [
        '門口有人拉客：好餐廳不需要這樣做。',
        '菜單附照片，或同時有四五種語言。',
        '有「Menù turistico」或固定價格套餐。',
        '菜單上有 Fettuccine Alfredo、Spaghetti bolognese：這兩道都不是羅馬菜。',
        '冰淇淋堆得比冰櫃邊緣還高、顏色很螢光。好店多放在有蓋的不鏽鋼桶裡。',
        'Coperto 或 pane e servizio 每人超過 €4，帳單沒逐項列出。',
      ],
    },
    {
      title: '🍝 羅馬用餐禮儀',
      items: [
        '<b>Cappuccino 只在早上喝</b>（約 11 點前），飯後點 espresso（說「un caffè」）。',
        '吃飯時間：午餐 13:00–15:00、晚餐 20:00–22:30，很多餐廳 19:30 才開。',
        '咖啡站吧台（al banco）比坐桌便宜很多；常常要先到收銀台付錢拿收據再點。',
        'Coperto 桌位費每人約 €1.5–3，合法但要寫在菜單上。小費不強制，留零頭即可。',
        '羅馬傳統：週四吃 gnocchi、週五吃 baccalà、週六吃 trippa。',
        'Carbonara 本來就放 pecorino，不必再要 parmigiano；結帳要主動說「Il conto, per favore」。',
      ],
    },
  ],

  /* ================= 交通 ================= */
  transport: {
    callouts: [
      { tone: 'blue', icon: '💳', html: '<b>地鐵、公車、電車都可以直接刷感應式信用卡或手機（tap&go）</b>，每刷一次就是一張 €1.50 的 BIT。一人一卡，同一張卡不能幫同行的人刷。' },
      { tone: '', icon: '⚠️', html: 'ATAC 曾規劃把 BIT 從 €1.50 漲到 €2，目前查不到正式核准，<b>以售票機價格為準</b>。' },
    ],
    airport: [
      ['Leonardo Express', 'FCO → Termini 直達', '€14', '約 32 分', '每 15–30 分一班，約 06:00–23:30。紙本票要在月台打票；App 買的票不用'],
      ['FL1 區域火車', 'FCO → Trastevere／Ostiense／Tiburtina', '€8', '約 30–50 分', '不到 Termini。住 Trastevere 最方便'],
      ['機場巴士', 'FCO／CIA → Termini（SIT、Terravision）', '€4–7', '40–60 分以上', '最便宜，塞車時會很久。網路預購較便宜'],
      ['計程車（固定價）', 'FCO ⇄ 奧勒良城牆內', '€55', '約 45 分', '2024/7/31 起的官方價。以車計不以人計，最多 4 人，含行李和夜間加成。網路上的 €48、€50 是舊價'],
      ['計程車（固定價）', 'CIA ⇄ 奧勒良城牆內', '€40', '約 30 分', '只搭白色、有執照編號的官方計程車'],
    ],
    tickets: [
      ['BIT 單程票', '€1.50', '100 分鐘內公車、電車無限轉乘；地鐵只能進站一次'],
      ['ROMA 24H', '€8.50', '首次打票起 24 小時無限搭（2025/7 起漲價）'],
      ['ROMA 48H', '€15', '首次打票起 48 小時'],
      ['ROMA 72H', '€22', '首次打票起 72 小時，<b>四天行程最划算</b>（第四天騎機車）'],
      ['Roma Pass 48H／72H', '€38／€62.90', '含交通加 1／2 個景點免費。不含梵蒂岡和 Leonardo Express，競技場還要另付約 €2 預約費。⚠ 價格以 romapass.it 為準'],
    ],
    cards: [
      {
        title: '🚇 地鐵',
        items: [
          '<b>A 線</b>：Termini、Spagna（西班牙階梯）、Ottaviano（梵蒂岡）。',
          '<b>B 線</b>：Termini、Colosseo、Piramide（Testaccio）。',
          '<b>C 線新段</b>（2025/12/16 通車）：San Giovanni、Porta Metronia、Colosseo/Fori Imperiali，站內有考古展示。',
          '營運約 05:30–23:30，週五、週六延長到約 01:30（⚠ 請確認）。',
        ],
      },
      {
        title: '🚌 實用公車與電車',
        items: [
          '<b>8 號電車</b>：Largo Argentina → Trastevere。',
          '<b>40 號（快線）、64 號公車</b>：Termini → 威尼斯廣場 → 梵蒂岡。<b>64 號是全羅馬扒手最多的路線</b>。',
          '夜間公車號碼以「n」開頭，地鐵收班後行駛。',
          '老城區（萬神殿、納沃納一帶）沒有地鐵，走路最快。',
        ],
      },
      {
        title: '🚕 計程車與叫車 App',
        items: [
          '<b>FreeNow</b>（已被 Lyft 收購，App 照常用）、<b>itTaxi</b>：叫的都是有執照的白色計程車。',
          '<b>Uber</b>：羅馬沒有 UberX，只有 Uber Black，約計程車 2 倍價；Uber App 也能透過 itTaxi 叫一般計程車。',
          '在 Termini 等地方主動上前拉客的「計程車」大多是無照車，不要搭。',
        ],
      },
      {
        title: '🗺️ 這次行程怎麼移動',
        items: [
          'Day 1、3：全程步行（每天約 8–12 km）。',
          'Day 2：地鐵 A 線到 Ottaviano，回程走路過台伯河。',
          'Day 4：租機車；不騎車的話，用 B 線到 Circo Massimo，再搭 118 號公車到阿皮亞古道。',
          '建議買 <b>ROMA 72H</b>，或全部用信用卡感應。',
        ],
      },
    ],
    src: '<a href="https://www.atac.roma.it/en/tickets-and-passes" target="_blank">ATAC</a>・<a href="https://www.sicurauto.it/news/taxi-roma-per-fiumicino-e-ciampino-quanto-costa/" target="_blank">sicurauto（計程車價）</a>・<a href="https://en.wikipedia.org/wiki/Line_C_(Rome_Metro)" target="_blank">Metro C</a>・<a href="https://www.museiincomuneroma.it/en/node/1000015" target="_blank">Roma Pass</a>',
  },

  /* ================= 租摩托車 ================= */
  scooter: {
    callouts: [
      { tone: 'red', icon: '🪪', html: '<b>駕照最重要</b>：要帶<b>台灣駕照正本＋國際駕照</b>，而且國際駕照上必須有<b>機車類別</b>（要先有普通重型機車以上的駕照）。台灣不是日內瓦公約締約國，義大利是靠雙邊互惠承認，代表處的說明文件是 2013 年的。⚠ <b>出發前請寄信給駐義大利代表處（ita@boca.gov.tw）或租車行確認</b>。不要只拿汽車駕照去租 125cc。' },
      { tone: '', icon: '🚫', html: '<b>ZTL 限制通行區</b>：歷史中心（Centro Storico）機車可以進；但 <b>Tridente 區（西班牙廣場、Via del Corso 一帶）平日 06:30–19:00、週六 10:00–19:00 禁止機車進入</b>。違規會被攝影機拍，罰單幾個月後經租車行轉寄，另收手續費。' },
    ],
    cards: [
      {
        title: '🛵 租車須知',
        items: [
          '125cc 日租行情約 <b>€45–85</b>，Vespa 較貴；3 小時方案約 €40。',
          '押金用信用卡預授權，約 €300–750。',
          '基本含第三責任險。另加 CDW 車損險約 €15–25/天；<b>確認有沒有包含竊盜（Furto）</b>。',
          '取車時拍照、錄影記錄車身既有刮痕。',
          '安全帽：駕駛和乘客都<b>強制戴</b>，租車行會提供。',
        ],
      },
      {
        title: '🅿️ 停車規則',
        items: [
          '<b>白線</b>：免費。',
          '<b>藍線</b>：汽車付費格。官方曾說兩輪車不用付，但部分告示牌有機車圖示，⚠ 看現場告示。',
          '<b>黃線</b>：居民、身障或公務專用，不能停。',
          '機車專用格通常免費。不要擋人行道和斑馬線，會被拖吊。',
        ],
      },
      {
        title: '⚠️ 騎車安全',
        items: [
          '石板路（sampietrini）<b>下雨非常滑</b>；電車軌道要盡量垂直跨過去。',
          '圓環內的車有優先權。當地機車常在車陣中鑽行。',
          'Trastevere 夜間有 ZTL 管制（週五、六 21:30–03:00，5–10 月連週三、四也管制），⚠ 機車是否豁免沒寫清楚，保守做法是管制時段不要騎進去。',
          '酒駕標準 0.5 g/L，駕照未滿 3 年是 0。',
          '防竊：鎖碟煞，安全帽不要留在車上，晚上停在有照明的地方。',
        ],
      },
      {
        title: '🛴 共享電動車',
        items: [
          'Lime、Dott、Bird 共享滑板車的營運許可只到 <b>2026/10/31</b>，11 月起不確定 ⚠。',
          '電動滑板車自 2024/12 起<b>強制戴安全帽</b>，共享車也一樣，不戴罰 €50–250。',
          '共享電動機車：Cooltra 應該還在營運（⚠）。',
          '自助加油（Self）比人工加油（Servito）便宜，夜間多是插卡或付現的機器。',
        ],
      },
    ],
    shops: [
      { name: 'Bici & Baci', area: 'Termini／Monti（另有 Via Cavour 302、Via del Bottino 8 分店）', addr: 'Via del Viminale 5', lat: 41.90060, lng: 12.49600, price: 'Vespa 約 €55–85/日；3 小時約 €40', deposit: '信用卡預授權', badge: '行程取車點', url: 'https://www.bicibaci.com/' },
      { name: 'Scooter Hire', area: 'Monti', addr: 'Via Cavour 80', lat: 41.89680, lng: 12.49420, price: '約 €45 起/日', note: '網路預訂有折扣。', url: 'https://www.google.com/search?q=Scooter+Hire+Via+Cavour+80+Roma' },
      { name: 'Treno e Scooter', area: 'Termini 車站', addr: 'Termini 車站 1 號月台旁', lat: 41.90100, lng: 12.50050, price: '較便宜，只租整天以上', note: '剛下 Leonardo Express 就能取車。', url: 'https://www.google.com/search?q=Treno+e+Scooter+Roma+Termini' },
      { name: 'Roma Rent Bike', area: "Campo de' Fiori", addr: 'Via di San Paolo alla Regola 33', lat: 41.89320, lng: 12.47270, price: '約 €70/日；2 天約 €120', note: '在老城區內，離 Trastevere 近。', url: 'https://www.google.com/search?q=Roma+Rent+Bike+Via+di+San+Paolo+alla+Regola' },
    ],
    routes: [
      {
        name: '路線 A：南羅馬古道線（Day 4 用這條）',
        km: '約 25 km・騎乘 1.5 小時＋停留',
        desc: [
          'Termini → 阿文提諾山鑰匙孔 → 真理之口 → Testaccio 吃午餐。',
          '→ 卡拉卡拉浴場 → 穿過 Porta San Sebastiano 城門上阿皮亞古道。',
          '→ 地下墓穴 → 往北騎回市區，爬上 Gianicolo 看夕陽。',
          '⚠ 阿皮亞古道<b>週日和國定假日禁行機動車</b>。',
        ],
        points: ['41.90060,12.49600', '41.88320,12.47870', '41.88814,12.48164', '41.87613,12.47475', '41.87910,12.49250', '41.85860,12.51080', '41.89170,12.46110'],
      },
      {
        name: '路線 B：七丘全景線（夜騎版）',
        km: '約 15 km・騎乘 1 小時',
        desc: [
          '競技場 → 帝國大道（Via dei Fori Imperiali）→ 威尼斯廣場。',
          '→ 沿台伯河騎到阿文提諾山 → Gianicolo 山頂露台。',
          '→ 下山到聖彼得廣場看夜景 → 回程避開 Tridente 區。',
          '晚上車少、古蹟打燈，是騎 Vespa 最舒服的時段。',
        ],
        points: ['41.89021,12.49223', '41.89590,12.48270', '41.88320,12.47870', '41.89170,12.46110', '41.90220,12.45730'],
      },
    ],
    src: '<a href="https://www.sicurauto.it/news/ztl-roma-orari-mappa-e-permessi/" target="_blank">sicurauto（ZTL）</a>・<a href="https://www.moto.it/news/roma-la-ztl-tridente-vietata-a-moto-e-scooter.html" target="_blank">moto.it（Tridente）</a>・<a href="https://www.turismoroma.it/en/news/electric-scooters-helmets-and-identification-plate-mandatory-shared-vehicles-too" target="_blank">Turismo Roma（滑板車）</a>・<a href="https://reidsitaly.com/destinations/lazio/rome/planning/around_by_scooter.html" target="_blank">Reid\'s Italy</a>',
  },

  /* ================= 氣候 ================= */
  climate: {
    rows: [
      ['3 月', 17, 6, '8 天', '18:10', '薄外套＋長袖'],
      ['4 月', 20, 9, '9 天', '19:50', '長袖＋薄外套'],
      ['5 月', 24, 12, '7 天', '20:20', '短袖＋薄外套'],
      ['6 月', 28, 16, '4 天', '20:45', '短袖，防曬'],
      ['7 月', 31, 18, '2 天', '20:40', '短袖、帽子、大量喝水'],
      ['8 月', 31, 19, '3 天', '20:10', '短袖、帽子'],
      ['9 月', 27, 16, '6 天', '19:20', '短袖＋薄外套'],
      ['10 月', 22, 12, '8 天', '18:30／17:15', '長袖＋外套，帶折傘'],
      ['11 月 ★', 17, 8, '10 天', '16:50', '<b>你的行程</b>：洋蔥式穿法＋防風外套、防水好走的鞋、折傘'],
      ['12 月', 13, 4, '9 天', '16:40', '厚外套'],
    ],
    note: '月均值為長期氣候概估。你的行程 11/8–11/11：白天約 15–18°、早晚 7–10°，日出約 06:55、日落約 16:50，平均每 3 天下 1 天雨。義大利 10/25 起已是冬令時間，比台灣慢 7 小時。',
  },

  /* ================= 須知 ================= */
  tipsCallouts: [
    { tone: 'red', icon: '⏰', html: '<b>現在就要做</b>：競技場門票在參觀日前 30 天開賣，<b>11/8 的票約 10/9 上午（羅馬時間）開賣</b>。梵蒂岡、博爾蓋塞、Armando al Pantheon 也請盡快預約。' },
    { tone: 'red', icon: '👜', html: '<b>扒手熱點</b>：64、40 號公車；Termini 車站；地鐵 A 線的 Termini、Spagna、Ottaviano 站；競技場、許願池、西班牙階梯、梵蒂岡排隊人潮。背包背前面，手機不要放後口袋。' },
    { tone: 'green', icon: '🕐', html: '<b>時差</b>：11/8–11/11 義大利是冬令時間（CET），<b>比台灣慢 7 小時</b>，羅馬早上 9 點＝台灣下午 4 點。上方的時鐘會自動換算。' },
  ],
  tips: [
    {
      title: '🎭 常見詐騙',
      items: [
        '硬幫你綁「友誼手環」或塞玫瑰，再跟你要錢。',
        '請你簽「請願書」，同夥趁機扒竊。',
        '假裝把東西潑到你身上，再「好心」幫你擦。',
        '穿羅馬士兵服的人拍照後索取高額費用。',
        'Termini 售票機旁「幫你買票」，再跟你要小費。',
        '假警察要求檢查錢包。',
      ],
    },
    {
      title: '🎫 一定要先預約',
      items: [
        '<b>競技場</b>：實名制，ticketing.colosseo.it，<b>參觀日前 30 天開賣</b>（11/8 的票約 10/9 上午開賣）。',
        '<b>梵蒂岡博物館</b>：museivaticani.va，€25，約 60 天前開賣，週日休館。',
        '<b>聖克萊門特地下層</b>：basilicasanclemente.com，每天限量。',
        '<b>博爾蓋塞美術館</b>：強制預約，常提早好幾週額滿，週一休館。',
        '萬神殿 €7、卡拉卡拉 €8 可在 museiitaliani.it 預購；許願池 €2 現場只收電子支付。',
        '<b>Armando al Pantheon</b>：約提前 30 天。',
        '<b>Salumeria Roscioli、Felice、La Taverna dei Fori Imperiali</b>：提前 1–3 週。',
      ],
    },
    {
      title: '🔌 實用資訊',
      items: [
        '插座 Type C、F、L，230V／50Hz：台灣電器要帶<b>轉接頭</b>，手機充電器多數支援 230V。',
        '街上的 <b>nasoni</b> 公共飲水泉可以直接喝，用手指按住出水口，水會從上方小孔噴出來。',
        '小費不強制，服務好留零頭或 5–10%；帳單已有 servizio 就不用給。',
        '教堂服裝：遮肩、過膝。',
      ],
    },
    {
      title: '🎷 行程期間的活動',
      items: [
        '<b>羅馬爵士音樂節</b>（Roma Jazz Festival）11/1–11/24，第 50 屆，主題向 Miles Davis 致敬。',
        '<b>Romaeuropa 藝術節</b>到 11/15，全市約 20 個場地有舞蹈、劇場、音樂演出。',
        '11/8–11/11 沒有國定假日，也不是免費日，景點照常開放。',
        '2025 禧年已在 2026/1/6 結束，人潮回到一般水準。',
      ],
    },
    {
      title: '🆘 緊急聯絡',
      items: [
        '<b>112</b> 歐盟緊急電話；113 警察、118 救護、115 消防。',
        '<b>駐義大利台北代表處</b>：Viale Liegi 17, 00198 Roma。',
        '電話 <b>+39-06-9826-2800</b>（週一到五 09:00–17:00）。',
        '急難救助 <b>+39-366-806-6434</b>（人身安全、重大事故）。',
        '外交部全球免付費專線 <b>00-886-800-0885-0885</b>。',
        '護照遺失：先到警局報案拿 denuncia，再打電話給代表處預約。',
      ],
    },
  ],

  sources: [
    ['ATAC', 'https://www.atac.roma.it/en/tickets-and-passes'],
    ['Turismo Roma', 'https://www.turismoroma.it/en'],
    ['Parco Colosseo', 'https://ticketing.colosseo.it/'],
    ['Musei Vaticani', 'https://www.museivaticani.va/'],
    ['Galleria Borghese', 'https://galleriaborghese.cultura.gov.it/en/visita/'],
    ['Fontana di Trevi', 'https://www.fontanaditrevi.roma.it/en'],
    ['Pantheon（文化部）', 'https://cultura.gov.it/luogo/pantheon'],
    ['San Clemente', 'https://www.basilicasanclemente.com'],
    ['Gambero Rosso', 'https://www.gamberorosso.it/'],
    ['Katie Parla', 'https://katieparla.com/'],
    ['Romeing', 'https://romeing.it/'],
    ['sicurauto（ZTL、計程車）', 'https://www.sicurauto.it/news/ztl-roma-orari-mappa-e-permessi/'],
    ['外交部領事事務局', 'https://www.boca.gov.tw/sp-foof-countrycp-03-53-ca74a-03-1.html'],
  ],
};
