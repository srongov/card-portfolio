import React from "react";

import project from "../image/cookbook.png"
import project2 from "../image/project2.PNG"

export default function Project() {
    return (
        <div className="project">
            <h1>Project</h1>
            <div className='project-container'>
                <div className="card">
                    <a href="https://github.com/AmyShafer/Mad-Archers-Cookbook"><img src={project} alt="html" /></a>
                    <div id='top-card'>
                        <p>Cook Book</p>
                    </div>
                    <div id="name">
                        <p>sadfasdfasdfadfZed is the leader of the Order of Shadow </p>
                    </div>
                </div>
                <div className="card">
                    <img src={project} alt="html" />
                    <div id='top-card'>
                        <p>Cook Book</p>
                    </div>
                    <div id="name">
                        <p>Zed is tasdfasdfasdhe leader of the Order of Shadow </p>
                    </div>
                </div>
            </div >
        </div >
    )
}