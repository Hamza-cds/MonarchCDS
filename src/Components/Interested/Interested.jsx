import React from "react";
import "./interested.css";
import { arrow, home, rent, sell, plus } from "../../Assets";

export default function Interested() {
  return (
    <div className="MainContainerInterested">
      <div className="HeadingText">I am interested to</div>

      <div className="ChildMainContainer">
        <img src={arrow} alt="Image" />
        <div className="SubContainers">
          <div className="SubContainerHeadCircle">1</div>
          <img src={home} alt="Image" className="IconsStyle" />
          <div className="SubContainerText">Buy a home</div>
        </div>
        <img src={arrow} alt="Image" />
        <div className="SubContainers">
          <div className="SubContainerHeadCircle">2</div>
          <img src={rent} alt="Image" className="IconsStyle" />
          <div className="SubContainerText">Rent</div>
        </div>
        <img src={arrow} alt="Image" />
        <div className="SubContainers">
          <div className="SubContainerHeadCircle">3</div>
          <img src={sell} alt="Image" className="IconsStyle" />
          <div className="SubContainerText">Sell</div>
        </div>
        <img src={arrow} alt="Image" />
      </div>

      <div className="BottomButton">
        <img src={plus} alt="Image" className="plusStyle" />
        <div className="BottomButtonText">Talk to An Expert</div>
      </div>
    </div>
  );
}
