import React, { useState } from "react";
import "./ourTeam.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  FaceBookIcon,
  InstagramIcon,
  LeftFeatureButton,
  LinkInIcon,
  RightFeatureButton,
  TeamImage1,
  TeamImage2,
  TeamImage3,
  WhatsUpIcon,
} from "../../Assets";

function OurTeam() {
  const [selectedElement, setSelectedElement] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  let arr = [
    { id: 1, name: "Exective Memebers" },
    { id: 1, name: "Sales Team " },
    { id: 1, name: "Operation Team" },
    { id: 1, name: "Design Team" },
    { id: 1, name: "Media Team" },
  ];

  const Data = [
    {
      id: 0,
      image: TeamImage1,
      name: "SOHAIL AZAM",
      designation: "CEO",
    },
    {
      id: 1,
      image: TeamImage2,
      name: "MUDDASSIR AZAD",
      designation: "CMO",
    },
    {
      id: 2,
      image: TeamImage3,
      name: "ABDUL WASIF",
      designation: "COO",
    },
    {
      id: 3,
      image: TeamImage1,
      name: "Damian Angelo",
      designation: "Real Estate Agent",
    },
    {
      id: 4,
      image: TeamImage2,
      name: "MUDDASSIR AZAD",
      designation: "COO",
    },
    {
      id: 5,
      image: TeamImage3,
      name: "Damian Angelo",
      designation: "Real Estate Agent",
    },
    {
      id: 6,
      image: TeamImage1,
      name: "Everest Winston",
      designation: "CEO",
    },
    {
      id: 7,
      image: TeamImage2,
      name: "ABDUL WASIF",
      designation: "Real Estate Agent",
    },
  ];

  const handleElementClick = (index) => {
    setSelectedElement(index);
  };

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="MainContainerTrending">
      <div className="MianHeadingText">Our Teams</div>
      <div className="ArrayHeadingBlock">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className={`ArrayElementStyle ${
                selectedElement === index ? "selected" : ""
              }`}
              onClick={() => handleElementClick(index)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="ArrBottomLine" />
      <div className="TeamSwiperContainer">
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
              <div className="ourSwiperMainContentContainer">
                <img src={user.image} className="TeamImageStyle" />
                <p className="TeamNameStyle">{user.name}</p>
                <p className="DesignationTeamStyle">{user.designation}</p>
                <div className="TeamSocialMediaIcon">
                  <img src={FaceBookIcon} className="TeamSocialIcon" />
                  <img src={InstagramIcon} className="TeamSocialIcon" />
                  <img src={LinkInIcon} className="TeamSocialIcon" />
                  <img src={WhatsUpIcon} className="TeamSocialIcon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="MainTeamPaginationContainer">
            <div className="TeamButtonWrapper">
              <div ref={navigationPrevRef}>
                <img src={LeftFeatureButton} className="FeatureButtonStule" />
              </div>
              <div ref={navigationNextRef}>
                <img src={RightFeatureButton} className="FeatureButtonStule" />
              </div>
            </div>
            <div className="swiper_pagination_wrapper">
              {Data.map((item, index) => {
                return (
                  <span
                    className={
                      activeSlide == item.id
                        ? "swiper_pagination_bullet_Team swiper_pagination_bullet_Active_Team"
                        : "swiper_pagination_bullet_Team"
                    }
                  ></span>
                );
              })}
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default OurTeam;
