import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Button, Container } from 'react-bootstrap/'
export function JumbotronSection() {
    return (
        <Jumbotron>
            <Container className="JumboT">
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
                </p>
            </Container>
        </Jumbotron>
    );
}

export default JumbotronSection;