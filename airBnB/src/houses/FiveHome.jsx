import React from "react";
import image5 from "../assets/lakehouse.jpg";
import stars5 from "../assets/stars5.jpg";

export default function FiveHome() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-4 mx-auto">
          <div className="row">
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={image5}
                alt="home"
              />
            </div>
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={stars5}
                alt="home"
              />
            </div>
          </div>
          <p>
            <em>
              As you step onto the property, you're greeted by the unspoiled
              beauty of the lake, its waters glistening in the embrace of the
              surrounding landscape. The retreat itself harmonizes with the
              environment, seamlessly blending into the natural setting. A warm
              and welcoming ambiance envelops you as you approach the entrance,
              where the scent of the lake and the rustling leaves in the breeze
              beckon you inside.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
