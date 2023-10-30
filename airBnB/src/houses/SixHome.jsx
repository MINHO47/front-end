import React from "react";
import image6 from "../assets/mancavehouse.jpg";
import stars6 from "../assets/stars6.jpg";

export default function SixHome() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-4 mx-auto">
          <div className="row">
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={image6}
                alt="home"
              />
            </div>
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={stars6}
                alt="home"
              />
            </div>
          </div>
          <p>
            <em>
              Upon entering, you're enveloped by the rustic elegance of the
              cottage's interior. The centerpiece is a stone fireplace, a hearth
              that radiates warmth and coziness. It's the heart of the cottage,
              a place where you can gather around on a chilly evening and let
              the crackling fire create a sense of comfort and camaraderie.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
