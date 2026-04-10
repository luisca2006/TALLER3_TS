"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const tbody = document.getElementById('seriesBody');
const avgRow = document.getElementById('avgRow');
function renderTable(selectedId = null) {
    tbody.innerHTML = '';
    data_1.SERIES.forEach((s) => {
        const tr = document.createElement('tr');
        if (s.id === selectedId)
            tr.classList.add('table-active');
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
    const avg = data_1.SERIES.reduce((sum, s) => sum + s.seasons, 0) / data_1.SERIES.length;
    avgRow.textContent = 'Seasons average: ' + Math.round(avg);
}
function showDetail(serie) {
    document.getElementById('detailSection').style.display = 'block';
    document.getElementById('cardImg').src = serie.image;
    document.getElementById('cardTitle').textContent = serie.name;
    document.getElementById('cardDesc').textContent = serie.description;
    const link = document.getElementById('cardLink');
    link.href = serie.url;
    link.textContent = serie.url;
    renderTable(serie.id);
}
renderTable();
