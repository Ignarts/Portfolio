// Variables to store data about the slime
let happiness;
let energy;

let cooldownTimer = 5000;
let feedCooldown = false;
let playCooldown = false;
let restCooldown = false;

document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('happiness')){
        happiness = parseInt(localStorage.getItem('happiness'), 10);
        if (isNaN(happiness)) happiness = 50; // Fallback to default if NaN
    }

    if(localStorage.getItem('energy')){
        energy = parseInt(localStorage.getItem('energy'), 10);
        if (isNaN(energy)) energy = 50; // Fallback to default if NaN
    }

    updateStats();
});

// Function to Feed the slime
function feedSlime() {
    const feedButton = document.getElementById('feed-button');
    if (!feedCooldown) {
        energy = parseInt(energy, 10) + 10;
        if (energy > 100) energy = 100;
        updateStats();
        feedCooldown = true;
        feedButton.classList.add('low-Brightness');
        setTimeout(() => {
            feedCooldown = false;
            feedButton.classList.remove('low-Brightness');
        }, cooldownTimer);
    }
}

// Function to Play with the slime
function playWithSlime() {
    const playButton = document.getElementById('play-button');
    if (!playCooldown) {
        if (parseInt(energy, 10) > 0) {
            happiness = parseInt(happiness, 10) + 10;
            energy = parseInt(energy, 10) - 10;
            if (happiness > 100) happiness = 100;
            if (energy < 0) energy = 0;
            updateStats();
            playCooldown = true;
            playButton.classList.add('low-Brightness');
            setTimeout(() => {
                playCooldown = false;
                playButton.classList.remove('low-Brightness');
            }, cooldownTimer);
        } else {
            alert("Slime is too tired to play!");
        }
    }
}

// Function to Rest the slime
function restSlime() {
    const restButton = document.getElementById('rest-button');
    if (!restCooldown) {
        energy = parseInt(energy, 10) + 20;
        happiness = parseInt(happiness, 10) - 5;
        if (energy > 100) energy = 100;
        if (happiness < 0) happiness = 0;
        updateStats();
        restCooldown = true;
        restButton.classList.add('low-Brightness');
        setTimeout(() => {
            restCooldown = false;
            restButton.classList.remove('low-Brightness');
        }, cooldownTimer);
    }
}

// Update Stats on the screen
function updateStats() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('energy').innerText = energy;

    localStorage.setItem('happiness', happiness);
    localStorage.setItem('energy', energy);
}

// Make Slime lose energy over time. If energy is low, make it lose happiness as well
setInterval(() => {
    if (energy > 0) {
        energy -= 1;
        if (energy < 0) energy = 0;
    }

    if (energy < 20 && happiness > 0) {
        happiness -= 1;
        if (happiness < 0) happiness = 0;
    }

    updateStats();
}, 10000);