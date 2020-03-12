import React from 'react';
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap/';
import JumbotronSection from "../sections/JumbotronSection"
export function AboutContent() {
    return (
        <>
        <Container className="bodyContainer">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis enim sapien. Etiam eget tortor erat. Quisque aliquam erat at neque semper, ut rhoncus tortor dictum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis enim sapien. Etiam eget tortor erat. Quisque aliquam erat at neque semper, ut rhoncus tortor dictum.
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis enim sapien. Etiam eget tortor erat. Quisque aliquam erat at neque semper, ut rhoncus tortor dictum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis enim sapien. Etiam eget tortor erat. Quisque aliquam erat at neque semper, ut rhoncus tortor dictum.
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </Container>
            <JumbotronSection></JumbotronSection>
        </>
    );
}

export default AboutContent;