// Variables to store data about the slime
let happiness = 50;
let energy = 50;

let feedCooldown = false;
let playCooldown = false;
let restCooldown = false;

// Function to Feed the slime
function feedSlime() {
    const feedButton = document.getElementById('feed-button');
    if (!feedCooldown) {
        energy += 10;
        if (energy > 100) energy = 100;
        updateStats();
        feedCooldown = true;
        feedButton.classList.add('low-Brightness');
        setTimeout(() => {
            feedCooldown = false;
            feedButton.classList.remove('low-Brightness');
        }, 5000);
    }
}

// Function to Play with the slime
function playWithSlime() {
    const playButton = document.getElementById('play-button');
    if (!playCooldown) {
        if (energy > 0) {
            happiness += 10;
            energy -= 10;
            if (happiness > 100) happiness = 100;
            if (energy < 0) energy = 0;
            updateStats();
            playCooldown = true;
            playButton.classList.add('low-Brightness');
            setTimeout(() => {
                playCooldown = false;
                playButton.classList.remove('low-Brightness');
            }, 5000);
        } else {
            alert("Slime is too tired to play!");
        }
    }
}

// Function to Rest the slime
function restSlime() {
    const restButton = document.getElementById('rest-button');
    if (!restCooldown) {
        energy += 20;
        happiness -= 5;
        if (energy > 100) energy = 100;
        if (happiness < 0) happiness = 0;
        updateStats();
        restCooldown = true;
        restButton.classList.add('low-Brightness');
        setTimeout(() => {
            restCooldown = false;
            restButton.classList.remove('low-Brightness');
        }, 5000);
    }
}

// Update Stats on the screen
function updateStats() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('energy').innerText = energy;
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
}, 3000);