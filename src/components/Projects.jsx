import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../data/projects";
import FormComponent from "./FormComponent";
import VideoPlayer from "./VideoPlayer";
import video from "../assets/ts.mp4";
import image1 from "../assets/back1.jpg";
import "../styles/Projects.css";
import "../styles/App.css"

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openProject = (index) => {
        setSelectedProject(index);
        setCurrentImageIndex(0);
    };

    const closeProject = () => setSelectedProject(null);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % projects[selectedProject].images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + projects[selectedProject].images.length) % projects[selectedProject].images.length);
    };

    return (
        <div className="projects-wrapper" style={{ backgroundImage: `url(${image1})` }}>
            <div className="projects-container">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h2 className="projects-title">My Projects</h2>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} key={index} onClick={() => openProject(index)} className="project-card">
                                <img src={project.images[0]} alt={project.title} className="project-image" />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="video-section">
                        <VideoPlayer src={video} title="My Video" />
                    </div>
                </motion.div>

                {selectedProject !== null && (
                    <div className="image-viewer">
                        <button className="nav-btn" onClick={prevImage}>⟵</button>
                        <motion.img
                            src={projects[selectedProject].images[currentImageIndex]}
                            alt="Project"
                            className="viewer-img"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <button className="nav-btn" onClick={nextImage}>⟶</button>
                        <button className="close-btn" onClick={closeProject}>✕</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
