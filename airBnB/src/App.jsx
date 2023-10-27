import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './NavBar'
import Home from './Home';
import About from './About';


export default function App() {

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  )
};

