document.addEventListener('DOMContentLoaded', function() {
    const links = [
        {
            href: 'mailto:ignaciomelendezuriz@gmail.com',
            imgSrc: 'Assets/Resources/Images/envelope-fill.svg',
            imgAlt: 'mailto'
        },
        {
            href: 'https://x.com/ignartsvg',
            imgSrc: 'Assets/Resources/Images/twitter-x.svg',
            imgAlt: 'twitter',
            target: '_blank'
        },
        {
            href: 'https://www.linkedin.com/in/ignaciomelendezuriz/',
            imgSrc: 'Assets/Resources/Images/linkedin.svg',
            imgAlt: 'linkedin',
            target: '_blank'
        },
        {
            href: 'https://github.com/Ignarts',
            imgSrc: 'Assets/Resources/Images/github.svg',
            imgAlt: 'github',
            target: '_blank'
        }
    ];

    function createLink(link) {
        return `
            <li>
                <a href="${link.href}" ${link.target ? `target="${link.target}"` : ''}>
                    <img src="${link.imgSrc}" alt="${link.imgAlt}">
                </a>
            </li>
        `;
    }

    function renderLinks() {
        const linksContainer = document.getElementById('social-links');
        links.forEach(link => {
            const linkHTML = createLink(link);
            linksContainer.innerHTML += linkHTML;
        });
    }

    renderLinks();
});