document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            type: 'works',
            title: 'Racerloop',
            description: 'A spaceship multiplayer game available on EPIC STORE.',
            imgSrc: 'Assets/Resources/Images/Gallery-03.jpg',
            imgAlt: 'racerloop',
            link: "/Portfolio/Articles/HTML/Portfolio/Ptf_Racerloop.html"
        },
        {
            type: 'works',
            title: 'Otter\'s Hell',
            description: 'A Roguelite game of otters vs. hamsters.',
            imgSrc: 'Assets/Resources/OttersHell/OHGameplay_Card.png',
            imgAlt: 'ottersHell',
            link: "/Portfolio/Articles/HTML/Portfolio/Ptf_Otters.html"
        },
    ];

    function createProject(project) {
        const link = project.link ? `onclick="window.location.href='${project.link}'"` : '';
        return `
            <article class="blog-card"  ${link}>
                <div class="blog-card-img">
                    <img src="${project.imgSrc}" alt="${project.imgAlt}">
                </div>
                <div class="blog-card-content">
                    <h2 class="card-Title">${project.title}</h2>
                    <p>${project.description}</p>
                </div>
            </article>
        `;
    }

    function renderProjects() {
        const worksContainer = document.getElementById('works-projects');
        //const personalContainer = document.getElementById('personal-projects');

        projects.forEach(project => {
            const projectHTML = createProject(project);
            if (project.type === 'works') {
                worksContainer.innerHTML += projectHTML;
            } else if (project.type === 'personal') {
                personalContainer.innerHTML += projectHTML;
            }
        });
    }

    renderProjects();
});