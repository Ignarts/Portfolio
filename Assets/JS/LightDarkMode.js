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

    // Change the blog articles to light
    const blogArticles = document.querySelectorAll('.blog-card');
    blogArticles.forEach(article => {
        article.classList.add('blog-Card-Light');
        article.classList.remove('blog-Card-Dark');
        // Change the blog-card::before to light
        article.classList.add('blog-Card-Light-Before');
        article.classList.remove('blog-Card-Dark-Before');
    });

    // Change the blog's h4 to light
    const blogDates = document.querySelectorAll('.blog-card-content h4');
    blogDates.forEach(date => {
        date.classList.add('blog-h4-Light');
        date.classList.remove('blog-h4-Dark');
    });

    // Change the blog's h2 to light
    const blogTitles = document.querySelectorAll('.blog-card-content h2');
    blogTitles.forEach(title => {
        title.classList.add('blog-h2-Light');
        title.classList.remove('blog-h2-Dark');
    });

    // Change the read more links to light
    const blogLinks = document.querySelectorAll('.read-more');
    blogLinks.forEach(link => {
        link.classList.add('read-More-Light');
        link.classList.remove('read-More-Dark');
    });

    // Change the Contact section to light
    const contactSection = document.querySelector('.section-Contact');
    contactSection.classList.add('contact-Light');
    contactSection.classList.remove('contact-Dark');

    // Change the form's Text Area to light
    const formTextArea = document.querySelectorAll('form textarea');
    formTextArea.forEach(textArea => {
        textArea.classList.add('form-TextArea-Light');
        textArea.classList.remove('form-TextArea-Dark');
    });

    // Change the form's input to light
    const formInput = document.querySelectorAll('form input');
    formInput.forEach(input => {
        input.classList.add('form-Input-Light');
        input.classList.remove('form-Input-Dark');
    });

    // Change Social Links to light
    const socialLinks = document.querySelectorAll('.social-icon svg');
    socialLinks.forEach(svg => {
        svg.classList.add('social-Light');
        svg.classList.remove('social-Dark');
    });
}

// Change to Dark Mode

const ChangeToDarkMode = () => {
    // Change body style to dark
    document.body.classList.add('body-Dark');
    document.body.classList.remove('body-Light');

    // Change header to dark
    const header = document.querySelector('header');
    header.classList.add('header-Dark');
    header.classList.remove('header-Light');

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

    // Change the blog articles to dark
    const blogArticles = document.querySelectorAll('.blog-card');
    blogArticles.forEach(article => {
        article.classList.add('blog-Card-Dark');
        article.classList.remove('blog-Card-Light');
        // Change the blog-card::before to dark
        article.classList.add('blog-Card-Dark-Before');
        article.classList.remove('blog-Card-Light-Before');
    });

    // Change the blog article tags to dark
    const blogTags = document.querySelectorAll('.blog-card-tag');
    blogTags.forEach(tag => {
        tag.classList.add('card-Tag-Dark');
        tag.classList.remove('card-Tag-Light');
    });

    // Change the blog's h4 to dark
    const blogDates = document.querySelectorAll('.blog-card-content h4');
    blogDates.forEach(date => {
        date.classList.add('blog-h4-Dark');
        date.classList.remove('blog-h4-Light');
    });

    // Change the blog's h2 to dark
    const blogTitles = document.querySelectorAll('.blog-card-content h2');
    blogTitles.forEach(title => {
        title.classList.add('blog-h2-Dark');
        title.classList.remove('blog-h2-Light');
    });

    // Change the read more links to dark
    const blogLinks = document.querySelectorAll('.read-more');
    blogLinks.forEach(link => {
        link.classList.add('read-More-Dark');
        link.classList.remove('read-More-Light');
    });

    // Change the Contact section to dark
    const contactSection = document.querySelector('.section-Contact');
    contactSection.classList.add('contact-Dark');
    contactSection.classList.remove('contact-Light');

    // Change the form's Text Area to dark
    const formTextArea = document.querySelectorAll('form textarea');
    formTextArea.forEach(textArea => {
        textArea.classList.add('form-TextArea-Dark');
        textArea.classList.remove('form-TextArea-Light');
    });

    // Change the form's input to dark
    const formInput = document.querySelectorAll('form input');
    formInput.forEach(input => {
        input.classList.add('form-Input-Dark');
        input.classList.remove('form-Input-Light');
    });

    // Change Social Links to dark
    const socialLinks = document.querySelectorAll('.social-icon svg');
    socialLinks.forEach(svg => {
        svg.classList.add('social-Dark');
        svg.classList.remove('social-Light');
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