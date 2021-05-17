import React from 'react'
import { BsJustify } from "react-icons/bs";
import { GiSoccerBall } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
    return (
        <nav>
        <BsJustify />
        <ul>
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
                <h2>Winner</h2>
                </li>
                <li>
                <h2>Finals</h2>
                </li>
              </ul>
          </li> 
          
          <li>
          <h2>My Pools</h2>
            <ul>
              <li>
              <h2>Pool 1</h2>
              </li>
            </ul>
          </li>
          
        </ul>
      </nav>
    )
}

export default Sidebar
