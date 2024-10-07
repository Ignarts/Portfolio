let isLightMode = false;

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
    document.body.classList.remove('body-Dark');
    document.body.classList.add('body-Light');
}

const ChangeToDarkMode = () => {
    document.body.classList.add('body-Dark');
    document.body.classList.remove('body-Light');
}

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