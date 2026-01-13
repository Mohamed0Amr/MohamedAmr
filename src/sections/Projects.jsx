import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Quraan Kareem App',
            description: 'Quraan Kareem is a mobile application that allows users to read the Holy Quran in different languages and styles. Can Listen to the Quran by Surah',
            tags: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Audio Player'],
            image: `${import.meta.env.BASE_URL}QuraanKareem.webp`,
            liveLink: 'https://www.loom.com/share/079efe82c55b46b6b9ae7bcfc98ca2cf',
            codeLink: 'https://github.com/Mohamed0Amr/Quraan-Kareem'
        },
        {
            title: 'Store App',
            description: 'Store App is a mobile application that allows users to buy and sell products.',
            tags: ['SwiftUI', 'Swift', 'Firebase', 'REST API'],
            image: `${import.meta.env.BASE_URL}appStore.webp`,
            liveLink: '#',
            codeLink: 'https://github.com/Mohamed0Amr/StoreApp'
        },

    ];

    return (
        <section id="project" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">A selection of my recent work and side projects.</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-overlay">
                                    <a href={project.liveLink} className="icon-link" aria-label="Live Demo">
                                        <ExternalLink size={24} />
                                    </a>
                                    <a href={project.codeLink} className="icon-link" aria-label="View Code">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
