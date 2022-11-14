import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import "../styles.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const uri = "https://picsum.photos/200/300";

const Carousel = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: 'https://picsum.photos/200/300' }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${uri})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${uri})` }} />
        </div>
      </Slide>
    </div>
  );
};

export default Carousel;
