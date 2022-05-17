import React from "react";
import About from "../pages/about";
import Home from "../pages/home";

import Contact from "../pages/contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Favorites from "../pages/favorites";
import Header from "../components/header";
import Countrydetails from "../pages/countrydetails";

const Nav = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/:countryName" element={<Countrydetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Nav;
