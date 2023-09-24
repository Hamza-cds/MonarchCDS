import React from "react";
import "./propertyDetailWalkScore.css";
import { walkScoreIcon1, walkScoreIcon2, walkScoreIcon3 } from "../../Assets";

export default function PropertyDetailWalkScore() {
  return (
    <div className="PropertDetailTwoMainContainer">
      <div className="PropertyDetailHeading">Property Details</div>
      <div className="PropertyDetailWalkScoreSubHeading">
        1010 Greenland Avenue
      </div>

      <div className="WalkScoreMainContantContainerStyle">
        <div className="WalkScoreSubContainerRowStyle">
          <img src={walkScoreIcon1} alt="img" />
          <div className="WalkScoreTextMainContainer">
            <div className="WalkScoreTextOne">Walk Score</div>
            <div className="WalkScoreRowTextContainerWrap">
              <div className="WalkScoreTextNumber">46/100</div>
              <div className="WalkScoreTextTwo">(somewhat walkable)</div>
            </div>
          </div>
        </div>

        {/* second block  */}

        <div className="WalkScoreSubContainerRowStyle">
          <img src={walkScoreIcon2} alt="img" />
          <div className="WalkScoreTextMainContainer">
            <div className="WalkScoreTextOne">Transit Score</div>
            <div className="WalkScoreRowTextContainerWrap">
              <div className="WalkScoreTextNumber">31/100</div>
              <div className="WalkScoreTextTwo"> (some transit)</div>
            </div>
          </div>
        </div>

        {/* third block  */}

        <div className="WalkScoreSubContainerRowStyle">
          <img src={walkScoreIcon3} alt="img" />
          <div className="WalkScoreTextMainContainer">
            <div className="WalkScoreTextOne">Bike Score</div>
            <div className="WalkScoreRowTextContainerWrap">
              <div className="WalkScoreTextNumber">38/100</div>
              <div className="WalkScoreTextTwo">(somewhat bikeable)</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="ProppertyDetailOneBottomLine" /> */}
    </div>
  );
}
