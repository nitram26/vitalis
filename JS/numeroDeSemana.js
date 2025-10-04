function getWeekNumber(d) {  
    const date = new Date(d.getTime());  
    date.setHours(0, 0, 0, 0);  
    // Ajustar para que el domingo sea el primer día de la semana  
    date.setDate(date.getDate() + 1 - (date.getDay() || 7));  
    const yearStart = new Date(date.getFullYear(), 0, 1);  
    return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);  
}  

function daysPassedInYear(d) {  
    const startOfYear = new Date(d.getFullYear(), 0, 1);  
    const diffTime = d - startOfYear; // Diferencia en milisegundos  
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convertir a días  
}  

document.getElementById('info-button').addEventListener('click', () => {
    const infoDiv = document.getElementById('semana-info');
    const today = new Date();
    const weekNumber = getWeekNumber(today);
    const year = today.getFullYear();
    const daysPassed = daysPassedInYear(today);

    // Formatear la fecha actual (ejemplo: miércoles, 3 de septiembre de 2025)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = today.toLocaleDateString('es-PE', options);

    // Usar saltos de línea HTML
    const mensaje = `
        📅 Hoy es ${fechaFormateada}. <br>
        📌 Semana ${weekNumber} del año ${year}. <br>
        ⏳ Han pasado ${daysPassed} días. <br>
        📖 Quedan ${365-daysPassed} días para Iniciar el año ${year+1}. <br>
    `;

    // Mostrar o esconder el mensaje
    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
        infoDiv.innerHTML = mensaje; // ⬅ cambio a innerHTML
        infoDiv.style.display = "block"; 
        setTimeout(() => {
            infoDiv.style.display = "none";
        }, 7777);
    } else {
        infoDiv.style.display = "none"; 
    }
});

