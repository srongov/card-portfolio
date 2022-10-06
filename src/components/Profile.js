import React from "react";

import hak from "../image/me.jpg"
import pin from "../image/pin.png"
import mail from "../image/email.png"
import phone from "../image/phone.png"

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
            <div className="information">
            <div className="mail">
                <img src={mail} alt="mail" />
                <p>Email</p>
                <p>hakgov91@gmail.com</p>
            </div>
            <div className="pin">
                    <img src={pin} alt="mail" />
                    <p>Address</p>
                    <p>482 Wicker Ave</p>
                    <p>Bensalem PA 19020</p>
            </div>
            <div className="phone">
                    <img src={phone} alt="mail" />
                    <p>Phone Number</p>
                <p>(267 501-5101</p>
            </div>
            </div>
        </div>
    )
}