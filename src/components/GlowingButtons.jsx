import React from "react";
import { Link } from "react-router-dom";
import "../styles/GlowingButtons.css"; // make sure this CSS file is linked

const GlowingButtons = () => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <div className="button-wrapper">
        <Link to="/login" className="button">
          Login
        </Link>
        <div className="button-bg"></div>
      </div>

      <div className="button-wrapper">
        <Link to="/signup" className="button">
          Sign Up
        </Link>
        <div className="button-bg"></div>
      </div>
    </div>
  );
};

export default GlowingButtons;
