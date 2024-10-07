document.addEventListener('DOMContentLoaded', (event) => {
    toggleSection('home');
});

function toggleSection(section) {
    const homeSection = document.getElementById('section-Home');
    const portfolioSection = document.getElementById('section-Portfolio');

    if (section === 'home') {
        homeSection.classList.remove('hidden');
        portfolioSection.classList.add('hidden');
    } else if (section === 'portfolio') {
        homeSection.classList.add('hidden');
        portfolioSection.classList.remove('hidden');
    }

    HighlightButton(section);
}

function HighlightButton(button) {
    const homeSection = document.getElementById('home');
    const portfolioSection = document.getElementById('portfolio');

    if(button === 'home') {
        homeSection.style.color = '#f0b427';
        portfolioSection.style.color = '#ffffff';
    }
    else if(button === 'portfolio') {
        homeSection.style.color = '#ffffff';
        portfolioSection.style.color = '#f0b427';
    }
}