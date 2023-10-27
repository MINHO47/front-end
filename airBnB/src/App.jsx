import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './NavBar'
import Login from './Login';
import About from './About';
import Home from './Home';


export default function App() {

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />        
      </Routes>
    </Router>
    </>
  )
};

