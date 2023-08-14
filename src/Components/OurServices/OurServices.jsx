import React, { useState } from "react";
import "./ourServices.css";
import {
  AssetIcon,
  HoveredIcon,
  InvestmentsIcon,
  LeftFeatureButton,
  RightFeatureButton,
  ServicesImages,
  ServicesImages1,
  callIcon,
} from "../../Assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function OurServices() {
  const [activeSlide, setActiveSlide] = useState(0);
  console.log("activeSlide", activeSlide);

  const Data = [
    {
      id: 0,
      image: ServicesImages,
      icon: InvestmentsIcon,
      title: "INVESTMENT CONSULTANCY",
    },
    {
      id: 1,
      image: ServicesImages1,
      icon: AssetIcon,
      title: "ASSET MANAGEMENT",
    },
    {
      id: 2,
      image: ServicesImages,
      icon: InvestmentsIcon,
      title: "INVESTMENT CONSULTANCY",
    },
    {
      id: 3,
      image: ServicesImages1,
      icon: AssetIcon,
      title: "ASSET MANAGEMENT",
    },
    {
      id: 4,
      image: ServicesImages,
      icon: InvestmentsIcon,
      title: "INVESTMENT CONSULTANCY",
    },
    {
      id: 5,
      image: ServicesImages1,
      icon: AssetIcon,
      title: "ASSET MANAGEMENT",
    },
    {
      id: 6,
      image: ServicesImages1,
      icon: AssetIcon,
      title: "ASSET MANAGEMENT",
    },
    {
      id: 7,
      image: ServicesImages,
      icon: InvestmentsIcon,
      title: "INVESTMENT CONSULTANCY",
    },
    {
      id: 8,
      image: ServicesImages1,
      icon: AssetIcon,
      title: "ASSET MANAGEMENT",
    },
    {
      id: 9,
      image: ServicesImages,
      icon: InvestmentsIcon,
      title: "INVESTMENT CONSULTANCY",
    },
  ];
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div style={{ flex: "1" }}>
      <Swiper
        direction="horizontal"
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={5}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        keyboard={{
          enabled: true,
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {Data.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="OurServicesMainContainerWrapper">
              <div
                style={{ backgroundImage: `url(${user.image})` }}
                className={
                  user.id % 2 != 0
                    ? "ourServicesImageStyle1"
                    : "ourServicesImageStyle2"
                }
              >
                <div className="ourServicesContentWrapper">
                  <img src={user.icon} alt="Icon" className="Item_ImageStyle" />
                  <p className="OurServicesTitleTextStyle">{user.title}</p>
                </div>
                <div className="ourServicesHoverEffectMainContainer">
                  <div className="hoverIconContainer">
                    <img src={HoveredIcon} alt="Icon" />
                    <p className="Services_Market_Text_Style">
                      MARKETING AND SALES
                    </p>
                  </div>
                  <p className="Services_Desc_Text_Style">
                    Monarch International’s asset management experts, who have
                    years of experience in organizational asset management and
                    investment policy, can assist you in navigating a constantly
                    changing environment.
                  </p>
                  <div className="Services_ContactUs_button_Wrapper">
                    <img src={callIcon} alt="Icon" />
                    <p className="Services_Text_Style">Contact us</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="MainFeaturePaginationContainer">
          <div className="ourServicesButtonWrapperStyle">
            <div ref={navigationPrevRef}>
              <img src={LeftFeatureButton} className="OurServicesButtonStyle" />
            </div>
            <div ref={navigationNextRef}>
              <img
                src={RightFeatureButton}
                className="OurServicesButtonStyle"
              />
            </div>
          </div>
          <div className="swiper_pagination_wrapper_Services">
            {Data.map((item) => {
              return (
                <span
                  className={
                    activeSlide == item.id
                      ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                      : "swiper_pagination_bullet"
                  }
                ></span>
              );
            })}
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default OurServices;
