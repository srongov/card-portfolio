import React from "react";

import hak from "../image/me.jpg"

export default function Profile() {
    return (
        <div>
            <div className="myPic">
                <img src={hak} alt="Hak" />
            </div>
            <div>
                <h1>Hak Gov</h1>
                <p>Front-End Web Developer</p>
            </div>
            <hr className="line" />
        </div>
    )
}