import React from "react";
import "./propertyDetail.css";
import {
  PropertyBathIcon,
  PropertyBedIcon,
  PropertyIcon1,
  PropertyIcon2,
  PropertyIcon3,
  PropertyIcon4,
  PropertyLocationIcon,
  PropertySaleIcon,
  WriteWhteArrow,
} from "../../Assets";
import Investment from "../../Components/InvestmentComponant/Investment";
import PropertyDetailOne from "../../Components/PropertyDetailComponantOne/PropertyDetailOne";
import PropertyDetailTwo from "../../Components/PropertyDetailComponantTwo/PropertyDetailTwo";
import Feature from "../../Components/Feature/Feature";
import Blogs from "../../Components/Blogs/Blogs";
import PropertyDetailWalkScore from "../../Components/PropertyDetailComponantThree/PropertyDetailWalkScore";

function ProperDetail() {
  return (
    <>
      <section className="PropertyDetailMainContainer">
        <div className="PropertyHeaderContainer">
          <div className="PropertyHeaderTextStyle">
            Single Family Ranch House
          </div>
          <div>
            <img
              src={PropertyIcon1}
              alt="Image"
              className="PropertyHeaderImageStyle"
            />
            <img
              src={PropertyIcon2}
              alt="Image"
              className="PropertyHeaderImageStyle"
            />
            <img
              src={PropertyIcon3}
              alt="Image"
              className="PropertyHeaderImageStyle"
            />
            <img
              src={PropertyIcon4}
              alt="Image"
              className="PropertyHeaderImageStyle"
            />
          </div>
        </div>
        <div className="PropertyLocationWrapper">
          <img src={PropertyLocationIcon} alt="Image" />
          <div className="ProperLocationTextStyle">Brooklyn, New York, USA</div>
        </div>
      </section>
      <Investment isConstruction={true} isView={true} />
      <div className="ConstructionDetailMainParentWrapper">
        <div className="ConstructionDetailMainWrapper">
          <div className="ConstructionDetailContentWrapper">
            <div className="ProperBedTextStyle">Bedrooms</div>
            <div className="PropertybedIconWrapper">
              <img src={PropertyBedIcon} />
              <div className="PropertyBedWithIcon">3 beds</div>
            </div>
          </div>
          <div className="ConstructionDetailContentWrapper">
            <div className="ProperBedTextStyle">Bathrooms</div>
            <div className="PropertybedIconWrapper">
              <img src={PropertyBedIcon} />
              <div className="PropertyBedWithIcon">2 baths</div>
            </div>
          </div>
          <div className="ConstructionDetailContentWrapper">
            <div className="ProperBedTextStyle">Garage</div>
            <div className="PropertybedIconWrapper">
              <img src={PropertyBedIcon} />
              <div className="PropertyBedWithIcon">1 garage</div>
            </div>
          </div>
          <div className="ConstructionDetailContentWrapper">
            <div className="ProperBedTextStyle">Garage</div>
            <div className="PropertybedIconWrapper">
              <img src={PropertyBedIcon} />
              <div className="PropertyBedWithIcon">1,567 sqft</div>
            </div>
          </div>
        </div>
        <div className="ConstructionDetailAmountWrapper">
          <div className="PropertyImageWrapper">
            <img src={PropertySaleIcon} alt="Image" />
            <div className="PropertyForSaleMainContainer">
              <div className="PropertyForSaleTextStyle">For Sale</div>
              <div className="PropertyAmountTextStyle">$985,000</div>
            </div>
          </div>
          <div className="WhiteWriteArrowContainer">
            <img src={WriteWhteArrow} alt="Image" />
          </div>
        </div>
      </div>
      <section className="PropertyDetailContentMainParentWrapper">
        <section className="PropertyDetailContentMainWrapper">
          <PropertyDetailOne />
          {/* <PropertyDetailTwo /> */}
          <PropertyDetailWalkScore />
        </section>
        <section className="PropertyDetailContentSideMainWrapper"></section>
      </section>
      <Feature />
      <Blogs />
    </>
  );
}

export default ProperDetail;
