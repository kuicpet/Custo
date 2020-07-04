import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



export default class Header extends Component {
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home" className="ml-5">Custo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto text-center">
                <Nav.Link href="/home" className="mx-3">Home</Nav.Link>
                <Nav.Link href="/about" className="mx-3">About</Nav.Link>
                <Nav.Link href="/faq" className="mx-3">FAQ</Nav.Link>
                <Nav.Link href="/contact" className="mx-3">Contact Us</Nav.Link>
                <Nav.Link href="/login" className="mx-5">Log in</Nav.Link>
                <Nav.Link href="/register" className=" mx-5"><Button className="btn btn-primary px-3">Sign up</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}