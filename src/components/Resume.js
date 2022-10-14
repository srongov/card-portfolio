import React from "react"

import certificate from "../image/certificate.PNG"

export default function Resume () {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <div className="resume-div">
            <img src={certificate} alt="js" />
            </div>
        </div>
    )
}