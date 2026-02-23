/* ============================================================
   SweepSheets — Broomball Roster App
   ============================================================ */

// ============================================================
// LZ-STRING v1.5.0 (inlined) — https://github.com/pieroxy/lz-string
// MIT License
// ============================================================
/* eslint-disable */
var LZString=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToBase64:function(r){if(null==r)return"";var n=i._compress(r,6,function(r){return o.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return t(o,r.charAt(n))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){for(var o=i.compress(r),n=new Uint8Array(2*o.length),e=0,t=o.length;e<t;e++){var s=o.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;e<t;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(r,o,n){if(null==r)return"";var e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),p=c+a,Object.prototype.hasOwnProperty.call(s,p))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),s[p]=f++,c=String(a)}if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==o-1){d.push(n(m));break}v++}return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(o,n,e){var t,i,s,u,a,p,c,l=[],f=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 2:return""}for(l[3]=c,i=c,v.push(c);;){if(g.index>o)return"";for(s=0,a=Math.pow(2,d),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(c=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[c])m=l[c];else{if(c!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});
/* eslint-enable */

// ============================================================
// STATE
// ============================================================

const STORAGE_KEY = 'sweepsheets_data';

const state = {
  players: [],
  team: { name: 'SweepSheets', season: '2025\u201326 Season' },
  tab: 'roster',
  view: 'cards',
  sort: { field: 'line', dir: 'asc' },
  filter: { search: '', position: '', status: '', line: '' },
  editingId: null,
  deletingId: null,
  shareMode: false,
};

// ============================================================
// STORAGE
// ============================================================

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    players: state.players,
    team: state.team,
  }));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.players) state.players = saved.players;
    if (saved.team)    state.team    = { ...state.team, ...saved.team };
  } catch (e) {
    console.warn('Could not load saved data:', e);
  }
}

// ============================================================
// SHARE — ENCODE / DECODE
// ============================================================

function encodeRosterData() {
  // Strip id/createdAt to keep the URL as short as possible
  const data = {
    team: state.team,
    players: state.players.map(({ id, createdAt, ...rest }) => rest),
  };
  return LZString.compressToEncodedURIComponent(JSON.stringify(data));
}

function decodeRosterData(encoded) {
  return JSON.parse(LZString.decompressFromEncodedURIComponent(encoded));
}

function getShareUrl() {
  const base = window.location.origin + window.location.pathname;
  return `${base}#share=${encodeRosterData()}`;
}

// Called at startup — returns true when the page was loaded via a share link
function checkShareMode() {
  const hash = window.location.hash;
  if (!hash.startsWith('#share=')) return false;
  try {
    const data = decodeRosterData(hash.slice(7));
    state.team    = { ...state.team, ...data.team };
    state.players = (data.players || []).map(p => ({
      id: genId(), createdAt: Date.now(),
      line: 'Bench', pp: false, pk: false, notes: '',
      ...p,
    }));
    state.shareMode = true;
    return true;
  } catch (e) {
    console.warn('Invalid share link:', e);
    history.replaceState(null, '', window.location.pathname);
    return false;
  }
}

// ============================================================
// HELPERS
// ============================================================

function genId() {
  return (typeof crypto !== 'undefined' && crypto.randomUUID)
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getFiltered() {
  const { search, position, status, line } = state.filter;
  return state.players
    .filter(p => {
      if (search) {
        const q = search.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.number.includes(q)) return false;
      }
      if (position && p.position !== position) return false;
      if (status   && p.status   !== status)   return false;
      if (line     && p.line     !== line)      return false;
      return true;
    })
    .slice()
    .sort((a, b) => {
      const { field, dir } = state.sort;
      let av = a[field] ?? '';
      let bv = b[field] ?? '';
      if (field === 'number') {
        av = parseInt(av, 10) || 9999;
        bv = parseInt(bv, 10) || 9999;
      }
      if (field === 'line') {
        const order = { '1': 0, '2': 1, '3': 2, 'Bench': 3 };
        av = order[av] ?? 4;
        bv = order[bv] ?? 4;
      }
      if (av < bv) return dir === 'asc' ? -1 : 1;
      if (av > bv) return dir === 'asc' ?  1 : -1;
      return 0;
    });
}

