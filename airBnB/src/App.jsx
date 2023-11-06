import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import OneHome from "./houses/OneHome";
import TwoHome from "./houses/TwoHome";
import ThreeHome from "./houses/ThreeHome";
import FourHome from "./houses/FourHome";
import FiveHome from "./houses/FiveHome";
import SixHome from "./houses/SixHome";
import SevenHome from "./houses/SevenHome";
import EightHome from "./houses/EightHome";

const AppStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

export default function App() {
  return (
    <div style={AppStyle}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/01" element={<OneHome />} />
          <Route path="/02" element={<TwoHome />} />
          <Route path="/03" element={<ThreeHome />} />
          <Route path="/04" element={<FourHome />} />
          <Route path="/05" element={<FiveHome />} />
          <Route path="/06" element={<SixHome />} />
          <Route path="/07" element={<SevenHome />} />
          <Route path="/08" element={<EightHome />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
