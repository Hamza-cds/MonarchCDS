import React from "react";
import "./services.css";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import Blogs from "../../Components/Blogs/Blogs";
import MonarchChosing from "../../Components/ChoosingMonarch/MonarchChosing";
import OurServices from "../../Components/OurServicesComponant/OurServices";

function Services() {
  const Data = [
    {
      id: 1,
      title: "INVESTMENT CONSULTANCY",
      disc: "Our investment consulting service features a team of skilled advisors who understand how to develop an ideal approach for you. We'll devise tailored investing strategies that will provide the solutions you need.",
      title2: "ASSET MANAGEMENT",
      disc2:
        "Monarch International’s asset management experts, who have years of experience in organizational asset management and investment policy, can assist you in navigating a constantly changing environment.",
    },
    {
      id: 2,
      title: "PROFESSIONAL CONSULTATION",
      disc: "We will provide personalized solutions to help clients with their real estate needs by drawing on our extensive industry knowledge, long-standing expertise, and current market trends.",
      title2: "MARKETING AND SALES",
      disc2:
        "To lead in the market, Monarch International’s focused specialists will execute proven sales approaches and up-to-date marketing solutions to achieve consistent results that will boost sales.",
    },
    {
      id: 3,
      title: "PROJECT MANAGEMENT",
      disc: "Monarch International’s skilled project management team is committed to managing every aspect of a project, from the 50,000-foot perspective to the detailed minutia.",
      title2: "AN OVERVIEW OF MARKET",
      disc2:
        "The people of Monarch International provide you with complete insight and solutions to the issues of the current market, that will help you in managing the future sales and purchases.",
    },
  ];
  return (
    <section className="ServicesMainParentContainer">
      {Data.map((item) => {
        return <OurServices item={item} />;
      })}
      <ColabratePartner />
      <Blogs />
      <MonarchChosing />
    </section>
  );
}

export default Services;
