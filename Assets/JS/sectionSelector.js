document.addEventListener('DOMContentLoaded', (event) => {
    toggleSection('portfolio');
});

function toggleSection(section) {
    const homeSection = document.getElementById('section-Home');
    const portfolioSection = document.getElementById('section-Portfolio');
    const blogSection = document.getElementById('section-Blog');
    const contactSection = document.getElementById('section-Contact');

    if (section === 'home') {
        ShowHome(homeSection, portfolioSection, blogSection, contactSection);
    } else if (section === 'portfolio') {
        ShowPortfolio(homeSection, portfolioSection, blogSection, contactSection);
    }else if(section == 'blog'){
        ShowBlog(homeSection, portfolioSection, blogSection, contactSection);
    }
    else if(section == 'contact'){
        ShowContact(homeSection, portfolioSection, blogSection, contactSection);
    }

    HighlightButton(section);
}

const ShowHome = (homeSection, portfolioSection, blogSection, contactSection) => {
    console.log('ShowHome called');
    portfolioSection.classList.add('opacity-Zero');
    portfolioSection.classList.remove('opacity-100');
    blogSection.classList.add('opacity-Zero');
    blogSection.classList.remove('opacity-100');
    contactSection.classList.add('opacity-Zero');
    contactSection.classList.remove('opacity-100');

    setTimeout(() => {
        console.log('Transition complete for portfolioSection');
        portfolioSection.classList.add('hidden');
        blogSection.classList.add('hidden');
        contactSection.classList.add('hidden');

        homeSection.classList.remove('hidden');
        
        void homeSection.offsetWidth;

        homeSection.classList.add('opacity-100');
        homeSection.classList.remove('opacity-Zero');
    }, 300);
}

const ShowPortfolio = (homeSection, portfolioSection, blogSection, contactSection) => {
    console.log('ShowPortfolio called');
    homeSection.classList.add('opacity-Zero');
    homeSection.classList.remove('opacity-100');
    blogSection.classList.add('opacity-Zero');
    blogSection.classList.remove('opacity-100');
    contactSection.classList.add('opacity-Zero');
    contactSection.classList.remove('opacity-100');

    setTimeout(() => {
        console.log('Transition complete for homeSection');
        homeSection.classList.add('hidden');
        blogSection.classList.add('hidden');
        contactSection.classList.add('hidden');

        portfolioSection.classList.remove('hidden');
        
        void portfolioSection.offsetWidth;

        portfolioSection.classList.add('opacity-100');
        portfolioSection.classList.remove('opacity-Zero');
    }, 300);
}

const ShowBlog = (homeSection, portfolioSection, blogSection, contactSection) => {
    console.log('ShowBlog called');
    homeSection.classList.add('opacity-Zero');
    homeSection.classList.remove('opacity-100');
    portfolioSection.classList.add('opacity-Zero');
    portfolioSection.classList.remove('opacity-100');
    contactSection.classList.add('opacity-Zero');
    contactSection.classList.remove('opacity-100');

    setTimeout(() => {
        console.log('Transition complete for homeSection');
        homeSection.classList.add('hidden');
        portfolioSection.classList.add('hidden');
        contactSection.classList.add('hidden');

        blogSection.classList.remove('hidden');
        
        void blogSection.offsetWidth;

        blogSection.classList.add('opacity-100');
        blogSection.classList.remove('opacity-Zero');
    }, 300);
}

const ShowContact = (homeSection, portfolioSection, blogSection, contactSection) => {
    console.log('ShowContact called');
    homeSection.classList.add('opacity-Zero');
    homeSection.classList.remove('opacity-100');
    portfolioSection.classList.add('opacity-Zero');
    portfolioSection.classList.remove('opacity-100');
    blogSection.classList.add('opacity-Zero');
    blogSection.classList.remove('opacity-100');

    setTimeout(() => {
        console.log('Transition complete for homeSection');
        homeSection.classList.add('hidden');
        portfolioSection.classList.add('hidden');
        blogSection.classList.add('hidden');

        contactSection.classList.remove('hidden');
        
        void contactSection.offsetWidth;

        contactSection.classList.add('opacity-100');
        contactSection.classList.remove('opacity-Zero');
    }, 300);
}


// Highlight the button that is currently active
function HighlightButton(buttonId) {
    const buttons = document.querySelectorAll('.empty-Button');
    buttons.forEach(button => {
        if (button.id === buttonId) {
            if (button.classList.contains('empty-Light')) {
                button.classList.add('empty-Light-Selected');
                button.classList.remove('empty-Light');
                button.classList.remove('empty-Dark-Selected');
            } else if (button.classList.contains('empty-Dark')) {
                button.classList.add('empty-Dark-Selected');
                button.classList.remove('empty-Dark');
                button.classList.remove('empty-Light-Selected');
            }
        } else {
            if (button.classList.contains('empty-Light-Selected')) {
                button.classList.add('empty-Light');
                button.classList.remove('empty-Light-Selected');
                button.classList.remove('empty-Dark');
            } else if (button.classList.contains('empty-Dark-Selected')) {
                button.classList.add('empty-Dark');
                button.classList.remove('empty-Dark-Selected');
                button.classList.remove('empty-Light');
            }
        }
    });
}