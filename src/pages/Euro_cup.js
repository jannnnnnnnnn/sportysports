import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Euro_cup() {
    return (
        <div>
            <h1 className="align-me">
                Euro Cup
                </h1>

                <Card className="text-center card-margin">
                <Link to="./winner-pool">
                     <div>
                         <Card.Header>Winner Pool</Card.Header>
                        <Card.Title>Boston vs. Vermont</Card.Title>
                         <Card.Subtitle>$10,000</Card.Subtitle>
                         
                         <Button>Deposit Dai</Button>
                     </div>
                   </Link>
            </Card>

            <Card className="text-center card-margin">
                <Link to="./winner-pool">
                     <div>
                         <Card.Header>Winner Pool</Card.Header>
                        <Card.Title>Boston vs. Vermont</Card.Title>
                         <Card.Subtitle>$10,000</Card.Subtitle>
                         
                         <Button>Deposit Dai</Button>
                     </div>
                   </Link>
            </Card>

            <Card className="text-center card-margin">
                <Link to="./winner-pool">
                     <div>
                         <Card.Header>Winner Pool</Card.Header>
                        <Card.Title>Boston vs. Vermont</Card.Title>
                         <Card.Subtitle>$10,000</Card.Subtitle>
                         
                         <Button>Deposit Dai</Button>
                     </div>
                   </Link>
            </Card>

            <Card className="text-center card-margin">
                <Link to="./winner-pool">
                     <div>
                         <Card.Header>Winner Pool</Card.Header>
                        <Card.Title>Boston vs. Vermont</Card.Title>
                         <Card.Subtitle>$10,000</Card.Subtitle>
                         
                         <Button>Deposit Dai</Button>
                     </div>
                   </Link>
            </Card>
        </div>
    )
}

export default Euro_cup
