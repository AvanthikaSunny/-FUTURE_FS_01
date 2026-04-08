 function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Avanthika Sunny</h2>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="hero">
        <h1>Hi, I'm Avanthika Sunny</h1>
        <p>Full Stack Web Developer | MERN Stack</p>
        <button>View My Work</button>
      </div>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Web Developer specializing in MERN stack
          development. I enjoy building responsive and user-friendly web
          applications.
        </p>

        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express</span>
          <span>JavaScript</span>
          <span>JWT</span>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>HostX - Smart Hostel Management System</h3>
          <p>
            A MERN stack hostel management system with role-based login,
            room allocation, complaints, notices, and movement tracking.
          </p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}

export default App;