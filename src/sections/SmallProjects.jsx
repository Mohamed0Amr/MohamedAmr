import { Github, ExternalLink } from 'lucide-react';
import './SmallProjects.css';

const SmallProjects = () => {
    const projects = [
        {
            title: 'Random Joke App',
            description: 'A fun app that delivers random jokes to brighten your day with a simple tap.',
            tech: ['Swift', 'iOS'],
            codeLink: 'https://github.com/Mohamed0Amr/Random-Joke-App'
        },
        {
            title: 'War Card Game',
            description: 'Classic card game recreated as a mobile app with smooth animations.',
            tech: ['Swift', 'iOS'],
            codeLink: 'https://github.com/Mohamed0Amr/War-Card-Game'
        },
        {
            title: 'Murbha App',
            description: 'A Flutter-based utility app with clean UI and intuitive user experience.',
            tech: ['Flutter', 'Dart'],
            codeLink: 'https://github.com/Mohamed0Amr/Murabha-App'
        },
        {
            title: 'Banking App',
            description: 'Full-stack banking application with secure transactions and account management.',
            tech: ['Flutter', 'Node.js', 'SQL'],
            codeLink: 'https://github.com/Mohamed0Amr/BankingApp'
        }
    ];

    return (
        <section id="small-projects" className="small-projects-section">
            <div className="container">
                <h2 className="section-title">Mini Projects</h2>
                <p className="section-subtitle">Small experiments and learning projects.</p>

                <div className="small-projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="small-project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="small-project-header">
                                <h3 className="small-project-title">{project.title}</h3>
                                <a
                                    href={project.codeLink}
                                    className="small-project-link"
                                    aria-label="View Code"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                            <p className="small-project-description">{project.description}</p>
                            <div className="small-project-tech">
                                {project.tech.map(t => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SmallProjects;
