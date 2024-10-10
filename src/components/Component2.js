import React from "react";
import "./css/Component2.css";
import bannerImage from "./images/img1.png";
import bannerImage2 from "./images/img2.png";

export default function Component2() {
  return (
    <div className="banner">
      <div className="color-banner"></div>
      <h1 className="top-text">Our Concepts</h1>
      <p className="center-top">
        Take your pick kung ayaw mo wag mo. Explore the boundaries of the
        Reality. Each room offers a unique escape. Which one will you call home
        for the night?
      </p>
      <div className="image-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <h2 className="overlay-text">The Watcher Room</h2>
        <p className="overlay-description">
          A surreal, empty room with beige walls and a single chair. A massive,
          expressionless white mask floats eerily above the floor, creating an
          unsettling atmosphere that challenges the boundaries of reality.
        </p>
        <button
          className="learn-more"
          style={{
            position: "absolute",
            right: "100px",
            top: "75%",
            fontSize: "30px",
          }}
        >
          Learn More
        </button>
      </div>
      <div className="hole-section">
        <div className="hole-content">
          <h2 className="bottom-text">The Hole</h2>
          <p className="bottom-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="learn-more bottom-button">Learn More</button>
        </div>
        <div className="image-container2">
          <img src={bannerImage2} alt="Banner2" className="banner-image2" />
        </div>
      </div>
    </div>
  );
}
