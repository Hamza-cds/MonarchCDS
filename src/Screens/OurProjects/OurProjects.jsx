import React from "react";
import "./ourProjects.css";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import BlogsNews from "../../Components/BlogsNews/BlogsNews";
import LetsFind from "../../Components/LetsFind/LetsFind";
import Blogs from "../../Components/Blogs/Blogs";
import OurProject from "../../Components/OurProjectsComponant/OurProject";
import Select from "react-select";
import {
  FaceBookIcon,
  FaceBookSupport,
  LinkedInSupport,
  SideArrow,
  SideLadyImage,
  SidebarImage,
  WhatsAppCallSupport,
  WhatsAppSupport,
} from "../../Assets";

function OurProjects() {
  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];
  return (
    <>
      <section className="OurPojectsMainContainer">
        <div className="mainHeaderBgContainer_OurProjects"></div>
        <p className="OurLocationTextStyle_OutProjects">Our Projects</p>
        <section className="MainOurProjectContainer">
          <div className="ContentMainWrapperOurProjects">
            <OurProject />
            <OurProject />
          </div>
          <div className="SidebarMainContentContentContainer">
            <img src={SidebarImage} alt="Image" className="SidebarImage_Pro" />
            <div className="SideTextMainWrapper">
              <img src={SideArrow} alt="Image" className="SideArrowStyle" />
              <div className="SideTextWrapperStyle">
                <p className="SideDownLoadTextStyle">Download & Read</p>
                <p className="SideProfileTextStyle">Our Company Profile</p>
              </div>
            </div>
            <div className="SideImageWrapperContainer">
              <img src={SideLadyImage} alt="Image" className="SidebarImage" />
              <div className="SocialWrapperStyle">
                <div className="CustomerSupportTextStyle">Customer Support</div>
                <img
                  src={FaceBookSupport}
                  alt="Image"
                  className="SupportImageStyle"
                />
                <img
                  src={WhatsAppCallSupport}
                  alt="Image"
                  className="SupportImageStyle"
                />
                <img
                  src={LinkedInSupport}
                  alt="Image"
                  className="SupportImageStyle"
                />
                <img
                  src={WhatsAppSupport}
                  alt="Image"
                  className="SupportImageStyle"
                />
              </div>
            </div>

            <div className="SideMoreInfoWrapper">
              <p className="SideTextStyle">Schedule a Visit</p>
              <p className="SideTextStyle2">For More Information</p>
            </div>
            <input
              placeholder="Date"
              className="custom-date_Side"
              type="date"
            />
            <Select
              placeholder={"Time"}
              options={options}
              className="Select_Option_Style_Sidebar_Pro"
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
              <input
                placeholder="Enter text"
                class="rounded-input_Pro"
                type="text"
              />
            </div>
            <div className="SidebarInputContainer">
              <p className="SidebarLabelTextStyle">Phone</p>
              <input
                placeholder="Enter text"
                class="rounded-input_Pro"
                type="text"
              />
            </div>
            <div className="SidebarInputContainer">
              <p className="SidebarLabelTextStyle">Email</p>
              <input
                placeholder="Enter text"
                class="rounded-input_Pro"
                type="text"
              />
            </div>
            <div className="SidebarInputContainer">
              <p className="SidebarLabelTextStyle">Message</p>
              <input
                placeholder="Enter text"
                class="rounded-input_Pro"
                type="text"
              />
            </div>
            <div className="SidebarSubmitButton">Submit a Tour Request</div>
          </div>
        </section>
      </section>
      <ColabratePartner />
      {/* <BlogsNews /> */}
      <div className="OurLetsFindContainer">
        <LetsFind />
      </div>
      <Blogs />
    </>
  );
}

export default OurProjects;
