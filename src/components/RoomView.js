import React from "react";
import "../components/css/RoomView.css";
import Dropdown from "react-bootstrap/Dropdown";
import Calendar from "../components/Calendar";

export default function RoomView() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(https://cdnb.artstation.com/p/assets/images/images/027/766/497/large/nihal-devang-finl.jpg?1592488454)",
        backgroundSize: "cover",
        height: "150vh",
      }}
    >
      <div className="upperRow">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/027/766/497/large/nihal-devang-finl.jpg?1592488454"
          alt=""
          className="overlayText"
        />
        {/* Information Box  */}
        <div className="infoBox">
          <h2>Subway</h2>
          <div>
            <button className="tags">Stay</button>
            <button className="tags">Concept</button>
            <button className="tags">Liminal</button>
            <button className="tags">Experience</button>
          </div>
          <p>
            Step into an eerie, abandoned underground station. Flickering
            lights, cracked tiles, and rail accents set the mood. Relax in a
            cozy bed or unwind in a clawfoot tub. The subtle sound of distant
            trains completes the haunting yet comfortable experience.
          </p>
          <div className="reviewsBox">
            <p style={{ fontSize: "25px" }}>Customer Reviews</p>
            <p>Bob</p>
            <p>"I now hate the subway, good stuff."</p>
          </div>
        </div>
      </div>

      <div className="lowerRow">
        {/* terms and conditions */}
        <div className="termsBox">
          <p
            style={{ display: "inline", marginRight: "65px", fontSize: "11px" }}
          >
            Offer Details
          </p>
          <p style={{ display: "inline" }}>Terms and Conditions</p>
          <p style={{ marginTop: "10px" }}>
            Get ready to elevate your Liminal experience to dazzling heights!
            Enjoy an unforgettable celebration where the iconic uncanny valley
            become a mesmerizing masterpiece just outside your window.
          </p>
          <p>
            Immerse yourself in the magic of Liminal Escapes world-renowned
            liminal rooms from the comfort of your own haven. Enjoy panoramic
            views of the liminal spaces as bursts of muted colours and sparkles
            dance across the night sky.
          </p>
          <p>Your bucket-list Liminal Spaces begins here!</p>
          <p>
            This offer includes: <br />
            - Overnight accomodation <br />- High-speed and restriction-free
            WiFi and broadband internet access
          </p>
          <p>Liminal Escapes Cares - Your Well-being In Our Care</p>
        </div>

        <div className="bookingBox">
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>
            Book This Offer
          </p>
          <p style={{ fontSize: "20px" }}>From PHP 1,999 Average Per Night</p>
          <div className="blackLine"></div>
          <p style={{ fontSize: "30px", fontWeight: "bold", padding: "8px" }}>
            Plan Your Visit
          </p>
          <div className="bookingDetails">
            <Dropdown className="bookingLocation">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Location <br />
                Edsa, Kamuning
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Edsa, Cubao</Dropdown.Item>
                <Dropdown.Item href="#/action-2">North Edsa</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Edsa, Guadalupe</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Calendar />
            <Dropdown className="bookingRooms">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Rooms
                <br />1 Room, 1 Adult, 0 Children
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Room +</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Room -</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Adult +</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Adult -</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Children +</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Children -</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="bookingPromoCode">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Promo Code <br />
                WELCOMETOLIMINAL
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button className="bookingSearch">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
