import React from "react";

import html from "../image/html.png"
import css from "../image/css3.png"
import js from "../image/js.png"
import node from "../image/nodejs.png"
import react from "../image/react.png"


export default function Skill() {
    return (
        <div className="skill">
            <h1>Skill</h1>
            <div className="skill-top-container">
                <div className="">
                <img src={html} alt="html" />
                </div>
                <div className="">
                <img src={css} alt="css" />
                </div>
                <div className="">
                <img src={js} alt="js" />
                </div>
            </div>
            <div className="skill-second-container">
                <div>
                <img src={node} alt="js" />
                </div>
                <div>
                <img src={react} alt="js" />
                </div>
            </div>
        </div>
    )
}