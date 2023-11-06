import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>AIRBNB</h1>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 Airbnb. All rights reserved.</p>
          <p>Terms & Privacy</p>
        </div>
      </div>
    </footer>
  );
}
