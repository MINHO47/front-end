import React from "react";
import image7 from "../assets/psychohouse.jpg";
import stars7 from "../assets/stars7.jpg";

export default function SevenHome() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-4 mx-auto">
          <div className="row">
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={image7}
                alt="home"
              />
            </div>
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={stars7}
                alt="home"
              />
            </div>
          </div>
          <p>
            <em>
              This modern, minimalist townhouse is a masterful embodiment of
              contemporary design and urban living. Nestled in the heart of the
              city, it stands as a testament to architectural simplicity and
              functional elegance, offering a stylish and efficient urban living
              space.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
