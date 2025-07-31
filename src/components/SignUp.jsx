import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../assets/back1.jpg";
import "../styles/SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  console.log("Sign up component rendered");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Trim input values
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.password) {
      alert("All fields are required!");
      return;
    }

    console.log("Signing up with:", trimmedData);
  };

  return (
    <div
      className="signup-container"
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
              <h2 className="heading">Sign Up</h2>
              <form onSubmit={handleSignUp} className="form">
                <div>
                  <label className="label" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    className="input"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
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
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
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
                  Sign Up
                </button>
              </form>
              <Link to="/login" className="link">
                Already have an account? Login
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SignUp;