import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {NavLink} from 'react-router-dom';
// Images
import topRight from 'static/images/layout/top-right.svg';
import topLeft from 'static/images/layout/top-left.svg';
import menu from 'static/images/layout/menu.svg';
import back from 'static/images/layout/black-back-icon.svg';
import Social from './Social';


export default function Navbar() {
    const [state, setState] = React.useState(false);
    function scrollToTop() {
        scroll.scrollToTop();
      }
    function handleOpen() {
        setState(!state)
    }
    return (
            <div className="navbar">
                <div className="top-right-container">
                    <img src={topRight} alt="Graphic" />
                </div>
                <div className="top-left-container">
                    <img className="top-left" src={topLeft} alt="Graphic" style={state ? { display: 'none' } : { display: 'block' }} />
                    <button onClick={handleOpen}>
                        {state ?
                            <img className="back" src={back} alt="Go Back" />
                            :
                            <img className="menu" src={menu} alt="Open Menu" />
                        }
                    </button>
                </div>
                <ul className={state ? "menu-container-open menu-container" : "menu-container"}>
                    <NavLink exact to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink exact to="/projects">
                        <li>Projects</li>
                    </NavLink>
                    <a href="https://forms.gle/4XBtKYPquLjDXv6j7" target="_blank" rel="noopener noreferrer">
                        <li>Contact</li>
                    </a>
                </ul>
                {!state &&
                    <Social />
                }
                {!state &&
                    <button className="to-top" onClick={scrollToTop}>^</button>
                }
            </div>
    )
}