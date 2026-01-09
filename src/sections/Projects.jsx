import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Quraan Kareem',
            description: 'Quraan Kareem is a mobile application that allows users to read the Holy Quran in different languages and styles. Can Listen to the Quran by Surah',
            tags: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Audio Player'],
            image: `${import.meta.env.BASE_URL}QuraanKareem.webp`,
            liveLink: 'https://www.loom.com/share/079efe82c55b46b6b9ae7bcfc98ca2cf',
            codeLink: 'https://github.com/Mohamed0Amr/Quraan-Kareem'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative project management tool featuring drag-and-drop boards, team chat, and file sharing.',
            tags: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
            liveLink: '#',
            codeLink: '#'
        },
        {
            title: 'AI Content Generator',
            description: 'SaaS application leveraging LLMs to help marketers create high-quality blog posts and social media copy.',
            tags: ['Next.js', 'OpenAI API', 'Stripe', 'Postgres'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
            liveLink: '#',
            codeLink: '#'
        }
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
