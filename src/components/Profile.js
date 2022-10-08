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
                <p id="mypic-p">Front-End Web Developer</p>
            </div>
            <hr className="line" />
            <div className="information">
            <div className="mail">
                <img src={mail} alt="mail" />
                <h5>Email</h5>
                <p><a href="mailto:hakgov91@gmail.com">hakgov91@gmail.com</a></p>
            </div>
            <div className="pin">
                    <img src={pin} alt="mail" />
                    <h5>Address</h5>
                    <p>482 Wicker Ave</p>
                    <p>Bensalem PA 19020</p>
            </div>
            <div className="phone">
                    <img src={phone} alt="mail" />
                    <h5>Phone Number</h5>
                <p>(267) 401-5101</p>
            </div>
            </div>
        </div>
    )
}