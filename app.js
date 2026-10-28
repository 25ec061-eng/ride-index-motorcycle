(() => {
  const grid = document.querySelector('#bike-grid');
  const search = document.querySelector('#search');
  const makeSelect = document.querySelector('#manufacturer');
  const yearSelect = document.querySelector('#year');
  const categorySelect = document.querySelector('#category');
  const sortSelect = document.querySelector('#sort');
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  const loadMore = document.querySelector('#load-more');
  const endNote = document.querySelector('#end-note');
  const dialog = document.querySelector('#bike-dialog');
  const pageSize = 9;
  let visibleCount = pageSize;

  const unique = (key) => [...new Set(BIKES.map((bike) => bike[key]))].sort((a, b) => typeof a === 'number' ? b - a : a.localeCompare(b));
  unique('make').forEach((make) => makeSelect.add(new Option(make, make)));
  unique('year').forEach((year) => yearSelect.add(new Option(year, year)));
  unique('category').sort().forEach((style) => categorySelect.add(new Option(style, style)));
  document.querySelector('#hero-count').textContent = String(BIKES.length).padStart(2, '0');

  const filtered = () => {
    const term = search.value.trim().toLowerCase();
    const rows = BIKES.filter((bike) => {
      const matchesText = !term || [bike.make, bike.name, bike.category, bike.year, bike.engine].join(' ').toLowerCase().includes(term);
      return matchesText && (!makeSelect.value || bike.make === makeSelect.value) && (!yearSelect.value || String(bike.year) === yearSelect.value) && (!categorySelect.value || bike.category === categorySelect.value);
    });
    const [key, direction] = sortSelect.value.split('-');
    rows.sort((a, b) => {
      const left = key === 'name' ? `${a.make} ${a.name}` : a[key];
      const right = key === 'name' ? `${b.make} ${b.name}` : b[key];
      return (typeof left === 'string' ? left.localeCompare(right) : left - right) * (direction === 'asc' ? 1 : -1);
    });
    return rows;
  };

  const openDetails = (bike) => {
    document.querySelector('#dialog-image').style.backgroundImage = `url(https://images.unsplash.com/${bike.image}?auto=format&fit=crop&w=1200&q=85)`;
    document.querySelector('#dialog-kicker').textContent = `${bike.make.toUpperCase()} · ${bike.year}`;
    document.querySelector('#dialog-name').textContent = bike.name;
    document.querySelector('#dialog-meta').innerHTML = '';
    [bike.category, bike.engine, String(bike.year)].forEach((value) => {
      const chip = document.createElement('span'); chip.textContent = value; document.querySelector('#dialog-meta').append(chip);
    });
    document.querySelector('#dialog-description').textContent = bike.note;
    document.querySelector('#dialog-source').href = bike.source;
    dialog.showModal();
  };

  const render = () => {
    const rows = filtered();
    const shown = rows.slice(0, visibleCount);
    count.textContent = `Showing ${shown.length} of ${rows.length} ${rows.length === 1 ? 'model' : 'models'}`;
    empty.hidden = rows.length > 0;
    grid.hidden = rows.length === 0;
    grid.replaceChildren();
    shown.forEach((bike, index) => {
      const card = document.createElement('article');
      card.className = 'bike-card'; card.tabIndex = 0; card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${bike.year} ${bike.make} ${bike.name}`);
      card.style.animationDelay = `${Math.min(index * 35, 280)}ms`;
      card.innerHTML = `<div class="card-image"><img src="https://images.unsplash.com/${bike.image}?auto=format&fit=crop&w=800&q=75" alt="Motorcycle on the road" loading="lazy"><span class="card-year">${bike.year}</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="card-info"><div class="card-topline"><span class="card-maker">${bike.make.toUpperCase()}</span><span class="card-style">${bike.category}</span></div><h3>${bike.name}</h3><div class="card-foot"><span class="card-detail">${bike.engine}</span><span class="card-open">VIEW DETAILS ↗</span></div></div>`;
      card.addEventListener('click', () => openDetails(bike));
      card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openDetails(bike); } });
      grid.append(card);
    });
    const hasMore = rows.length > visibleCount;
    loadMore.hidden = !hasMore;
    endNote.hidden = hasMore || rows.length === 0;
  };

  [search, makeSelect, yearSelect, categorySelect, sortSelect].forEach((control) => control.addEventListener(control === search ? 'input' : 'change', () => { visibleCount = pageSize; render(); }));
  const reset = () => { search.value = ''; makeSelect.value = ''; yearSelect.value = ''; categorySelect.value = ''; sortSelect.value = 'year-desc'; visibleCount = pageSize; render(); };
  document.querySelector('#reset').addEventListener('click', reset);
  document.querySelector('#empty-reset').addEventListener('click', reset);
  loadMore.addEventListener('click', () => { visibleCount += pageSize; render(); });
  document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  document.addEventListener('keydown', (event) => { if (event.key === '/' && !['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); } });
  render();
})();

