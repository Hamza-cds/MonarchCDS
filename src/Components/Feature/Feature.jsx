import React, { useState } from "react";
import "./feature.css";
import CardSlider from "../CardSlider/CardSlider";
import { LeftFeatureButton, RightFeatureButton } from "../../Assets";

function Feature() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className="featureMainParentContainer">
      <div className="featureImageBgContainer">
        <p className="feature_Explore_Text_Style">
          Explore the Featured Properties
        </p>
        <div className="FeatureButtonContainer">
          <div ref={navigationPrevRef}>
            <img src={LeftFeatureButton} className="FeatureButtonStule" />
          </div>
          <div ref={navigationNextRef}>
            <img src={RightFeatureButton} className="FeatureButtonStule" />
          </div>
        </div>
      </div>
      <CardSlider
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      />
    </section>
  );
}

export default Feature;
