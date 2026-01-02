import { useState } from 'react';
import './App.css';
import Spotify from './assets/Spotify.png';
import netflix from './assets/netfliex.png';
import e from './assets/e-commerce.png';
import n from './assets/ni.png';
import mo from './assets/mo.jpg';

import emailjs from 'emailjs-com';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send("service_9078qmp", "template_soschri", formData, "sBI00ExxUB7Ne5uMY")
      .then(
        (_result) => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (_error) => {
          setLoading(false);
          setStatus("❌ Something went wrong, please try again.");
        }
      );
  };


  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">mo</h1>
          <button
            className={`nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger" />
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <a
                href="#home"
                className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
                onClick={() => { setActiveSection('home'); setMobileMenuOpen(false); }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
                onClick={() => { setActiveSection('about'); setMobileMenuOpen(false); }}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#experiences"
                className={activeSection === 'experiences' ? 'nav-link active' : 'nav-link'}
                onClick={() => { setActiveSection('experiences'); setMobileMenuOpen(false); }}
              >
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className={activeSection === 'services' ? 'nav-link active' : 'nav-link'}
                onClick={() => { setActiveSection('services'); setMobileMenuOpen(false); }}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#work"
                className={activeSection === 'work' ? 'nav-link active' : 'nav-link'}
                onClick={() => { setActiveSection('work'); setMobileMenuOpen(false); }}
              >
                Latest Work
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
                onClick={() => { setActiveSection('contact'); setMobileMenuOpen(false); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="highlight"> I'm Mo Khaled <span className="hero-title"> Frontend Developer</span></h1>
            <p className="hero-subtitle">Creating digital experiences that matter</p>
            <div className="hero-buttons">
              <a href="#work" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate software developer with 2 years of experience creating
                modern web applications. I specialize in React, Node.js, and Next.js.
              </p>
              <p>
                My journey in tech started when I built my first website . Since then,
                I've worked with startups and enterprises to bring their digital visions to life.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects,
                writing technical articles, or exploring new technologies.
              </p>
              <div className="skills">
                <h3>My Skills</h3>
                <div className="skills-container">
                  <span className="skill">JavaScript</span>
                  <span className="skill">React</span>
                  <span className="skill">Node.js</span>
                  <span className="skill">TypeScript</span>
                  <span className="skill">HTML/CSS</span>
                  <span className="skill">Next.js</span>
                  <span className="skill">Flutter</span>
                  <span className="skill">React Native</span>
                </div>
              </div>
              <button className="btn primary-btn" onClick={() => document.getElementById('resume-upload')?.click()}>
                Download Resume
              </button>
              <input
                type="file"
                id="resume-upload"
                style={{display: 'none'}}
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    alert(`Resume "${e.target.files[0].name}" selected for upload!`);
                    // In a real app, you would handle the file upload here
                  }
                }}
              />
            </div>
            <div className="about-image">
              <img src={mo} alt="Mo Khaled" className="profile-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="section experiences-section">
        <div className="container">
          <h2 className="section-title">My Experiences</h2>
          <div className="experiences-container">
            <div className="experience-card">
              <div className="experience-date">2022 - Present</div>
              <h3 className="experience-title">UI/UX Designer</h3>
              <h4 className="experience-company"></h4>
              <p className="experience-description">
                Leading development of scalable web applications using modern technologies.
                Mentoring junior developers and implementing best practices.
              </p>
            </div>
            
            <div className="experience-card">
              <div className="experience-date">2024 - Present</div>
              <h3 className="experience-title">Mobile App Developer</h3>
              <h4 className="experience-company"></h4>
              <p className="experience-description">
                Developed and maintained multiple client projects using React, Node.js, and MongoDB.
                Collaborated with design teams to implement responsive UI/UX.
              </p>
            </div>
            
            <div className="experience-card">
              <div className="experience-date">2023 - Present</div>
              <h3 className="experience-title">Frontend Developer</h3>
              <h4 className="experience-company"></h4>
              <p className="experience-description">
                Built responsive websites and web applications for various clients.
                Optimized performance and implemented modern design systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">My Services</h2>
          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">
                Custom websites and web applications built with modern technologies
                for optimal performance and user experience.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3 className="service-title">Mobile Apps</h3>
              <p className="service-description">
                Cross-platform mobile applications that work seamlessly
                across all devices and operating systems.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3 className="service-title">UI/UX Design</h3>
              <p className="service-description">
                Scalable server-side solutions, APIs, and database design
                for robust application infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section id="work" className="section work-section">
        <div className="container">
          <h2 className="section-title">My Latest Work</h2>
          <div className="work-container">
         
            <div className="work-card">
              <div className="work-image">
                <img src={e} alt="" />
              </div>
              <div className="work-content">
                <h3 className="work-title">E-commerce Platform</h3>
                <p className="work-description">
                  A full-featured online shopping experience with payment integration
                  and inventory management.
                </p>
                <div className="work-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
                 <a 
      href="https://shop-beta-blush-94.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="visit-btn"
    >
      Visit Website
    </a>
            </div>
            
            <div className="work-card">
              <div className="work-image">
                 <img src={netflix} alt="" />
              </div>
              <div className="work-content">
                <h3 className="work-title">Netflix Clone</h3>
                <p className="work-description">
                  A clone of the popular streaming service, built with React and Firebase.
                </p>
                <div className="work-tags">
                  <span className="tag">React</span>
                  <span className="tag">Firebase</span>
                  <span className="tag">Material UI</span>
                </div>
              </div>
                 <a 
      href="https://netflix-clone-six-eosin.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="visit-btn"
    >
      Visit Website
    </a>
            </div>
            
            <div className="work-card">
              <div className="work-image">
                 <img src={Spotify} alt="" />
              </div>
              <div className="work-content">
                <h3 className="work-title">Spotify Clone</h3>
                <p className="work-description">
                  A clone of the popular music streaming service, built with React and Node.js.
                </p>
                <div className="work-tags">
                  <span className="tag">React</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">GSAP</span>
                </div>
              </div>
                 <a 
      href="https://spotify-clone-fawn-seven-48.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="visit-btn"
    >
      Visit Website
    </a>
            </div>

       <div className="work-card">
              <div className="work-image">
                <img src={n} alt="" />
              </div>
              <div className="work-content">
                <h3 className="work-title">Nitro</h3>
                <p className="work-description">
                  A landing page for a mobile application for Gym subscribtion
                  with diffrent sections 
                
                </p>
                <div className="work-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                 
                </div>
              </div>
                 <a 
      href="https://nitro-mo.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="visit-btn"
    >
      Visit Website
    </a>
            </div>
        
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Feel free to reach out to me for any opportunities or collaborations.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p>hmd200388@gmail.com</p>
                </div>
                <div className="contact-item">
                  <h4>Phone</h4>
                  <p>+966 546852249</p>
                </div>
                <div className="contact-item">
                  <h4>Location</h4>
                  <p>Jeedah, Saudi Arabia</p>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                 
                  <input type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      />

                </div>
                <div className="form-group">
                  
                   
                  <input type="email"
                   name="email"
                    placeholder="Enter Your Email" 
                    className="form-input"
                    value={formData.email}
                   onChange={handleChange}
                   required
                     />
                </div>
                <div className="form-group">
                 
                  <textarea name="message"
                   placeholder="Enter Your Message"
                    className="form-textarea"
                     value={formData.message}
                   onChange={handleChange}
                  required
                    ></textarea>
                </div>
                <button type="submit" className="btn primary-btn" disabled={loading}>
                   {loading ? "Sending..." : "Send Message"}
                </button>
                {status && <p className="status-message">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2025 Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
