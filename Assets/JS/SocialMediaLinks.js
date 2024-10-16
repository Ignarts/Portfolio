document.addEventListener('DOMContentLoaded', function () {
    const links = [
        {
            href: 'mailto:ignaciomelendezuriz@gmail.com',
            svgPath: 'Assets/Resources/Images/envelope-fill.svg',
            imgAlt: 'mailto'
        },
        {
            href: 'https://x.com/ignartsvg',
            svgPath: 'Assets/Resources/Images/twitter-x.svg',
            imgAlt: 'twitter',
            target: '_blank'
        },
        {
            href: 'https://www.linkedin.com/in/ignaciomelendezuriz/',
            svgPath: 'Assets/Resources/Images/linkedin.svg',
            imgAlt: 'linkedin',
            target: '_blank'
        },
        {
            href: 'https://github.com/Ignarts',
            svgPath: 'Assets/Resources/Images/github.svg',
            imgAlt: 'github',
            target: '_blank'
        }
    ];

        function fetchSVG(link) {
        return fetch(link.svgPath)
            .then(response => response.text())
            .then(svgContent => {
                const svgWithClass = svgContent.replace('<svg', '<svg class="social-Dark"');
                return `
                    <li>
                        <a href="${link.href}" ${link.target ? `target="${link.target}"` : ''}>
                            <div class="social-icon">${svgWithClass}</div>
                        </a>
                    </li>
                `;
            });
    }

    function renderLinks() {
        const linksContainer = document.getElementById('social-links');
        const promises = links.map(link => fetchSVG(link));
        Promise.all(promises).then(linkHTMLs => {
            linksContainer.innerHTML = linkHTMLs.join('');
        });
    }

    renderLinks();
});