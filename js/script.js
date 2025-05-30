// script.js limpo
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('pt-BR', options);
}

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

function setCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
}

window.onload = () => {
    if (document.querySelector('.project-grid')) {
        generateProjectCards();
    }
    setCurrentYear();
    glitchEffect();
};

function glitchEffect() {
    const heroTitle = document.querySelector('#hero h1');
    if (!heroTitle) return;

    const textFinal = "Gabriel Torres";

    // Em desktop, mantém a animação glitch
    const textInitial = "Smite";
    heroTitle.textContent = textInitial;

    setTimeout(() => {
        let count = 0;
        const glitchDuration = 2000;
        const glitchInterval = 100;
        const totalSteps = glitchDuration / glitchInterval;

        const glitchIntervalId = setInterval(() => {
            if (count < totalSteps) {
                const textArray = textInitial.split('');
                const numGlitches = Math.floor(Math.random() * (count / 2)) + 1;
                for (let i = 0; i < numGlitches; i++) {
                    const index = Math.floor(Math.random() * textInitial.length);
                    textArray[index] = getRandomChar();
                }
                heroTitle.textContent = textArray.join('');
                count++;
            } else {
                clearInterval(glitchIntervalId);
                heroTitle.textContent = textFinal;
            }
        }, glitchInterval);
    }, 2000);
}
}

function getRandomChar() {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

// Atualizar o window.onload
window.onload = () => {
    if (document.querySelector('.project-grid')) {
        generateProjectCards();
    }
    setCurrentYear();
    glitchEffect();
};