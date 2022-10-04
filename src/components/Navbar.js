import React from "react";


import image1 from "../image/logo.png"

export default function Navbar() {
    return (
        <div className="nav">
            <div className="list">      
                <li>About</li>
                <li>Skill</li>
                <img src={image1} alt="Hak" />
                <li>Project</li>
                <li>Contact</li>
            </div>
        </div>
    )
}