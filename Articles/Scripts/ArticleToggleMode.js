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

    // Change header to light
    const header = document.querySelector('header');
    header.classList.add('header-Light');
    header.classList.remove('header-Dark');

    // Change title to light
    const titleText = document.getElementById('title');
    titleText.classList.add('title-Light');
    titleText.classList.remove('title-Dark');
}

const ChangeToDarkMode = () => {
    // Change body style to dark
    document.body.classList.remove('body-Light');
    document.body.classList.add('body-Dark');

    // Change header to dark
    const header = document.querySelector('header');
    header.classList.add('header-Dark');
    header.classList.remove('header-Light');

    // Change title to dark
    const titleText = document.getElementById('title');
    titleText.classList.add('title-Dark');
    titleText.classList.remove('title-Light');
}

/// Animate button to show light mode
const AnimateButtonToLightMode = () => {
    const modeButton = document.getElementById('modeButton');
    const modeImage = document.getElementById('modeImage');

    modeImage.src = '../../../Assets/Resources/Images/moon.svg';
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

    modeImage.src = '../../../Assets/Resources/Images/brightness-high.svg';
    isLightMode = false;

    modeImage.classList.remove('rotate-90');
    modeImage.classList.add('rotate-Negative90');
    modeButton.classList.add('lightMode');
    modeButton.classList.remove('darkMode');

    isLightMode = false;
}