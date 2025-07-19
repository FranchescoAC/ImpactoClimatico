<<<<<<< HEAD
async function callGemini(promptText) {
    const geminiDataDiv = document.getElementById("geminiData");
    geminiDataDiv.textContent = "Preguntando a Gemini..."; // Mensaje de carga

    // ¡¡ADVERTENCIA DE SEGURIDAD!!
    // Reemplaza 'TU_CLAVE_API_DE_GEMINI' con tu clave API REAL.
    // NUNCA HAGAS ESTO EN CÓDIGO DE PRODUCCIÓN.
    const API_KEY = 'AIzaSyDvlXTTMAIPVeHnED9ZQahMyBG9KYbxZPk'; 

    if (!window.GoogleGenerativeAI) {
        geminiDataDiv.textContent = "Error: Biblioteca GoogleGenerativeAI no cargada.";
        console.error("La biblioteca GoogleGenerativeAI no está disponible.");
        return;
    }

    try {
        const genAI = new window.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(promptText);
        const response = await result.response;
        const text = response.text();

        geminiDataDiv.textContent = `Respuesta de Gemini: ${text}`;
    } catch (error) {
        console.error("Error al llamar a Gemini:", error);
        geminiDataDiv.textContent = "No se pudo obtener la respuesta de Gemini. Asegúrate de que tu clave API sea correcta y que haya conexión.";
    }
}

// --- Tu código existente para cargar el CSV ---
=======

>>>>>>> 36be63ed08d5ebb5472e7cf9b58149e79b086645
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
<<<<<<< HEAD
    let csvContentForGemini = "Aquí están los datos de un archivo CSV:\n";
    csvContentForGemini += "Etiqueta,Valor\n"; // Encabezado para Gemini
=======
>>>>>>> 36be63ed08d5ebb5472e7cf9b58149e79b086645

    rows.forEach(row => {
        const cols = row.split(',');
        if (cols.length >= 2 && cols[1]) {
            labels.push(cols[0]);
            data.push(parseFloat(cols[1]));
<<<<<<< HEAD
            csvContentForGemini += `${cols[0]},${cols[1]}\n`; // Añade al contenido para Gemini
=======
>>>>>>> 36be63ed08d5ebb5472e7cf9b58149e79b086645
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
<<<<<<< HEAD

    // --- Llamar a Gemini después de cargar el CSV ---
    const prompt = `Analiza los siguientes datos CSV y dame algunas conclusiones o un resumen:
${csvContentForGemini}`;
    await callGemini(prompt);
}

// Ya no necesitas fetchGeminiWeather si usas loadCSV para iniciar la llamada a Gemini
// window.onload = fetchGeminiWeather; // Esta línea puede ser eliminada
=======
}

async function fetchGeminiWeather() {
    const geminiInfo = `Este es un ejemplo. Debes reemplazarlo por una llamada real a una API.`;
    document.getElementById("geminiData").textContent = geminiInfo;
}

window.onload = fetchGeminiWeather;
>>>>>>> 36be63ed08d5ebb5472e7cf9b58149e79b086645
