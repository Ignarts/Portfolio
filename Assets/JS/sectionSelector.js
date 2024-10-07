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
}