import React from "react";
import image1 from "../assets/astrohouse.jpg";
import stars1 from "../assets/stars1.jpg";

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
                src={image1}
                alt="home"
              />
            </div>
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={stars1}
                alt="home"
              />
            </div>
          </div>
          <p>
            <em>
              This celestial hideaway is not just a night sky enthusiast's
              dream; it's a sanctuary for those seeking unparalleled celestial
              beauty and natural wonder. Nestled in the heart of nature's
              embrace, this unique abode offers an awe-inspiring experience as
              darkness falls, unveiling the world's grandest spectacle above
              you. As the sun dips below the horizon, and the sky transitions
              from twilight to a velvety cloak of night, step out onto the
              expansive deck and prepare to be mesmerized. Here, you will bear
              witness to a celestial canvas of stars, constellations, and the
              Milky Way, stretching endlessly across the night sky. It's as if
              the universe has unrolled its grand tapestry just for you,
              allowing you to become an integral part of this cosmic
              masterpiece.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