// ============================================================
// BADGE HELPERS
// ============================================================

function posBadge(pos) {
  const map = {
    Forward: 'badge-fwd',
    Defense: 'badge-def',
    Goalie:  'badge-goal',
  };
  return `<span class="badge ${map[pos] || ''}">${esc(pos) || '&mdash;'}</span>`;
}

function statusBadge(status) {
  const map = {
    Active:   'badge-active',
    Injured:  'badge-injured',
    Inactive: 'badge-inactive',
  };
  return `<span class="badge ${map[status] || ''}">${esc(status) || '&mdash;'}</span>`;
}

function lineBadge(line) {
  const map = { '1': 'badge-line1', '2': 'badge-line2', '3': 'badge-line3', Bench: 'badge-bench' };
  const label = line === 'Bench' ? 'Bench' : `Line ${line}`;
  return `<span class="badge ${map[line] || 'badge-bench'}">${label}</span>`;
}

function ppBadge(pp) {
  return pp ? '<span class="badge badge-pp" title="Power Play">PP</span>' : '';
}

function pkBadge(pk) {
  return pk ? '<span class="badge badge-pk" title="Penalty Kill">PK</span>' : '';
}

// ============================================================
// RENDER — STATS
// ============================================================

function renderStats() {
  const all = state.players;
  document.getElementById('statTotal').textContent    = all.length;
  document.getElementById('statActive').textContent   = all.filter(p => p.status === 'Active').length;
  document.getElementById('statForwards').textContent = all.filter(p => p.position === 'Forward').length;
  document.getElementById('statDefense').textContent  = all.filter(p => p.position === 'Defense').length;
  document.getElementById('statGoalies').textContent  = all.filter(p => p.position === 'Goalie').length;
}

// ============================================================
// RENDER — TEAM INFO
// ============================================================

function renderTeamInfo() {
  const nameEl   = document.getElementById('teamName');
  const seasonEl = document.getElementById('teamSeason');
  if (nameEl.textContent !== state.team.name)     nameEl.textContent   = state.team.name;
  if (seasonEl.textContent !== state.team.season) seasonEl.textContent = state.team.season;
}

// ============================================================
// RENDER — ROSTER
// ============================================================

function renderRoster() {
  const players  = getFiltered();
  const cardsEl  = document.getElementById('rosterCards');
  const tableEl  = document.getElementById('rosterTable');
  const emptyEl  = document.getElementById('emptyState');
  const isEmpty  = state.players.length === 0;
  const noMatch  = !isEmpty && players.length === 0;

  emptyEl.classList.toggle('hidden', !isEmpty);

  if (state.view === 'cards') {
    cardsEl.classList.remove('hidden');
    tableEl.classList.add('hidden');
    if (isEmpty) {
      cardsEl.innerHTML = '';
    } else if (noMatch) {
      cardsEl.innerHTML = '<div class="no-results">No players match your filters.</div>';
    } else {
      cardsEl.innerHTML = players.map(cardHTML).join('');
    }
  } else {
    cardsEl.classList.add('hidden');
    tableEl.classList.remove('hidden');
    const tbody = document.getElementById('rosterTableBody');
    if (isEmpty) {
      tbody.innerHTML = '';
    } else if (noMatch) {
      tbody.innerHTML = '<tr><td colspan="7" class="no-results">No players match your filters.</td></tr>';
    } else {
      tbody.innerHTML = players.map(rowHTML).join('');
    }
    updateSortIndicators();
  }
}

function cardHTML(p) {
  return `
    <div class="player-card" data-id="${esc(p.id)}">
      <div class="card-top">
        <div class="player-number">${p.number ? '#' + esc(p.number) : '&mdash;'}</div>
        <div class="card-badges">
          ${posBadge(p.position)}
          ${statusBadge(p.status)}
        </div>
      </div>
      <div class="player-name">${esc(p.name)}</div>
      <div class="card-line-row">
        ${lineBadge(p.line)}
        ${ppBadge(p.pp)}
        ${pkBadge(p.pk)}
      </div>
      ${p.notes ? `<div class="player-notes">${esc(p.notes)}</div>` : ''}
      <div class="card-actions">
        <button class="btn-icon" data-action="edit"   data-id="${esc(p.id)}" title="Edit player"   aria-label="Edit ${esc(p.name)}">&#9998;</button>
        <button class="btn-icon" data-action="delete" data-id="${esc(p.id)}" title="Remove player" aria-label="Remove ${esc(p.name)}">&#128465;</button>
      </div>
    </div>`;
}

