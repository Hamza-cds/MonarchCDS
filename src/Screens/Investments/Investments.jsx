import React from "react";
import "./investments.css";
import Interested from "../../Components/Interested/Interested";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import BlogsNews from "../../Components/BlogsNews/BlogsNews";
import MonarchChosing from "../../Components/ChoosingMonarch/MonarchChosing";
import Properties from "../../Components/PropertiesComponant/Properties";

function Investments() {
  return (
    <section className="MainInvestmentParentContainer">
      <Interested />
      <ColabratePartner />
      <BlogsNews />
      <MonarchChosing />
      <Properties />
    </section>
  );
}

export default Investments;
