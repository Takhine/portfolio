import React from 'react';

import react from 'static/images/layout/react.svg';
import love from 'static/images/layout/love.svg';

export default function Footer() {
    return (
        <div className="footer">
            <p>Built with <img src={react} alt="React" /> &amp; <img src={love} alt="Heart" /> by <b>Aniketh Nair</b></p>
        </div>
    )
}