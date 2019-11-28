import React from 'react'
import Container from 'layout/Container';
// Components
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';

export default function MyProjects() {
    return (
        <Container>
            <Header />
            <Projects />
            <Contact />
        </Container>
    )
}