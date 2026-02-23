/* ============================================================
   SweepSheets — Broomball Roster App
   ============================================================ */

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
      <div class="line-section ${cls}">
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
}

function chipHTML(p) {
  const cls = { Forward: 'chip-fwd', Defense: 'chip-def', Goalie: 'chip-goal' }[p.position] || '';
  return `
    <div class="player-chip ${cls}">
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

function importCSV(file) {
  const reader = new FileReader();
  reader.onload = e => {
    const result = parseAndImportCSV(e.target.result);
    let msg = `Imported ${result.added} player${result.added !== 1 ? 's' : ''}.`;
    if (result.skipped > 0)   msg += `\n${result.skipped} row(s) skipped (missing name).`;
    if (result.errors.length) msg += `\n\nWarnings:\n${result.errors.join('\n')}`;
    alert(msg);
  };
  reader.onerror = () => alert('Could not read the file. Please try again.');
  reader.readAsText(file);
}

function parseAndImportCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return { added: 0, skipped: 0, errors: ['File has no data rows.'] };

  const headers = splitRow(lines[0]).map(h => h.trim().toLowerCase());
  const col     = name => headers.indexOf(name.toLowerCase());

  const nameIdx = col('name');
  if (nameIdx === -1) return { added: 0, skipped: 0, errors: ['"Name" column not found. Check your CSV headers.'] };

  let added = 0, skipped = 0;
  const errors = [];

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
      addPlayer({
        name,
        number:   (cols[col('number')] ?? '').trim(),
        position: pick('position', ['Forward', 'Defense', 'Goalie'], 'Forward'),
        status:   pick('status',   ['Active', 'Injured', 'Inactive'], 'Active'),
        line:     pick('line',     ['1', '2', '3', 'Bench'], 'Bench'),
        pp:       boolCol('pp'),
        pk:       boolCol('pk'),
        notes:    (cols[col('notes')] ?? '').trim(),
      });
      added++;
    } catch (e) {
      errors.push(`Row ${i + 1}: ${e.message}`);
    }
  }

  return { added, skipped, errors };
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
// EVENTS
// ============================================================

function init() {
  loadData();
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
  document.getElementById('importCsvBtn').addEventListener('click', () => {
    document.getElementById('csvFileInput').click();
  });
  document.getElementById('csvFileInput').addEventListener('change', e => {
    if (e.target.files[0]) {
      importCSV(e.target.files[0]);
      e.target.value = '';
    }
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
      if (!document.getElementById('playerModal').classList.contains('hidden'))  closePlayerModal();
      if (!document.getElementById('confirmModal').classList.contains('hidden')) closeConfirmModal();
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
