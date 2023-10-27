import React from "react";
import { Link } from "react-router-dom";
import bnb from "./assets/bnb.png";

import "./NavBar.css"

export default function NavBar(){
    return(
        <>
        <div className="nav-bar">
        <h1>AIRBNB</h1>        
        <img className="nav-logo" src={bnb} alt="airbnb logo"/>
        </div>
        <nav>
         <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/about">About</Link>
          </li>
         </ul>
        </nav>
        </>
    );
}