import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from 'react-bootstrap';




const Sidebar = () => {
    return (
      
        <Nav className="sidebar" bg="primary">
        
          
            
          <Nav.Link href="../main">Home</Nav.Link>
          <NavDropdown title="Soccer" >
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
          <NavDropdown title="Popular Pools">
          <NavDropdown.Item href="./winner-pool">
          Winner
            </NavDropdown.Item>
            <NavDropdown.Item href="./playoff-pool">
            Finals
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="My Pools" >
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
       
    )
}

export default Sidebar
