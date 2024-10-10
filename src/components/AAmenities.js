import React from "react";
import AdminNavbar from "./AdminNavbar";

import './css/Admin.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AAmenities() {
    return (
        <div className="Admin-Container">
            <AdminNavbar />
            <div className="Admin-Content">
                <div className="Room-List">
                    <div className="Room-Bookings">
                        <h1 className="Room-Tally">6</h1>
                        <p>Room Service</p>
                    </div>
                    <div className="Room-CheckIn">
                        <h1 className="Room-Tally">8</h1>
                        <p>Internet Access</p>
                    </div>
                    <div className="Room-CheckOut">
                        <h1 className="Room-Tally">10</h1>
                        <p>Business Facilities</p>
                    </div>
                </div>
                <Container className="grid-container">
                    <Row className="grid-line">
                        <Col className="grid-line"><h2>Code</h2></Col>
                        <Col className="grid-line"><h2>Room Service</h2></Col>
                        <Col className="grid-line"><h2>Internet Access</h2></Col>
                        <Col className="grid-line"><h2>Business Facilities</h2></Col>
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
        </div>
    )
}