import React, { useRef, useEffect, useState } from 'react';

// Images
import bottomRight from 'static/images/layout/bottom-right.svg';
import mail from 'static/images/layout/mail.svg';
import linkedin from 'static/images/layout/linkedin.svg';
import github from 'static/images/layout/github.svg';


const SocialLinks = () => {
    return (
        <React.Fragment>
            <a href="https://github.com/Takhine" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Find me on GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/aniketh-nair-132888148/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Find me on LinkedIn" />
            </a>
            <a href="mailto:anikethnair.developer@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="Mail me" />
            </a>
        </React.Fragment>
    )
}

export default function Social() {
    const [state, setState] = useState(false);
    console.log(state);
    function handleChange(e) {
        setState(!state);
    }

    function useOutsideAlerter(ref) {
        /**
         * Close if clicked outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setState(false);
            }
        }

        useEffect(() => {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className="social">
            <div className="bottom-right-container">
                <img src={bottomRight} alt="Graphic" />
            </div>
            <div className="social-container">
                <SocialLinks />
            </div>
            <div style={state ? { display: 'block' } : { display: 'none' }} className="popover" ref={wrapperRef}>
                <SocialLinks />
            </div>
            <button
                className="connect"
                onFocus={() => handleChange()}
            >Connect</button>

        </div>
    )
}