import React from "react";
import image2 from "../assets/dessertguy.jpg";
import stars2 from "../assets/stars2.jpg";

export default function TwoHome() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-4 mx-auto">
          <div className="row">
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={image2}
                alt="home"
              />
            </div>
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={stars2}
                alt="home"
              />
            </div>
          </div>
          <p>
            <em>
              Nestled on the shores of the azure ocean, this charming beachfront
              bungalow is a coastal paradise. As you step onto the spacious
              deck, an unobstructed view of the boundless ocean unfolds before
              your eyes, inviting you to savor the pure serenity of the
              waterfront. Here, you are granted a front-row seat to the
              mesmerizing theater of the sea.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
