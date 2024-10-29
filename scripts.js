const techniques = [
    {
        name: "Blast Double",
        description: "The blast double is a high-powered takedown technique...",
        videoUrl: "videos/blast_double.mp4"
    },
    {
        name: "Single Leg",
        description: "A single leg takedown that involves grabbing one of your opponent’s legs...",
        videoUrl: "videos/single_leg.mp4"
    },
    // Add more techniques as needed
];

function displayTechniques() {
    const container = document.getElementById('techniques');
    container.innerHTML = '';

    techniques.forEach(technique => {
        const techniqueElement = document.createElement('div');
        techniqueElement.classList.add('technique');

        techniqueElement.innerHTML = `
            <h3>${technique.name}</h3>
            <video src="${technique.videoUrl}" controls width="300"></video>
            <p>${technique.description}</p>
        `;
        
        container.appendChild(techniqueElement);
    });
}

function searchTechniques() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredTechniques = techniques.filter(technique =>
        technique.name.toLowerCase().includes(searchTerm) ||
        technique.description.toLowerCase().includes(searchTerm)
    );

    const container = document.getElementById('techniques');
    container.innerHTML = '';

    filteredTechniques.forEach(technique => {
        const techniqueElement = document.createElement('div');
        techniqueElement.classList.add('technique');

        techniqueElement.innerHTML = `
            <h3>${technique.name}</h3>
            <video src="${technique.videoUrl}" controls width="300"></video>
            <p>${technique.description}</p>
        `;

        container.appendChild(techniqueElement);
    });
}

document.addEventListener('DOMContentLoaded', displayTechniques);
