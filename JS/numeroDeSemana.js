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

    const mensaje = `Semana ${weekNumber} del año ${year}. Han pasado ${daysPassed} días.`;  
    
    // Mostrar o esconder el mensaje  
    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {  
        infoDiv.textContent = mensaje;  
        infoDiv.style.display = "block"; // Mostrar el div  
        // Ocultar el mensaje después de 10 segundos  
        setTimeout(() => {  
            infoDiv.style.display = "none";  
        }, 3330);  
    } else {  
        infoDiv.style.display = "none"; // Ocultar el div si ya estaba visible  
    }  
});  
