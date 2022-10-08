import React from "react";

import project from "../image/project.PNG"
import project2 from "../image/project2.PNG"

export default function Project() {
    return (
        <div className="project">
            <h1>Project</h1>
            <div className="top-project">
                <div id="project-div">
                    <p>Cook Book</p>
                    <img src={project} alt="project" />
                </div>
                <div id="project-div">
                    <p>Drum Game</p>
                <img src={project2} alt="project" />
                </div>
            </div>
        </div>
    )
}