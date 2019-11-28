import React from 'react'

// Components
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';

export default function MyProjects() {
    return (
        <React.Fragment>
            <Header />
            <Projects />
            <Contact />
        </React.Fragment>
    )
}