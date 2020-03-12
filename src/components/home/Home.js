import React from 'react';
import Slider from '../slider/Slider';
import Cards from '../sections/Cards';
import Container from "react-bootstrap/Container";

export function Home() {
    return (
        <>
            <Slider className="topSlider"></Slider>
            <Container>
                <Cards />
            </Container>
            </>
    );
}

export default Home;