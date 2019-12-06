import React from 'react';

// Components
import Navbar from './Navbar';
import Social from './Social';
import Footer from './Footer';
import 'static/styles/main.scss';
export default function Container(props) {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            <Social />
            <Footer />
        </React.Fragment>
    )
}