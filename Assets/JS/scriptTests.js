let isLightMode = false;

document.addEventListener('DOMContentLoaded', (event) => {
    isLightMode = true;
    toggleMode();
});

const toggleMode = () => {
    if (isLightMode) {
        ChangeToDarkMode();
        AnimateButtonToDarkMode();
    } else {
        ChangeToLightMode();
        AnimateButtonToLightMode();
    }
    console.log('Mode changed to: ' + (isLightMode ? 'Light' : 'Dark'));
}

const ChangeToLightMode = () => {
    // Change body style to light
    document.body.classList.remove('body-Dark');
    document.body.classList.add('body-Light');

    // Change nav buttons to light
    const emptyButtons = document.querySelectorAll('.empty-Button');
    emptyButtons.forEach(button => {
        button.classList.remove('empty-Dark');
        button.classList.add('empty-Light');
    });

    // Change footer to light
    const footer = document.querySelector('footer');
    footer.classList.add('footer-Light');
    footer.classList.remove('footer-Dark');

    // Change intro to light
    const intro = document.getElementById('intro');
    intro.classList.add('intro-Light');
    intro.classList.remove('intro-Dark');
}

const ChangeToDarkMode = () => {
    // Change body style to dark
    document.body.classList.add('body-Dark');
    document.body.classList.remove('body-Light');

    // Change nav buttons to dark
    const emptyButtons = document.querySelectorAll('.empty-Button');
    emptyButtons.forEach(button => {
        button.classList.remove('empty-Light');
        button.classList.add('empty-Dark');
    });

    // Change footer to dark
    const footer = document.querySelector('footer');
    footer.classList.add('footer-Dark');
    footer.classList.remove('footer-Light');

    // Change intro to dark
    const intro = document.getElementById('intro');
    intro.classList.add('intro-Dark');
    intro.classList.remove('intro-Light');
}

/// Animate button to show light mode
const AnimateButtonToLightMode = () => {
    const modeButton = document.getElementById('modeButton');
    const modeImage = document.getElementById('modeImage');

    modeImage.src = 'Assets/Resources/Images/moon.svg';
    isLightMode = true;

    modeImage.classList.remove('rotate-Negative90');
    modeImage.classList.add('rotate-90');
    modeButton.classList.remove('lightMode');
    modeButton.classList.add('darkMode');

    isLightMode = true;
}

/// Animate button to show dark mode
const AnimateButtonToDarkMode = () => {
    const modeButton = document.getElementById('modeButton');
    const modeImage = document.getElementById('modeImage');

    modeImage.src = 'Assets/Resources/Images/brightness-high.svg';
    isLightMode = false;

    modeImage.classList.remove('rotate-90');
    modeImage.classList.add('rotate-Negative90');
    modeButton.classList.add('lightMode');
    modeButton.classList.remove('darkMode');

    isLightMode = false;
}