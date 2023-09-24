import React from "react";
import "./ourVision.css";
import { ourVisionPic } from "../../Assets";

export default function OurVision() {
  return (
    <div className="ourVisionParentConatiner">
      <div className="ourVisionMainHeadingStyle">Our Vision</div>
      <div className="ourVisionSubHeadingStyle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="OurVisionMainContainerStyle">
        <div className="ourVisionMainTextContainerStyle">
          <div className="HeadingStyleOurVision">
            Our mission is to provide a dream home with the best possible
            facilities.
          </div>
          <div className="OurVisionDescriptionOneStyle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex
            augue, fermentum id tristique eget, condimentum ut sapien. Ut id
            quam nec lacus dignissim rutrum. Sed congue massa in elit tincidunt,
            et tempor ante elementum. Sed fringilla sapien sit amet dictum
            tempor. Vestibulum eu tempor nisi. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. In a ex
            nibh.
          </div>
          <div className="OurVisionDescriptionTwoStyle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex
            augue, fermentum id tristique eget, condimentum ut sapien. Ut id
            quam nec lacus dignissim rutrum. Sed congue massa in elit tincidunt,
            et tempor ante elementum. Sed fringilla sapien sit amet dictum
            tempor. Vestibulum eu tempor nisi. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. In a ex
            nibh.
          </div>
        </div>
        <img src={ourVisionPic} alt="img" className="ourVisionImageStyle" />
      </div>
    </div>
  );
}
