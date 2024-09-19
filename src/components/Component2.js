import React from "react";
import "./css/Component2.css";
import bannerImage from "./images/img1.png";

export default function Component2() {
  return (
    <div className="banner">
      <div className="color-banner"></div>
      <h1 className="top-text">Our Concepts</h1>
      <p>
        Take your pick. Explore the boundaries of the Reality. Each room offers
        a unique escape. Which one will you call home for the night?
      </p>
      <div className="image-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <h2 className="overlay-text">The Watcher Room</h2>
        <p className="overlay-description">Here</p>
      </div>
      <h2 className="bottom-text">The Hole</h2>
    </div>
  );
}
