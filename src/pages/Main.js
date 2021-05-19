import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container, Row, Col} from "react-bootstrap";

const Main = () => {
    return (
        
        <div>
            
            <ul>
                <li>
                   <Link to="./winner-pool">
                     <div>
                         <h3>Winner Pool</h3>
                         <h3>Boston vs. Vermont</h3>
                         <h3>$10,000</h3>
                         
                         <Button>Deposit Dai</Button>
                     </div>
                   </Link>
                </li>

                <li>
                    <Link to="./playoff-pool">
                        <div>
                        <h3>Finals Pool</h3>
                        <h3>Spain vs. Canada</h3>
                         <h3>$10,000</h3>
                         
                         <Button>Deposit Dai</Button>
                        </div>
                    </Link>
                </li>
           </ul>
        </div>
    )
}

export default Main
