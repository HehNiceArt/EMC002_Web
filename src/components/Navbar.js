import React from "react";
import { Link } from 'react-router-dom';
import './css/Navbar.css';


export default function Navbar() {
    return (
        <div>
            <header className="header"> 
                <a href="/" className="logo">Liminal Escapes</a>

                <nav className="navbar">
                    <Link to='/RoomOverview'>Rooms</Link>
                    <Link to='/RoomReservation'>Find Reservations</Link>
                    <Link to='/CustomerReviews'>Customer Reviews</Link>
                    <Link to='/login'>Login / Register</Link>
                </nav>
            </header>
        </div>
    )
}