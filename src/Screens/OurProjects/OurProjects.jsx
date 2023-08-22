import React from "react";
import "./ourProjects.css";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import BlogsNews from "../../Components/BlogsNews/BlogsNews";
import LetsFind from "../../Components/LetsFind/LetsFind";
import Blogs from "../../Components/Blogs/Blogs";
import OurProject from "../../Components/OurProjectsComponant/OurProject";

function OurProjects() {
  return (
    <section className="OurPojectsMainContainer">
      <div className="mainHeaderBgContainer_OurProjects"></div>
      <p className="OurLocationTextStyle_OutProjects">Our Projects</p>
      <section className="MainOurProjectContainer">
        <div className="ContentMainWrapperOurProjects">
          <OurProject />
          <OurProject />
        </div>
        <div className="SidebarMainContentContentContainer"></div>
      </section>
      <ColabratePartner />
      {/* <BlogsNews /> */}
      <div className="OurLetsFindContainer">
        <LetsFind />
      </div>
      <Blogs />
    </section>
  );
}

export default OurProjects;
