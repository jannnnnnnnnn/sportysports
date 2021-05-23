import React from 'react'
import {Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';

function Soccer_leagues() {
    return (
        <div>
            
            <h1 className="align-me">
                Soccer Leagues
                </h1>
            <Card className=" card-margin" bg="light">
            <Link to="./euro-cup">
                <Row>
                    <Col className="col-4">
                <Card.Img className="league-img" src="/eurocup.jpg" alt="EuroCup"/>
                </Col>
                <Col className="col-8 ">
                    <div className="align-me">
                <Card.Title>UEFA Euro</Card.Title>
                <Card.Text>This is text.</Card.Text>
                </div>
                </Col>
                
                </Row>
                </Link>
            </Card>

            <Card className="card-margin" bg="light">
            <Link to="./euro-cup">
                <Row>
                    <Col className="col-4">
                <Card.Img className="league-img" src="/FIFA.png" alt="FIFA"/>
                </Col>
                <Col className="col-8 ">
                    <div className="align-me">
                <Card.Title>FIFA</Card.Title>
                <Card.Text>This is text.</Card.Text>
                </div>
                </Col>
                
                </Row>
                </Link>
            </Card>

            <Card className="card-margin" bg="light">
            <Link to="./premier-league">
                <Row>
                    <Col className="col-4">
                <Card.Img className="league-img" src="/Premier League.png" alt="Premier League"/>
                </Col>
                <Col className="col-8 ">
                    <div className="align-me">
                <Card.Title>Premier League</Card.Title>
                <Card.Text>This is text.</Card.Text>
                </div>
                </Col>
                
                </Row>
                </Link>
            </Card>

            <Card className="card-margin" bg="light">
            <Link to="./mls">
                <Row>
                    <Col className="col-4">
                <Card.Img className="league-img" src="/MLS.jpeg" alt="MLS"/>
                </Col>
                <Col className="col-8 ">
                    <div className="align-me">
                <Card.Title>MLS</Card.Title>
                <Card.Text>This is text.</Card.Text>
                </div>
                </Col>
                
                </Row>
                </Link>
            </Card>
         
        </div>
    )
}

export default Soccer_leagues
