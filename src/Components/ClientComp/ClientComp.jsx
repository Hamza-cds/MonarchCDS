import React, { useState } from "react";
import "./clientComp.css";

import { LeftFeatureButton, RightFeatureButton } from "../../Assets";
import ClientSlider from "../ClientSlider/ClientSlider";

function ClientComp() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="ClineMainBgContainer">
      <p className="ClientSatisfied_TextStyle">Satisfied Dreamwell’s Clients</p>

      <ClientSlider
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        setActiveSlide={setActiveSlide}
      />

      <div className="ClientButtonContainer">
        <div ref={navigationPrevRef}>
          <img src={LeftFeatureButton} className="FeatureButtonStule" />
        </div>
        <div ref={navigationNextRef}>
          <img src={RightFeatureButton} className="FeatureButtonStule" />
        </div>
      </div>
    </div>
  );
}

export default ClientComp;
