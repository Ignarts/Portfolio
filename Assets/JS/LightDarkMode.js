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

    // Change footer to light
    const footer = document.querySelector('footer');
    footer.classList.add('footer-Light');
    footer.classList.remove('footer-Dark');

    // Change intro to light
    const intro = document.getElementById('intro');
    intro.classList.add('intro-Light');
    intro.classList.remove('intro-Dark');

    // Change the links to light
    const links = document.querySelectorAll('#link');
    links.forEach(link => {
        link.classList.add('link-Light');
        link.classList.remove('link-Dark');
    });

    // Change the buttons to light
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.add('button-Light');
        button.classList.remove('button-Dark');
    });

    // Change the section buttons to light
    const sectionButtons = document.querySelectorAll('.empty-Button');
    sectionButtons.forEach(button => {
        if (button.classList.contains('empty-Dark-Selected')) {
            button.classList.add('empty-Light-Selected');
            button.classList.remove('empty-Dark-Selected');
        } else {
            button.classList.add('empty-Light');
            button.classList.remove('empty-Dark');
        }
    });

    // Change the project previews to light
    const projectPreviews = document.querySelectorAll('.project-preview');
    projectPreviews.forEach(preview => {
        preview.classList.add('preview-Light');
        preview.classList.remove('preview-Dark');
    });
}

const ChangeToDarkMode = () => {
    // Change body style to dark
    document.body.classList.add('body-Dark');
    document.body.classList.remove('body-Light');

    // Change footer to dark
    const footer = document.querySelector('footer');
    footer.classList.add('footer-Dark');
    footer.classList.remove('footer-Light');

    // Change intro to dark
    const intro = document.getElementById('intro');
    intro.classList.add('intro-Dark');
    intro.classList.remove('intro-Light');

    // Change the links to dark
    const links = document.querySelectorAll('#link');
    links.forEach(link => {
        link.classList.add('link-Dark');
        link.classList.remove('link-Light');
    });

    // Change the buttons to dark
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.add('button-Dark');
        button.classList.remove('button-Light');
    });

    // Change the section buttons to dark
    const sectionButtons = document.querySelectorAll('.empty-Button');
    sectionButtons.forEach(button => {
        if (button.classList.contains('empty-Light-Selected')) {
            button.classList.add('empty-Dark-Selected');
            button.classList.remove('empty-Light-Selected');
        } else {
            button.classList.add('empty-Dark');
            button.classList.remove('empty-Light');
        }
    });

    // Change the project previews to dark
    const projectPreviews = document.querySelectorAll('.project-preview');
    projectPreviews.forEach(preview => {
        preview.classList.add('preview-Dark');
        preview.classList.remove('preview-Light');
    });
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