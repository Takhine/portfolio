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
                <a href="https://github.com/Takhine" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Find me on GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/aniketh-nair-132888148/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="Find me on LinkedIn" />
                </a>
                <a href="mailto:anikethnair.developer@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={mail} alt="Mail me" />
                </a>
            </div>
            <button className="connect">Connect</button>
        </div>
    )
}