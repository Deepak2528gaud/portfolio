import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "../assets/back1.jpg";
import deep from "../assets/animated.png";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container" style={{ backgroundImage: `url(${image1})`, width: "auto" }}>
            <div className="home-content">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h2 className="home-title">Welcome to My Portfolio</h2>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <span className="home-title-medium">Hello! <span className="name">I'm Deepak</span>,</span>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <p className="home-subtitle">
                        a passionate full-stack developer with experience in building modern web applications.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <Link to="/projects" className="home-button">View My Projects</Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 130 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="home-image-container">
                        <img src={deep} alt="Deepak" className="home-image" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
