import React from "react";
import { ourMissionPic } from "../../Assets";
import "./ourMission.css";

export default function OurMission() {
  return (
    <div className="ourMissionParentContainer">
      <div className="ourMissionMainHeadingStyle">Our Mission</div>
      <div className="ourMissionSubHeadingStyle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="OurMissionMainContainerStyle">
        <img src={ourMissionPic} alt="img" className="ourMissionImageStyle" />
        <div className="MainTextContainerStyle">
          <div className="HeadingStyleOurMission">
            Our mission is to provide a dream home with the best possible
            facilities.
          </div>
          <div className="descriptionOneStyle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex
            augue, fermentum id tristique eget, condimentum ut sapien. Ut id
            quam nec lacus dignissim rutrum. Sed congue massa in elit tincidunt,
            et tempor ante elementum. Sed fringilla sapien sit amet dictum
            tempor. Vestibulum eu tempor nisi. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. In a ex
            nibh.
          </div>
          <div className="descriptionTwoStyle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex
            augue, fermentum id tristique eget, condimentum ut sapien. Ut id
            quam nec lacus dignissim rutrum. Sed congue massa in elit tincidunt,
            et tempor ante elementum. Sed fringilla sapien sit amet dictum
            tempor. Vestibulum eu tempor nisi. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. In a ex
            nibh.
          </div>
        </div>
      </div>
    </div>
  );
}
