import React from "react";
import "./propertyDetailTwo.css";
import { ac, heater, lawn, laundry, Swimming, dining } from "../../Assets";

const PropertyDetailContainer = ({ heading, text }) => {
  return (
    <div className="PropertDetailTwoInfoTextWrapper">
      <div className="PropertDetailTwoInfoTextOne">{heading}</div>
      <div className="PropertDetailTwoInfoTextTwo">{text}</div>
    </div>
  );
};

const PropertyFeatureContainer = ({ image, text }) => {
  return (
    <div className="PropertFeatureInfoTextWrapper">
      <img className="PropertFeatureInfoIcon" src={image} alt="img" />
      <div className="PropertFeatureInfoText">{text}</div>
    </div>
  );
};

export default function PropertyDetailTwo() {
  return (
    // <div className="PropertDetailTwoMainContainer">
    //   <div className="PropertyDetailHeading">Property Details</div>
    //   <div className="PropertDetailTwoInfoMainContainer">
    //     {/* row main container  */}
    //     <div className="PropertDetailInfoSubContainerOne">
    //       <PropertyDetailContainer heading={"Property ID:"} text={"RH09876"} />
    //       <PropertyDetailContainer heading={"Price:"} text={"$985,000"} />
    //       <PropertyDetailContainer
    //         heading={"Property Size:"}
    //         text={"1567 sqft"}
    //       />
    //       <PropertyDetailContainer heading={"Year Built:"} text={"1989"} />
    //       <PropertyDetailContainer heading={"Bedrooms:"} text={"3"} />
    //     </div>
    //     <div className="PropertDetailTwoInfoSubContainerTwo">
    //       <PropertyDetailContainer heading={"Bathrooms:"} text={"2"} />
    //       <PropertyDetailContainer heading={"Garage:"} text={"1"} />
    //       <PropertyDetailContainer heading={"Garage Size:"} text={"285 sqft"} />
    //       <PropertyDetailContainer heading={"Property Size:"} text={"House"} />
    //       <PropertyDetailContainer
    //         heading={"Property Status:"}
    //         text={"For Sale"}
    //       />
    //     </div>
    //   </div>
    //   <div className="ProppertyDetailOneBottomLine" />

    //   <div className="PropertyFeaturesMainContainer">
    //     <div className="PropertyDetailHeading">Property Features</div>
    //     <div className="PropertDetailTwoInfoMainContainer">
    //       {/* row main container  */}
    //       <div className="PropertDetailInfoSubContainerOne">
    //         <PropertyFeatureContainer image={ac} text={"Air Conditioning"} />
    //         <PropertyFeatureContainer image={heater} text={"Heater"} />
    //         <PropertyFeatureContainer image={lawn} text={"Lawn"} />
    //       </div>
    //       <div className="PropertDetailTwoInfoSubContainerTwo">
    //         <PropertyFeatureContainer image={laundry} text={"Laundry Room"} />
    //         <PropertyFeatureContainer image={Swimming} text={"Swimming Pool"} />
    //         <PropertyFeatureContainer image={dining} text={"Dining Room"} />
    //       </div>
    //     </div>
    //   </div>

    //   {/* <div className="ProppertyDetailOneBottomLine" /> */}
    //   {/* <div className="PropertyFeaturesMainContainer">
    //     <div className="PropertyDetailHeading">Floor Plans</div>
    //   </div> */}
    // </div>
    <></>
  );
}