function rowHTML(p) {
  const lineOptions = ['1', '2', '3', 'Bench']
    .map(v => `<option value="${v}" ${p.line === v ? 'selected' : ''}>${v === 'Bench' ? 'Bench' : 'Line ' + v}</option>`)
    .join('');
  return `
    <tr data-id="${esc(p.id)}">
      <td class="col-num">${p.number ? '#' + esc(p.number) : '&mdash;'}</td>
      <td><strong>${esc(p.name)}</strong>${p.notes ? `<br><span style="font-size:.75rem;color:var(--c-text-muted)">${esc(p.notes)}</span>` : ''}</td>
      <td>${posBadge(p.position)}</td>
      <td>${statusBadge(p.status)}</td>
      <td>
        <select class="inline-select" data-action="line" data-id="${esc(p.id)}" aria-label="Line assignment for ${esc(p.name)}">
          ${lineOptions}
        </select>
      </td>
      <td class="col-toggles">
        <button class="toggle-btn ${p.pp ? 'active-pp' : ''}" data-action="toggle-pp" data-id="${esc(p.id)}" title="Toggle Power Play" aria-pressed="${p.pp}">PP</button>
        <button class="toggle-btn ${p.pk ? 'active-pk' : ''}" data-action="toggle-pk" data-id="${esc(p.id)}" title="Toggle Penalty Kill" aria-pressed="${p.pk}">PK</button>
      </td>
      <td class="col-actions">
        <button class="btn-icon" data-action="edit"   data-id="${esc(p.id)}" title="Edit player"   aria-label="Edit ${esc(p.name)}">&#9998;</button>
        <button class="btn-icon" data-action="delete" data-id="${esc(p.id)}" title="Remove player" aria-label="Remove ${esc(p.name)}">&#128465;</button>
      </td>
    </tr>`;
}

function updateSortIndicators() {
  document.querySelectorAll('th.sortable').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    if (th.dataset.sort === state.sort.field) {
      th.classList.add(state.sort.dir === 'asc' ? 'sort-asc' : 'sort-desc');
    }
  });
}

// ============================================================
// RENDER — LINES
// ============================================================

function renderLines() {
  const el = document.getElementById('linesContent');

  const lines = [
    { key: '1',     label: 'Line 1', cls: 'line-1' },
    { key: '2',     label: 'Line 2', cls: 'line-2' },
    { key: '3',     label: 'Line 3', cls: 'line-3' },
    { key: 'Bench', label: 'Bench',  cls: 'line-bench' },
  ];

  let html = '<div class="lines-grid">';

  lines.forEach(({ key, label, cls }) => {
    const players  = state.players.filter(p => p.line === key);
    const forwards = players.filter(p => p.position === 'Forward');
    const defense  = players.filter(p => p.position === 'Defense');
    const goalies  = players.filter(p => p.position === 'Goalie');

    const groupHTML = (groupLabel, arr) => arr.length === 0 ? '' : `
      <div class="line-group">
        <span class="line-group-label">${groupLabel}</span>
        <div class="line-chips">${arr.map(chipHTML).join('')}</div>
      </div>`;

    html += `
      <div class="line-section ${cls}" data-line="${key}">
        <div class="line-title">${label}</div>
        ${players.length === 0
          ? '<p class="line-empty">No players assigned</p>'
          : groupHTML('Forwards', forwards) + groupHTML('Defense', defense) + groupHTML('Goalies', goalies)
        }
      </div>`;
  });

  html += '</div>';

  const ppPlayers = state.players.filter(p => p.pp);
  const pkPlayers = state.players.filter(p => p.pk);

  const noPlayersMsg = (type) =>
    `<p class="line-empty">No ${type} players set &mdash; toggle ${type} on players in the Roster tab.</p>`;

  html += `
    <div class="special-units">
      <div class="unit-section unit-pp">
        <div class="unit-title">&#9889; Power Play Unit</div>
        ${ppPlayers.length === 0
          ? noPlayersMsg('PP')
          : `<div class="line-chips">${ppPlayers.map(chipHTML).join('')}</div>`
        }
      </div>
      <div class="unit-section unit-pk">
        <div class="unit-title">&#128737; Penalty Kill Unit</div>
        ${pkPlayers.length === 0
          ? noPlayersMsg('PK')
          : `<div class="line-chips">${pkPlayers.map(chipHTML).join('')}</div>`
        }
      </div>
    </div>`;

  el.innerHTML = html;
  initLineDrag();
}

