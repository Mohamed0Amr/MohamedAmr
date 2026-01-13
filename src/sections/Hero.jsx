import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = "Hi, I'm ";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">Software Engineer</span>
                    <h1 className="hero-title">
                        <span className="typing-text">{displayText}</span>
                        <span className="highlight">Mohamed</span>
                        <span className="cursor-blink">|</span>
                    </h1>
                    <p className="hero-description">
                        Software Engineer specialized in mobile application development and digital banking
                        solutions using Flutter,
                        and native iOS. Experienced in building secure, scalable apps,
                        integrating APIs,
                        and delivering high-quality mobile solutions with a focus on performance,
                        clean code, and user experience.
                    </p>

                    <div className="hero-actions">
                        <a href="#project" className="btn btn-primary">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Mohamed0Amr" aria-label="GitHub"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/mohamed-amr-026b69219/" aria-label="LinkedIn"><Linkedin size={24} /></a>
                        <a href="mailto:mohamedamr9722@gmail.com" aria-label="Email"><Mail size={24} /></a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={`${import.meta.env.BASE_URL}avatarMohamed.webp`} alt="Mohamed Amr - Software Engineer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

