import React from "react";
import "./investments.css";
import Interested from "../../Components/Interested/Interested";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import BlogsNews from "../../Components/BlogsNews/BlogsNews";
import MonarchChosing from "../../Components/ChoosingMonarch/MonarchChosing";
import Properties from "../../Components/PropertiesComponant/Properties";
import Investment from "../../Components/InvestmentComponant/Investment";
import DiscoverProperty from "../../Components/DiscoverPropertyComponant/DiscoverProperty";
import OurServices from "../../Components/OurServicesComponant/OurServices";

function Investments() {
  return (
    <section className="MainInvestmentParentContainer">
      <Investment />
      <DiscoverProperty />
      <Interested />
      <OurServices />
      <ColabratePartner />
      <BlogsNews />
      <MonarchChosing />
      <Properties />
    </section>
  );
}

export default Investments;