// ============================================================
// DRAG AND DROP — LINES TAB
// ============================================================

function initLineDrag() {
  if (state.shareMode) return;
  const linesEl = document.getElementById('linesContent');
  if (!linesEl) return;

  let draggingId = null;

  // Only chips inside the 4 line sections are drag sources (not special-unit summaries)
  linesEl.querySelectorAll('.line-section[data-line] .player-chip[data-id]').forEach(chip => {
    chip.addEventListener('dragstart', e => {
      draggingId = chip.dataset.id;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggingId);
      // Delay so the drag ghost renders at full opacity before we fade the source
      requestAnimationFrame(() => chip.classList.add('dragging'));
    });

    chip.addEventListener('dragend', () => {
      chip.classList.remove('dragging');
      linesEl.querySelectorAll('.line-section.drag-over')
        .forEach(s => s.classList.remove('drag-over'));
      draggingId = null;
    });
  });

  linesEl.querySelectorAll('.line-section[data-line]').forEach(section => {
    section.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      section.classList.add('drag-over');
    });

    section.addEventListener('dragleave', e => {
      // Only clear the highlight when leaving the section entirely, not when entering a child
      if (!section.contains(e.relatedTarget)) {
        section.classList.remove('drag-over');
      }
    });

    section.addEventListener('drop', e => {
      e.preventDefault();
      section.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain') || draggingId;
      if (!id) return;
      const targetLine = section.dataset.line;
      const player = state.players.find(p => p.id === id);
      if (player && player.line !== targetLine) {
        updatePlayer(id, { line: targetLine });
        // updatePlayer -> render -> renderLines -> initLineDrag() re-attaches all listeners
      }
    });
  });
}

function chipHTML(p) {
  const cls = { Forward: 'chip-fwd', Defense: 'chip-def', Goalie: 'chip-goal' }[p.position] || '';
  return `
    <div class="player-chip ${cls}" draggable="true" data-id="${esc(p.id)}" title="Drag to move to a different line">
      <span class="chip-number">${p.number ? '#' + esc(p.number) : '&mdash;'}</span>
      <span class="chip-name">${esc(p.name)}</span>
      <span class="chip-badges">${ppBadge(p.pp)}${pkBadge(p.pk)}</span>
    </div>`;
}

// ============================================================
// RENDER — TOP LEVEL
// ============================================================

function render() {
  renderTeamInfo();
  renderStats();
  if (state.tab === 'roster') {
    renderRoster();
  } else {
    renderLines();
  }
}

// ============================================================
// CRUD
// ============================================================

function addPlayer(data) {
  state.players.push({ id: genId(), createdAt: Date.now(), ...data });
  saveData();
  render();
}

function updatePlayer(id, data) {
  const idx = state.players.findIndex(p => p.id === id);
  if (idx !== -1) {
    state.players[idx] = { ...state.players[idx], ...data };
    saveData();
    render();
  }
}

function deletePlayer(id) {
  state.players = state.players.filter(p => p.id !== id);
  saveData();
  render();
}

// ============================================================
// MODAL — ADD / EDIT
// ============================================================

function openAddModal() {
  state.editingId = null;
  document.getElementById('modalTitle').textContent = 'Add Player';
  document.getElementById('playerForm').reset();
  document.getElementById('playerLine').value = 'Bench';
  document.getElementById('playerModal').classList.remove('hidden');
  document.getElementById('playerName').focus();
}

