/* 羅馬四天 —— 全站資料。改行程只要改這個檔。
   座標為依地址估算（誤差約 20–80 m），導航前可用店名再搜一次。
   ⚠ 標記＝來源互相矛盾或資料偏舊，出發前請再確認。 */
window.TRIP = {
  updated: '2026-10-08',
  start: '2026-11-08',
  lead: '<b>2026/11/8（日）– 11/11（三）</b>。古羅馬、梵蒂岡、老城區、騎 Vespa 跑阿皮亞古道。四天行程排好路線、時間、吃飯的地方，每一站都能直接開 Google Maps 導航。',

  /* ================= 總覽：天氣概況（只放一句，詳細預報出發前 15 天才有意義） ================= */
  climateNote: {
    temp: '11 月白天約 17°、早晚約 8°',
    rain: '每月約 9 天下雨，一定帶傘',
  },

  /* ================= 總覽：出發前待辦（依時間排；id 不要改，打勾記錄靠它） ================= */
  todo: [
    {
      when: '現在就做', tone: 'bad', date: '10 月上旬',
      items: [
        { id: 'colosseo', text: '搶競技場門票 11/8（日）8:30', note: '參觀日前 30 天開賣，<b>11/8 的票約 10/9–10/10 上架</b>。一般票 €18、含地下層 €24。實名制，名字要跟護照一樣。官方說這是唯一官方線上售票處。', links: [['🎫 官方售票', 'https://ticketing.colosseo.it/en/categorie/singoli-1-8-persone/']] },
        { id: 'vatican', text: '馬上訂梵蒂岡博物館 11/9（一）', note: '<b>10/8 查詢時 11/9 上午時段已售完</b>，其他時段也快沒了。€25，實名制。訂到的時段跟 Day 2 行程對一下。', links: [['🎫 官方售票', 'https://tickets.museivaticani.va/home/calendar/visit/MV-Biglietti/1']] },
        { id: 'borghese', text: '訂博爾蓋塞美術館 11/10（二）14:00', note: '強制預約，€18，每場限 180 人。11/10 的票已經開賣。', links: [['🎫 官方訂票', 'https://www.tosc.it/artist/galleria-borghese/']] },
        { id: 'stpeter', text: '訂聖彼得圓頂 11/9（一）早上', note: '樓梯 €17、電梯 €22，含大教堂入場。只進大教堂不爬圓頂可以免費排隊。', links: [['🎫 官方訂票', 'https://www.basilicasanpietro.va/en/products']] },
        { id: 'armando', text: '訂 Armando al Pantheon 11/10 晚餐', note: '只接受官網線上訂位，開放 30 天內的位子、每天午夜放出新的一天：<b>11/10 的位子約 10/11 午夜（羅馬時間，台灣早上 6 點）開放</b>。', links: [['📝 線上訂位', 'http://armandoalpantheon.it/prenota/']] },
        { id: 'passport', text: '確認護照效期', note: '要載有身分證字號；離開申根區當天還要有 3 個月以上效期。', links: [['領事局：義大利入境規定', 'https://www.boca.gov.tw/sp-foof-countrycp-01-53-ca74a-02-1.html']] },
        { id: 'insurance', text: '買含「申根醫療」的旅平險', note: '領事局寫明入境義大利須有足額申根醫療保險，海關可能抽查。要有英文保單。', links: [['領事局說明', 'https://www.boca.gov.tw/sp-foof-countrycp-01-53-ca74a-02-1.html']] },
        { id: 'idp', text: '辦國際駕照（要騎機車才需要）', note: '監理所臨櫃約 1 小時、NT$250。帶身分證、駕照、2 吋照片 2 張、護照。<b>要有普通重型機車以上駕照</b>，輕型機車駕照不能辦；在義大利要同時帶台灣駕照正本。', links: [['📝 申辦說明（公路局）', 'https://tpcmv.thb.gov.tw/cp.aspx?n=9458'], ['代表處：台義駕照互惠', 'https://www.roc-taiwan.org/it/post/5432.html']] },
        { id: 'register', text: '外交部「出國登錄」', note: '出事時代表處找得到你。也可以加 LINE @boca.tw 登錄。', links: [['📝 出國登錄', 'https://www.boca.gov.tw/sp-abre-main-1.html']] },
        { id: 'stay', text: '訂好住宿、回程機票並印出來', note: '入境可能被要求出示訂房證明、回程機票、財力證明。', links: [] },
      ],
    },
    {
      when: '出發前 3–4 週', tone: 'warn', date: '10/12–10/20',
      items: [
        { id: 'restaurants', text: '訂其他要訂位的餐廳', note: 'La Taverna dei Fori Imperiali（Day 1 午餐，週二休）、Grappolo d\'Oro（Day 2 晚餐）。完整清單在「指南 → 訂票」。Da Enzo al 29（Day 4）不收訂位，現場排。', links: [['📝 Taverna 訂位', 'https://www.latavernadeiforiimperiali.com/'], ['📝 Grappolo 訂位', 'https://hosteriagrappolodoro.it/prenotazioni/']] },
        { id: 'sanclemente', text: '訂聖克萊門特地下遺跡 11/8（日）14:45', note: '€10，每天限量，週日 12:00–18:00 開放。', links: [['🎫 官方預約', 'https://www.basilicasanclemente.com/eng/booking/']] },
        { id: 'pantheon', text: '訂萬神殿 11/10（二）9:00', note: '€7，11 月時段約 10 月中開賣；要先註冊 Musei Italiani 帳號。', links: [['🎫 官方訂票', 'https://portale.museiitaliani.it/b2c/buyTicketless/33f77159-0acd-40c4-8524-701f33aae108']] },
        { id: 'catacomb', text: '預約聖賽巴斯蒂安地下墓穴 11/11（三）14:15', note: '€10 含導覽，官方建議先預約。', links: [['🎫 官方預約', 'https://catacombe.org/en/booking']] },
        { id: 'scooter', text: '預約機車（Day 4，11/11）', note: '125cc €58–68／天，押金 €500 起。非歐盟駕照要「本國駕照＋國際駕照」。', links: [['📝 Bici & Baci 預約', 'https://bicibaci.com/noleggio-biciclette-e-scooter/']] },
      ],
    },
    {
      when: '出發前 1 週', tone: 'info', date: '11/1 前後',
      items: [
        { id: 'strike', text: '查罷工日曆', note: '截至 10/8 沒有 11/7–11/12 的罷工公告；罷工通常提前公告，這週再查一次（選 Lazio / 交通）。', links: [['義大利罷工日曆', 'https://scioperi.mit.gov.it/mit2/public/scioperi']] },
        { id: 'esim', text: '準備網路（eSIM 或漫遊）', note: '歐盟免費漫遊只適用歐盟門號，台灣門號不適用。先確認手機支援 eSIM。', links: [] },
        { id: 'offline', text: '下載 Google 離線地圖（羅馬）', note: '老城區巷子多，訊號不穩時很有用。', links: [['怎麼下載', 'https://support.google.com/maps/answer/6291838']] },
        { id: 'bank', text: '開通信用卡海外交易、確認提款密碼', note: '刷卡、提款一律選「以歐元計價」，拒絕 DCC 轉台幣。', links: [] },
        { id: 'apps', text: '安裝 App', note: 'Trenitalia（機場快線）、itTaxi / FreeNow（叫車）、TheFork（訂位）。', links: [['Trenitalia', 'https://www.trenitalia.com/'], ['itTaxi', 'https://ittaxi.it/'], ['FreeNow', 'https://www.free-now.com/it/']] },
      ],
    },
    {
      when: '出發前 1 天', tone: '', date: '11/7',
      items: [
        { id: 'recheck', text: '再查一次罷工和天氣', note: '天氣看本頁上方，11/8 前 15 天起就會顯示行程日預報。', links: [['罷工日曆', 'https://scioperi.mit.gov.it/mit2/public/scioperi']] },
        { id: 'backup', text: '證件、票券存到手機和雲端', note: '護照、保單、所有門票 QR code 都截圖。', links: [] },
        { id: 'docs', text: '確認隨身帶：護照、國際駕照＋台灣駕照正本、英文保單', note: '', links: [] },
      ],
    },
  ],

  /* ================= 總覽：一定要知道的事 ================= */
  musts: [
    { icon: '🛂', title: '入境：免簽，但要按指紋', text: '台灣護照免簽 90 天。歐盟 EES 出入境系統 2026/4/10 起全面運作，第一次入境要錄指紋和臉部影像，通關會比較久。<b>ETIAS 還沒上線、不用申請</b>，現在任何收費代辦 ETIAS 的網站都是詐騙。', links: [['EES 官方說明', 'https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en'], ['ETIAS 官網', 'https://travel-europe.europa.eu/en/etias']] },
    { icon: '👜', title: '扒手是最大風險', text: '外交部對義大利是灰色提醒，重點就是扒竊。64 號公車、Termini 車站、地鐵 A 線、各大景點排隊人潮最多。背包背前面，手機不放後口袋。', links: [['外交部旅遊警示', 'https://www.boca.gov.tw/sp-trwa-content-2614-ac1b8-1.html']] },
    { icon: '⛪', title: '教堂服裝要遮肩過膝', text: '梵蒂岡、聖彼得大教堂和所有教堂都會擋無袖、短褲、短裙。11 月天冷，穿長褲最省事。' },
    { icon: '🚕', title: '計程車不能路邊招', text: '用 App 叫（itTaxi、FreeNow）或到排班站搭。機場到城牆內是固定價：FCO €55、CIA €40。主動上前拉客的大多是無照車。', links: [['itTaxi', 'https://ittaxi.it/']] },
    { icon: '⛲', title: '噴泉、階梯的罰款', text: '禁止在許願池等歷史噴泉泡水、攀爬，罰 €160–450 還會被禁止進入市中心 48 小時。西班牙階梯不能坐、不能吃東西。丟硬幣沒問題。' },
    { icon: '🏨', title: '住宿稅另外付', text: '羅馬住宿稅每人每晚收（3 星 €6、4 星 €7.5、5 星 €10），通常入住時現場付，不含在訂房價裡。', links: [['羅馬市府稅率表', 'https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF41430']] },
    { icon: '💶', title: '付款與退稅', text: '感應式刷卡很普遍，帶少量現金給市場、小店、廁所。同一張發票超過 €70 可以退稅，在離開歐盟的最後一國辦。' },
    { icon: '🆘', title: '緊急聯絡', text: '歐盟緊急電話 112。駐義大利代表處 +39-06-9826-2800；急難（人身安全）+39-366-806-6434。外交部免付費專線 00-886-800-0885-0885。', links: [['代表處聯絡資訊', 'https://www.boca.gov.tw/sp-foof-countrycp-01-53-ca74a-03-1.html']] },
  ],

  /* ================= 總覽：行李清單 ================= */
  packingNote: '11 月羅馬白天約 17°、晚上約 8°，雨天多。石板路一天走 10 公里以上，鞋子最重要。',
  packing: [
    { k: 'doc', icon: '🪪', title: '證件與錢', items: ['護照（效期夠長）', '護照影本＋證件照片 2 張', '英文旅平險保單', '國際駕照＋台灣駕照正本（騎機車）', '信用卡 2 張（不同發卡組織）', '少量歐元現金', '訂房、回程機票列印'] },
    { k: 'wear', icon: '🧥', title: '衣物', items: ['防風防水外套或薄羽絨', '長袖上衣（洋蔥式穿法）', '長褲（進教堂也方便）', '防滑好走的鞋（最重要）', '摺疊傘或輕便雨衣', '圍巾（保暖、遮肩兩用）'] },
    { k: 'tech', icon: '🔌', title: '電子', items: ['轉接頭（義大利 230V，C／F 型圓頭兩腳）', '行動電源', '充電線', 'eSIM 或網卡', '手機離線地圖'] },
    { k: 'misc', icon: '🎒', title: '其他', items: ['防扒斜背包或貼身腰包', '水瓶（街上 nasoni 飲水泉可直接裝）', '常備藥品', '保濕乳液、護唇膏', '小包衛生紙、濕紙巾', '寬口塑膠袋（雨天裝鞋或濕衣）'] },
  ],

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
        { t: '08:30', name: '羅馬競技場', it: 'Colosseo', kind: 'sight', lat: 41.89021, lng: 12.49223, note: '一定要上官方售票網站 ticketing.colosseo.it 預約實名制時段票，<b>參觀日前 30 天上午約 9:00 開賣</b>（11/8 的票約 10/9 開賣），之後會陸續釋出退票。挑 8:30 第一個時段。帶護照，入口會核對姓名；參觀日前第 7 天午夜前可以改名一次。11 月開放 8:30–16:30，最後入場 15:30。', tags: [['€18 一般票'], ['€24 含地下層'], ['30 天前開賣', 'bad'], ['約 1.5 h']], book: { label: '官方訂票', url: 'https://ticketing.colosseo.it/en/categorie/singoli-1-8-persone/' } },
        { t: '10:00', name: '古羅馬廣場＋帕拉提諾山', it: 'Foro Romano & Palatino', kind: 'sight', lat: 41.89246, lng: 12.48533, note: '和競技場同一張票（24 小時內各進一次），9:00 開門。先上帕拉提諾山看皇宮遺跡、俯瞰大競技場，再走下古羅馬廣場。幾乎沒有遮蔭，記得帶水，場內有 nasoni 飲水泉可以裝水。', tags: [['同票'], ['約 2–2.5 h']] },
        { t: '12:45', name: 'La Taverna dei Fori Imperiali', it: '午餐：cacio e pepe、gricia', kind: 'food', lat: 41.89395, lng: 12.48943, note: 'Monti 區的家族 trattoria，cacio e pepe 會加檸檬皮。必須先訂位（官網可線上訂），週二休。', book: { label: '訂位', url: 'https://www.latavernadeiforiimperiali.com/' }, tags: [['必訂位', 'bad'], ['€30–45']] },
        { t: '14:00', name: 'Monti 小巷散步', it: 'Rione Monti', kind: 'sight', lat: 41.89533, lng: 12.49152, note: '羅馬最文青的老區：古著店、手作店、常春藤爬滿的巷子。Piazza degli Zingari 的 Fatamorgana 約 13:30 開門，可以吃一球天然口味 gelato。', tags: [['Fatamorgana gelato', 'gem']] },
        { t: '14:45', name: '聖克萊門特教堂', it: 'Basilica di San Clemente', kind: 'sight', lat: 41.88937, lng: 12.49761, note: '隱藏版景點。一棟教堂疊三層歷史：12 世紀教堂、4 世紀教堂，再往下是 1 世紀羅馬房屋和密特拉神廟，地底還聽得到伏流的水聲。<b>地下層要先上官網預約</b>，每天有人數上限；參觀 30 分鐘、禁止拍照，提早 5 分鐘到。週日開放 12:00–18:00，最後入場 17:30。', tags: [['€10'], ['需預約', 'warn'], ['隱藏景點', 'gem']], book: { label: '官方預約', url: 'https://www.basilicasanclemente.com/eng/booking/' } },
        { t: '16:20', name: '卡比托利歐山＋夕陽觀景', it: 'Piazza del Campidoglio', kind: 'sight', lat: 41.89338, lng: 12.48297, note: '米開朗基羅設計的廣場。從市政廳兩側往後走，就能從上方看整個古羅馬廣場；11/8 日落約 16:55，16:30 前到最好。', tags: [['免費'], ['夕陽', 'hot']] },
        { t: '19:30', name: 'Ai Tre Scalini', it: '晚餐／酒館：葡萄酒＋肉丸', kind: 'food', lat: 41.89668, lng: 12.49170, note: '1895 年開業的老酒館，100 多款酒，點 polpette al sugo 茄汁肉丸和火腿起司拼盤。官網寫明不接受訂位，營業到 24:00。', tags: [['隱藏版', 'gem'], ['€12–25']] },
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
      area: '聖彼得・梵蒂岡博物館・Prati・聖天使橋・納沃納',
      mode: 'walking',
      summary: '11/9（一）。梵蒂岡博物館 11/9 上午的時段截至 10/8 已經賣完，所以改成：一早 07:30 先進人最少的聖彼得大教堂、爬圓頂，11:00 在 Prati 吃切片披薩，12:30 進梵蒂岡博物館看西斯汀禮拜堂，傍晚在聖天使橋看夕陽，晚上在納沃納廣場附近吃飯。聖天使堡週一休館。',
      tags: [['博物館要快訂', 'bad'], ['教堂服裝規定', 'warn']],
      stops: [
        { t: '07:30', name: '聖彼得大教堂＋爬圓頂', it: 'Basilica di San Pietro & Cupola', kind: 'sight', lat: 41.90217, lng: 12.45394, note: '大教堂 07:00 開，一早人最少；免費入場但要排安檢。<b>服裝要遮肩、過膝。</b>爬圓頂共 551 階，搭電梯可以少爬 231 階，剩下約 320 階又窄又斜。圓頂票含大教堂入場，入場時段由系統排在圓頂時段前後 1 小時，看確認信。⚠ 圓頂冬季開放時間官網還沒公布。', tags: [['教堂免費'], ['圓頂 €17 樓梯／€22 電梯', 'warn'], ['約 2 h']], book: { label: '圓頂訂票', url: 'https://www.basilicasanpietro.va/en/products' } },
        { t: '10:15', name: '聖彼得廣場', it: 'Piazza San Pietro', kind: 'sight', lat: 41.90224, lng: 12.45730, note: '貝尼尼設計的柱廊廣場。站在噴泉和方尖碑之間的圓形石板上，四排柱子會疊成一排。', tags: [['免費']] },
        { t: '11:00', name: 'Pizzarium Bonci', it: '早午餐：pizza al taglio 切片披薩', kind: 'food', lat: 41.90680, lng: 12.44690, note: '羅馬最有名的切片披薩，秤重計價、每天換口味，只能站著吃。官網確認週一 11:00–22:00，一開門就去人最少。順便點 supplì（炸飯糰）。', tags: [['名店', 'hot'], ['€6–15']] },
        { t: '12:30', name: '梵蒂岡博物館＋西斯汀禮拜堂', it: 'Musei Vaticani', kind: 'sight', lat: 41.90651, lng: 12.45360, note: '<b>只能官網預約，實名制</b>，€25（€20＋€5 預約費）。截至 10/8，11/9 的 08:00–11:00、12:00、13:00、14:30 已售完，其他時段也快沒了：<b>請馬上訂，訂到哪個時段就把這站挪過去</b>。路線很長，西斯汀禮拜堂在最後，禁止拍照。週日休館。', tags: [['€25'], ['快售完', 'bad'], ['約 3 h']], book: { label: '官方訂票', url: 'https://tickets.museivaticani.va/home/calendar/visit/MV-Biglietti/1' } },
        { t: '15:45', name: 'Gelateria dei Gracchi', it: '下午點心：松子奶霜 gelato', kind: 'food', lat: 41.90718, lng: 12.46356, note: 'Prati 區的老牌冰淇淋店，觀光客少。推薦 crema di pinoli（松子）、pistacchio。每天 11:30–24:00。', tags: [['隱藏版', 'gem'], ['€3–5']] },
        { t: '16:30', name: '聖天使堡外觀＋聖天使橋', it: "Castel Sant'Angelo & Ponte", kind: 'sight', lat: 41.90199, lng: 12.46642, note: '<b>聖天使堡週一休館</b>，今天只看外觀。貝尼尼設計的天使雕像橋，11/9 日落約 16:55，夕陽打在聖天使堡上最上相。想進去頂樓露台可以挪到其他天（€18，週二到日開）。', tags: [['免費'], ['拍照點', 'hot']], book: { label: '聖天使堡門票', url: 'https://ticketing.coopculture.it/event/1B1BEF74-7656-EBB1-3EDA-01986293EF71' } },
        { t: '17:15', name: '納沃納廣場', it: 'Piazza Navona', kind: 'sight', lat: 41.89892, lng: 12.47307, note: '巴洛克廣場，中間是貝尼尼的四河噴泉。廣場上的餐廳都是觀光價，散步拍照就好。', tags: [['免費']] },
        { t: '19:30', name: "Hosteria Grappolo d'Oro", it: '晚餐：carbonara、amatriciana', kind: 'food', lat: 41.89631, lng: 12.47121, note: '米其林 Bib Gourmand，客人多是本地人。週一晚上 18:30 起有開，建議先上官網訂位。', tags: [['隱藏版', 'gem'], ['€30–45']], book: { label: '線上訂位', url: 'https://hosteriagrappolodoro.it/prenotazioni/' } },
      ],
      side: {
        title: 'Day 2 小提醒',
        items: [
          '<b>梵蒂岡博物館 11/9 上午已售完（10/8 查）</b>，訂到哪個時段就把博物館挪過去，其他站前後調整。',
          '大教堂和博物館<b>都有服裝規定</b>：不能穿無袖、短褲、短裙。',
          '地鐵 A 線 <b>Ottaviano</b> 或 <b>Cipro</b> 站下車。',
          '博物館門口很多人拉客賣「免排隊團」，已經預約就直接走預約入口。',
          '週一是聖天使堡、博爾蓋塞、卡拉卡拉的休館日，所以這天排梵蒂岡。',
        ],
      },
    },
    {
      title: '老城巴洛克漫步',
      area: '許願池・萬神殿・西班牙階梯・博爾蓋塞',
      mode: 'walking',
      summary: '11/10（二）。趁一大早人少先去許願池，接著喝羅馬最有名的兩家咖啡、進萬神殿。中午在西班牙階梯附近吃 €4–5 手工麵，下午 14:00 預約博爾蓋塞美術館，出來剛好在 Pincio 露台看夕陽。晚上吃 Armando al Pantheon，最後用 Giolitti 的 gelato 收尾。',
      tags: [['博爾蓋塞必預約', 'bad'], ['全程步行', 'info']],
      stops: [
        { t: '07:45', name: '許願池', it: 'Fontana di Trevi', kind: 'sight', lat: 41.90093, lng: 12.48331, note: '早上 8 點前人最少。背對噴泉、用右手把硬幣從左肩丟進去，傳說就會再回到羅馬。<b>2026/2/2 起水池邊內圈收費 €2</b>（週二 9:00–22:00 收費，入口只收電子支付），外圍廣場免費。早上 8:00 前和晚上 22:00 後不收費、不管制，所以 7:45 去剛好免費又沒人。', tags: [['早去免費', 'hot'], ['9:00 後 €2', 'warn']], book: { label: '收費說明', url: 'https://www.turismoroma.it/en/news/trevi-fountain-new-entry-fee-one-romes-symbols' } },
        { t: '08:30', name: "Tazza d'Oro", it: '咖啡：granita di caffè con panna', kind: 'food', lat: 41.89951, lng: 12.47732, note: '1944 年開始自家烘焙。招牌是咖啡冰沙夾鮮奶油，站吧台喝最便宜（先到收銀台付錢拿收據）。', tags: [['名店', 'hot'], ['€1.5–4']] },
        { t: '09:00', name: '萬神殿', it: 'Pantheon', kind: 'sight', lat: 41.89861, lng: 12.47687, note: '將近兩千年的古羅馬神殿，圓頂中間的大圓洞（oculus）直接通天，下雨天雨水會落進殿內。拉斐爾葬在這裡。2026/7/1 起票價 <b>€7</b>，9:00–19:00。官方票記名、綁時段，要先在 Musei Italiani 註冊；11 月的時段約 10 月中開賣。', tags: [['€7'], ['約 40 min']], book: { label: '官方訂票', url: 'https://portale.museiitaliani.it/b2c/buyTicketless/33f77159-0acd-40c4-8524-701f33aae108' } },
        { t: '10:00', name: "Sant'Eustachio Il Caffè", it: '咖啡：gran caffè', kind: 'food', lat: 41.89807, lng: 12.47530, note: '招牌 gran caffè 預設加糖，表面有一層綿密的泡沫；不要糖請說「amaro」。', tags: [['名店', 'hot']] },
        { t: '10:30', name: '勝利之后聖母堂', it: 'Santa Maria della Vittoria', kind: 'sight', lat: 41.90460, lng: 12.49430, note: '小教堂裡有貝尼尼的名作《聖女德蘭的神魂超拔》，免費，投幣可以點燈照亮雕像。約 8:30–12:00 開放，中午關門。附近的嘉布遣會骨頭教堂（Via Veneto 27）有興趣也可以順路。', tags: [['免費'], ['隱藏景點', 'gem']] },
        { t: '11:15', name: '西班牙階梯', it: 'Piazza di Spagna', kind: 'sight', lat: 41.90599, lng: 12.48277, note: '135 階的巴洛克階梯。規定不能坐在階梯上，也不能在上面吃東西。爬到最上面的山上天主聖三教堂可以俯瞰 Via Condotti 精品街。', tags: [['免費'], ['禁止坐', 'bad']] },
        { t: '12:00', name: 'Via Margutta 藝術街', it: '《羅馬假期》男主角的家', kind: 'sight', lat: 41.90890, lng: 12.47950, note: '從西班牙階梯走 5 分鐘。安靜的藝術家街道，畫廊、工作室和常春藤，51 號就是《羅馬假期》裡男主角公寓的拍攝地。', tags: [['免費'], ['隱藏景點', 'gem']] },
        { t: '13:00', name: 'Pastificio Guerra', it: '午餐：€4–5 手工麵', kind: 'food', lat: 41.90582, lng: 12.47900, note: '景點區最便宜的手工麵，每天只有兩款，約 13:00 開、賣完就收，可以外帶快速吃。⚠ 不要拿到西班牙階梯上吃，坐在階梯上會被罰款。吃完走到博爾蓋塞約 20 分鐘。', tags: [['隱藏版', 'gem'], ['約 €4–5']] },
                { t: '14:00', name: '博爾蓋塞美術館', it: 'Galleria Borghese', kind: 'sight', lat: 41.91420, lng: 12.49210, note: '<b>每個人都要預約</b>（官網或電話 +39 06 32810），每場限 180 人、限時 2 小時，預約 14:00 的時段，提早 20–30 分鐘到寄放包包。貝尼尼的《阿波羅與達芙妮》《劫奪普洛塞庇娜》和卡拉瓦喬的畫都在這裡。通常提早好幾週就會額滿。週一休館。', tags: [['€18'], ['必預約', 'bad'], ['2 h']], book: { label: '官方訂票', url: 'https://www.tosc.it/artist/galleria-borghese/' } },
        { t: '16:20', name: 'Pincio 露台', it: 'Terrazza del Pincio', kind: 'sight', lat: 41.91136, lng: 12.47661, note: '穿過博爾蓋塞公園走過來約 20 分鐘。俯瞰人民廣場和遠處聖彼得大教堂的圓頂，11/10 日落約 16:50，是羅馬最經典的夕陽點。', tags: [['免費'], ['夕陽', 'hot']] },
        { t: '17:15', name: '人民廣場→回老城區散步', it: 'Via dei Coronari', kind: 'sight', lat: 41.90003, lng: 12.47058, note: '從 Pincio 走下人民廣場，沿 Via di Ripetta 走回萬神殿一帶。Via dei Coronari 是石板骨董街，晚上點燈很好看。', tags: [['免費']] },
        { t: '19:30', name: 'Armando al Pantheon', it: '晚餐：cacio e pepe、amatriciana', kind: 'food', lat: 41.89910, lng: 12.47578, note: '萬神殿旁邊的家族老店，羅馬菜的標竿。<b>只接受官網線上訂位</b>，要提早訂。週二晚上 18:00 開始供餐（週六只開午餐、週日休）。', book: { label: '線上訂位', url: 'http://armandoalpantheon.it/prenota/' }, tags: [['必訂位', 'bad'], ['€35–55']] },
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
      area: '阿文提諾・Testaccio・阿皮亞古道・Gianicolo・Trastevere',
      mode: 'driving',
      summary: '11/11（三）。租一台 125cc 機車，從阿文提諾山的鑰匙孔騎到 Testaccio 市場吃午餐，下午上阿皮亞古道看地下墓穴和古羅馬石板路，16:20 上 Gianicolo 山等 16:55 的夕陽，還車後到 Trastevere 吃晚餐。11 月平均約 3 天下 1 天雨，下雨就改搭公車＋計程車（見右側）。',
      tags: [['機車日', 'info'], ['要國際駕照＋台灣駕照', 'bad'], ['週三古道可騎（週末管制）', 'info']],
      stops: [
        { t: '09:00', name: '取車：Bici & Baci', it: '租 125cc 機車', kind: 'move', lat: 41.90109, lng: 12.49689, mode: 'walking', note: 'Via del Viminale 5（Termini 旁）。Scooter 125cc €58／天、Vespa 125cc €68／天，用 PayPal 或刷卡 9 折。押金依排氣量 €500／€700／€1000（刷卡預授權或現金），車被偷要賠押金金額，每張罰單另收 €20＋稅手續費。11 月營業 09:00–18:00。帶護照、台灣駕照正本、國際駕照、信用卡；取車時拍照記錄刮痕。', tags: [['€58–68／天'], ['押金 €500 起', 'warn']], book: { label: '預約機車', url: 'https://bicibaci.com/noleggio-biciclette-e-scooter/' } },
        { t: '09:30', name: '馬爾他騎士團鑰匙孔', it: 'Buco della Serratura, Aventino', kind: 'sight', lat: 41.88326, lng: 12.47819, note: '從一扇門的鑰匙孔看出去，剛好框住遠方聖彼得大教堂的圓頂。早上排隊最短。', tags: [['免費'], ['隱藏景點', 'gem']] },
        { t: '09:50', name: '橘子花園', it: 'Giardino degli Aranci', kind: 'sight', lat: 41.88500, lng: 12.47935, note: '鑰匙孔旁邊的橘子樹花園，露台可以看台伯河和 Trastevere 的屋頂。', tags: [['免費']] },
        { t: '10:20', name: '真理之口', it: 'Bocca della Verità', kind: 'sight', lat: 41.88814, lng: 12.48164, note: '《羅馬假期》的經典場景，在 Santa Maria in Cosmedin 教堂門廊。排隊拍照，每人只能拍幾秒，建議小額捐獻。', tags: [['拍照', 'hot']] },
        { t: '11:00', name: 'Testaccio 市場', it: 'Mercato di Testaccio', kind: 'food', lat: 41.87613, lng: 12.47475, note: '真正的在地市場，週日休。Box 15 的 Mordi e Vai（約 10:00 開，現場抽號碼牌）點 allesso di scottona 燉牛胸肉夾麵包。創辦人 2022 年過世，現由兒子經營。攤位約 14:30 開始收。', tags: [['隱藏版', 'gem'], ['€5–8']] },
        { t: '11:45', name: 'Trapizzino 創始店', it: '加點：三角披薩口袋', kind: 'food', lat: 41.87850, lng: 12.47302, note: '三角形披薩口袋塞羅馬燉菜，推薦 pollo alla cacciatora（獵人燉雞）或 coda alla vaccinara（燉牛尾）。', tags: [['名店', 'hot'], ['€5–12']] },
        { t: '12:45', name: '卡拉卡拉浴場', it: 'Terme di Caracalla', kind: 'sight', lat: 41.87910, lng: 12.49239, note: '古羅馬最大的公共浴場遺跡之一，人比競技場少很多。冬季（10/25–2/28）09:00–16:30，<b>最後入場 15:30</b>，週一休。', tags: [['約 1 h']], book: { label: '官方資訊', url: 'https://soprintendenzaspecialeroma.it/luoghi/terme-di-caracalla/' } },
        { t: '13:50', name: '阿皮亞古道', it: 'Via Appia Antica', kind: 'sight', lat: 41.86760, lng: 12.50450, note: '「條條大路通羅馬」的第一條大路，兩旁是松樹和古墓。<b>2026/9/19 起週六、日 07:00–19:00 實施 ZTL 管制</b>，週三不受影響。前 1.5 km 要和汽車共用窄路，慢騎。遊客中心（Via Appia Antica 58/60）的 EcoBike 也租自行車。', tags: [['週三可騎', 'info']], book: { label: 'ZTL 官方說明', url: 'https://romamobilita.it/muoversi-a-roma/ztl-appia-antica/' } },
        { t: '14:15', name: '聖賽巴斯蒂安地下墓穴', it: 'Catacombe di San Sebastiano', kind: 'sight', lat: 41.85570, lng: 12.51560, note: '早期基督徒的地下墓穴，只能跟導覽進去。週二到週日 09:15–17:15 不休息，最後入場 16:45，<b>週一休</b>。（隔壁的聖卡利斯托據報週三休，所以選這座。）', tags: [['€10 含導覽'], ['約 45 min']], book: { label: '官方資訊', url: 'https://catacombe.org/en/info' } },
        { t: '15:15', name: '切奇莉亞・梅特拉墓', it: 'Tomba di Cecilia Metella', kind: 'sight', lat: 41.85213, lng: 12.52053, note: '古道上最有名的圓形陵墓。<b>過了這裡約 200 m 起只限居民、行人、自行車</b>，機車停好、走一段古羅馬石板路拍照就好。15:50 前出發去 Gianicolo（約 25 分鐘）。', tags: [['機車到此為止', 'warn']] },
        { t: '16:20', name: 'Gianicolo 山', it: 'Terrazza del Gianicolo', kind: 'sight', lat: 41.89130, lng: 12.46125, note: '騎機車一路爬坡上來，途中經過泉水宮殿（Fontanone）。全羅馬的屋頂和圓頂就在眼前，<b>11/11 日落 16:55</b>，天色到 17:20 左右都還好看。', tags: [['免費'], ['夕陽', 'hot']] },
        { t: '17:20', name: '還車（18:00 關門）', it: '加滿油還車', kind: 'move', lat: 41.90109, lng: 12.49689, note: '從 Gianicolo 騎回 Termini 約 25 分鐘。<b>走台伯河岸或帝國大道，不要穿過 Tridente 區</b>（西班牙廣場、Via del Corso，平日管制到 19:00）。還車前自助加油（Self）加滿。', tags: [['18:00 前', 'bad']] },
        { t: '18:30', name: 'Trattoria Da Enzo al 29', it: '晚餐：carbonara、炸朝鮮薊', kind: 'food', lat: 41.88808, lng: 12.47723, mode: 'walking', note: '從 Termini 搭計程車約 15 分鐘。<b>官網寫明一律不收訂位</b>，晚餐 18:30 開門，到了就排，可能要等。週日休。', tags: [['名店', 'hot'], ['要排隊', 'warn'], ['€30–45']] },
        { t: '20:30', name: 'Trastevere 夜遊＋Otaleg', it: '甜點：gelato', kind: 'food', lat: 41.88765, lng: 12.46813, mode: 'walking', note: '在 Santa Maria in Trastevere 廣場和石板巷子散步，再去 Otaleg（每天 12:00–24:00）吃季節水果口味的 gelato。', tags: [['隱藏版', 'gem']] },
      ],
      side: {
        title: 'Day 4 騎車重點',
        items: [
          '<b>Tridente 區（西班牙廣場、Via del Corso 一帶）平日 06:30–19:00、週六 10:00–19:00 禁止機車進入</b>，違規會被拍照，罰單經租車行轉寄另收手續費。歷史中心其他地方機車可以進。',
          'Trastevere 的 ZTL <b>機車豁免</b>，11 月週三晚上也不管制。',
          '還車時間卡在 Bici & Baci 11 月 18:00 關門，Gianicolo 看完夕陽就出發。',
          '石板路下雨很滑，電車軌道要垂直跨過去。',
          '<b>沒有機車駕照</b>：上午走路逛阿文提諾和 Testaccio，B 線到 Circo Massimo 轉 118 號公車到阿皮亞古道，在遊客中心 EcoBike 租自行車（€16／天起）。',
          '<b>下雨備案</b>：不要騎車，改地鐵 B 線＋118 公車，Gianicolo 搭計程車上去。',
        ],
      },
    },
  ],

  /* ================= 美食 ================= */
  food: [
    { name: 'Armando al Pantheon', type: 'meal', cat: '羅馬家常菜', area: 'Pantheon', addr: "Salita de' Crescenzi 31", lat: 41.89910, lng: 12.47578, order: '<b>Cacio e pepe</b>（羊奶起司黑胡椒麵）、<b>Rigatoni all\'amatriciana</b>、<b>Gricia</b>、Coda alla vaccinara（燉牛尾）', price: '€35–55', hours: '午餐 12:30–15:00；晚餐週一到五 18:00–23:00；週六只開午餐，週日休', reserve: '只接受官網線上訂位：開放 30 天內的位子，每天午夜放出新的一天（11/10 的位子約 10/11 午夜開放）', book: { label: '線上訂位', url: 'http://armandoalpantheon.it/prenota/' }, tag: 'famous', day: 3 },
    { name: 'Salumeria Roscioli', type: 'meal', cat: '羅馬菜・熟食酒窖', area: "Campo de' Fiori", addr: 'Via dei Giubbonari 21', lat: 41.89386, lng: 12.47358, order: '<b>Spaghetti alla carbonara</b>（羅馬人眼中 carbonara 的標竿）、cacio e pepe、burrata 和火腿起司拼盤', price: '€50–80', hours: '餐廳每天 12:30–15:30、19:00–23:30', reserve: '必須；官網訂位要信用卡擔保，未取消每人收 €20', book: { label: '線上訂位', url: 'https://www.salumeriaroscioli.com/pages/prenota' }, tag: 'famous' },
    { name: 'Antico Forno Roscioli', type: 'snack', cat: '麵包店・切片披薩', area: "Campo de' Fiori", addr: 'Via dei Chiavari 34', lat: 41.89435, lng: 12.47320, order: '<b>Pizza bianca</b>（只抹油和鹽的白披薩）、<b>pizza rossa</b>、supplì，秤重賣', price: '€3–10', hours: '每天 07:30–20:00（官網），12:00–14:30 口味最多', tag: 'famous' },
    { name: "Forno Campo de' Fiori", type: 'snack', cat: '白披薩', area: "Campo de' Fiori", addr: "Campo de' Fiori 22", lat: 41.89571, lng: 12.47197, order: '<b>Pizza bianca con mortadella</b>（白披薩夾波隆那香腸），站著吃最道地', price: '€2–6', hours: '週一到六 07:30–14:30、16:45–20:00，週日休', tag: 'famous' },
    { name: "Hosteria Grappolo d'Oro", type: 'meal', cat: '羅馬家常菜', area: 'Navona', addr: 'Piazza della Cancelleria 80', lat: 41.89631, lng: 12.47121, order: '<b>Carbonara</b>、<b>amatriciana</b>、cacio e pepe、abbacchio al forno（烤羊肉）', price: '€30–45', hours: '每天 12:30–15:00、18:30–22:30；週三只休午餐', reserve: '建議；官網訂位或 +39 06 6897080', book: { label: '線上訂位', url: 'https://hosteriagrappolodoro.it/prenotazioni/' }, tag: 'gem', day: 2, note: '米其林 Bib Gourmand，客人多是本地人。' },
    { name: "Giggetto al Portico d'Ottavia", type: 'meal', cat: '猶太羅馬菜', area: '猶太區 Ghetto', addr: "Via del Portico d'Ottavia 21a", lat: 41.89254, lng: 12.47758, order: '<b>Carciofi alla giudia</b>（整顆油炸朝鮮薊，像一朵炸花）、fiori di zucca（炸櫛瓜花）、filetti di baccalà（炸鱈魚條）', price: '€35–55', hours: '週二到日 12:30–15:00、19:30–23:00，週一休', reserve: '只能電話：+39 06 686 1105', addr: 'Via del Portico d\'Ottavia 21/a-22', tag: 'famous', note: '1923 年開業。朝鮮薊盛產期約 2–5 月，秋天吃到的可能不是當季。' },
    { name: "Sant'Eustachio Il Caffè", type: 'drink', cat: '咖啡', area: 'Pantheon', addr: "Piazza di S. Eustachio 82", lat: 41.89807, lng: 12.47530, order: '<b>Gran caffè</b>：預設加糖、泡沫綿密；不要糖說「amaro」', price: '€1.5–4', hours: '每天 07:30 起，週日到四開到 01:00、週五 01:30、週六 02:00（官網）', tag: 'famous', day: 3 },
    { name: "Tazza d'Oro", type: 'drink', cat: '咖啡・咖啡冰沙', area: 'Pantheon', addr: 'Via degli Orfani 84', lat: 41.89951, lng: 12.47732, order: '<b>Granita di caffè con panna</b>（咖啡冰沙夾鮮奶油）、espresso', price: '€1.5–4', hours: '週一到六 07:00–20:00，週日 10:30–19:15（第三方資料）', tag: 'famous', day: 3 },
    { name: 'Giolitti', type: 'dessert', cat: '冰淇淋', area: 'Pantheon', addr: 'Via degli Uffici del Vicario 40', lat: 41.90080, lng: 12.47781, order: 'Gelato 加 <b>panna</b>（鮮奶油免費）；早上也可以吃 cornetto', price: '€3–6', hours: '全年無休 07:30 到午夜（官網）', tag: 'famous', day: 3, note: '品質好但偏觀光。先到收銀台付錢。' },
    { name: 'Pastificio Guerra', type: 'snack', cat: '外帶手工麵', area: '西班牙階梯', addr: 'Via della Croce 8', lat: 41.90582, lng: 12.47900, order: '當天兩款手工麵（例如 cacio e pepe、amatriciana），可外帶', price: '約 €4–5', hours: '約 13:00–21:00，賣完就收（第三方資料）', tag: 'gem', day: 3, note: '景點區最便宜的手工麵。' },
    { name: 'Il Piccolo Arancio', type: 'meal', cat: '羅馬家常菜', area: 'Trevi', addr: 'Vicolo Scanderbeg 112', lat: 41.90054, lng: 12.48468, order: 'Carbonara、gricia、<b>Saltimbocca alla romana</b>（小牛肉片疊鼠尾草和生火腿）', price: '€30–45', hours: '週二到日 12:00–15:30、18:30–24:00，週一休', reserve: '官網（TheFork）或 +39 06 6786139', book: { label: '訂位', url: 'https://www.piccoloarancio.it/' }, tag: 'gem', note: '許願池旁邊少數 CP 值高的店。' },
    { name: 'Trattoria Da Enzo al 29', type: 'meal', cat: '羅馬家常菜', area: 'Trastevere', addr: 'Via dei Vascellari 29', lat: 41.88808, lng: 12.47723, order: '<b>Carciofo alla giudia</b>、stracciatella、<b>rigatoni alla carbonara</b>、amatriciana', price: '€30–45', hours: '週一到六 12:00–15:00、18:30–22:30，週日休', reserve: '官網寫明一律不收訂位，依到店順序；18:30 開門前就去排', tag: 'famous', day: 4 },
    { name: 'Supplì Roma', type: 'snack', cat: '炸飯糰 supplì', area: 'Trastevere', addr: 'Via di San Francesco a Ripa 137', lat: 41.88758, lng: 12.47029, order: '<b>Supplì classico</b>（番茄肉醬炸飯糰，咬開會拉絲，又叫 supplì al telefono）、pizza rossa', price: '€2–8', hours: '週日休（羅馬觀光局）；⚠ 確切時間未查到', tag: 'famous', day: 4 },
    { name: 'Otaleg', type: 'dessert', cat: '冰淇淋', area: 'Trastevere', addr: 'Via di San Cosimato 14a', lat: 41.88765, lng: 12.46813, order: '季節水果、堅果口味現場製作（店名倒過來念就是 gelato）', price: '€3–5', hours: '每天 12:00–24:00（官網）', note: 'Monteverde 還有一家分店（Viale dei Quattro Venti 70）。', tag: 'gem', day: 4 },
    { name: 'Freni e Frizioni', type: 'drink', cat: '調酒・餐前酒', area: 'Trastevere', addr: 'Via del Politeama 4–6', lat: 41.89080, lng: 12.46837, order: '調酒加 aperitivo 自助吃（以蔬食為主）', price: '€10–15', hours: '每天營業到深夜（官網未寫開門時間）', tag: 'famous', note: 'World\'s 50 Best Bars 2026 延伸榜第 62 名；官網沒有訂位系統，+39 06 4549 7499。' },
    { name: 'Il Maritozzaro', type: 'dessert', cat: '奶油麵包・宵夜', area: 'Trastevere 南', addr: 'Via Ettore Rolli 50', lat: 41.87763, lng: 12.46905, order: '<b>Maritozzo con la panna</b>、剛出爐的 cornetto caldo', price: '€2–4', hours: '⚠ 多數資料：週二到六 24 小時、週一只開晚上、週日開到約 19:00', tag: 'gem', note: '1960 年開業，在地人半夜吃可頌的地方。' },
    { name: 'Mercato di Testaccio', type: 'snack', cat: '傳統市場', area: 'Testaccio', addr: 'Via Lorenzo Ghiberti / Via Aldo Manuzio', lat: 41.87613, lng: 12.47475, order: '在攤位間邊走邊吃，買起司、水果', price: '€5–15', hours: '週一到六早上到下午，攤位約 14:30 開始收，週日休', tag: 'gem', day: 4, note: '真正的在地市場，比 Campo de\' Fiori 好逛。' },
    { name: 'Mordi e Vai', type: 'snack', cat: '燉牛肉三明治', area: 'Testaccio 市場 Box 15', addr: 'Mercato di Testaccio, Box 15', lat: 41.87625, lng: 12.47490, order: '<b>Allesso di scottona</b>（燉牛胸肉夾麵包配菊苣）、trippa alla romana（番茄燉牛肚）', price: '€5–8', hours: '週一到六約 10:00–15:00，週日休', tag: 'gem', day: 4, note: '創辦人 Sergio Esposito 2022 年過世，現由兒子經營；現場抽號碼牌。' },
    { name: 'Trapizzino Testaccio', type: 'snack', cat: '三角披薩口袋', area: 'Testaccio', addr: 'Via Giovanni Branca 88', lat: 41.87850, lng: 12.47302, order: '<b>Trapizzino</b> 三角披薩口袋：pollo alla cacciatora、coda alla vaccinara', price: '€5–12', hours: '每天約 12:00 到深夜', tag: 'famous', day: 4 },
    { name: 'Felice a Testaccio', type: 'meal', cat: '羅馬家常菜', area: 'Testaccio', addr: 'Via Mastro Giorgio 29', lat: 41.87809, lng: 12.47453, order: '<b>Tonnarelli cacio e pepe</b>（桌邊現拌）、<b>saltimbocca</b>、tiramisù', price: '€30–45', hours: '每天 12:30–15:30、19:00–23:30', reserve: '必須；線上訂位或 +39 06 5746800', book: { label: '線上訂位', url: 'https://octotable.com/book/restaurant/525397/booking/new' }, tag: 'famous' },
    { name: 'Checchino dal 1887', type: 'meal', cat: '內臟料理老店', area: 'Testaccio', addr: 'Via di Monte Testaccio 30', lat: 41.87510, lng: 12.47575, order: '<b>Coda alla vaccinara</b>（番茄燉牛尾，據說是這家發明的）、rigatoni con la pajata', price: '€45–65', hours: '週三到日 12:30–15:00、19:30–23:00，週一、週二休', reserve: '官網線上訂位或 +39 06 5743816', book: { label: '線上訂位', url: 'https://checchinodal1887.com/prenota' }, tag: 'famous', note: '羅馬內臟料理（quinto quarto）的代表。' },
    { name: 'La Taverna dei Fori Imperiali', type: 'meal', cat: '羅馬家常菜', area: 'Monti', addr: 'Via della Madonna dei Monti 9', lat: 41.89395, lng: 12.48943, order: '<b>Cacio e pepe</b>（加檸檬皮）、gricia、carbonara、polpette', price: '€30–45', hours: '週三到一 12:30–15:00、19:30–22:30，週二休', reserve: '必須；官網線上訂位或 +39 06 6798643', book: { label: '線上訂位', url: 'https://www.latavernadeiforiimperiali.com/' }, tag: 'famous', day: 1 },
    { name: 'Ai Tre Scalini', type: 'drink', cat: '葡萄酒館', area: 'Monti', addr: 'Via Panisperna 251', lat: 41.89668, lng: 12.49170, order: '100 多款葡萄酒、火腿起司拼盤、<b>polpette al sugo</b>', price: '€12–25', hours: '每天 12:00–24:00（官網）', reserve: '官網寫明不接受訂位', tag: 'gem', day: 1, note: '1895 年開業。' },
    { name: 'Er Buchetto', type: 'snack', cat: '烤豬三明治', area: 'Termini', addr: 'Via del Viminale 2F', lat: 41.90052, lng: 12.49693, order: '<b>Panino con la porchetta</b>（香草烤全豬夾麵包）配一杯 house wine', price: '€5–8（只收現金）', hours: '週一到五 10:00–15:00、17:00–21:00，週六中午，週日休', tag: 'gem', note: '⚠ 2025 年中仍有報導，但沒找到 2026 年確認；去之前看 IG @erbuchetto 或打 329 965 2175。' },
    { name: 'Fatamorgana Monti', type: 'dessert', cat: '冰淇淋', area: 'Monti', addr: 'Piazza degli Zingari 5', lat: 41.89533, lng: 12.49152, order: '天然原料的特殊口味（巧克力配菸草、羅勒核桃蜂蜜），也有無麩質選項', price: '€3–5', hours: '每天約 13:30–21:30（第三方資料）', tag: 'gem', day: 1 },
    { name: 'Pasticceria Regoli', type: 'dessert', cat: '奶油麵包・甜點店', area: 'Esquilino', addr: 'Via dello Statuto 60', lat: 41.89508, lng: 12.50189, order: '<b>Maritozzo con la panna</b>、torta di ricotta e visciole（瑞可塔酸櫻桃塔）', price: '€2–5', hours: '約 06:45–20:00，週二休；週六 11 點前 maritozzo 常賣完', tag: 'famous', day: 1 },
    { name: 'Pizzarium Bonci', type: 'snack', cat: '切片披薩', area: 'Prati', addr: 'Via della Meloria 43', lat: 41.90680, lng: 12.44690, order: '<b>Pizza al taglio</b>：馬鈴薯迷迭香、mortadella 配 stracciatella、supplì', price: '€6–15', hours: '週一到六 11:00–22:00；週日 11–15、17–22（官網）', reserve: '不接受，站著吃', tag: 'famous', day: 2 },
    { name: 'Gelateria dei Gracchi', type: 'dessert', cat: '冰淇淋', area: 'Prati', addr: 'Via dei Gracchi 272', lat: 41.90718, lng: 12.46356, order: '<b>Crema di pinoli</b>（松子奶霜）、pistacchio、nocciola', price: '€3–5', hours: '每天 11:30–24:00（官網）', tag: 'gem', day: 2, note: 'Prati 區老店，觀光客少。' },
    { name: 'Tram Tram', type: 'meal', cat: '羅馬家常菜', area: 'San Lorenzo', addr: 'Via dei Reti 44/46', lat: 41.89849, lng: 12.51589, order: '<b>Coda alla vaccinara</b>、puntarelle（冬季菊苣嫩芽沙拉）、普利亞風海鮮麵', price: '€30–45', hours: '週二到日 12:30–15:00、19:30–23:00，週一休', reserve: '建議，+39 06 490416', tag: 'gem', note: '大學區的老 trattoria，幾乎沒有觀光客。' },
    { name: 'Flavio al Velavevodetto', type: 'meal', cat: '羅馬家常菜', area: 'Testaccio', addr: 'Via di Monte Testaccio 97', lat: 41.87560, lng: 12.47520, order: 'Carbonara、coda alla vaccinara；店蓋在古羅馬陶罐堆成的山裡', price: '€30–45', hours: '每天午、晚餐', reserve: '官網線上訂位或 06 5744194', book: { label: '線上訂位', url: 'https://www.ristorantevelavevodetto.it/en/restaurants/roma-testaccio/#prenota' }, tag: 'gem' },
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

  /* ================= 指南 → 訂票：交通與其他（景點、餐廳由 book 欄位自動彙整） ================= */
  bookCallouts: [
    { tone: 'blue', icon: '🎫', html: '這裡彙整整趟要買票、訂位的地方，<b>全部連到官方網站</b>。第三方平台（GetYourGuide、Tiqets…）常加價或賣「導覽套票」，沒必要不要買。' },
  ],
  bookExtra: [
    { when: '抵達日', name: 'Leonardo Express 機場快線（FCO → Termini）', book: { label: 'Trenitalia', url: 'https://www.trenitalia.com/it/regionale/collegamenti-regionale/leonardo-express.html', note: '€14、32 分鐘。App／網路票限搭指定車次；也可以直接刷信用卡進站。' } },
    { when: '整趟', name: 'ATAC 地鐵公車票', book: { label: 'ATAC 票價', url: 'https://www.atac.roma.it/en/tickets-and-passes', note: '直接刷感應式信用卡最省事，每天最多扣 €8.50。' } },
    { when: '整趟', name: '叫計程車', book: { label: 'itTaxi', url: 'https://ittaxi.it/', note: '不能路邊招；用 App、排班站或市府叫車電話 060609。' } },
    { when: 'Day 4', name: '租機車', book: { label: 'Bici & Baci', url: 'https://bicibaci.com/noleggio-biciclette-e-scooter/', note: '要台灣駕照正本＋國際駕照＋信用卡；押金 €500 起。' } },
  ],

  /* ================= 交通 ================= */
  transport: {
    callouts: [
      { tone: 'blue', icon: '💳', html: '<b>地鐵、公車、電車都可以直接刷感應式信用卡或手機（tap&go）</b>，每刷一次扣一張 €1.50 的 BIT；<b>同一張卡 24 小時內最多扣 €8.50</b>（等於 24H 票），第 6 次起不再多扣。一人一卡，同一張卡不能幫同行的人刷，實體卡和手機也不要混用。 <a href="https://www.atac.roma.it/en/tickets-and-passes/tap-go" target="_blank" rel="noopener">ATAC tap&go 說明 ↗</a>' },
      { tone: 'green', icon: '✅', html: '<b>罷工</b>：官方罷工日曆截至 10/8 沒有影響羅馬 11/8–11/11 的罷工。罷工通常提前約 10 天公告，出發前一週再看一次。 <a href="https://scioperi.mit.gov.it/mit2/public/scioperi" target="_blank" rel="noopener">義大利官方罷工日曆 ↗</a>' },
    ],
    airport: [
      ['Leonardo Express', 'FCO → Termini 直達', '€14', '32 分', '約 15 分一班（部分時段 30 分）。FCO 發車約 05:38–23:27。紙本票在閘門驗票；App／網路票不用打票但限搭指定車次，也可以直接刷卡。 <a href="https://www.trenitalia.com/it/regionale/collegamenti-regionale/leonardo-express.html" target="_blank" rel="noopener">Trenitalia 官方頁 ↗</a>'],
      ['FL1 區域火車', 'FCO → Trastevere／Ostiense／Tiburtina', '€8', '約 30–50 分', '不到 Termini，住 Trastevere 最方便。平日約 15 分一班、假日 30 分。 <a href="https://www.trenitalia.com/en/services/connections-to-and-from-rome-fiumicino-airport.html" target="_blank" rel="noopener">Trenitalia 機場交通 ↗</a>'],
      ['SIT 機場巴士', 'FCO／CIA → Termini', '€7／€6', '約 45–60 分', '網路買；現場買多收 €2。塞車會很久。 <a href="https://www.sitbusshuttle.com/en/stops-and-timetables/" target="_blank" rel="noopener">SIT 官網 ↗</a>'],
      ['Terravision', 'FCO／CIA → Termini', '€4 起／€6.50 起', '約 45 分', '網路預購較便宜。 <a href="https://www.terravision.eu/airport_transfer/bus-fiumicino-airport-rome/" target="_blank" rel="noopener">Terravision 官網 ↗</a>'],
      ['計程車（固定價）', 'FCO ⇄ 奧勒良城牆內', '€55', '約 45 分', '4 人以內同價，含行李、夜間加成與高速公路費；大車第 5 人起每人加 €5。依 2026 年羅馬市府最新費率表。 <a href="https://www.comune.roma.it/web-resources/cms/documents/TariffarioTaxi_giugno2026.pdf" target="_blank" rel="noopener">市府計程車費率表 PDF ↗</a>'],
      ['計程車（固定價）', 'CIA ⇄ 奧勒良城牆內', '€40', '約 30 分', '只搭白色、有執照編號的官方計程車。'],
    ],
    tickets: [
      ['BIT 單程票', '€1.50', '100 分鐘內公車、電車無限轉乘；地鐵只能進站一次。2025/7 調價時 BIT 維持 €1.50，目前沒有漲到 €2 的正式公告。'],
      ['ROMA 24H', '€8.50', '首次打票起 24 小時無限搭（2025/7/1 起）'],
      ['ROMA 48H', '€15', '首次打票起 48 小時'],
      ['ROMA 72H', '€22', '首次打票起 72 小時（Day 1–3 用，Day 4 騎機車）'],
      ['CIS 週票', '€29', '用到第 7 天午夜'],
      ['Roma Pass 48H／72H', '€38／€62.90', '含交通加 1／2 個景點免費，不含 Leonardo Express。用 Roma Pass 進競技場仍要預約時段並付預約費。ATAC 網頁上的 €32／€52 是舊價。 <a href="https://www.romapass.it/" target="_blank" rel="noopener">Roma Pass 官網 ↗</a>'],
    ],
    cards: [
      {
        title: '🚇 地鐵',
        items: [
          '<b>A 線</b>：Termini、Spagna（西班牙階梯）、Ottaviano（梵蒂岡）。',
          '<b>B 線</b>：Termini、Colosseo、Circo Massimo、Piramide（Testaccio）。',
          '<b>C 線新段</b>（2025/12/16 通車）：San Giovanni、Porta Metronia、Colosseo/Fori Imperiali，可在 Colosseo 轉 B 線，站內有考古展示。',
          '營運約 05:30–23:30，週五、週六延長到約 01:30（⚠ 多個來源一致，但 ATAC 官網未能直接確認）。',
        ],
      },
      {
        title: '🚌 實用公車與電車',
        items: [
          '<b>64 號</b>：Termini → Largo Argentina → 聖彼得。<b>全羅馬扒手最多的路線</b>。',
          '<b>40 號</b>（快線）：Termini → 威尼斯廣場 → 聖天使堡附近（Lungotevere Sassia），不到聖彼得廣場。',
          '<b>118 號</b>：Circo Massimo → 卡拉卡拉浴場 → 阿皮亞古道（Quo Vadis、San Callisto），約 15–25 分一班。',
          '老城區（萬神殿、納沃納一帶）沒有地鐵，走路最快。',
        ],
      },
      {
        title: '🚕 計程車與叫車',
        items: [
          '羅馬計程車<b>不能路邊招</b>：用 App、到排班站，或打市府叫車電話 <b>060609</b>（也有官方 App「CHIAMA TAXI」）。',
          '<b>itTaxi</b>、<b>FreeNow</b>（2025 年被 Lyft 收購，App 照常用）叫的都是有執照的白色計程車。',
          '<b>Uber</b>：沒有 UberX，只有 Black／Lux／Van，另外可以透過 itTaxi 在 Uber App 裡叫一般計程車。',
          '在 Termini 等地方主動上前拉客的「計程車」大多是無照車，不要搭。',
        ],
      },
      {
        title: '📱 買票 App（ATAC 官網列出）',
        items: [
          '<b>MooneyGo</b>（舊名 myCicero）、Tabnet、Telepass Pay 等都能買 ATAC 電子票。',
          '<b>Trenitalia</b> App：買 Leonardo Express、FL1。',
          '其實最簡單：地鐵公車直接刷信用卡，機場快線也能直接刷卡進站。',
          '出發前看 Trenitalia「lavori programmati」（施工停駛公告），確認機場線沒有停駛。',
        ],
      },
      {
        title: '🗺️ 這次行程怎麼移動',
        items: [
          'Day 1、3：全程步行（每天約 8–12 km）。',
          'Day 2：地鐵 A 線到 Ottaviano 或 Cipro，回程走路過台伯河。',
          'Day 4：租機車；不騎車的話，B 線到 Circo Massimo 轉 118 號公車到阿皮亞古道。',
          '三天搭車用 <b>ROMA 72H（€22）</b>，或直接刷卡（每天最多 €8.50）。',
        ],
      },
    ],
    src: '<a href="https://www.atac.roma.it/en/tickets-and-passes" target="_blank">ATAC 票價</a>・<a href="https://www.trenitalia.com/" target="_blank">Trenitalia</a>・<a href="https://www.comune.roma.it/web-resources/cms/documents/TariffarioTaxi_giugno2026.pdf" target="_blank">羅馬市府計程車費率 2026</a>・<a href="https://romamobilita.it/muoversi-a-roma/taxi/" target="_blank">Roma Mobilità 計程車</a>・<a href="https://www.ilpost.it/2025/12/16/metro-c-aperte-fermate-colosseo-fori-imperiali-metronia/" target="_blank">Metro C 通車</a>・<a href="https://www.museiincomuneroma.it/en/node/1000015" target="_blank">Roma Pass 票價</a>・<a href="https://scioperi.mit.gov.it/mit2/public/scioperi" target="_blank">罷工日曆</a>',
  },


  /* ================= 租摩托車 ================= */
  scooter: {
    callouts: [
      { tone: 'red', icon: '🪪', html: '<b>駕照</b>：帶<b>台灣駕照正本＋國際駕照</b>。台義 2002 年起駕照互惠，短期停留可以用「國際駕照＋台灣駕照」駕駛（代表處說明，2013 年文件），租車行 Bici & Baci 也要求非歐盟旅客出示「本國駕照＋國際駕照」。<b>國際駕照上的機車類別在義大利怎麼認定，找不到官方說法</b>：一定要有普通重型機車以上駕照，出發前寄信問代表處（ita@boca.gov.tw）或租車行。只有汽車駕照就不要騎。 <a href="https://www.roc-taiwan.org/it/post/5432.html" target="_blank" rel="noopener">代表處：台義駕照互惠 ↗</a>' },
      { tone: '', icon: '🚫', html: '<b>ZTL 限制通行區</b>：歷史中心機車可以全天進出、停二輪車格；<b>只有 Tridente 區（西班牙廣場、Via del Corso 一帶）平日 06:30–19:00、週六 10:00–19:00 禁止機車</b>，違規會被拍照，罰單經租車行轉寄另收手續費。Trastevere 的 ZTL 機車豁免。 <a href="https://romamobilita.it/muoversi-a-roma/ztl-in-centro/" target="_blank" rel="noopener">Roma Mobilità ZTL 官方說明 ↗</a>' },
      { tone: 'blue', icon: '🛣️', html: '<b>阿皮亞古道新規定</b>：2026/9/19 起每週六、日 07:00–19:00 實施 ZTL（汽機車都管），週三可以騎。過了切奇莉亞・梅特拉墓約 200 m 起只限居民、行人、自行車。 <a href="https://romamobilita.it/muoversi-a-roma/ztl-appia-antica/" target="_blank" rel="noopener">阿皮亞古道 ZTL ↗</a>' },
    ],
    cards: [
      {
        title: '🛵 租車須知（以 Bici & Baci 為例）',
        items: [
          'Scooter 125cc €58／天（€13／小時）；Vespa 125cc €68／天（€15／小時），用 PayPal 或刷卡 9 折。',
          '押金依排氣量 €500／€700／€1000，刷卡預授權或現金；<b>車被偷要賠押金金額</b>。',
          '每張交通罰單租車行另收 €20＋稅手續費。',
          '要滿 18 歲；11 月營業 09:00–18:00。',
          '取車時拍照、錄影記錄車身既有刮痕。',
        ],
      },
      {
        title: '⚖️ 交通規則',
        items: [
          '安全帽：駕駛和乘客都<b>強制戴</b>，罰 €83–332，乘客沒戴駕駛一起罰。',
          '酒駕標準 0.5 g/L；<b>未滿 21 歲或駕照未滿 3 年是 0</b>。',
          '圓環內的車有優先權；當地機車常在車陣中鑽行。',
          '石板路（sampietrini）下雨非常滑，電車軌道要垂直跨過去。',
        ],
      },
      {
        title: '🅿️ 停車',
        items: [
          '白線免費；黃線是居民、身障或公務專用，不能停；機車專用格通常免費。',
          '藍線（付費格）機車要不要付錢，現行官方頁面沒寫（2014 年報導說不用付）→ <b>看現場告示牌</b>。',
          '不要擋人行道和斑馬線，會被拖吊。',
          '防竊：鎖碟煞，安全帽不要留在車上，晚上停在有照明的地方。',
        ],
      },
      {
        title: '🚲 沒有機車駕照的替代方案',
        items: [
          '阿皮亞古道遊客中心（Via Appia Antica 58/60）的 EcoBike 租自行車：城市車 €16／天、電輔車 €32／天，平日 9:30–13:00、14:00–17:00。',
          'EcoBike 自己也提醒：平日古道前 1.5 km 要跟汽車搶道，騎自行車要小心。',
          '到古道：地鐵 B 線 Circo Massimo 轉 118 號公車。',
          '<a href="https://www.ecobikeroma.it/costi-e-regolamento/" target="_blank" rel="noopener">EcoBike 價格與規定 ↗</a>',
        ],
      },
    ],
    shops: [
      { name: 'Bici & Baci', area: 'Termini 旁（另有 Via Cavour 302 分店）', addr: 'Via del Viminale 5', lat: 41.90109, lng: 12.49689, price: 'Scooter 125 €58／天、Vespa 125 €68／天', deposit: '€500／€700／€1000', badge: '行程取車點', note: '11 月 09:00–18:00。非歐盟要本國駕照＋國際駕照。', url: 'https://bicibaci.com/noleggio-biciclette-e-scooter/' },
      { name: 'Treno e Scooter', area: 'Termini 北側', addr: 'Via Castelfidardo 70/72', lat: 41.90536, lng: 12.50244, price: '請上官網查詢', note: '電話 +39 349 416 9730。', url: 'https://rent.trenoescooter.com/' },
      { name: 'Ecomoverent', area: 'Termini 旁', addr: 'Via dei Mille 8', lat: 41.90400, lng: 12.50305, price: 'Scooter €40 起／天', note: '電話 06 4470 4518。', url: 'https://ecomoverent.com/' },
      { name: 'Barberini Scooters For Rent', area: '巴貝里尼廣場附近', addr: 'Via della Purificazione 84', lat: 41.90480, lng: 12.48720, price: 'Liberty 125 €50／天、Vespa 125 €70／天', note: '⚠ 位在 Tridente 區邊緣，平日 19:00 前騎出來要注意路線。', url: 'https://www.rentscooter.it/' },
    ],
    routes: [
      {
        name: '路線 A：南羅馬古道線（Day 4 用這條）',
        km: '約 30 km・騎乘約 1.5 小時＋停留',
        desc: [
          'Termini → 阿文提諾山鑰匙孔 → 真理之口 → Testaccio 吃午餐。',
          '→ 卡拉卡拉浴場 → 穿過 Porta San Sebastiano 城門上阿皮亞古道。',
          '→ 聖賽巴斯蒂安地下墓穴 → 切奇莉亞・梅特拉墓（機車到此為止）。',
          '→ 往北騎上 Gianicolo 看 16:55 的夕陽 → 走河岸回 Termini 還車，避開 Tridente。',
          '⚠ 阿皮亞古道<b>週六、日 07:00–19:00 管制</b>，只能平日騎。',
        ],
        points: ['41.90109,12.49689', '41.88326,12.47819', '41.88814,12.48164', '41.87613,12.47475', '41.87910,12.49239', '41.85570,12.51560', '41.85213,12.52053', '41.89130,12.46125'],
      },
      {
        name: '路線 B：七丘全景線（傍晚版）',
        km: '約 15 km・騎乘約 1 小時',
        desc: [
          '競技場 → 帝國大道（Via dei Fori Imperiali）→ 威尼斯廣場。',
          '→ 沿台伯河騎到阿文提諾山 → Gianicolo 山頂露台。',
          '→ 下山到聖彼得廣場看夜景，回程走河岸，不穿過 Tridente。',
          '⚠ 11 月 18:00 前要還車（Bici & Baci），想夜騎要找營業更晚的車行。',
        ],
        points: ['41.89021,12.49223', '41.89590,12.48270', '41.88326,12.47819', '41.89130,12.46125', '41.90224,12.45730'],
      },
    ],
    src: '<a href="https://romamobilita.it/muoversi-a-roma/ztl/" target="_blank">Roma Mobilità ZTL</a>・<a href="https://romamobilita.it/muoversi-a-roma/ztl-appia-antica/" target="_blank">阿皮亞古道 ZTL</a>・<a href="https://bicibaci.com/faq/" target="_blank">Bici & Baci FAQ</a>・<a href="https://bicibaci.com/termini-e-condizioni/" target="_blank">Bici & Baci 條款</a>・<a href="https://www.ecobikeroma.it/faq-parco/" target="_blank">EcoBike 公園 FAQ</a>・<a href="https://brocardi.it/codice-della-strada/titolo-v/art171.html" target="_blank">道路交通法 171 條</a>・<a href="https://www.roc-taiwan.org/it/post/5432.html" target="_blank">代表處駕照說明</a>',
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
    { tone: 'red', icon: '⏰', html: '<b>現在就要做</b>：梵蒂岡博物館 11/9 上午時段已售完（10/8 查），馬上訂；競技場 11/8 的票約 10/9 上架；Armando 11/10 的位子約 10/11 午夜開放。' },
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
        '完整清單和官方連結在<b>「指南 → 🎫 訂票」</b>。',
        '<b>梵蒂岡博物館</b>：11/9 上午已售完（10/8 查），盡快訂。',
        '<b>競技場</b>：參觀日前 30 天開賣，11/8 的票約 10/9 上架。',
        '<b>Armando al Pantheon</b>：只接受官網訂位，11/10 的位子約 10/11 午夜（羅馬時間）開放。',
        '<b>博爾蓋塞美術館</b>：已開賣，週一休館。',
        '萬神殿 11 月的時段約 10 月中開賣。',
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
    ['Galleria Borghese（Gebart）', 'https://www.gebart.it/musei/galleria-borghese/'],
    ['Trevi 收費（羅馬觀光局）', 'https://www.turismoroma.it/en/news/trevi-fountain-new-entry-fee-one-romes-symbols'],
    ['Pantheon 官方購票', 'https://portale.museiitaliani.it/b2c/buyTicketless/33f77159-0acd-40c4-8524-701f33aae108'],
    ['San Clemente', 'https://www.basilicasanclemente.com'],
    ['Gambero Rosso', 'https://www.gamberorosso.it/'],
    ['Katie Parla', 'https://katieparla.com/'],
    ['Romeing', 'https://romeing.it/'],
    ['sicurauto（ZTL、計程車）', 'https://www.sicurauto.it/news/ztl-roma-orari-mappa-e-permessi/'],
    ['外交部領事事務局', 'https://www.boca.gov.tw/sp-foof-countrycp-03-53-ca74a-03-1.html'],
  ],
};
