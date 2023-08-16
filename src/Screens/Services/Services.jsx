import React from "react";
import "./services.css";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import Blogs from "../../Components/Blogs/Blogs";
import MonarchChosing from "../../Components/ChoosingMonarch/MonarchChosing";

function Services() {
  return (
    <section className="ServicesMainParentContainer">
      <ColabratePartner />
      <Blogs />
      <MonarchChosing />
    </section>
  );
}

export default Services;
