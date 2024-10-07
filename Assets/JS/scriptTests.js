let isLightMode = false;

const toggleMode = () => {
    const body = document.body;
    const modeButton = document.getElementById('modeButton');
    const textElements = document.querySelectorAll('h1, h2, h3, p, strong, .intro-text, .subtitle');
    const links = document.querySelectorAll('a');

    if (isLightMode) {
        // Cambiar a modo oscuro
        body.style.backgroundColor = '#333';
        textElements.forEach(element => {
            element.style.color = 'white';
        });
        links.forEach(link => {
            link.style.color = '#e573ff';
        });

        // Animar el botón y cambiar la imagen
        modeButton.classList.add('rotate-90');
        setTimeout(() => {
            modeButton.src = 'Assets/Resources/Images/moon.svg';
            modeButton.classList.remove('rotate-90');
            modeButton.classList.add('rotate-0');
        }, 500);
    } else {
        // Cambiar a modo claro
        body.style.backgroundColor = 'white';
        textElements.forEach(element => {
            element.style.color = 'black';
        });
        links.forEach(link => {
            link.style.color = 'blue';
        });

        // Animar el botón y cambiar la imagen
        modeButton.classList.add('rotate-90');
        setTimeout(() => {
            modeButton.src = 'Assets/Resources/Images/brightness-high.svg';
            modeButton.classList.remove('rotate-90');
            modeButton.classList.add('rotate-0');
        }, 500);
    }

    isLightMode = !isLightMode;
}