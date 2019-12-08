import React,{useEffect} from 'react';
import Container from 'layout/Container';
// Components
import Header from './Header';
import About from './About';
import Startups from './Startups';
import Skills from './Skills';
import profile from 'static/images/profile.png';
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <Container>
            <Header />
            <div className="profile-container">
            <img src={profile} className="profile" alt="Aniketh Nair" />
            </div>
            <div className="content-container">
            <About />
            <Startups />
            <Skills />
            </div>
        </Container>
    )
}




