import './App.css'
import constructionImage from './assets/construction.jpg'
import project1 from './assets/project1.jpg'
import project2 from './assets/project2.jpg'
import project3 from './assets/project3.jpg'

function App() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          GR Construction
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Service</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img src={constructionImage} alt="GR Construction" />

          <div className="hero-content">
            <h2>Building dreams, Creating Spaces</h2>

            <p>
              Quality construction with trust, experience and modern design.
            </p>

            <a href="#contact" className="quote-button"> Get a Quote</a>
          </div>
        </section>

        <section className="services" id="services">
          <h2>Our Services</h2>

          <div className="service-container">

            <div className="service-card">
              <h3>Residential Construction</h3>
              <p>Quality homes designed with modern style, comfort and durability.</p>

            </div>

            <div className="service-card">
              <h3>Building Design</h3>
              <p>Modern and practical building designs tailored to your needs.</p>
            </div>

            <div className="service-card">
              <h3>Rennovation</h3>
              <p>We transform existing spaces into beautiful and functional spaces.</p>
            </div>
          </div>


        </section>
        <section className="about" id="about">
          <div className="about-content">
            <h2>About GR Construction</h2>

            <p>GR Construction is commited to delivering quality construction solutions with trust, precision and modern design.</p>

            <p>From new homes to building design and renovation, we focus on quality workmanship and customer satisfaction.</p>
          </div>
        </section>

        <section className="projects" id="projects">
          <h2>Our Projects</h2>

          <div className="project-container">

            <div className="project-card">
              <img src={project1} alt="Residential House" />
              <h3>Residential House</h3>
              <p>Modern residential construction project.</p>
            </div>

            <div className="project-card">
              <img src={project2} alt="Commercial Building" />
              <h3>Commercial Building</h3>
              <p>Professional commercial building project.</p>
            </div>

            <div className="project-card">
              <img src={project3} alt="Renovation Project" />
              <h3>Renovation Project</h3>
              <p>Complete renovation and interior improvement.</p>
            </div>


          </div>



        </section>

        <section className="contact" id="contact">
          <h2>Contact us</h2>
          <p>Ready to build your dream project?</p>

          <div className="contact-info">
            <p><strong>Phone:</strong>{" "}
              <a href="tel:+918667216808">8667216808</a></p>
            <p><strong>Phone:</strong>{" "}
              <a href="tel:+918124603703">8124603703</a></p>
            <p><strong>Email:</strong>{" "}
              <a href="mailto:grconstruction1430@gmail.com">grconstruction1430@gmail.com</a></p>
            <p><strong>Location:</strong> No.157/A, Bodi Chetti Street, Thirupapuliyur, Cuddalore 607002.</p>
          </div>

          <button>Get a Quote</button>

          <a
            href="https://wa.me/918667216808"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            WhatsApp Us
          </a>
        </section>
      </main>

      <footer>
        <p>(c) 2026 GR Construction. All Rights Reserved.</p>
      </footer>
    </div >
  )
}


export default App