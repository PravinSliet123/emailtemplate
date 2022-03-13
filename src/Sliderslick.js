import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/Group1.png"
import "./Sliderslick.css"
function Sliderslick() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrow: true

  }


  return (
    <div className='Slider_container'>
      <Slider {...settings}>
        <div className='Slider__image'>
          <img src={img1} alt="" />
        </div>
        <div className='Slider__image'>
          <img src={img1} alt="" />
        </div >
        <div className='Slider__image'>
          <img src={img1} alt="" />
        </div>
        <div className='Slider__image'>
          <img src={img1} alt="" />
        </div>
        <div className='Slider__image'>
          <img className='Slider__image' src={img1} alt="" />
        </div>
        <div className='Slider__image'>
          <img src={img1} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Sliderslick