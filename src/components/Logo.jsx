import React from "react";
import Image from "../images/logo.jpeg";
import "./styles.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={Image} alt="Companylogo" />
    </div>
  );
};

export default Logo;
