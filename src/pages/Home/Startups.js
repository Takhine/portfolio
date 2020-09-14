import React from 'react';
import heart from 'static/images/heart.svg';
import eg from 'static/images/eg.png';
import ct from 'static/images/nomadion.PNG';


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
                    <img src={ct} alt="Nomadion" />
                    <a href="http://nomadion.org" target="_blank" rel="noopener noreferrer">
                        <button>Visit</button>
                    </a>
                </div>
            </div>
        </div>
    )
}