import React from 'react';
import Container from 'layout/Container';
// Components
import Header from './Header';
import About from './About';
import Startups from './Startups';
import Skills from './Skills';
import profile from 'static/images/profile.png';
export default function Home() {
    return (
        <Container>
            <div>
            <Header />
            <div className="profile-container">
            <img src={profile} className="profile" alt="Aniketh Nair" />
            </div>
            <About />
            <Startups />
            <Skills />
            </div>
        </Container>
    )
}




