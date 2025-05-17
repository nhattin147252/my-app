'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
  };
  return (
    <Slider {...settings}>
      <div>
       <img src="https://lolnow.gg/wp-content/uploads/2025/02/league-of-legends-coven-2025-leak.jpg" width={600} height={300} alt="product 1" /> 
      </div>
      <div>
      <img src="https://prod.assets.earlygamecdn.com/images/Coven-Morgana.jpg?x=0.5&y=0.5" width={600} height={300} alt="product 1" /> 
      </div>
      <div>
      <img src="https://prod.assets.earlygamecdn.com/images/Coven-Leblanc.jpg?transform=galleryItem_webp&x=0.5&y=0.5" width={600} height={300} alt="product 1" /> 
      </div>
      <div>
      <img src="https://www.cyberpowerpc.com/blog/w/wp-content/uploads/2021/07/Coven-Ashe.jpg" width={600} height={300} alt="product 1" /> 
      </div>
      <div>
      <img src="https://smurfmania.com/wp-content/uploads/2023/09/coven-lissandra-splash-art-768x453.webp" width={600} height={300} alt="product 1" /> 
      </div>
      <div>
      <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXemhuvLoAePW0u1_x23FD6CW-0fjpO8gLu7aX_dHCL6jzPPBzIwXBPXD2BHPvmyoHv1exYGKaWh1HmeuYWuMux4hhTJEHnZHEa2gqnInC5vGQuGR21L2rPg0X-Vwm-q0Ba5w5KbYzsYVLtnQ4MzNk0PX_6P?key=UjnLbHWlaRM_tBbUopklQw" width={600} height={300} alt="product 1" /> 
      </div>
    </Slider>
  );
}