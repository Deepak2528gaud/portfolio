import { motion } from "framer-motion";
import image1 from "../assets/back1.jpg";
import "../styles/Contact.css"; // Import the external CSS file

function Contact() {
    console.log("Contact component rendered");
    return (
        <div
            className="contact-container"
            style={{ backgroundImage: `url(${image1})` }}
        >
            <div className="inner-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-content">
                                <h2 className="heading">Contact Me</h2>
                                <form className="form">
                                    <div>
                                        <label className="label" htmlFor="name">
                                            Your Name *
                                        </label>
                                        <input
                                            id="name"
                                            className="input"
                                            type="text"
                                            required
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="label" htmlFor="email">
                                            Your Email *
                                        </label>
                                        <input
                                            id="email"
                                            className="input"
                                            type="email"
                                            required
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div>
                                        <label className="label" htmlFor="message">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            className="textarea"
                                            rows={4}
                                            required
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="submit-button">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;