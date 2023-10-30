import React from "react";
import image4 from "../assets/kevin.jpg";
import stars4 from "../assets/stars4.jpg";

export default function FourHome() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-4 mx-auto">
          <div className="row">
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={image4}
                alt="home"
              />
            </div>
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={stars4}
                alt="home"
              />
            </div>
          </div>
          <p>
            <em>
              The Southwestern adobe home doesn't just capture the essence of
              its surroundings through its architecture; it offers an immersive
              experience. The large windows and open spaces allow the vibrant
              sunlight to pour in, creating an ever-changing canvas of light and
              shadow. The desert landscape becomes an integral part of the
              home's decor, providing a backdrop that's both soothing and
              inspiring.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
