import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Let's Work Together</h2>
                <p className="section-subtitle">
                    Have a project in mind or want to say hello? I'm always open to new opportunities and interesting conversations.
                </p>

                <a href="mailto:mohamedamr9722@gmail.com" className="email-button">
                    <Mail size={20} />
                    mohamedamr9722@gmail.com
                </a>

                <div className="footer-socials">
                    <a href="https://github.com/Mohamed0Amr" className="social-icon" aria-label="GitHub">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-amr-026b69219/" className="social-icon" aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://x.com/ham0udi1" className="social-icon" aria-label="Twitter">
                        <Twitter size={24} />
                    </a>
                </div>

                <footer className="footer-copyright">
                    <p>© {new Date().getFullYear()} Mohamed. Built with React & Vite.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
