import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        // <Navbar bg="white" expand="lg" className="">
        //     <Container>
        //         <Navbar.Brand href="#home"> <img
        //             src={logo}
        //             width="200"
        //             // height="30"
        //             className="d-inline-block align-top"
        //             alt="React Bootstrap logo"
        //         /></Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav" >
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        //
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><img
                    src={logo}
                    width="200"
                    // height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;