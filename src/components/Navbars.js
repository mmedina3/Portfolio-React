import React, { Component } from 'react';
// eslint-disable-next-line
import { Navbar, NavItem, Nav} from 'react-bootstrap';
import './Navbars.css';

class Navbars extends Component {

    render() {
        return (
            <div>
                <Navbar fluid>
                <Navbar.Collapse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">M²</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>

                        <NavItem eventKey={2} href="#projects"
                        > Projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                        <NavItem eventKey={3} href="https://drive.google.com/file/d/1w6jysUUqZG6UNF_8JwSZNvL1IN8TuR2M/view" target="_blank"   
                        > Resume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                        <NavItem eventKey={4} href="#contact"
                        > Contact
                </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
};

export default Navbars;
