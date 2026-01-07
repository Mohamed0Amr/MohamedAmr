import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">Software Engineer</span>
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Mohamed</span>
                    </h1>
                    <p className="hero-description">
                        I build accessible, pixel-perfect, and performant web experiences.
                        Passionate about turning complex problems into simple, beautiful solutions.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="#" aria-label="GitHub"><Github size={24} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
                        <a href="mailto:contact@example.com" aria-label="Email"><Mail size={24} /></a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={`${import.meta.env.BASE_URL}avatarMohamed.png`} alt="Mohamed Amr - Software Engineer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
