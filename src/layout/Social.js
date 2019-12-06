import React from 'react';
// Images
import bottomRight from 'static/images/layout/bottom-right.svg';
import mail from 'static/images/layout/mail.svg';
import linkedin from 'static/images/layout/linkedin.svg';
import github from 'static/images/layout/github.svg';




export default function Social() {
    return (
        <div className="social">
            <div className="bottom-right-container">
                <img src={bottomRight} alt="Graphic" />
            </div>
            <div className="social-container">
                <img src={github} alt="Find me on GitHub" />
                <img src={linkedin} alt="Find me on LinkedIn" />
                <img src={mail} alt="Mail me" />
            </div>
            <button className="connect">Connect</button>
        </div>
    )
}