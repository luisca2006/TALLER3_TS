import { SERIES } from './data';
import { Serie } from './serie';

const tbody = document.getElementById('seriesBody') as HTMLElement;
const avgRow = document.getElementById('avgRow') as HTMLElement;

function renderTable(selectedId: number | null = null): void {
  tbody.innerHTML = '';
  SERIES.forEach((s: Serie) => {
    const tr = document.createElement('tr');
    if (s.id === selectedId) tr.classList.add('table-active');
    tr.innerHTML = `
      <td>${s.id}</td>
      <td><a href="#">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', () => showDetail(s));
    tbody.appendChild(tr);
  });

  const avg: number = SERIES.reduce((sum, s) => sum + s.seasons, 0) / SERIES.length;
  avgRow.textContent = 'Seasons average: ' + Math.round(avg);
}

function showDetail(serie: Serie): void {
  (document.getElementById('detailSection') as HTMLElement).style.display = 'block';
  (document.getElementById('cardImg') as HTMLImageElement).src = serie.image;
  (document.getElementById('cardTitle') as HTMLElement).textContent = serie.name;
  (document.getElementById('cardDesc') as HTMLElement).textContent = serie.description;
  const link = document.getElementById('cardLink') as HTMLAnchorElement;
  link.href = serie.url;
  link.textContent = serie.url;
  renderTable(serie.id);
}

renderTable();