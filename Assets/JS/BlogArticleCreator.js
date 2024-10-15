document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            title: 'Otter\'s Hell',
            date: '10-10-2024',
            description: 'A Roguelite of otters vs hamsters',
            imgSrc: 'Assets/Resources/OttersHell/OHGameplay_Card.png',
            imgAlt: 'ottersHell',
            type: 'Games',
        },
        {
            title: 'Otter\'s Hell',
            date: '10-10-2024',
            description: 'A Roguelite of otters vs hamsters',
            imgSrc: 'Assets/Resources/OttersHell/OHGameplay_Card.png',
            imgAlt: 'ottersHell',
            type: 'Unity',
        },
        {
            title: 'Otter\'s Hell',
            date: '10-10-2024',
            description: 'A Roguelite of otters vs hamsters',
            imgSrc: 'Assets/Resources/OttersHell/OHGameplay_Card.png',
            imgAlt: 'ottersHell',
            type: 'Tools',
        },
        {
            title: 'Otter\'s Hell',
            date: '10-10-2024',
            description: 'A Roguelite of otters vs hamsters',
            imgSrc: 'Assets/Resources/OttersHell/OHGameplay_Card.png',
            imgAlt: 'ottersHell',
            type: 'Devlog',
        }
    ]

    function createBlogArticle(article)
    {
        return `
            <article class="blog-card">
                    <div class="blog-card-img">
                        <p class="blog-card-tag ${article.type}-Tag " id="colorElement"><strong>${article.type}</strong></p>
                        <img src="${article.imgSrc}" alt="ottersHell">
                    </div>
                    <div class="blog-card-content">
                        <h4 class="date">${article.date}</h4>
                        <h2 class="card-Title">${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="#" class="read-more">Read more <span>→</span></a>
                    </div>
                </article>
        `;
    }

    function renderArticles()
    {
        const blogContainer = document.getElementById('blog-articles-container');

        articles.forEach(article => {
            const articleHTML = createBlogArticle(article);
            blogContainer.innerHTML += articleHTML;
        });
    }

    renderArticles();
});