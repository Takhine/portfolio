import React from 'react';
import Container from 'layout/Container';
// Components
import Header from './Header';
import About from './About';
import Startups from './Startups';
import Skills from './Skills';

export default function Home() {
    return (
        <Container>
            <Header />
            <About />
            <Startups />
            <Skills />
        </Container>
    )
}




