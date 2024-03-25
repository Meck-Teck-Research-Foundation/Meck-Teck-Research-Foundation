import React from "react";
import simp from "../images/simp.mp4";
import "./Sample.css";

const Videocomponent = () => {
  return (
    <div className="video">
      {/* <Navbar /> */}
      <video width="640" height="340" autoPlay loop muted>
        <source src={simp} type="video/mp4" />
      </video>
    </div>
  );
};

export default Videocomponent;
