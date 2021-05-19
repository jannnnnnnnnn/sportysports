import React from 'react'
import { BsJustify } from "react-icons/bs";
import { GiSoccerBall } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav >
        <BsJustify />
        <ul>
          <li>
            <h2><Link to='./main'>Home</Link></h2>
          </li>
          <li>
            < GiSoccerBall />
            <h2>Soccer</h2>
            <ul>
  
                    <li>
                    <h2>Premier League</h2>
                    </li>
        
                    <li>
                    <h2>Euro Cup</h2>
                    </li>
        
             </ul>
          </li>
          
          <li>
          <h2>Popular Pools</h2>
            <ul>
                <li>
                <h2><Link to='./winner-pool'>Winner</Link></h2>
                </li>
                <li>
                <h2><Link to="./playoff-pool">Finals</Link></h2>
                </li>
              </ul>
          </li> 
          
          <li>
          <h2>My Pools</h2>
            <ul>
              <li>
              <h2><Link to="./playoff-pool">Finals</Link></h2>
              </li>
            </ul>
          </li>
          <li>
            <h2><Link to='./about-us'>About Us</Link></h2>
          </li>
          <li>
            <h2><Link to='./faq'>FAQ</Link></h2>
          </li>
        </ul>
      </nav>
    )
}

export default Sidebar
