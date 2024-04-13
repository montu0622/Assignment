import React from "react";
import meta from '../assets/images/meta.png';
import { Navigation, Pagination, Scrollbar, A11y,  Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperCantainer =()=>{
    return(
        <>
         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      centeredSlides={true}
      spaceBetween={20}
      slidesPerView={8}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        
      0: {
          slidesPerView: 3,
          
        },
        640: {
          slidesPerView: 3,
        
        },
        768: {
          slidesPerView: 4,
        
        },
        991: {
          slidesPerView: 6,
        
        },
        
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
      <SwiperSlide><div className="logo_wrapper"><img src={meta} alt="logo"/></div></SwiperSlide>
     
    </Swiper>
        
        </>
    );
};

export default SwiperCantainer;