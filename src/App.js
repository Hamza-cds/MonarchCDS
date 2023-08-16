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
          <Route path="/Commercial" element={<Commercial />} />
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
