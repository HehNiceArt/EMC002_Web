// src/ImageSlider.js
import React, { useState } from 'react';
import './css/ImageSlider.css';
import poolRoom from './pictures/pool-room.jpg'
import restaurantRoom from './pictures/restaurant-room.jpg'
import hotelRoom from './pictures/hotel-room.jpg'
import registerImage from './pictures/register-img.png'


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    poolRoom, restaurantRoom, hotelRoom
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="slider">
        <button className="prev" onClick={prevSlide}>❮</button>
        <img src={images[currentIndex]} className='imageSlider' alt={`Slide ${currentIndex + 1}`} />
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
      <div>
        <img src={registerImage} alt='Register' className='registerImage' />
        <p className='RegisterTitle'>A place Between Dreams and Reality</p>
      </div>
    </div>


  );
};

export default ImageSlider;
