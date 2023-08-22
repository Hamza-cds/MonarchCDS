import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Rents from "./Screens/Rents/Rents";
import Buy from "./Screens/Buy/Buy";
import Commercial from "./Screens/Commercial/Commercial";
import Investments from "./Screens/Investments/Investments";
import Services from "./Screens/Services/Services";
import About from "./Screens/About/About";
import Blogs from "./Screens/Blogs/Blogs";
import Contact from "./Screens/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import OurProjects from "./Screens/OurProjects/OurProjects";
import Location from "./Screens/Location/Location";
import BlogsDetail from "./Screens/BlogsDetail/BlogsDetail";
import ProperDetail from "./Screens/ProperDetail/ProperDetail";
import ConstructionDetail from "./Screens/ConstructionDetail/ConstructionDetail";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
        </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rents" element={<Rents />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/OurProjects" element={<OurProjects />} />
          <Route path="/ProperDetail" element={<ProperDetail />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/ConstructionDetail" element={<ConstructionDetail />} />
          <Route path="/BlogsDetail" element={<BlogsDetail />} />

          <Route path="/Investments" element={<Investments />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
