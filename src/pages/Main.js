import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        
        <div>
            
            <ul>
                <li>
                    <h2><Link to="./winner-pool">Winner Pool</Link></h2>
                </li>

                <li>
                    <h2><Link to="./playoff-pool">Playoff Pool</Link></h2>
                </li>
           </ul>
        </div>
    )
}

export default Main
