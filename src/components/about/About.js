import React from 'react';
import Slider from '../slider/Slider';
import AboutContent from "./AboutContent"
export function About() {
    return (
        <>
            <Slider className="topSlider"></Slider>
            <AboutContent/>
        </>
    );
}

export default About;