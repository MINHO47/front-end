import React from "react";
import image3 from "../assets/italycs1.6.jpg";
import stars3 from "../assets/stars3.jpg";

export default function ThreeHome() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-4 mx-auto">
          <div className="row">
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={image3}
                alt="home"
              />
            </div>
            <div className="col-6">
              <img
                className="img-fluid img-thumbnail"
                style={{ width: "100%", height: "250px" }}
                src={stars3}
                alt="home"
              />
            </div>
          </div>
          <p>
            <em>
              The mansion's interior is a testament to the opulence of a bygone
              era. Stained glass windows, each a symphony of colors and shapes,
              filter the sunlight into a kaleidoscope of warmth, painting the
              rooms with a sense of enchantment. As you wander through the
              meticulously crafted rooms, you'll feel as though you've stepped
              into a living history book, where every nook and cranny tells a
              story of a bygone time.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
