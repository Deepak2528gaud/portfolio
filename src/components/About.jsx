import { motion } from "framer-motion";
import image1 from "../assets/Deepak.jpg";
import image2 from "../assets/back1.jpg";
import "../styles/About.css";

function About() {
  const resumeUrl = "/resume.pdf";

  return (
    <div
      className="about-wrapper"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-about">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              Hello! I'm a passionate developer with experience in building modern web applications. I specialize in
              front-end development with React and love creating interactive UI components.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              My expertise includes JavaScript, React, Material UI, and backend technologies like Node.js.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              Experienced (3 Yrs) Full Stack Developer specializing in Node.js and HubSpot integrations, with proficiency
              in EJS and React.js. Skilled in developing seamless integrations between HubSpot's CRM platform and various
              web applications, ensuring efficient data synchronization and workflow automation.
            </motion.p>
          </div>
        </motion.div>

        {/* Resume Section */}
        <div className="card-about">
          <h3>My Resume</h3>
          <iframe
            src={resumeUrl}
            title="Resume"
            width="100%"
            height="1000px"
            style={{ border: "none" }}
          ></iframe>
          <a className="download-button" href={resumeUrl} download="My_Resume.pdf">
            📄 Download Resume
          </a>
        </div>

        {/* Extra Summary */}
        <motion.div>
          <div className="card-about gray-card">
            <h1>About Me</h1>
            <div className="summary">
              <p>
                Hi, I'm <strong className="highlight">Deepak Gaud</strong>, a passionate <strong>Full stack Developer</strong> with
                over <strong>3 years</strong> of experience crafting responsive and dynamic web interfaces. I specialize in
                <strong>API integration/API Creation using node js</strong>, <strong>email development</strong>, and creating
                high-conversion <strong>landing pages</strong>.
              </p>
              <img
                src={image1}
                alt="Deepak Gaud"
                className="about-image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
