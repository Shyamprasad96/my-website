import React from "react";
import './About.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const About=()=> {
  return (
    <div className="about-page">
    <div class="carousel-wrapper">
    <Carousel infiniteLoop autoPlay showArrows={true} >
        <div className="about-items">
        <p className="img1-text">
            Pursuing masters at Arizona State University
          </p>
            <img className="as" src="../About6.jpg"alt="image1"/>
        </div>
        <div className="about-items">
        <p className="img2-text">
          Graduating at May 2023
          </p>
            <img src="../About2.jpg" alt="image2" />
        </div>
        <div className="about-items">
        <p className="img3-text">
            Majors in Software Engineering
          </p>
            <img src="../About1.jpg" alt="image3"/>
        </div>
    </Carousel>
</div>
<div className="about-text">
    Shyam Prasad
</div>
</div>
  );
}

export default About;