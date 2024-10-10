import React from "react";
import AdminNavbar from "./AdminNavbar";

import './css/Admin.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ARoom() {
    return (
        <div className="Admin-Container">
            <AdminNavbar />
            <div className="Admin-Content">
                <div className="Room-List">
                    <div className="Room-Bookings">
                        <h1 className="Room-Tally">6</h1>
                        <p>New Bookings</p>
                    </div>
                    <div className="Room-CheckIn">
                        <h1 className="Room-Tally">8</h1>
                        <p>Check In</p>
                    </div>
                    <div className="Room-CheckOut">
                        <h1 className="Room-Tally">10</h1>
                        <p>Check Out</p>
                    </div>
                </div>
                <Container className="grid-container">
                    <Row className="grid-line">
                        <Col className="grid-line"><h2>Code</h2></Col>
                        <Col className="grid-line"><h2>Room</h2></Col>
                        <Col className="grid-line"><h2>Total</h2></Col>
                        <Col className="grid-line"><h2>Name</h2></Col>
                    </Row>
                    <Row className="grid-line">
                        <Col className="grid-line"><p>Code</p></Col>
                        <Col className="grid-line"><p>Room</p></Col>
                        <Col className="grid-line"><p>Total</p></Col>
                        <Col className="grid-line"><p>Name</p></Col>
                    </Row>
                    <Row className="grid-line">
                        <Col className="grid-line"><p>Code</p></Col>
                        <Col className="grid-line"><p>Room</p></Col>
                        <Col className="grid-line"><p>Total</p></Col>
                        <Col className="grid-line"><p>Name</p></Col>
                    </Row>
                    <Row className="grid-line">
                        <Col className="grid-line"><p>Code</p></Col>
                        <Col className="grid-line"><p>Room</p></Col>
                        <Col className="grid-line"><p>Total</p></Col>
                        <Col className="grid-line"><p>Name</p></Col>
                    </Row>
                    <Row className="grid-line">
                        <Col className="grid-line"><p>Code</p></Col>
                        <Col className="grid-line"><p>Room</p></Col>
                        <Col className="grid-line"><p>Total</p></Col>
                        <Col className="grid-line"><p>Name</p></Col>
                    </Row>
                </Container>
            </div>
            <div className="Grid">

            </div>

        </div>
    )
}