function openEditModal(id) {
  const p = state.players.find(p => p.id === id);
  if (!p) return;
  state.editingId = id;
  document.getElementById('modalTitle').textContent = 'Edit Player';
  document.getElementById('playerName').value     = p.name;
  document.getElementById('playerNumber').value   = p.number;
  document.getElementById('playerPosition').value = p.position;
  document.getElementById('playerStatus').value   = p.status;
  document.getElementById('playerLine').value     = p.line;
  document.getElementById('playerPP').checked     = !!p.pp;
  document.getElementById('playerPK').checked     = !!p.pk;
  document.getElementById('playerNotes').value    = p.notes;
  document.getElementById('playerModal').classList.remove('hidden');
  document.getElementById('playerName').focus();
}

function closePlayerModal() {
  document.getElementById('playerModal').classList.add('hidden');
  state.editingId = null;
}

// ============================================================
// MODAL — CONFIRM DELETE
// ============================================================

function openConfirmModal(id) {
  const p = state.players.find(p => p.id === id);
  if (!p) return;
  state.deletingId = id;
  document.getElementById('confirmPlayerName').textContent = p.name;
  document.getElementById('confirmModal').classList.remove('hidden');
  document.getElementById('confirmDeleteBtn').focus();
}

function closeConfirmModal() {
  document.getElementById('confirmModal').classList.add('hidden');
  state.deletingId = null;
}

// ============================================================
// CSV EXPORT
// ============================================================

