import React from "react";
import ourMissionBottom from "./ourMissionBottom.css";

export default function OurMissionBottom() {
  return (
    <div className="ourMissionBottomMainContainer">
      {/* block one  */}
      <div className="ourMissionBottomTextWrapperContainer">
        <div className="ourMissionBottomNumberStyle">5,635</div>
        <div className="ourMissionBottomTextStyle">HOUSES FOR SALE</div>
      </div>
      {/* block two  */}
      <div className="ourMissionBottomTextWrapperContainer">
        <div className="ourMissionBottomNumberStyle">234</div>
        <div className="ourMissionBottomTextStyle">OPEN HOUSES</div>
      </div>
      {/* block three  */}
      <div className="ourMissionBottomTextWrapperContainer">
        <div className="ourMissionBottomNumberStyle">105</div>
        <div className="ourMissionBottomTextStyle">HOUSES RECENTLY SOLD</div>
      </div>
      {/* block four  */}
      <div className="ourMissionBottomTextWrapperContainer">
        <div className="ourMissionBottomNumberStyle">301</div>
        <div className="ourMissionBottomTextStyle">PRICE REDUCED</div>
      </div>
    </div>
  );
}
