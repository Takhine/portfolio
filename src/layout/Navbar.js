import React from 'react';
// Images
import topRight from 'static/images/layout/top-right.svg';
import topLeft from 'static/images/layout/top-left.svg';
import menu from 'static/images/layout/menu.svg';

export default function Navbar(){
    return(
        <div className="navbar container">
            <div className="top-right-container">
                <img src={topRight} alt="Graphic" />
            </div>
            <div className="top-left-container">
                <img className="top-left" src={topLeft} alt="Graphic" />
                <img className="menu" src={menu} alt="Menu" />
            </div>
            <ul className="menu-container">
                <li>Home</li>
                <li>Projects</li>
            </ul>
        </div>
    )
}