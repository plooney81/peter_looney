import React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';


class MyNavBar extends React.Component{

    render(){
        // const Ul = styled.ul`
        //     list-style-type: none;
        //     margin: 0;
        //     padding: 0;
        // `;
        return(
            // <Nav
            // activeKey="/home"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            // >
            //     <Nav.Item>
            //         <Nav.Link href="/home">PL</Nav.Link>
            //     </Nav.Item>
            //         <Nav.Item>
            //             <Nav.Link eventKey="link-1">About Me</Nav.Link>
            //         </Nav.Item>
            //         <Nav.Item>
            //             <Nav.Link eventKey="link-2">Projects</Nav.Link>
            //         </Nav.Item>
            //         <Nav.Item>
            //             <Nav.Link eventKey="link-3">Skills</Nav.Link>
            //         </Nav.Item>
            // </Nav>
            <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default MyNavBar;