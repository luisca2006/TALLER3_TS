"use strict";
var tbody = document.getElementById('seriesBody');
var avgRow = document.getElementById('avgRow');
function renderTable(selectedId) {
    if (selectedId === void 0) { selectedId = null; }
    tbody.innerHTML = '';
    SERIES.forEach(function (s) {
        var tr = document.createElement('tr');
        if (s.id === selectedId)
            tr.classList.add('table-active');
        tr.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td><a href=\"#\">").concat(s.name, "</a></td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>\n    ");
        tr.style.cursor = 'pointer';
        tr.addEventListener('click', function () { return showDetail(s); });
        tbody.appendChild(tr);
    });
    var avg = SERIES.reduce(function (sum, s) { return sum + s.seasons; }, 0) / SERIES.length;
    avgRow.textContent = 'Seasons average: ' + Math.round(avg);
}
function showDetail(serie) {
    document.getElementById('detailSection').style.display = 'block';
    document.getElementById('cardImg').src = serie.image;
    document.getElementById('cardTitle').textContent = serie.name;
    document.getElementById('cardDesc').textContent = serie.description;
    var link = document.getElementById('cardLink');
    link.href = serie.url;
    link.textContent = serie.url;
    renderTable(serie.id);
}
renderTable();
