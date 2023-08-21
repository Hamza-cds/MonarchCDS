import React from "react";
import "./ourServices.css";
import { doted, ramada, monarch } from "../../Assets";

export default function OurServices({ item }) {
  return (
    <div className="OurServicesMainContainer">
      <div className="SubMainContainerForImageAndText">
        <div className="BoxStyleView">
          <img className="dotedSvgStyle" src={doted} alt="img" />
        </div>
        <div className="TextMainContainer">
          <div className="OurServicesHeadingTextStyle">
            {item ? item.title : " Welcome to RAMADA !"}
          </div>
          <div className="OurServicesDescriptionStyle">
            {item
              ? item.disc
              : "We are a real estate company that provides the convenience of searching for properties in various regions and countries. Together  with professional agents, there is no house that you cant get."}
          </div>
          <div className="OurServicesButtonViewStyle">
            <div className="OurServicesButtonTextStyle">More</div>
          </div>
        </div>
        <div className="ImageMainContainer">
          <img className="OurServicesImageStyle" src={ramada} alt="img" />
        </div>
      </div>
      {/* opposite site view start from here  */}
      <div className="LowerBoxMainContainer">
        <div className="BoxStyleViewTwo">
          <img className="dotedSvgStyleTwo" src={doted} alt="img" />
        </div>
        <div className="SubMainContainerForImageAndTextTwo">
          <div className="ImageMainContainer2">
            <img className="OurServicesImageStyle" src={monarch} alt="img" />
          </div>
          <div className="TextMainContainer">
            <div className="OurServicesHeadingTextStyle">
              {item ? item.title2 : "MONARCH ONE 1"}
            </div>
            <div className="OurServicesDescriptionStyle">
              {item
                ? item.disc2
                : "We are a real estate company that provides the convenience of searching for properties in various regions and countries. Together with professional agents, there is no house that you can't get."}
            </div>
            <div className="OurServicesButtonViewStyle">
              <div className="OurServicesButtonTextStyle">More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
