import React from 'react'
import {Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container, Row, Col} from "react-bootstrap";

function Soccer_leagues() {
    return (
        <div>
         
            <h1>Soccer Leagues</h1>
            <div className="bg-gray">
            <Card >
                <Card.Img className="league-img" src="/eurocup.jpg" alt=""Eurocup/>
                <Card.Title>UEFA Euro</Card.Title>
            </Card>
            </div>
        </div>
    )
}

export default Soccer_leagues
