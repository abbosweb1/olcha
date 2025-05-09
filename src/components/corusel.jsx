import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import glavniy from "../assets/bitta bola bn qiz.jpg"
import airPods from "../assets/air pods.jpg"
import airPods2 from "../assets/air pods2.jpg"
import nokia from "../assets/nokia.jpg"
import "./home.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function Corusel() {
  return (
    <>
      {/* <div className="homeWrapper">
      <div className="coruselWrapper">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img id='coruselImg' src={glavniy} alt="" /></SwiperSlide>
        <SwiperSlide><img id='coruselImg' src={airPods} alt="" /></SwiperSlide>
        <SwiperSlide><img id='coruselImg' src={airPods2} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Cardlist/>
      </div>
      </div> */}
    </>
  );
}

export default Corusel;