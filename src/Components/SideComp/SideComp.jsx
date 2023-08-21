import React from "react";
import "./sideComp.css";
import Select from "react-select";
import { SideArrow, SideText, SidebarImage } from "../../Assets";

function SideComp() {
  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];
  return (
    <section className="MainSideParentContainer">
      <div>
        <p className="SideTextStyle">Schedule a Visit</p>
        <p className="SideTextStyle2">For More Information</p>
      </div>
      <div className="SidebarInputMainParentWrapper">
        <input placeholder="Date" className="custom-date" type="date" />
        <Select
          placeholder={"Time"}
          options={options}
          className="Select_Option_Style_Sidebar"
          classNamePrefix="Select"
          components={{
            IndicatorSeparator: () => null,
          }}
          isSearchable={false}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: state.isFocused ? 0 : 0,
              outline: state.isFocused ? "none" : "none",
              boxShadow: "none",
              cursor: "pointer",
            }),
          }}
        />
        <p className="SidebarInfoTextStyle">Your Information</p>
        <div className="SidebarInputContainer">
          <p className="SidebarLabelTextStyle">Name</p>
          <input placeholder="Enter text" class="rounded-input" type="text" />
        </div>
        <div className="SidebarInputContainer">
          <p className="SidebarLabelTextStyle">Phone</p>
          <input placeholder="Enter text" class="rounded-input" type="text" />
        </div>
        <div className="SidebarInputContainer">
          <p className="SidebarLabelTextStyle">Email</p>
          <input placeholder="Enter text" class="rounded-input" type="text" />
        </div>
        <div className="SidebarInputContainer">
          <p className="SidebarLabelTextStyle">Message</p>
          <input placeholder="Enter text" class="rounded-input" type="text" />
        </div>
        <div className="SidebarButtonStyle">Submit a Tour Request</div>
      </div>
      <img src={SidebarImage} alt="Image" className="SidebarImage" />
      <div className="SideTextMainWrapper">
        <img src={SideArrow} alt="Image" className="SideArrowStyle" />
        {/* <img src={SideText} alt="Image" className="SideTextStyle" /> */}
        <div className="SideTextWrapperStyle">
          <p className="SideDownLoadTextStyle">Download & Read</p>
          <p className="SideProfileTextStyle">Our Company Profile</p>
        </div>
      </div>
    </section>
  );
}

export default SideComp;