function exportCSV() {
  if (state.players.length === 0) {
    alert('No players to export.');
    return;
  }
  const headers = ['Name', 'Number', 'Position', 'Status', 'Line', 'PP', 'PK', 'Notes'];
  const rows = state.players.map(p => [
    csvEsc(p.name),
    csvEsc(p.number),
    csvEsc(p.position),
    csvEsc(p.status),
    csvEsc(p.line),
    p.pp ? 'true' : 'false',
    p.pk ? 'true' : 'false',
    csvEsc(p.notes),
  ].join(','));

  const csv  = [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = state.team.name.replace(/\s+/g, '_') + '_roster.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function csvEsc(val) {
  const s = String(val ?? '');
  if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

// ============================================================
// CSV IMPORT
// ============================================================

// Pending file held while the import-options modal is open
let pendingImportFile = null;

function openImportOptionsModal(file) {
  pendingImportFile = file;
  document.getElementById('importFilename').textContent = file.name;
  // Always reset to "append" when opening
  document.querySelector('input[name="importMode"][value="append"]').checked = true;
  document.getElementById('importOptionsModal').classList.remove('hidden');
}

function closeImportOptionsModal() {
  document.getElementById('importOptionsModal').classList.add('hidden');
  pendingImportFile = null;
}

function importCSV(file, mode) {
  const reader = new FileReader();
  reader.onload = e => {
    const result = parseAndImportCSV(e.target.result, mode);
    let msg = mode === 'replace'
      ? `Roster replaced with ${result.added} player${result.added !== 1 ? 's' : ''}.`
      : `${result.added} player${result.added !== 1 ? 's' : ''} added to roster.`;
    if (result.skipped > 0)   msg += `\n${result.skipped} row(s) skipped (missing name).`;
    if (result.errors.length) msg += `\n\nWarnings:\n${result.errors.join('\n')}`;
    closeImportOptionsModal();
    alert(msg);
  };
  reader.onerror = () => {
    alert('Could not read the file. Please try again.');
    closeImportOptionsModal();
  };
  reader.readAsText(file);
}

function parseAndImportCSV(text, mode = 'append') {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return { added: 0, skipped: 0, errors: ['File has no data rows.'] };

  const headers = splitRow(lines[0]).map(h => h.trim().toLowerCase());
  const col     = name => headers.indexOf(name.toLowerCase());

  const nameIdx = col('name');
  if (nameIdx === -1) return { added: 0, skipped: 0, errors: ['"Name" column not found. Check your CSV headers.'] };

  let skipped = 0;
  const errors = [];
  const toAdd  = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols = splitRow(line);
    const name = (cols[nameIdx] ?? '').trim();
    if (!name) { skipped++; continue; }

    const pick = (key, allowed, fallback) => {
      const raw = (cols[col(key)] ?? '').trim();
      return allowed.find(v => v.toLowerCase() === raw.toLowerCase()) || fallback;
    };

    const boolCol = (key) => {
      const v = (cols[col(key)] ?? '').trim().toLowerCase();
      return v === 'true' || v === '1' || v === 'yes';
    };

    try {
      toAdd.push({
        id: genId(),
        createdAt: Date.now(),
        name,
        number:   (cols[col('number')] ?? '').trim(),
        position: pick('position', ['Forward', 'Defense', 'Goalie'], 'Forward'),
        status:   pick('status',   ['Active', 'Injured', 'Inactive'], 'Active'),
        line:     pick('line',     ['1', '2', '3', 'Bench'], 'Bench'),
        pp:       boolCol('pp'),
        pk:       boolCol('pk'),
        notes:    (cols[col('notes')] ?? '').trim(),
      });
    } catch (e) {
      errors.push(`Row ${i + 1}: ${e.message}`);
    }
  }

  // Apply all rows in one shot — single saveData() + render()
  if (mode === 'replace') {
    state.players = toAdd;
  } else {
    state.players.push(...toAdd);
  }
  saveData();
  render();

  return { added: toAdd.length, skipped, errors };
}

function splitRow(row) {
  const result = [];
  let cur = '', inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (ch === '"') {
      if (inQuotes && row[i + 1] === '"') { cur += '"'; i++; }
      else { inQuotes = !inQuotes; }
    } else if (ch === ',' && !inQuotes) {
      result.push(cur); cur = '';
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result;
}

// ============================================================
// MODAL — CSV EXAMPLE
// ============================================================

const EXAMPLE_CSV = `Name,Number,Position,Status,Line,PP,PK,Notes
Jake Broom,7,Forward,Active,1,true,false,Captain
Sara Sweep,12,Defense,Active,1,true,true,
Mike Ice,3,Goalie,Active,1,false,false,
Tyler Frost,22,Forward,Active,2,false,true,
Jess Chill,9,Forward,Active,2,true,false,
Ryan Rink,5,Defense,Active,2,false,true,
Dana Puck,18,Forward,Active,3,false,false,
Pat Glide,11,Defense,Active,3,false,false,
Sam Slide,4,Goalie,Inactive,Bench,false,false,Backup goalie`;

function openCsvExampleModal() {
  document.getElementById('csvExampleModal').classList.remove('hidden');
}

function closeCsvExampleModal() {
  document.getElementById('csvExampleModal').classList.add('hidden');
}

function downloadExampleCsv() {
  const blob = new Blob([EXAMPLE_CSV], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'sweepsheets_example.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================================
// MODAL — SHARE
// ============================================================

function openShareModal() {
  if (state.players.length === 0) {
    alert('Add some players before sharing.');
    return;
  }
  document.getElementById('shareUrlInput').value = getShareUrl();
  document.getElementById('shareModal').classList.remove('hidden');
  // Auto-select the URL text so the user can copy manually too
  setTimeout(() => document.getElementById('shareUrlInput').select(), 50);
}

function closeShareModal() {
  document.getElementById('shareModal').classList.add('hidden');
}

async function copyShareLink() {
  const input = document.getElementById('shareUrlInput');
  const btn   = document.getElementById('copyShareLinkBtn');
  try {
    await navigator.clipboard.writeText(input.value);
  } catch {
    // Fallback for browsers that block clipboard without user gesture
    input.select();
    document.execCommand('copy');
  }
  const orig = btn.textContent;
  btn.textContent = 'Copied!';
  setTimeout(() => { btn.textContent = orig; }, 2000);
}

function saveSharedRoster() {
  const count = state.players.length;
  if (count === 0) { alert('No players to save.'); return; }

  let existingCount = 0;
  try {
    existingCount = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').players?.length ?? 0;
  } catch {}

  const msg = existingCount > 0
    ? `Replace your current ${existingCount} player${existingCount !== 1 ? 's' : ''} with this shared roster (${count} player${count !== 1 ? 's' : ''})?`
    : `Save this shared roster (${count} player${count !== 1 ? 's' : ''}) to your device?`;

  if (!confirm(msg)) return;

  state.shareMode = false;
  document.body.classList.remove('share-mode');
  document.getElementById('shareBanner').classList.add('hidden');
  history.replaceState(null, '', window.location.pathname);
  saveData();
  render();
}

// ============================================================
// EVENTS
// ============================================================

function init() {
  const isShared = checkShareMode();
  if (!isShared) loadData();
  if (state.shareMode) {
    document.body.classList.add('share-mode');
    document.getElementById('shareBanner').classList.remove('hidden');
  }
  render();

  // ---- Team name / season in-place editing ----
  document.getElementById('teamName').addEventListener('blur', e => {
    const v = e.target.textContent.trim();
    state.team.name = v || 'SweepSheets';
    if (!v) e.target.textContent = state.team.name;
    saveData();
  });
  document.getElementById('teamSeason').addEventListener('blur', e => {
    state.team.season = e.target.textContent.trim();
    saveData();
  });
  ['teamName', 'teamSeason'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); e.target.blur(); }
    });
  });

  // ---- Tab switching ----
  document.getElementById('tabRoster').addEventListener('click', () => {
    state.tab = 'roster';
    document.getElementById('tabRoster').classList.add('active');
    document.getElementById('tabLines').classList.remove('active');
    document.getElementById('rosterTabContent').classList.remove('hidden');
    document.getElementById('linesTabContent').classList.add('hidden');
    render();
  });
  document.getElementById('tabLines').addEventListener('click', () => {
    state.tab = 'lines';
    document.getElementById('tabLines').classList.add('active');
    document.getElementById('tabRoster').classList.remove('active');
    document.getElementById('linesTabContent').classList.remove('hidden');
    document.getElementById('rosterTabContent').classList.add('hidden');
    render();
  });

  // ---- Header buttons ----
  document.getElementById('addPlayerBtn').addEventListener('click', openAddModal);
  document.getElementById('emptyAddBtn').addEventListener('click', openAddModal);
  document.getElementById('exportCsvBtn').addEventListener('click', exportCSV);
  document.getElementById('csvExampleBtn').addEventListener('click', openCsvExampleModal);
  document.getElementById('csvExampleClose').addEventListener('click', closeCsvExampleModal);
  document.getElementById('csvExampleCloseFtr').addEventListener('click', closeCsvExampleModal);
  document.getElementById('downloadExampleBtn').addEventListener('click', downloadExampleCsv);
  document.getElementById('csvExampleModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeCsvExampleModal();
  });
  document.getElementById('importCsvBtn').addEventListener('click', () => {
    document.getElementById('csvFileInput').click();
  });
  document.getElementById('importOptionsClose').addEventListener('click', closeImportOptionsModal);
  document.getElementById('importOptionsCancelBtn').addEventListener('click', closeImportOptionsModal);
  document.getElementById('importOptionsConfirmBtn').addEventListener('click', () => {
    if (!pendingImportFile) { closeImportOptionsModal(); return; }
    const mode = document.querySelector('input[name="importMode"]:checked')?.value || 'append';
    importCSV(pendingImportFile, mode);
  });
  document.getElementById('importOptionsModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeImportOptionsModal();
  });
  document.getElementById('csvFileInput').addEventListener('change', e => {
    if (e.target.files[0]) {
      openImportOptionsModal(e.target.files[0]);
      e.target.value = '';
    }
  });

  // ---- Share ----
  document.getElementById('shareBtn').addEventListener('click', openShareModal);
  document.getElementById('shareModalClose').addEventListener('click', closeShareModal);
  document.getElementById('shareModalCloseFtr').addEventListener('click', closeShareModal);
  document.getElementById('copyShareLinkBtn').addEventListener('click', copyShareLink);
  document.getElementById('saveCopyBtn').addEventListener('click', saveSharedRoster);
  document.getElementById('shareModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeShareModal();
  });

  // ---- Filters ----
  document.getElementById('searchInput').addEventListener('input', e => {
    state.filter.search = e.target.value;
    render();
  });
  document.getElementById('positionFilter').addEventListener('change', e => {
    state.filter.position = e.target.value;
    render();
  });
  document.getElementById('statusFilter').addEventListener('change', e => {
    state.filter.status = e.target.value;
    render();
  });
  document.getElementById('lineFilter').addEventListener('change', e => {
    state.filter.line = e.target.value;
    render();
  });

  // ---- View toggle ----
  document.getElementById('cardsViewBtn').addEventListener('click', () => {
    state.view = 'cards';
    document.getElementById('cardsViewBtn').classList.add('active');
    document.getElementById('tableViewBtn').classList.remove('active');
    document.getElementById('cardsViewBtn').setAttribute('aria-pressed', 'true');
    document.getElementById('tableViewBtn').setAttribute('aria-pressed', 'false');
    render();
  });
  document.getElementById('tableViewBtn').addEventListener('click', () => {
    state.view = 'table';
    document.getElementById('tableViewBtn').classList.add('active');
    document.getElementById('cardsViewBtn').classList.remove('active');
    document.getElementById('tableViewBtn').setAttribute('aria-pressed', 'true');
    document.getElementById('cardsViewBtn').setAttribute('aria-pressed', 'false');
    render();
  });

  // ---- Table sort (event delegation on document) ----
  document.addEventListener('click', e => {
    const th = e.target.closest('th.sortable');
    if (!th) return;
    const field = th.dataset.sort;
    if (state.sort.field === field) {
      state.sort.dir = state.sort.dir === 'asc' ? 'desc' : 'asc';
    } else {
      state.sort.field = field;
      state.sort.dir   = 'asc';
    }
    render();
  });

  // ---- Player card / table action buttons (event delegation) ----
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    if (state.shareMode) return;
    const { action, id } = btn.dataset;
    if (!id) return;

    if (action === 'edit') {
      openEditModal(id);
    } else if (action === 'delete') {
      openConfirmModal(id);
    } else if (action === 'toggle-pp') {
      const p = state.players.find(p => p.id === id);
      if (p) updatePlayer(id, { pp: !p.pp });
    } else if (action === 'toggle-pk') {
      const p = state.players.find(p => p.id === id);
      if (p) updatePlayer(id, { pk: !p.pk });
    }
  });

  // ---- Inline line select in table ----
  document.addEventListener('change', e => {
    if (state.shareMode) return;
    if (e.target.dataset.action === 'line') {
      updatePlayer(e.target.dataset.id, { line: e.target.value });
    }
  });

  // ---- Player form submit ----
  document.getElementById('playerForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = {
      name:     document.getElementById('playerName').value.trim(),
      number:   document.getElementById('playerNumber').value.trim(),
      position: document.getElementById('playerPosition').value,
      status:   document.getElementById('playerStatus').value,
      line:     document.getElementById('playerLine').value,
      pp:       document.getElementById('playerPP').checked,
      pk:       document.getElementById('playerPK').checked,
      notes:    document.getElementById('playerNotes').value.trim(),
    };
    if (!data.name) {
      document.getElementById('playerName').focus();
      return;
    }
    if (state.editingId) {
      updatePlayer(state.editingId, data);
    } else {
      addPlayer(data);
    }
    closePlayerModal();
  });

  // ---- Modal close handlers ----
  document.getElementById('modalClose').addEventListener('click',   closePlayerModal);
  document.getElementById('cancelBtn').addEventListener('click',    closePlayerModal);
  document.getElementById('confirmClose').addEventListener('click', closeConfirmModal);
  document.getElementById('confirmCancelBtn').addEventListener('click', closeConfirmModal);
  document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
    if (state.deletingId) deletePlayer(state.deletingId);
    closeConfirmModal();
  });

  // Click backdrop to close modals
  document.getElementById('playerModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closePlayerModal();
  });
  document.getElementById('confirmModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeConfirmModal();
  });

  // Escape key to close modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!document.getElementById('playerModal').classList.contains('hidden'))        closePlayerModal();
      if (!document.getElementById('confirmModal').classList.contains('hidden'))       closeConfirmModal();
      if (!document.getElementById('importOptionsModal').classList.contains('hidden')) closeImportOptionsModal();
      if (!document.getElementById('csvExampleModal').classList.contains('hidden'))    closeCsvExampleModal();
      if (!document.getElementById('shareModal').classList.contains('hidden'))         closeShareModal();
    }
  });
}

// ============================================================
// BOOT
// ============================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
