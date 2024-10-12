import React from "react";

export default function Calendar() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        border: "2px solid black",
        borderRadius: "5px 5px 5px 5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
        }}
      >
        <label for="start" style={{ color: "white" }}>
          Check in Date:
        </label>

        <input type="date" id="start" name="trip-start" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
        }}
      >
        <label for="start" style={{ color: "white" }}>
          Check out Date:
        </label>

        <input type="date" id="start" name="trip-start" />
      </div>
    </div>
  );
}
