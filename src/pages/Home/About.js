import React from 'react';

export default function About() {
    return (
        <div className="about-container">
            <h2 className="welcome-message">Welcome to my <b>Portfolio</b></h2>
            <p className="welcome-description">I'm a passionate <b>web developer</b> with a keen interest in aligning business needs to technology and I LOVE working with <b>startups</b>.</p>
            <a href="https://forms.gle/4XBtKYPquLjDXv6j7" target="_blank" rel="noopener noreferrer">
                <button className="contact-button">Get in touch</button>
            </a>
        </div>
    )
}