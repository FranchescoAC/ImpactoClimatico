
async function loadCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    if (!file) {
        alert('Por favor selecciona un archivo CSV');
        return;
    }

    const text = await file.text();
    const rows = text.split('\n').slice(1);
    const labels = [];
    const data = [];

    rows.forEach(row => {
        const cols = row.split(',');
        if (cols.length >= 2 && cols[1]) {
            labels.push(cols[0]);
            data.push(parseFloat(cols[1]));
        }
    });

    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Valores del CSV',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        }
    });
}

async function fetchGeminiWeather() {
    const geminiInfo = `Este es un ejemplo. Debes reemplazarlo por una llamada real a una API.`;
    document.getElementById("geminiData").textContent = geminiInfo;
}

window.onload = fetchGeminiWeather;
