const slimeImages = [
    "Assets/Slime/Images/SlimeAnimation1.png",
    "Assets/Slime/Images/SlimeAnimation2.png",
    "Assets/Slime/Images/SlimeAnimation3.png",
    "Assets/Slime/Images/SlimeAnimation4.png"
]

let currentImageIndex = 0;

function animateSlime() {
    const slime = document.getElementById('slime');
    currentImageIndex = (currentImageIndex + 1) % slimeImages.length;
    slime.src = slimeImages[currentImageIndex];
}

setInterval(animateSlime, 200);