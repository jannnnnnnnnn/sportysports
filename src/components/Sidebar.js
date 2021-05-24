import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (
        <Navbar className="sidebar" expand="lg" bg="primary" variant="dark" >
          <Navbar.Brand href="../main">Menu</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        <Nav >
          
          <Nav.Link href="../main">Home</Nav.Link>
          <NavDropdown title="Soccer" id="collasible-nav-dropdown">
          <NavDropdown.Item  href="./soccer-leagues">
              All Leagues
            </NavDropdown.Item>

            <NavDropdown.Item href="./premier-league">
              Premier League
            </NavDropdown.Item>
            
            <NavDropdown.Item href="./euro-cup">
            Euro Cup
            </NavDropdown.Item>

            <NavDropdown.Item href="./fifa"> 
              FIFA
            </NavDropdown.Item>

            <NavDropdown.Item href="./mls">
              MLS
            </NavDropdown.Item>


          </NavDropdown>
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

          <Nav.Link href="../about-us">About Us</Nav.Link>
          <Nav.Link href="../faq">FAQ</Nav.Link>
          
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Sidebar
