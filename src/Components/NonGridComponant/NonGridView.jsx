import React, { useState } from "react";
import "./nonGridView.css";
import {
  demoPic,
  pinIcon,
  bed,
  tub,
  area,
  garage,
  fillheart,
  unfillHeart,
  RightWhiteArrow,
} from "../../Assets";

export default function NonGridView() {
  let [Liked, setLiked] = useState(0);
  return (
    <div className="ParantContainer">
      <div className="NonGridViewMainContainer">
        <img src={demoPic} alt="img" className="GridImageStyle" />
        <div className="GridOtherContainer">
          <div className="ChildBoxOneStyle">
            <div>
              <div className="NonGridHeadingText">Beach View Villa</div>
              <div className="NonGridAddressContainerStyle">
                <img src={pinIcon} alt="img" />
                <div className="NonGridAddressTextStyle">
                  Denpasar, Bali, Indonesia
                </div>
              </div>
            </div>

            <div>
              {Liked == 0 ? (
                <img
                  onClick={() => {
                    setLiked((Liked = 1));
                  }}
                  src={unfillHeart}
                  className="heartStyle"
                  alt="img"
                />
              ) : (
                <img
                  onClick={() => {
                    setLiked((Liked = 0));
                  }}
                  src={fillheart}
                  className="heartStyle"
                  alt="img"
                />
              )}
            </div>
          </div>
          <div className="ChildBoxTwoStyle">
            <div className="PropertyDetailContainer">
              <div>
                <div className="BedContainer">
                  <img src={bed} alt="img" />
                  <div className="PropertiesTextStyle">3 beds</div>
                </div>
                <div className="BedContainer">
                  <img src={tub} alt="img" />
                  <div className="PropertiesTextStyle">2 baths</div>
                </div>
              </div>
              <div className="garageAreaContainer">
                <div className="BedContainer">
                  <img src={garage} alt="img" />
                  <div className="PropertiesTextStyle">no garage</div>
                </div>
                <div className="BedContainer">
                  <img src={area} alt="img" />
                  <div className="PropertiesTextStyle">1,235 sqft</div>
                </div>
              </div>
            </div>
            <div className="BoxTwoChildBottomContainer">
              <div className="TextBlockStyle">
                <div>
                  <div className="forRantStyle">For Rent</div>
                  <div className="monthAndMoneyStyle">$1,900/month</div>
                </div>
              </div>

              <div className="GridRightButton">
                <img src={RightWhiteArrow} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
