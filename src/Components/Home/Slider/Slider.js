import React from "react";
import { Button, Carousel } from "react-bootstrap";
import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import './Slider.css' 

const Slider = () => {
  return (
    <div> 
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h6>Professional Cleaning Services</h6>
            <h1>A huge variety fruits & vegetables.</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio repudiandae deleniti sint facere culpa error excepturi, pariatur libero suscipit nihil earum quisquam eos voluptate autem alias hic! Asperiores facere nihil debitis sapiente est dicta eligendi dolores ab minima unde.</p>
            <Button variant='primary'>Contact Us</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h6>Professional Cleaning Services</h6>
            <h1>A huge variety fruits & vegetables.</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio repudiandae deleniti sint facere culpa error excepturi, pariatur libero suscipit nihil earum quisquam eos voluptate autem alias hic! Asperiores facere nihil debitis sapiente est dicta eligendi dolores ab minima unde.</p>
            <Button variant='primary'>Contact Us</Button>
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    </div>
  );
};

export default Slider;
