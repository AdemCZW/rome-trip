/* 羅馬四天 —— 全部畫面都由 data.js 的 TRIP 產生，改行程只動資料檔。
   版面是橫向分頁（#pager）：每一頁自己上下捲，頁與頁之間左右滑，
   用 CSS scroll-snap 做，不需要手勢函式庫。 */
(() => {
  const T = window.TRIP;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const ROME = [41.8986, 12.4769];
  const DAY_COLORS = ['#ff453a', '#ff9f0a', '#0a84ff', '#bf5af2']; // Apple 系統色
  const FOOD_COLOR = '#30b158';
  const GEM_COLOR = '#ff2d92';
  const MOTO_COLOR = '#5e5ce6';

  /* ---------- 小工具 ---------- */
  const gmap = (lat, lng, mode = 'walking') =>
    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=${mode}`;
  const gsearch = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const navBtn = (p, mode, label = '導航') =>
    p.lat ? `<a class="navlink" target="_blank" rel="noopener" href="${gmap(p.lat, p.lng, mode)}" onclick="event.stopPropagation()">➜ ${label}</a>` : '';
  const pills = (tags = []) => tags.map(([t, c]) => `<span class="pill ${c || ''}">${t}</span>`).join('');
  const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
  const callout = (c) => `<div class="callout ${c.tone || ''}"><div>${c.icon || '⚠️'}</div><div>${c.html}</div></div>`;
  const cardsInner = (arr) => arr.map((c) => `<div class="card"><h3>${c.title}</h3>${c.html || ''}${c.items ? list(c.items) : ''}</div>`).join('');
  const cards = (arr, cls = 'g2') => `<div class="grid ${cls}">${cardsInner(arr)}</div>`;
  // 表格：每格帶 data-label，手機上 CSS 把每一列攤成一張小卡
  const table = (head, rows, numCols = []) =>
    `<div class="card tbl-card"><table class="tbl"><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>` +
    rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${head[i]}" class="${numCols.includes(i) ? 'n' : ''}${i === 0 ? ' first' : ''}">${i === 0 ? `<b>${c}</b>` : c}</td>`).join('')}</tr>`).join('') +
    `</tbody></table></div>`;
  const seg = (el, items, cur, onPick) => {
    el.innerHTML = items.map((x) => `<button role="tab" class="${x.k === cur ? 'on' : ''}" data-k="${x.k}">${x.label}</button>`).join('');
    $$('button', el).forEach((b) => b.addEventListener('click', () => onPick(b.dataset.k)));
  };

  const store = {
    get start() { return localStorage.getItem('rome.start') || T.start || ''; },
    set start(v) { localStorage.setItem('rome.start', v); },
  };
  const addDays = (iso, n) => {
    const d = new Date(iso + 'T12:00:00');
    d.setDate(d.getDate() + n);
    return d;
  };
  const fmtDay = (d) => d.toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric', weekday: 'short' });
  const isoOf = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  /* ---------- 分頁 ---------- */
  const ICON = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    plan: '<rect x="3" y="4.5" width="18" height="16.5" rx="3"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M7.5 13.5h3M7.5 17h6"/>',
    map: '<path d="M9 4 3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>',
    food: '<path d="M7 2.5v19M4 2.5v5.5a3 3 0 0 0 6 0V2.5M17.5 21.5V2.5c-2.5 1-3.5 4-3.5 7.5 0 2 1 3 3.5 3"/>',
    guide: '<circle cx="12" cy="12" r="9.5"/><path d="M12 11v6M12 7.2v.1"/>',
  };
  const PAGES = $$('.page').map((el) => ({ id: el.id, label: el.dataset.title, el }));
  const pager = $('#pager');
  let cur = 0;
  $('#nav').innerHTML = PAGES.map((p) => `<a href="#${p.id}" data-go="${p.id}">${p.label}</a>`).join('');
  $('#tabbar').innerHTML = PAGES.map((p) =>
    `<a href="#${p.id}" data-go="${p.id}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON[p.id]}</svg><span>${p.label}</span></a>`).join('');

  function goTo(i, smooth = true) {
    i = Math.max(0, Math.min(PAGES.length - 1, i));
    pager.scrollTo({ left: i * pager.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
    setActive(i);
  }
  function setActive(i) {
    if (i === cur && document.body.dataset.page) return;
    cur = i;
    const p = PAGES[i];
    document.body.dataset.page = p.id;
    $('#pageTitle').textContent = p.label;
    $$('[data-go]').forEach((a) => a.classList.toggle('on', a.dataset.go === p.id && !a.classList.contains('brand') && !a.classList.contains('btn')));
    history.replaceState(null, '', '#' + p.id);
    $('#prevPage').disabled = i === 0;
    $('#nextPage').disabled = i === PAGES.length - 1;
    // Leaflet 在看不見的頁面裡量不到尺寸，換到地圖頁時要重新量
    requestAnimationFrame(() => {
      if (p.id === 'plan' && dayMap) fitDay();
      if (p.id === 'map' && bigMap) { bigMap.invalidateSize(); if (!bigMap._fitted) { bigMap.fitBounds(bigBounds, { padding: [30, 30] }); bigMap._fitted = true; } }
    });
    if (i > 0) localStorage.setItem('rome.swiped', '1');
  }
  // 滑動時依捲動位置判斷現在在哪一頁
  let raf;
  pager.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => setActive(Math.round(pager.scrollLeft / pager.clientWidth)));
  }, { passive: true });
  // 視窗大小改變（轉手機方向）時，停在同一頁
  new ResizeObserver(() => pager.scrollTo({ left: cur * pager.clientWidth })).observe(pager);
  // 頁內所有 #xxx 連結都改成切頁
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-go]');
    if (!a) return;
    e.preventDefault();
    goTo(PAGES.findIndex((p) => p.id === a.dataset.go));
  });
  $('#prevPage').addEventListener('click', () => goTo(cur - 1));
  $('#nextPage').addEventListener('click', () => goTo(cur + 1));
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, select') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowRight') goTo(cur + 1);
    if (e.key === 'ArrowLeft') goTo(cur - 1);
  });
  if (localStorage.getItem('rome.swiped')) $('#swipeHint').hidden = true;

  /* ---------- 地圖 ---------- */
  function makeMap(el, zoom = 14) {
    const m = L.map(el, { scrollWheelZoom: false, zoomControl: true }).setView(ROME, zoom);
    // CARTO 深色圖磚要 API key，改用 OSM 標準圖磚；深色模式用 CSS 濾鏡壓暗
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(m);
    return m;
  }
  const pinIcon = (color, label = '', round = false) =>
    L.divIcon({
      className: '',
      html: `<div class="pin ${round ? 'round' : ''}" style="--c:${color}"><span>${label}</span></div>`,
      iconSize: round ? [16, 16] : [26, 26],
      iconAnchor: round ? [8, 8] : [13, 26],
      popupAnchor: [0, round ? -8 : -24],
    });
  const popup = (title, sub, p, mode) =>
    `<b>${title}</b>${sub ? `<br><span style="color:var(--muted)">${sub}</span>` : ''}<br><div style="margin-top:8px">${navBtn(p, mode)}</div>`;

  /* ---------- 總覽 ---------- */
  $('#lead').innerHTML = T.lead;
  const startInput = $('#startDate');
  startInput.value = store.start;
  startInput.addEventListener('change', () => {
    store.start = startInput.value;
    renderTabs();
    renderDay(curDay);
    renderWeather();
    tick();
  });

  $('#stats').innerHTML = `
    <div class="stat live"><div class="k">羅馬時間</div><div class="v mono" id="tRome">--:--</div><div class="s" id="tRomeD"></div></div>
    <div class="stat live"><div class="k">台北時間</div><div class="v mono" id="tTpe">--:--</div><div class="s" id="tDiff"></div></div>
    <div class="stat live"><div class="k">羅馬現在</div><div class="v" id="wxNow">—</div><div class="s" id="wxNowS">讀取天氣中…</div></div>
    <div class="stat live"><div class="k">EUR → TWD</div><div class="v" id="fx">—</div><div class="s" id="fxS">讀取匯率中…</div></div>
    <div class="stat wide"><div class="k">出發倒數</div><div class="v" id="cd">—</div><div class="s" id="cdS"></div></div>`;

  function tzOffsetMin(tz, at = new Date()) {
    const p = new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })
      .formatToParts(at).reduce((o, x) => ((o[x.type] = x.value), o), {});
    return (Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute) - Math.floor(at.getTime() / 60000) * 60000) / 60000;
  }
  function tick() {
    const now = new Date();
    const t = (tz) => now.toLocaleTimeString('zh-TW', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false });
    $('#tRome').textContent = t('Europe/Rome');
    $('#tTpe').textContent = t('Asia/Taipei');
    $('#tRomeD').textContent = now.toLocaleDateString('zh-TW', { timeZone: 'Europe/Rome', month: 'long', day: 'numeric', weekday: 'short' });
    const diff = (tzOffsetMin('Asia/Taipei') - tzOffsetMin('Europe/Rome')) / 60;
    $('#tDiff').textContent = `比羅馬快 ${diff} 小時`;
    const s = store.start;
    if (s) {
      const days = Math.ceil((new Date(s + 'T00:00:00') - now) / 864e5);
      $('#cd').textContent = days > 0 ? `${days} 天` : days > -4 ? '旅行中' : '已結束';
      $('#cdS').textContent = `${fmtDay(addDays(s, 0))} – ${fmtDay(addDays(s, 3))}`;
    } else {
      $('#cd').textContent = '—';
      $('#cdS').textContent = '選出發日';
    }
  }
  async function loadFx() {
    try {
      const j = await (await fetch('https://open.er-api.com/v6/latest/EUR')).json();
      const v = j.rates.TWD;
      $('#fx').textContent = v.toFixed(2);
      $('#fxS').textContent = `€10 ≈ NT$${Math.round(v * 10)}`;
    } catch {
      $('#fx').textContent = '≈ 35';
      $('#fxS').textContent = '離線概估';
    }
  }

  /* ---------- 每日行程 ---------- */
  let curDay = 0;
  let dayMap, dayLayer, dayPts = [];
  const dayMarkers = [];

  function renderTabs() {
    $('#dayTabs').innerHTML = T.days.map((d, i) => {
      const date = store.start ? fmtDay(addDays(store.start, i)) : '';
      return `<button class="day-tab ${i === curDay ? 'on' : ''}" role="tab" style="--c:${DAY_COLORS[i]}" data-i="${i}">
        <span class="d">DAY ${i + 1}${date ? ` · ${date}` : ''}</span>
        <span class="t">${d.title}</span><span class="w">${d.area}</span></button>`;
    }).join('');
    $$('.day-tab').forEach((b) => b.addEventListener('click', () => renderDay(+b.dataset.i)));
  }
  function fitDay() {
    dayMap.invalidateSize();
    dayMap.closePopup();
    if (dayPts.length) dayMap.fitBounds(L.latLngBounds(dayPts.map((p) => [p.lat, p.lng])), { padding: [26, 26], maxZoom: 15 });
  }
  function renderDay(i) {
    curDay = i;
    $$('.day-tab').forEach((b) => b.classList.toggle('on', +b.dataset.i === i));
    // 只捲天數列本身；scrollIntoView 會連外層的橫向分頁一起捲走
    const tabs = $('#dayTabs'), tab = $(`.day-tab[data-i="${i}"]`);
    const dx = tab.getBoundingClientRect().left - tabs.getBoundingClientRect().left;
    tabs.scrollTo({ left: tabs.scrollLeft + dx - (tabs.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });
    const d = T.days[i];
    const c = DAY_COLORS[i];
    const pts = (dayPts = d.stops.filter((s) => s.lat));
    const route = pts.length > 1
      ? `https://www.google.com/maps/dir/?api=1&origin=${pts[0].lat},${pts[0].lng}&destination=${pts.at(-1).lat},${pts.at(-1).lng}` +
        `&waypoints=${pts.slice(1, -1).slice(0, 8).map((p) => `${p.lat},${p.lng}`).join('|')}&travelmode=${d.mode || 'walking'}`
      : '';
    let n = 0;
    $('#dayBody').innerHTML = `
      <div class="day-intro"><h2 class="h2" style="margin-top:0">${d.title}</h2><p>${d.summary}</p></div>
      <div class="day-actions">
        ${route ? `<a class="btn primary sm" target="_blank" rel="noopener" href="${route}">➜ 整天路線導航</a>` : ''}
        ${pills(d.tags)}
      </div>
      <ol class="tl">${d.stops.map((s) => {
        const idx = s.lat ? ++n : 0;
        return `<li><div class="time">${s.t || ''}</div>
          <div class="stop ${s.kind || ''}" style="--c:${c}" data-idx="${idx}">
            <div class="row1"><span class="nm">${idx ? `${idx}. ` : ''}${s.name}</span>${s.it ? `<span class="it">${s.it}</span>` : ''}</div>
            ${s.note ? `<div class="note">${s.note}</div>` : ''}
            ${s.tags || s.lat ? `<div class="meta">${pills(s.tags)}<span class="go">${navBtn(s, s.mode || d.mode || 'walking')}</span></div>` : ''}
          </div></li>`;
      }).join('')}</ol>`;
    $('#daySide').innerHTML = `<h3>${d.side.title}</h3>${list(d.side.items)}`;

    if (!dayMap) dayMap = makeMap('dayMap');
    if (dayLayer) dayLayer.remove();
    dayLayer = L.layerGroup().addTo(dayMap);
    dayMarkers.length = 0;
    pts.forEach((p, k) => {
      dayMarkers.push(L.marker([p.lat, p.lng], { icon: pinIcon(p.kind === 'food' ? FOOD_COLOR : c, k + 1) })
        .bindPopup(popup(p.name, p.it, p, d.mode)).addTo(dayLayer));
    });
    L.polyline(pts.map((p) => [p.lat, p.lng]), { color: c, weight: 3, opacity: .7, dashArray: '6 8' }).addTo(dayLayer);
    fitDay();
    setTimeout(fitDay, 120);

    $$('.stop[data-idx]').forEach((el) => {
      const k = +el.dataset.idx;
      if (!k) return;
      el.addEventListener('click', () => {
        const m = dayMarkers[k - 1];
        dayMap.flyTo(m.getLatLng(), 16, { duration: .6 });
        m.openPopup();
        // 手機版地圖在時間軸上方，點了要捲回去看
        if (window.innerWidth <= 960) $('#plan').scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  /* ---------- 全部地點地圖 ---------- */
  let bigMap, bigBounds;
  function renderBigMap() {
    const m = (bigMap = makeMap('bigMap', 13));
    const groups = {};
    const all = [];
    const add = (key, layer, ll) => { (groups[key] ||= L.layerGroup().addTo(m)).addLayer(layer); if (ll) all.push(ll); };

    T.days.forEach((d, i) => {
      d.stops.filter((s) => s.lat && s.kind !== 'food').forEach((s) => {
        add(`d${i}`, L.marker([s.lat, s.lng], { icon: pinIcon(DAY_COLORS[i], `${i + 1}`) }).bindPopup(popup(s.name, `Day ${i + 1}・${s.it || ''}`, s)), [s.lat, s.lng]);
      });
    });
    T.food.forEach((f) => {
      if (!f.lat) return;
      const gem = f.tag === 'gem';
      add(gem ? 'gem' : 'food', L.marker([f.lat, f.lng], { icon: pinIcon(gem ? GEM_COLOR : FOOD_COLOR, '', true) })
        .bindPopup(popup(f.name, `${f.cat}・${f.order.replace(/<[^>]+>/g, '').slice(0, 40)}`, f)), [f.lat, f.lng]);
    });
    T.scooter.shops.forEach((s) => {
      if (s.lat) add('moto', L.marker([s.lat, s.lng], { icon: pinIcon(MOTO_COLOR, 'M') }).bindPopup(popup(s.name, s.price, s)), [s.lat, s.lng]);
    });
    T.scooter.routes.forEach((r) => {
      const ll = r.points.map((x) => x.split(',').map(Number));
      add('ride', L.polyline(ll, { color: MOTO_COLOR, weight: 4, opacity: .8, dashArray: '2 8' }).bindPopup(`<b>${r.name}</b><br>${r.km}`));
    });
    bigBounds = L.latLngBounds(all);

    const filters = [
      ...T.days.map((d, i) => ({ k: `d${i}`, label: `Day ${i + 1}`, c: DAY_COLORS[i] })),
      { k: 'food', label: '名店', c: FOOD_COLOR },
      { k: 'gem', label: '隱藏美食', c: GEM_COLOR },
      { k: 'moto', label: '租車行', c: MOTO_COLOR },
      { k: 'ride', label: '騎車路線', c: MOTO_COLOR },
    ].filter((f) => groups[f.k]);
    $('#mapFilters').innerHTML = filters.map((f) => `<button class="chip on" data-k="${f.k}"><i style="background:${f.c}"></i>${f.label}</button>`).join('');
    $$('#mapFilters .chip').forEach((b) => b.addEventListener('click', () => {
      const on = b.classList.toggle('on');
      on ? groups[b.dataset.k].addTo(m) : groups[b.dataset.k].remove();
    }));
  }

  /* ---------- 美食：正餐／小吃／甜點／咖啡・酒 ---------- */
  let foodType = 'all';
  let foodTag = 'all';
  const foodCard = (f) => `
    <article class="card food">
      <div class="top-row"><h3>${f.name}</h3>${f.tag === 'gem' ? '<span class="pill gem">💎 隱藏版</span>' : '<span class="pill hot">🔥 名店</span>'}</div>
      <div class="area">${f.cat}・${f.area}${f.day ? `・<span style="color:${DAY_COLORS[f.day - 1]};font-weight:600">順路 Day ${f.day}</span>` : ''}</div>
      <div class="order">${f.order}</div>
      <dl class="facts">
        <dt>價位</dt><dd>${f.price}</dd>
        <dt>時間</dt><dd>${f.hours}</dd>
        ${f.reserve ? `<dt>訂位</dt><dd>${f.reserve}</dd>` : ''}
        <dt>地址</dt><dd>${f.addr}</dd>
      </dl>
      ${f.note ? `<div class="fnote">${f.note}</div>` : ''}
      <div class="foot">${navBtn(f, 'walking')}<a class="navlink ghost" target="_blank" rel="noopener" href="${gsearch(f.name + ' ' + f.addr)}">評論 / 照片</a></div>
    </article>`;
  function renderFood() {
    const types = T.foodTypes;
    seg($('#foodSeg'), [{ k: 'all', label: '全部' }, ...types.map((t) => ({ k: t.k, label: `${t.icon} ${t.short || t.label}` }))], foodType,
      (k) => { foodType = k; renderFood(); });
    $('#foodTags').innerHTML = [['all', '全部'], ['famous', '🔥 名店'], ['gem', '💎 隱藏版']]
      .map(([k, l]) => `<button class="chip ${foodTag === k ? 'on' : ''}" data-tag="${k}">${l}</button>`).join('');
    $$('#foodTags .chip').forEach((b) => b.addEventListener('click', () => { foodTag = b.dataset.tag; renderFood(); }));

    const groups = types.filter((t) => foodType === 'all' || t.k === foodType).map((t) => ({
      ...t, items: T.food.filter((f) => f.type === t.k && (foodTag === 'all' || f.tag === foodTag)),
    })).filter((g) => g.items.length);
    $('#foodBody').innerHTML = groups.map((g) => `
      <section class="food-group">
        <div class="fg-head"><span class="fg-ic">${g.icon}</span><div><h2 class="h2">${g.label} <span class="cnt">${g.items.length}</span></h2><p class="sub">${g.desc}</p></div></div>
        <div class="grid g3">${g.items.map(foodCard).join('')}</div>
      </section>`).join('') || '<p class="muted" style="margin-top:20px">沒有符合條件的店。</p>';
    $('#foodEtiquette').innerHTML = cardsInner(T.foodNotes);
  }

  /* ---------- 指南：交通／租機車／須知 ---------- */
  let guidePane = 'transport';
  function renderGuideSeg() {
    seg($('#guideSeg'), [{ k: 'transport', label: '🚇 交通' }, { k: 'scooter', label: '🛵 租機車' }, { k: 'tips', label: 'ℹ️ 須知' }], guidePane, (k) => {
      guidePane = k;
      $$('.guide-pane').forEach((p) => (p.hidden = p.dataset.pane !== k));
      renderGuideSeg();
      $('#guide').scrollTo({ top: 0 });
    });
  }
  function renderTransport() {
    const t = T.transport;
    $('#transportBody').innerHTML = (t.callouts || []).map(callout).join('') +
      `<h2 class="h2">機場 ⇄ 市區</h2>` + table(['方式', '路線', '票價', '時間', '備註'], t.airport, [2, 3]) +
      `<h2 class="h2">市區票種</h2>` + table(['票種', '價格', '說明'], t.tickets, [1]) +
      `<h2 class="h2">怎麼搭</h2>` + cards(t.cards) +
      (t.src ? `<p class="src">來源：${t.src}</p>` : '');
  }
  function renderScooter() {
    const s = T.scooter;
    $('#scooterBody').innerHTML = s.callouts.map(callout).join('') +
      cards(s.cards) +
      `<h2 class="h2">租車行</h2>` +
      `<div class="grid g3">${s.shops.map((x) => `
        <article class="card food">
          <div class="top-row"><h3>${x.name}</h3>${x.badge ? `<span class="pill info">${x.badge}</span>` : ''}</div>
          <div class="area">${x.area || ''}</div>
          <dl class="facts"><dt>價格</dt><dd>${x.price}</dd>${x.deposit ? `<dt>押金</dt><dd>${x.deposit}</dd>` : ''}<dt>地址</dt><dd>${x.addr}</dd></dl>
          ${x.note ? `<div class="fnote">${x.note}</div>` : ''}
          <div class="foot">${navBtn(x, 'walking')}${x.url ? `<a class="navlink ghost" target="_blank" rel="noopener" href="${x.url}">官網</a>` : ''}</div>
        </article>`).join('')}</div>` +
      `<h2 class="h2">推薦騎乘路線</h2>` +
      `<div class="grid g2">${s.routes.map((r) => {
        const p = r.points;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${p[0]}&destination=${p.at(-1)}&waypoints=${p.slice(1, -1).slice(0, 8).join('|')}&travelmode=driving`;
        return `<div class="card"><h3>${r.name}</h3><div class="area">${r.km}</div>${list(r.desc)}
          <div style="margin-top:12px"><a class="btn primary sm" target="_blank" rel="noopener" href="${url}">➜ 機車導航整條路線</a></div></div>`;
      }).join('')}</div>` +
      (s.src ? `<p class="src">來源：${s.src}</p>` : '');
  }
  function renderTips() {
    $('#tipsBody').innerHTML = (T.tipsCallouts || []).map(callout).join('') + cards(T.tips);
    $('#footer').innerHTML = `<p>資料整理於 ${T.updated}。票價、營業時間會變動，出發前請以官網為準。地圖 © OpenStreetMap；天氣 Open-Meteo；匯率 ExchangeRate-API。</p>
      <p class="src">參考來源：${T.sources.map((s) => `<a target="_blank" rel="noopener" href="${s[1]}">${s[0]}</a>`).join('・')}</p>`;
  }

  /* ---------- 天氣 ---------- */
  const WMO = (c) =>
    c === 0 ? ['☀️', '晴'] : c <= 2 ? ['🌤️', '晴時多雲'] : c === 3 ? ['☁️', '陰'] : c <= 48 ? ['🌫️', '霧'] :
    c <= 57 ? ['🌦️', '毛毛雨'] : c <= 67 ? ['🌧️', '雨'] : c <= 77 ? ['🌨️', '雪'] : c <= 82 ? ['🌧️', '陣雨'] : ['⛈️', '雷雨'];
  let wxCache;
  async function renderWeather() {
    $('#wxHint')?.remove();
    try {
      if (!wxCache) {
        const u = `https://api.open-meteo.com/v1/forecast?latitude=${ROME[0]}&longitude=${ROME[1]}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunset&timezone=Europe%2FRome&forecast_days=16`;
        wxCache = await (await fetch(u)).json();
      }
      const w = wxCache;
      const [ic, txt] = WMO(w.current.weather_code);
      $('#wxNow').textContent = `${ic} ${Math.round(w.current.temperature_2m)}°`;
      $('#wxNowS').textContent = `${txt}・體感 ${Math.round(w.current.apparent_temperature)}°`;
      const trip = store.start ? [0, 1, 2, 3].map((k) => isoOf(addDays(store.start, k))) : [];
      $('#wxDays').innerHTML = w.daily.time.map((day, k) => {
        const [i2, t2] = WMO(w.daily.weather_code[k]);
        const on = trip.includes(day);
        return `<div class="wx ${on ? 'trip' : ''}">
          <div class="dd">${on ? `<b style="color:var(--accent)">DAY ${trip.indexOf(day) + 1}</b> ` : ''}${fmtDay(new Date(day + 'T12:00:00'))}</div>
          <div class="ic" title="${t2}">${i2}</div>
          <div class="tt">${Math.round(w.daily.temperature_2m_max[k])}° <span>/ ${Math.round(w.daily.temperature_2m_min[k])}°</span></div>
          <div class="rr">💧 ${w.daily.precipitation_probability_max[k] ?? '-'}%</div>
          <div class="dd">🌇 ${w.daily.sunset[k].slice(11)}</div></div>`;
      }).join('');
      if (trip.length && !trip.some((d) => w.daily.time.includes(d))) {
        $('#wxDays').insertAdjacentHTML('beforebegin', `<div class="callout blue" id="wxHint"><div>📅</div><div>行程日還不在 16 天預報範圍內，<b>${fmtDay(addDays(store.start, -15))}</b> 起這裡會出現行程日的預報。下面先顯示羅馬最近的天氣。</div></div>`);
      }
    } catch {
      $('#wxNow').textContent = '—';
      $('#wxNowS').textContent = '讀取失敗';
      $('#wxDays').innerHTML = '<p class="muted">即時天氣讀取失敗，請參考下方月均氣候。</p>';
    }
  }
  function renderClimate() {
    const c = T.climate;
    $('#climateBody').innerHTML = `<h2 class="h2">羅馬月均氣候</h2>` +
      table(['月份', '均高', '均低', '雨天', '日落約', '穿搭'], c.rows.map((r) => [r[0], `${r[1]}°`, `${r[2]}°`, r[3], r[4], r[5]]), [1, 2, 3, 4]) +
      (c.note ? `<p class="src">${c.note}</p>` : '');
  }

  /* ---------- 啟動 ---------- */
  tick();
  setInterval(tick, 15000);
  renderTabs();
  renderDay(0);
  renderBigMap();
  renderFood();
  renderGuideSeg();
  renderTransport();
  renderScooter();
  renderTips();
  renderClimate();
  renderWeather();
  loadFx();
  const start = PAGES.findIndex((p) => '#' + p.id === location.hash);
  requestAnimationFrame(() => goTo(start < 0 ? 0 : start, false));
})();
