import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../assets/back1.jpg";
import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    console.log("Login component rendered");
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });
    };

    return (
        <div
            className="login-container"
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
                            <h2 className="heading">Login</h2>
                            <form autoComplete="off" onSubmit={handleLogin} className="form">
                                <div>
                                    <label className="label" htmlFor="email">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        className="input"
                                        type="email"
                                        autoComplete="username"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="password-wrapper">
                                    <label className="label" htmlFor="password">
                                        Password *
                                    </label>
                                    <input
                                        id="password"
                                        className="input"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                                <button type="submit" className="submit-button">
                                    Login
                                </button>
                            </form>
                            <Link to="/forgot-password" className="link">
                                Forgot Password?
                            </Link>
                            <Link to="/signup" className="link">
                                Don't have an account? Sign Up
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Login;