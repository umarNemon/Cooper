import React, { Component } from "react";
import MainHeader from "../MainHeader/MainHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Slick/Slick.scss'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="main">
        <Slider {...settings}>
          <div>
            <h3><MainHeader/></h3>
          </div>
          <div>
          <h3><MainHeader/></h3>
          </div>
          <div>
          <h3><MainHeader/></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
