import React from "react";
import "./contact.css";
import ClientComp from "../../Components/ClientComp/ClientComp";
import ContactUs from "../../Components/ContactUsComponant/ContactUs";

function Contact() {
  return (
    <section className="ContactMainParentContainer">
      <ContactUs />
      <ClientComp />
    </section>
  );
}

export default Contact;
