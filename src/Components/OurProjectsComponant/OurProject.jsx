import React, { useRef, useState, useEffect } from "react";
import { OPOne, OPTwo, OPLoc, OPCornerImage, OPBottomLoc } from "../../Assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ourProject.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function OurProject() {
  let Arr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  const swiperRef = useRef(null);
  const customDotsRef = useRef([]);

  const updateCustomDots = () => {
    const activeIndex = swiperRef.current.realIndex;
    customDotsRef.current.forEach((dot, index) => {
      dot.style.backgroundColor = index === activeIndex ? "#333" : "#ccc";
    });
  };

  //   useEffect(() => {
  //     updateCustomDots(); // Initialize custom dot colors
  //   }, [swiperRef]);

  return (
    <div className="OurProjectMainContainer">
      {/* <div className="HeadinStyleOP">Our Projects</div> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          el: ".custom-pagination",
          clickable: false,
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.on("slideChange", updateCustomDots);
        }}
      >
        {Arr.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="OurProjectSwiperMainContainer">
              <div className="SubContainerOneStyle">
                <div className="OPHeadingStyle">MONARCH ONE 1</div>
                <div className="OPDescriptionStyle">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. Lorem Ipsum is not simply random text.
                </div>
                <div className="OPButtonStyle">Commercial</div>
                <div className="OPLocationContainer">
                  <img src={OPLoc} alt="img" />
                  <div className="OPLocationTextStyle">Bahria Town Phase-7</div>
                </div>
              </div>
              <div className="SubContainerTwoStyle">
                <img
                  className="OPCornerImageStyle"
                  src={OPCornerImage}
                  alt="img"
                />
                <img
                  className="ImageOneStyleOP"
                  src={OPOne}
                  alt={`Slide ${item.id}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination">
        {Arr.map((_, index) => (
          <div
            key={index}
            ref={(el) => (customDotsRef.current[index] = el)}
          ></div>
        ))}
      </div>
      {/* bottom image  */}
      <div className="OurProjectBottomImageMainContainer">
        <div className="BottomSubContainerOneStyle">
          <div className="OPBottomHeadingStyle">MONARCH ONE 1</div>
          <div className="OPBottomDescriptionStyle">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Lorem Ipsum is not simply random text.
          </div>
          <div className="OPBottomButtonStyle">Commercial</div>
          <div className="OPLocationContainer">
            <img src={OPBottomLoc} alt="img" />
            <div className="OPBottomLocationTextStyle">Bahria Town Phase-7</div>
          </div>
        </div>
        <div className="SubContainerTwoStyle">
          <img
            className="OPBottomCornerImageStyle"
            src={OPCornerImage}
            alt="img"
          />
          <img className="ImageOneStyleOP" src={OPTwo} />
        </div>
      </div>
    </div>
  );
}
