function updateClock() {
    const now = new Date(); // Obtiene la hora actual

    // Formatea las horas, minutos y segundos
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    // Combina los valores en formato HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Muestra la hora actual en el elemento #clock
    document.getElementById("clock").textContent = timeString;
}

// Llama a la función cada segundo
setInterval(updateClock, 1000);

// Llama a la función una vez al cargar la página
updateClock();