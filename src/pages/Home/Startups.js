import React from 'react';
import heart from 'static/images/heart.svg';
import eg from 'static/images/eg.png';
import ct from 'static/images/ct.png';


export default function Startups() {
    return (
        <div className="startups">
            <h2 className="heading">My <img src={heart} alt="Heart" /> <b>Initiatives</b></h2>
            <div className="startups-container">
                <div className="eventgrab">
                    <img src={eg} alt="Eventgrab" />
                    <a href="http://www.eventgrab.com" target="_blank" rel="noopener noreferrer">
                        <button>Visit</button>
                    </a>
                </div>
                <div className="contribe">
                    <img src={ct} alt="Contribe" />
                    <p>Coming Soon</p>
                </div>
            </div>
        </div>
    )
}