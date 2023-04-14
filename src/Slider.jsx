import React, { useState, useEffect } from 'react';
import './Style.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      backgroundImage:
        "url('https://www.hdwallpapers.in/download/cyberpunk_2077_car_4k_hd-3840x2160.jpg')"
    },
    { 
      backgroundImage:
        "url('https://wallpapercave.com/wp/wp6736053.jpg')"
    },
    { 
      backgroundImage:
        "url('https://www.pixel4k.com/wp-content/uploads/2021/03/quadra-turbo-neon-cyberpunk-2077-4k_1615187590.jpg')"
    },
    { 
      backgroundImage:
        "url('https://i.pinimg.com/originals/9b/59/a2/9b59a29033f099448c65f79490802840.jpg')"
    },
    { 
      backgroundImage:
        "url('https://www.pixel4k.com/wp-content/uploads/2020/12/neon-lights-city-cyberpunk-4k_1608658610.jpg')"
    },
    { 
      backgroundImage:
        "url('https://images5.alphacoders.com/985/thumb-1920-985798.png')"
    }
  ];

  const [currentImage, setCurrentImage] = useState(slides[activeSlide].backgroundImage);

  useEffect(() => {
    document.body.style.backgroundImage = currentImage;
  }, [currentImage]);

  function handleNextSlide() {
    const nextSlideIndex = (activeSlide + 1) % slides.length;
    setActiveSlide(nextSlideIndex);
    setCurrentImage(slides[nextSlideIndex].backgroundImage);
  }

  function handlePrevSlide() {
    const prevSlideIndex = (activeSlide - 1 + slides.length) % slides.length;
    setActiveSlide(prevSlideIndex);
    setCurrentImage(slides[prevSlideIndex].backgroundImage);
  }

  const bodyStyles = {
    backgroundImage: slides[activeSlide].backgroundImage,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === activeSlide ? 'active' : ''}`}
          style={slide}
        ></div>
      ))}
      <button className="arrow left-arrow" onClick={handlePrevSlide} id="left">
        <i className="fas fa-arrow-left"></i>
      </button>
      <button className="arrow right-arrow" onClick={handleNextSlide} id="right">
        <i className="fas fa-arrow-right"></i>
      </button>
      <div className="body-background" style={bodyStyles}></div>
    </div>
  );
}

export default Slider;

