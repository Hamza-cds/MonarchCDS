import React, { useState } from "react";
import "./location.css";
import Select from "react-select";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import {
  BathIcon,
  BedIcon,
  FilterIcon,
  GarageIcon,
  LocationIcon,
  SearchingIcon,
  SgFeetIcon,
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SwiperRightArrow,
} from "../../Assets";
import { AiOutlineHeart } from "react-icons/ai";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import Blogs from "../Blogs/Blogs";
import BlogsNews from "../../Components/BlogsNews/BlogsNews";

function Location() {
  let [isLike, setIsLike] = useState(0);

  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];
  const minValue = 1000; // Set your desired minimum value
  const maxValue = 985000; // Set your desired maximum value
  const initialValue = [100, 5000];
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
    <section className="LocationMainContainer">
      <p className="OurLocationTextStyle">Our Locations</p>
      <div className="MainParentDropdownContainer">
        <div className="LocationDropdownWrapper">
          <Select
            // menuPlacement="top"
            placeholder={"Property Types"}
            options={options}
            className="Select_Option_Style_Rent"
            classNamePrefix="Select"
            components={{
              IndicatorSeparator: () => null,
            }}
            isSearchable={false}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "white" : null,
                borderRadius: "5px",
                border: state.isFocused ? 0 : 0,
                outline: state.isFocused ? "none" : "none",
                boxShadow: "none",
                cursor: "pointer",
              }),
            }}
          />
          <Select
            // menuPlacement="top"
            placeholder={"All Status"}
            options={options}
            className="Select_Option_Style_Rent"
            classNamePrefix="Select"
            components={{
              IndicatorSeparator: () => null,
            }}
            isSearchable={false}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "white" : null,
                borderRadius: "5px",
                border: state.isFocused ? 0 : 0,
                outline: state.isFocused ? "none" : "none",
                boxShadow: "none",
                cursor: "pointer",
              }),
            }}
          />
          <Select
            // menuPlacement="top"
            placeholder={"Bedroom"}
            options={options}
            className="Select_Option_Style_Rent"
            classNamePrefix="Select"
            components={{
              IndicatorSeparator: () => null,
            }}
            isSearchable={false}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "white" : null,
                borderRadius: "5px",
                border: state.isFocused ? 0 : 0,
                outline: state.isFocused ? "none" : "none",
                boxShadow: "none",
                cursor: "pointer",
              }),
            }}
          />
          <div className="locationRangeMainWrapper">
            <div className="MinMaxWrapper">
              <p className="RangeTextStyle">Min</p>
              <div className="RangeValueWrapper">${minValue}</div>
            </div>
            <div className="RangeSliderWrapper">
              <Slider
                range
                min={minValue}
                max={maxValue}
                defaultValue={initialValue}
              />
            </div>
            <div className="MinMaxWrapper">
              <div className="RangeValueWrapper">${maxValue}</div>
              <p className="RangeTextStyle">Max</p>
            </div>
          </div>
        </div>
        <div className="LocationInputMainWrapper">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <img src={SearchingIcon} />
          </div>
          <div className="FilterButtonLocation">
            <p className="LocationFilterTextStyle">Filters</p>
            <img src={FilterIcon} />
          </div>
        </div>
      </div>
      <section className="MainLocationMapContainer">
        <div className="MainLocationContentWrapper">
          {Data.map((user) => {
            return (
              <div className="swiperMainContentContainer_Location">
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
            );
          })}
        </div>
        <div className="MainLocationMainContainer">
          <div className="Contact_Map_Wrapper">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              borderRadius="15px"
              // style={{ position: "absolute", zIndex: "444" }}
              className="Iframe_Container"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure distance on map
              </a>
            </iframe>
          </div>
        </div>
      </section>
      <div className="LocationContentBottomContainer">
        {Data.map((user) => {
          return (
            <div className="swiperMainContentContainer_Location_Bottom">
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
          );
        })}
      </div>
      <ColabratePartner />
      <BlogsNews isFind={false} />
    </section>
  );
}

export default Location;
