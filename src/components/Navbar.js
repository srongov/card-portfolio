import React from "react";


// import image1 from "../image/logo.png"

export default function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
            {/* <img src={image1} alt="Hak" /> */}
            </div>
            <div className="list">
                <li><a href="#about">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skill</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="resume">Resume</a></li>
                <li><a href="contact">Contact</a></li>
            </div>
        </div>
    )
}