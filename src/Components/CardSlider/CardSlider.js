import React, { useState } from "react";
import "./cardSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  BathIcon,
  BedIcon,
  GarageIcon,
  LocationIcon,
  SgFeetIcon,
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SwiperRightArrow,
} from "../../Assets";
import { AiOutlineHeart } from "react-icons/ai";

const CardSlider = ({
  activeSlide,
  setActiveSlide,
  navigationNextRef,
  navigationPrevRef,
}) => {
  let [isLike, setIsLike] = useState(0);

  const Data = [
    {
      id: 1,
      image: SliderImage1,
      heading: "Beach View Villa",
    },
    {
      id: 2,
      image: SliderImage2,
      heading: "Shangri la New Apartment Unit",
    },
    {
      id: 3,
      image: SliderImage3,
      heading: "Single Family Ranch House",
    },
    {
      id: 4,
      image: SliderImage1,
      heading: "Beach View Villa",
    },
    {
      id: 5,
      image: SliderImage2,
      heading: "Shangri la New Apartment Unit",
    },
    {
      id: 6,
      image: SliderImage3,
      heading: "Beach View Villa",
    },
    {
      id: 7,
      image: SliderImage1,
      heading: "Beach View Villa",
    },
    {
      id: 8,
      image: SliderImage2,
      heading: "Shangri la New Apartment Unit",
    },
  ];

  return (
    <div style={{ flex: "1", marginLeft: "23%" }}>
      <Swiper
        direction="horizontal"
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={4}
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
            <div className="swiperMainContentContainer">
              <div className="SwiperImageContainer">
                <img
                  src={user.image}
                  alt="Image"
                  className="SwiperImageStyle"
                />
                <div
                  className="wiperHeartContainer"
                  onClick={() => {
                    setIsLike(user.id);
                  }}
                >
                  <AiOutlineHeart
                    color={isLike == user.id ? "red" : "#E3B64B"}
                    size={20}
                  />
                </div>
              </div>
              <div className="SwiperContentContainer">
                <div className="SwiperHeadingContainer">
                  <p className="SwiperHeading_Text_Style">{user.heading}</p>
                  <div className="SwiperLocationContainer">
                    <img src={LocationIcon} alt="Icon" />
                    <p className="SwiperLocationTextStyle">
                      Bukit Merah, Central Area, Singapore
                    </p>
                  </div>
                </div>
                <div className="SwiperBedContainer">
                  <div className="swiperIconContainer">
                    <img src={BedIcon} />
                    <p className="swiperInfoTextStyle">2 beds</p>
                  </div>
                  <div className="swiperIconContainer">
                    <img src={GarageIcon} />
                    <p className="swiperInfoTextStyle">no garage</p>
                  </div>
                </div>
                <div className="SwiperBathContainer">
                  <div className="swiperIconContainer">
                    <img src={BathIcon} />
                    <p className="swiperInfoTextStyle">1 bath</p>
                  </div>
                  <div className="swiperIconContainer">
                    <img src={SgFeetIcon} />
                    <p className="swiperInfoTextStyle">1,050 sqft</p>
                  </div>
                </div>
                <div className="SwiperBottomContentWrapper">
                  <div className="SwiperBottomInfoWrapper">
                    <p className="SwiperRentStyle">For Rent</p>
                    <div className="SwiperTextWrapperStyle">
                      <p className="SwiperAmountTextStyle">$1,900/</p>
                      <p className="SwiperRentStyle">month</p>
                    </div>
                  </div>
                  <div className="SwiperArrowButtonStyle">
                    <img src={SwiperRightArrow} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
