import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import glavniy from "../assets/bitta bola bn qiz.jpg"
import airPods from "../assets/air pods.jpg"
import airPods2 from "../assets/air pods2.jpg"
import nokia from "../assets/nokia.jpg"
import kunlikTovar from "../assets/lUXpXrUYo3U58dzqDfbmYgqSEmZFZHfTLCTsA0uTTOvy04aQG6iJqW4SHyva.jpg"
import a16 from "../assets/6BexzXkcxAATg6RkrMU3sATMp47UEToiPw1YS8jMwCmKfnxJLCEZEc1O5m52.jpg"
import note14 from "../assets/agkCl3PQYlkaDi9GaSDgvc5Bj9X5bNWYadcQ2Fs7AlsXaT5clDrBPaBrML3c.jpg"
import Navbar from "./navbar"


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cardlist from './cardlist';
import Navbar2 from './navbar2';

export default function App() {
  return (
    <>
    <Navbar2/>
    <div className="swiperWrapper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img id='swiperImg' src={glavniy} alt="" /></SwiperSlide>
        <SwiperSlide><img id='swiperImg' src={airPods} alt="" /></SwiperSlide>
        <SwiperSlide><img id='swiperImg' src={airPods2} alt="" /></SwiperSlide>
        <SwiperSlide><img id='swiperImg' src={nokia} alt="" /></SwiperSlide>
        <SwiperSlide><img id='swiperImg' src={a16} alt="" /></SwiperSlide>
        <SwiperSlide><img id='swiperImg' src={note14} alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide> */}
        {/* <SwiperSlide>Slide 8</SwiperSlide> */}
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      <div className="kunlikTovar">
        <div className="tvWrapper">
        <div className="product-card">
  <div className="product-title"><p>Kun mahsuloti</p></div>
  <div className="timer">
    <span className="time-box"><p>08</p></span>:
    <span className="time-box"><p>46</p></span>:
    <span className="time-box"><p>06</p></span>
  </div>
  <div className="ImgWrapper">
    <img id='knImg' src={kunlikTovar} alt="" />
    </div>
  <div className="card-content">
    <div className="product-description">
      <p>Leigh Bardugo: The Shadow and Bone Trilogy Boxed Set</p>
    </div>
    <div className="product-price"><p>327 000 som</p></div>
    <button className="installment-button"><p>39 000 som x 12 oy</p></button>
  </div>
</div>

        </div>
      </div>
      </div>
      <Cardlist/>
    </>
  );
}
