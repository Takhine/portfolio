import React from 'react';

import down from 'static/images/down.svg'
export default function Contact() {
    return (
        <div className="contact">
            <h2 className="heading">How can I help you?</h2>
            <p className="whoami">If you are <b>a.</b> A startup <b>b.</b> A recruiter <b>c.</b> A business owner <b>d.</b> An NPO/NGO <b>e.</b> Looking for assistance <b>f.</b> Looking to chat!</p>
            <p className="cta">Fill out the form to get in touch :)</p> <img src={down} alt="Down" />
            <a href="https://forms.gle/4XBtKYPquLjDXv6j7" target="_blank" rel="noopener noreferrer">
                <button className="contact-button">Get in touch</button>
            </a>
        </div>
    )
}