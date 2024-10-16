// Variables para almacenar la felicidad y energía del slime
let happiness = 50;
let energy = 50;

// Función para alimentar al slime
function feedSlime() {
    energy += 10;
    if (energy > 100) energy = 100;  // Limita la energía a 100
    updateStats();
}

// Función para jugar con el slime
function playWithSlime() {
    if (energy > 0) {
        happiness += 10;
        energy -= 10;
        if (happiness > 100) happiness = 100;  // Limita la felicidad a 100
        updateStats();
    } else {
        alert("Slime is too tired to play!");
    }
}

// Función para hacer descansar al slime
function restSlime() {
    energy += 20;
    happiness -= 5;  // Si descansa, baja un poco la felicidad
    if (energy > 100) energy = 100;
    if (happiness < 0) happiness = 0;
    updateStats();
}

// Actualiza las estadísticas en la pantalla
function updateStats() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('energy').innerText = energy;
}

// Simulación automática que reduce la energía con el tiempo
setInterval(() => {
    if (energy > 0) {
        energy -= 1;
        if (energy < 0) energy = 0;
    }
    updateStats();
}, 3000);  // Cada 3 segundos, baja la energía
