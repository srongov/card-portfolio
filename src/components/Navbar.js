import React from "react";


import image1 from "../image/logo.png"

export default function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
            <img src={image1} alt="Hak" />
            </div>
            <div className="list">
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
                <li>Project</li>
                <li>Contact</li>
            </div>
        </div>
    )
}