import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="overall">
      <div className="content">
        <h1>Client-Centric Company </h1>
      </div>
      <div className="para">
        <p>
          At{" "}
          <span>
            <b>Meck Teck Research Foundation</b>
          </span>{" "}
          ,We are dedicated to providing cutting-edge Hardware and Software
          Solutions that empower businesses to thrive in the digital era.
        </p>
      </div>

      <marquee
        className="Us"
        behavior="scroll"
        direction="left"
        scrollamount="15"
      >
        <p>"What sets us apart is our commitment to Innovation."</p>
      </marquee>
    </div>
  );
};

export default Home;
