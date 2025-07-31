import React, { useState, useEffect } from "react";
import "../styles/App.css"; // optional external styles

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <span
            className="cs_cursor_sm"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
                width: "10px",
                height: "10px",
                backgroundColor: "rgb(254, 197, 68)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 9999,
                transition: "transform 0.03s linear, width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
                translate: "none",
                rotate: "none",
                scale: "none",
            }}
        ></span>
    );
};

export default CustomCursor;
