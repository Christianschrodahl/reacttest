import React from 'react';
import { Container, Row, Col } from "react-bootstrap/"
export function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis enim sapien. Etiam eget tortor erat. Quisque aliquam erat at neque semper, ut rhoncus tortor dictum. </Col>
                    <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis enim sapien. Etiam eget tortor erat. Quisque aliquam erat at neque semper, ut rhoncus tortor dictum. </Col>
                    <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis enim sapien. Etiam eget tortor erat. Quisque aliquam erat at neque semper, ut rhoncus tortor dictum. </Col>
                </Row>    
            </Container>
            <div className="copy">
            <small className="text-muted">
                @Copyright
            </small>
            </div>
        </footer>
    );
}

export default Footer;