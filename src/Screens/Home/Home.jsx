import React, { useState } from "react";
import "./home.css";
import Select from "react-select";
import { SearchIcon } from "../../Assets";
import OurServices from "../../Components/OurServices/OurServices";
import Feature from "../../Components/Feature/Feature";
import OurTeam from "../../Components/OurTeam/OurTeam";
import ClientComp from "../../Components/ClientComp/ClientComp";
import BlogsNews from "../../Components/BlogsNews/BlogsNews";
import TableComp from "../../Components/TableComp/TableComp";
import TrendingProjects from "../../Components/TrendingProjects/TrendingProjects";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import MonarchChosing from "../../Components/ChoosingMonarch/MonarchChosing";
import Properties from "../../Components/PropertiesComponant/Properties";
import Interested from "../../Components/Interested/Interested";

const Home = () => {
  const [activeState, setActiveState] = useState(1);
  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];
  return (
    <>
      <section className="HomeMainHeaderContainer">
        <div className="mainHeaderBgContainer">
          <div className="DropDownMainContainer">
            <div className="DropDownButtonMainWrapper">
              <div
                className="DropDownBuyButton"
                onClick={() => {
                  setActiveState(1);
                }}
                style={{
                  backgroundColor: activeState == 1 ? "white" : "#113f3e",
                  color: activeState == 1 ? "black" : "white",
                }}
              >
                Buy
              </div>
              <div
                className="DropDownRentButton"
                onClick={() => {
                  setActiveState(2);
                }}
                style={{
                  backgroundColor: activeState == 2 ? "white" : "#113f3e",
                  color: activeState == 2 ? "black" : "white",
                }}
              >
                Rent
              </div>
              <div
                className="DropDownProjectButton"
                onClick={() => {
                  setActiveState(3);
                }}
                style={{
                  backgroundColor: activeState == 3 ? "white" : "#113f3e",
                  color: activeState == 3 ? "black" : "white",
                }}
              >
                New Project
              </div>
            </div>
            <div className="HeaderDropDownWrapper">
              <p className="HeaderTypeTextStyle">Type</p>
              <Select
                // menuPlacement="top"
                placeholder={"Houses"}
                options={options}
                className="Select_Option_Style"
                classNamePrefix="Select"
                components={{
                  IndicatorSeparator: () => null,
                }}
                isSearchable={false}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "white" : null,
                    borderRadius: "5px",
                    border: state.isFocused ? 0 : 0,
                    outline: state.isFocused ? "none" : "none",
                    boxShadow: "none",
                    cursor: "pointer",
                  }),
                }}
              />
            </div>
            <div className="HeaderDropDownWrapper">
              <p className="HeaderTypeTextStyle">Location</p>
              <Select
                // menuPlacement="top"
                placeholder={"Location"}
                options={options}
                className="Select_Option_Style"
                classNamePrefix="Select"
                components={{
                  IndicatorSeparator: () => null,
                }}
                isSearchable={false}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "white" : null,
                    borderRadius: "5px",
                    border: state.isFocused ? 0 : 0,
                    outline: state.isFocused ? "none" : "none",
                    boxShadow: "none",
                    cursor: "pointer",
                  }),
                }}
              />
            </div>
            <div className="HeaderSearchButtonContainer">
              <img src={SearchIcon} alt="Icon" />
              <p className="SearchIconButtonStyle">Search</p>
            </div>
          </div>
        </div>
      </section>
      <OurServices />
      <Feature />
      <Interested />
      <OurTeam />
      <TableComp />
      <TrendingProjects />
      <ClientComp />
      <ColabratePartner />
      <BlogsNews />
      <MonarchChosing />
      <Properties />
    </>
  );
};

export default Home;
