import React from "react";
import image8 from "../assets/flathouse.jpg";
import stars8 from "../assets/stars8.jpg";

export default function OneHome() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-4 mx-auto">
          <div className="row">
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={image8}
                alt="home"
              />
            </div>
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={stars8}
                alt="home"
              />
            </div>
          </div>
          <p>
            <em>
              Welcome to the future of living, where cutting-edge technology
              seamlessly integrates with your daily life in this futuristic
              smart home. This architectural marvel boasts an array of automated
              features that make every moment in your daily routine highly
              efficient, comfortable, and truly advanced.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
