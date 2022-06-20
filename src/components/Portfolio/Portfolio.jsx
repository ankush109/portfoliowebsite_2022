import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import mainp from "../../img/mainp.jpeg";
import productsp from "../../img/productsp.jpeg";
import productsad from "../../img/productsad.jpeg";
import admin from "../../img/admin.jpeg";
import userorder from "../../img/userorder.jpeg";
import orderadm from "../../img/orderadm.jpeg";
import users from "../../img/users.jpeg";
import r from "../../img/r.jpeg";
import cart from "../../img/cart.jpeg";
import { themeContext } from "../../Context";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={mainp} style={{ width: "50vw", height: "60vh" }} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productsp} style={{ width: "50vw", height: "60vh" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cart} style={{ width: "50vw", height: "60vh" }} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={userorder} style={{ width: "50vw", height: "60vh" }} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin} style={{ width: "50vw", height: "60vh" }} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={users} style={{ width: "50vw", height: "60vh" }} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productsad} style={{ width: "50vw", height: "60vh" }} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={r} style={{ width: "50vw", height: "60vh" }} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={orderadm} style={{ width: "50vw", height: "60vh" }} alt="" />
        </SwiperSlide>
      </Swiper>
      <div>
        <h1>Slide to right → </h1>
      </div>
      
    </div>
  );
};

export default Portfolio;
