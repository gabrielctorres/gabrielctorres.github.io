// project-detail.js
async function formatDateDetail(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString + "T00:00:00");
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

async function displayProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        handleProjectNotFound();
        return;
    }

    try {
        const response = await fetch('js/data.json');
        const projectsData = await response.json();
        const project = projectsData.find(p => p.id === projectId);

        if (project) {
            document.title = `${project.title} | Gabriel Torres`;
            document.getElementById('project-title-detail').textContent = project.title;
            document.getElementById('project-date-detail').textContent = `Publicado em: ${await formatDateDetail(project.date)}`;

            const projectImage = document.getElementById('project-image-detail');
            projectImage.src = project.imageGif || project.imageStatic || 'https://placehold.co/800x500/0A1A2F/FFFFFF?text=Imagem+Indispon%C3%ADvel';
            projectImage.alt = `Imagem de ${project.title}`;

            document.getElementById('project-story-content').innerHTML = `
                <p>${project.longDescription}</p>
                <hr>
                ${project.developmentStory}
            `;

            const githubBtn = document.getElementById('project-github-link');
            const playBtn = document.getElementById('project-play-link');

            if (project.githubLink) {
                githubBtn.href = project.githubLink;
            } else {
                githubBtn.style.display = 'none';
            }

            if (project.playLink) {
                playBtn.href = project.playLink;
            } else {
                playBtn.style.display = 'none';
            }
        } else {
            handleProjectNotFound();
        }
    } catch (err) {
        console.error('Erro ao carregar projeto:', err);
        handleProjectNotFound();
    }
}

function handleProjectNotFound() {
    document.title = "Projeto Não Encontrado | Gabriel Torres";
    const header = document.getElementById('project-title-detail');
    if (header) header.textContent = "Oops! Projeto não encontrado.";
    const mainContent = document.querySelector('.project-detail-page .container');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="project-detail-header">
                 <a href="index.html" class="back-button">&larr; Voltar para Projetos</a>
                <h1>Projeto Não Encontrado</h1>
            </div>`;
    }
}

function setCurrentYearFooter() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
}

window.onload = () => {
    displayProjectDetails();
    setCurrentYearFooter();
};
