import React from "react";
import phoneIcon from "./assets/telepon-7735.png";

export default function Contact(props) {
  return (
    <>
      <div className="card m-3 w-25 rounded ">
        <img
          src={props.img}
          style={{ width: "100%", height: "200px" }}
          className="img-fluid rounded"
          alt={props.name}
        />
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text">{props.desc}</p>
        </div>
        <div className="card-footer ">
          <div className="d-flex align-items-center">
            <img
              style={{
                width: "20px",
                height: "20px",
                marginRight: "5px",
                marginTop: "-14px",
              }}
              src={phoneIcon}
              alt="Phone Icon"
            />
            <p>
              <b>{props.number}</b>
            </p>
          </div>
          <p>
            <b>
              <em>{props.price}</em>
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
