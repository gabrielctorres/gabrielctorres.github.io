// script.js

/** 🔗 Formata data no padrão brasileiro */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('pt-BR', options);
}

/** 🏗️ Gera os cards dos projetos dinamicamente */
function generateProjectCards() {
    const container = document.querySelector('.project-grid');
    if (!container) return;

    container.innerHTML = '';

    const sortedProjects = [...projectsData].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => window.location.href = `project.html?id=${project.id}`;

        const tagsHtml = project.tags.map(tag =>
            `<span class="project-tag ${tag.replace(/\s+/g, '')}">${tag}</span>`
        ).join('');

        card.innerHTML = `
            <img 
                src="${project.imageStatic}" 
                data-gif="${project.imageGif}" 
                data-static="${project.imageStatic}" 
                alt="${project.title}" 
                class="project-image"
            >
            <div class="card-content">
                <h2>${project.title}</h2>
                <div class="project-tags">${tagsHtml}</div>
                <p class="project-date">${formatDate(project.date)}</p>
                <p>${project.shortDescription}</p>
            </div>
        `;

        container.appendChild(card);
    });

    addHoverEffects();
}

/** 🎥 Hover GIF nos cards */
function addHoverEffects() {
    const images = document.querySelectorAll('.project-image');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.src = img.dataset.gif;
        });
        img.addEventListener('mouseleave', () => {
            img.src = img.dataset.static;
        });
    });
}

/** 📅 Atualiza o ano do footer */
function setCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
}

/** 🖊️ Efeito TypeWriter no Hero */
function typeWriterEffect() {
    const heroTitle = document.querySelector('#hero h1');
    if (!heroTitle) return;

    const textJoke = "Olá, sou o Smite";
    const textReal = "Olá, sou o Gabriel";
    const speed = 100;
    let i = 0;

    heroTitle.innerHTML = "";

    function type(text, next) {
        if (i < text.length) {
            heroTitle.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(() => type(text, next), speed);
        } else if (next) {
            setTimeout(next, 1000);
        }
    }

    function deleteText(next) {
        if (i >= 0) {
            heroTitle.innerHTML = textJoke.substring(0, i);
            i--;
            setTimeout(() => deleteText(next), speed / 2);
        } else {
            next();
        }
    }

    // Sequência: escreve joke -> apaga -> escreve real
    setTimeout(() => {
        type(textJoke, () => deleteText(() => {
            i = 0;
            type(textReal);
        }));
    }, 500);
}

/** 🚀 Inicialização */
window.onload = () => {
    if (document.querySelector('.project-grid')) {
        generateProjectCards();
    }
    setCurrentYear();
    typeWriterEffect();
};
