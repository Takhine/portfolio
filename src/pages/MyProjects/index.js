import React,{useEffect} from 'react'
import Container from 'layout/Container';
// Components
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';

export default function MyProjects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <Container>
            <Header />
            <Projects />
            <Contact />
        </Container>
    )
}