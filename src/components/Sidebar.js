import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
          <Navbar.Brand href="./main">Menu</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        <Nav >
          
          <Nav.Link href="./main">Home</Nav.Link>
          <Navbar.Brand>
          <NavDropdown title="Soccer" id="collasible-nav-dropdown">
          <NavDropdown.Item  href="./soccer-leagues">
            
              All Leagues
          
            </NavDropdown.Item>

            <NavDropdown.Item href="./soccer-leagues/premier-league">
              Premier League
            </NavDropdown.Item>
            
            <NavDropdown.Item href="./soccer-leagues/premier-league">
            Euro Cup
            </NavDropdown.Item>

            <NavDropdown.Item href="./soccer-leagues/premier-league"> 
              FIFA
            </NavDropdown.Item>

            <NavDropdown.Item href="./soccer-leagues/premier-league">
              MLS
            </NavDropdown.Item>


          </NavDropdown>
          </Navbar.Brand>
          <NavDropdown title="Popular Pools" id="collasible-nav-dropdown">
          <NavDropdown.Item href="./winner-pool">
          Winner
            </NavDropdown.Item>
            <NavDropdown.Item href="./playoff-pool">
            Finals
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="My Pools" id="collasible-nav-dropdown">
          <NavDropdown.Item href="./winner-pool">
          Winner
            </NavDropdown.Item>
            <NavDropdown.Item href="./playoff-pool">
            Finals
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="./about-us">About Us</Nav.Link>
          <Nav.Link href="./faq">FAQ</Nav.Link>
          
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Sidebar
