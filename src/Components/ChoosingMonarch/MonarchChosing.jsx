import React from "react";
import "./monarchChosing.css";
import { Tech, value, result } from "../../Assets";

export default function MonarchChosing() {
  let arr = [
    {
      id: 1,
      image: value,
      name: "Better Values",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus velit morbi consectetur",
    },
    {
      id: 2,
      image: Tech,
      name: "Better Tech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus velit morbi consectetur",
    },
    {
      id: 3,
      image: result,
      name: "Better Results",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus velit morbi consectetur",
    },
  ];
  return (
    <div className="ChosingMonarchMainContainer">
      <div className="FirstChildContainerStyle">
        <div className="WhyChoseMonarchHeadTextContainer">
          <div className="OurServiceStyle">Our Services</div>
          <div className="WhyChoseStyle">Why Choose Monarch ?</div>
        </div>
        <div className="WhyChoseParagraphStyle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus velit
          morbi consectetur ipsum commodo vulputate ultrices. Magna habitant
          enim non gravida mi sapien viverra .Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Rhoncus velit morbi consectetur ipsum
          commodo vulputate ultrices. Magna habitant enim non gravida mi sapien
          viverra.
        </div>
      </div>

      <div className="SecondChildContainerStyle">
        {arr.map((item) => {
          return (
            <div className="BoxStyle">
              <div className="iconBGStyle">
                <img src={item.image} />
              </div>
              <div className="BoxHeadTextStyle">{item.name}</div>
              <div className="BoxDescriptionStyle">{item.description}</div>
              <div className="LearnMoreStyle">Learn More</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
