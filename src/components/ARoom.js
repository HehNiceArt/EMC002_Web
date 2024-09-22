import React from "react";
import AdminNavbar from "./AdminNavbar";

import './css/Admin.css'
export default function ARoom() {
    return (
        <div className="Admin-Container">
            <AdminNavbar />
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
        </div>
    )
}