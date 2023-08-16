import React from "react";
import "./about.css";
import OurTeam from "../../Components/OurTeam/OurTeam";
import OurServices from "../../Components/OurServices/OurServices";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import BlogsNews from "../../Components/BlogsNews/BlogsNews";

function About() {
  return (
    <section className="AboutMainParentContainer">
      <OurTeam />
      <OurServices />
      <ColabratePartner />
      <BlogsNews />
    </section>
  );
}

export default About;
