import React, { useState } from "react";
import "./css/Reservation.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    branchLocation: "",
    lengthOfStay: "",
    checkInDate: "",
    roomType: "",
    checkOutDate: "",
    notes: "",
    fullName: "",
    contactNumber: "",
    email: "",
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Branch Location
          <br />
          <input
            type="text"
            name="branchLocation"
            value={formData.branchLocation}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Length of Stay (in hours)
          <br />
          <input
            type="number"
            name="lengthOfStay"
            value={formData.lengthOfStay}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Check-in Date
          <br />
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Room Type
          <br />
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Room Type</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
          </select>
        </label>
        <br />

        <label>
          Check-out Date
          <br />
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Notes
          <br />
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {/* Divider */}
        <hr />

        <label>
          Full Name
          <br />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Contact Number
          <br />
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Email
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <div class="divTerms">
          <input
            type="checkbox"
            name="agreeTerms"
            id="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            required
          />
          <label for="agreeTerms" id="textTerms">
            I agree with the terms and conditions
          </label>
        </div>

        <button type="submit" id="bookNow" class="learn-more">
          Book Now
        </button>

        <hr />

        <h2>
          Cancellation and <br />
          Refund Policy
        </h2>

        <button type="submit" id="end-button1">
          Cancellation Policy
        </button>
        <br />
        <button type="submit" id="end-button2">
          Refund Process
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
