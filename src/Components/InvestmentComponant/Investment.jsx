import React from "react";
import "./investment.css";
import {
  ConstructionButton,
  Image360,
  investPic,
  investPic1,
  investPic2,
} from "../../Assets";

export default function Investment({ isConstruction = false }) {
  return (
    <div className="InvestmentCompMainContainer">
      <img className="BigPictureStyle" src={investPic} alt="img" />
      <div className="smallImageContainer">
        <img className="smallImageStyle" src={investPic1} alt="img" />
        <img className="smallImageStyle1" src={investPic2} alt="img" />
      </div>
      {isConstruction && (
        <div className="ViewButtonStyle">
          <img src={Image360} alt="Image" />
          <div className="ViewTextStyle">View</div>
        </div>
      )}
      {isConstruction && (
        <div className="ConstButtonStyle">
          <img src={ConstructionButton} alt="Image" />
          <div className="ConstructionTextStyle">Construction Updates</div>
        </div>
      )}
    </div>
  );
}
