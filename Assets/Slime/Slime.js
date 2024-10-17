// Variables to store data about the slime
let happiness = 50;
let energy = 50;

// Function to Feed the slime
function feedSlime() {
    energy += 10;
    if (energy > 100) energy = 100;
    updateStats();
}

// Function to Play with the slime
function playWithSlime() {
    if (energy > 0) {
        happiness += 10;
        energy -= 10;
        if (happiness > 100) happiness = 100;
        if(energy < 0) energy = 0;
        updateStats();
    } else {
        alert("Slime is too tired to play!");
    }
}

// Function to Rest the slime
function restSlime() {
    energy += 20;
    happiness -= 5;
    if (energy > 100) energy = 100;
    if (happiness < 0) happiness = 0;
    updateStats();
}

// Update Stats on the screen
function updateStats() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('energy').innerText = energy;
}

// Make Slime loose energy over time
setInterval(() => {
    if (energy > 0) {
        energy -= 1;
        if (energy < 0) energy = 0;
    }
    updateStats();
}, 3000);
