import React, { useState } from "react";
import "./clientSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Client1, Client2, StartIcon } from "../../Assets";

function ClientSlider({
  navigationPrevRef,
  navigationNextRef,
  setActiveSlide,
}) {
  const Data = [
    {
      id: 1,
      image: Client1,
      name: "Rowan Jacobson",
      location: "Jakarta, Indonesia",
      desc: "I had quite a hard time selling my house in the city even though my family and I had to immediately pay off the money to buy a house in the countryside. Luckily, Dream well agents helped sell our house at a decent price and fast.",
    },
    {
      id: 2,
      image: Client2,
      name: "Dani Crowford",
      location: "Johor, Malaysia",
      desc: "Even though I'm a boy, my parents are worried that I won't find a decent place to live when studying abroad. Thanks to Dream well, my parents don't have to worry about that anymore.",
    },
    {
      id: 3,
      image: Client1,
      name: "Rowan Jacobson",
      location: "Jakarta, Indonesia",
      desc: "I had quite a hard time selling my house in the city even though my family and I had to immediately pay off the money to buy a house in the countryside. Luckily, Dream well agents helped sell our house at a decent price and fast.",
    },
    {
      id: 4,
      image: Client2,
      name: "Dani Crowford",
      location: "Johor, Malaysia",
      desc: "Even though I'm a boy, my parents are worried that I won't find a decent place to live when studying abroad. Thanks to Dream well, my parents don't have to worry about that anymore.",
    },
    {
      id: 5,
      image: Client1,
      name: "Rowan Jacobson",
      location: "Jakarta, Indonesia",
      desc: "I had quite a hard time selling my house in the city even though my family and I had to immediately pay off the money to buy a house in the countryside. Luckily, Dream well agents helped sell our house at a decent price and fast.",
    },
    {
      id: 6,
      image: Client1,
      name: "Rowan Jacobson",
      location: "Jakarta, Indonesia",
      desc: "I had quite a hard time selling my house in the city even though my family and I had to immediately pay off the money to buy a house in the countryside. Luckily, Dream well agents helped sell our house at a decent price and fast.",
    },
    {
      id: 7,
      image: Client2,
      name: "Dani Crowford",
      location: "Johor, Malaysia",
      desc: "Even though I'm a boy, my parents are worried that I won't find a decent place to live when studying abroad. Thanks to Dream well, my parents don't have to worry about that anymore.",
    },
    {
      id: 8,
      image: Client1,
      name: "Rowan Jacobson",
      location: "Jakarta, Indonesia",
      desc: "I had quite a hard time selling my house in the city even though my family and I had to immediately pay off the money to buy a house in the countryside. Luckily, Dream well agents helped sell our house at a decent price and fast.",
    },
  ];
  return (
    <div className="ClientSwiperContainer">
      <Swiper
        direction="horizontal"
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={3}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          console.log("swiper.activeIndex", swiper.activeIndex);
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {Data.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="ClientMainContainer">
              <div className="ClientNameContainer">
                <img
                  src={user.image}
                  alt="Image"
                  className="Client_ImageStyle"
                />
                <div className="ClientLocationContainer">
                  <p className="ClientNameStyle">{user.name}</p>
                  <p className="ClientLocationStyle">{user.location}</p>
                </div>
              </div>
              <p className="ClientDescStyle">{user.desc}</p>
              <div className="ClientStartContainer">
                <img src={StartIcon} />
                <img src={StartIcon} />
                <img src={StartIcon} />
                <img src={StartIcon} />
                <img src={StartIcon} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientSlider;
