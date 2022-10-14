import React from "react";

import project from "../image/cookbook.png"
import project2 from "../image/project2.PNG"

export default function Project() {
    return (
        <div className="project">
            <h1>Project</h1>
            <div className="project-container">
                <div className="div-project">
                    <a  href='https://amyshafer.github.io/Mad-Archers-Cookbook/'><img src={project} alt="js" /></a>
                    <h3>Cook Book</h3>
                    <p>A project allow you to search for food with ingredients.</p>
                    <p id="github"><a id="github" href='https://github.com/AmyShafer/Mad-Archers-Cookbook'>View on Github</a></p>
                </div>
                <div className="div-project">
                <a  href='https://srongov.github.io/drum/'><img src={project2} alt="js" /></a>
                    <h3>Drum Kit</h3>
                    <p>A project allow you to play drum with keypress</p>
                    <p id="github"><a id="github" href='https://github.com/srongov/drum'>View on Github</a></p>
                </div>
                </div>
        </div >
    )
}