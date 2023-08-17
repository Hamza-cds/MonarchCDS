import React from "react";
import "./investment.css";
import { investPic, investPic1, investPic2 } from "../../Assets";

export default function Investment() {
  return (
    <div className="InvestmentCompMainContainer">
      <img className="BigPictureStyle" src={investPic} alt="img" />
      <div className="smallImageContainer">
        <img className="smallImageStyle" src={investPic1} alt="img" />
        <img className="smallImageStyle1" src={investPic2} alt="img" />
      </div>
    </div>
  );
}
