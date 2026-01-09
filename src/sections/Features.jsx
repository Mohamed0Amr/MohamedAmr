import { Code, Layout, Server, Database, Smartphone, PenTool } from 'lucide-react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <Layout size={32} />,
            title: 'Frontend Development',
            description: 'Building responsive, accessible, and performant user interfaces.',
            skills: ['React', 'Flutter', 'Dart', 'Swift', 'TypeScript']
        },
        {
            icon: <Server size={32} />,
            title: 'Backend Development',
            description: 'Creating robust APIs and secure server-side logic.',
            skills: ['Node.js', 'Python', 'PostgreSQL', 'Java']
        },
        {
            icon: <PenTool size={32} />,
            title: 'Design & Tools',
            description: 'Designing intuitive flows and using modern workflows.',
            skills: ['Figma', 'Git', 'Docker', 'CI/CD']
        }
    ];

    return (
        <section id="feature" className="features-section">
            <div className="container">
                <h2 className="section-title">What I Do</h2>
                <p className="section-subtitle">Specialized in building digital products with modern technologies.</p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <ul className="feature-skills">
                                {feature.skills.map(skill => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
