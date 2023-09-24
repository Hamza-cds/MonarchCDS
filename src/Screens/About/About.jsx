import React from "react";
import "./about.css";
import OurTeam from "../../Components/OurTeam/OurTeam";
import OurServices from "../../Components/OurServices/OurServices";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import BlogsNews from "../../Components/BlogsNews/BlogsNews";
import OurMission from "../../Components/OurMissionComponant/OurMission";
import OurMissionBottom from "../../Components/OurMissionBottomComp/OurMissionBottom";
import OurVision from "../../Components/OurVisionComponant/OurVision";

function About() {
  return (
    <>
      <section className="AboutMainParentContainer">
        <div className="mainHeaderBgContainer_OurProjects"></div>
      </section>

      <OurMission />
      <OurMissionBottom />
      <OurVision />
      <OurTeam />
      <OurServices />
      <ColabratePartner />
      <BlogsNews />
    </>
  );
}

export default About;
