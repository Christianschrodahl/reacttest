import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Login from "../form/Login"

function NavHeader() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <NavLink to="/" exact>
                        <Navbar.Brand>Noroff react</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavLink to="/" exact className="nav-link">
                                Home
                        </NavLink>
                            <NavLink to="/About" exact className="nav-link">
                                About
                        </NavLink>
                            <NavDropdown title="Login">
                                <Login></Login>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid="true">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" exact component={About} />
                </Switch>
            </Container>
        </Router>
    );
}

export default NavHeader;