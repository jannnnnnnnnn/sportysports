import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container, Row, Col} from "react-bootstrap";

const Main = () => {
    return (
        
        <div>
            <Card className="text-center">
                <Link to="./winner-pool">
                     <div>
                         <Card.Header>Winner Pool</Card.Header>
                        <Card.Title>Boston vs. Vermont</Card.Title>
                         <Card.Subtitle>$10,000</Card.Subtitle>
                         
                         <Button>Deposit Dai</Button>
                     </div>
                   </Link>
            </Card>

            <Card className="text-center">
                <Link to="./playoff-pool">
                    <div>
                        <Card.Header>Finals Pool</Card.Header>
                        <Card.Title>Spain vs. Canada</Card.Title>
                         <Card.Subtitle>$10,000</Card.Subtitle>
                         
                         <Button>Deposit Dai</Button>
                    </div>
                </Link>
            </Card>
            
        </div>
    )
}

export default Main
