import React, { useState } from "react";
import "./discoverProperty.css";
import { useNavigate } from "react-router-dom";
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
  discover1,
  discover2,
  discover3,
  discover4,
  discover5,
  discover6,
  discover7,
} from "../../Assets";
import { AiOutlineHeart } from "react-icons/ai";

export default function DiscoverProperty() {
  const navigate = useNavigate();

  const [showAllItems, setShowAllItems] = useState(false);
  let [isLike, setIsLike] = useState(0);

  let dataArr = [
    { id: 1, image: discover1, name: "HOUSE" },
    { id: 2, image: discover2, name: "APARTMENT" },
    { id: 3, image: discover3, name: "VILLA" },
    { id: 4, image: discover4, name: "COMMERICAL OUTLETS" },
    { id: 5, image: discover5, name: "PENT HOUSE" },
    { id: 6, image: discover6, name: "FOOD COURTS" },
    { id: 7, image: discover7, name: "OFFICE" },
    { id: 8, image: discover4, name: "COMMERICAL OUTLETS" },
    { id: 9, image: discover5, name: "PENT HOUSE" },
    { id: 10, image: discover6, name: "FOOD COURTS" },
  ];
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
  ];
  const itemsToShow = showAllItems ? dataArr : dataArr.slice(0, 7);
  return (
    <div className="MainContainerDiscoverProperty">
      <div className="DiscoverPropertyHeadingStyle">
        Discover the Property Types
      </div>
      <div className="DataMappingConatiner">
        {itemsToShow.map((item) => {
          return (
            <div
              className="ObjectContainerStyle"
              key={item.id}
              onClick={() => {
                navigate("/Location");
              }}
            >
              <img src={item.image} alt="img" />
              <div className="ObjectTextStyle">{item.name}</div>
            </div>
          );
        })}
        {!showAllItems && (
          <div
            className="discoverSeeMoreButtonStyle"
            onClick={() => setShowAllItems(true)}
          >
            <div className="DiscoverPlusTextStyle">+</div>
            See More
          </div>
        )}
      </div>
      <p className="DisExploreTextStyle">Explore the Featured Properties</p>
      <div className="DiscoverFeatureMainContainer">
        {Data.map((user) => {
          return (
            <div className="swiperMainContentContainer_Disc">
              <div className="SwiperImageContainer">
                <img
                  src={user.image}
                  alt="Image"
                  className="SwiperImageStyle_Disc"
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
                <div className="SwiperMainButtonContainer">For Rent</div>
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
                <div className="SwiperBottomContentWrapper_Disc">
                  <div className="SwiperBottomInfoWrapper_Disc">
                    <p className="SwiperRentStyle">For Rent</p>
                    <div className="SwiperTextWrapperStyle">
                      <p className="SwiperAmountTextStyle">$1,900/</p>
                      <p className="SwiperRentStyle">month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
