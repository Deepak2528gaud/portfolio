import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/back1.jpg";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    console.log("Forgot password component rendered");

    const handleResetPassword = (e) => {
        e.preventDefault();
        console.log("Password reset request sent to:", email);
    };

    return (
        <div
            className="forgot-password-container"
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
                            <h2 className="heading">Forgot Password</h2>
                            <p className="paragraph">
                                Enter your email address to receive a password reset link.
                            </p>
                            <form onSubmit={handleResetPassword} className="form">
                                <div>
                                    <label className="label" htmlFor="email">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        className="input"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>
                                <button type="submit" className="submit-button">
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ForgotPassword;