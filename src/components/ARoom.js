import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import './css/Admin.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ARoom() {
    const [reservations, setReservations] = useState([]);
    const [stats, setStats] = useState({ newBookings: 0, checkIn: 0, checkOut: 0 });

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/reservations');
                const data = await response.json();
                setReservations(data);

                const newBookings = data.filter(res => res.status === 'New Booking').length;
                const checkIn = data.filter(res => res.status === 'Check In').length;
                const checkOut = data.filter(res => res.status === 'Check Out').length;

                setStats({ newBookings, checkIn, checkOut });
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };
        fetchReservations();
    }, []);

    return (
        <div className="Admin-Container">
            <AdminNavbar />
            <div className="Admin-Content">
                <div className="Room-List">
                    <div className="Room-Bookings">
                        <h1 className="Room-Tally">{stats.newBookings}</h1>
                        <p>New Bookings</p>
                    </div>
                    <div className="Room-CheckIn">
                        <h1 className="Room-Tally">{stats.checkIn}</h1>
                        <p>Check In</p>
                    </div>
                    <div className="Room-CheckOut">
                        <h1 className="Room-Tally">{stats.checkOut}</h1>
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
                    {reservations.map((reservation, index) => (
                        <Row className="grid-line" key={index}>
                            <Col className="grid-line"><p>{reservation.code}</p></Col>
                            <Col className="grid-line"><p>{reservation.room}</p></Col>
                            <Col className="grid-line"><p>{reservation.total}</p></Col>
                            <Col className="grid-line"><p>{reservation.name}</p></Col>
                        </Row>
                    ))}
                </Container>
            </div>
            <div className="Grid">

            </div>

        </div>
    )
}