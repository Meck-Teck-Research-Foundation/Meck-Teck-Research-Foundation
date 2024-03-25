import slide_image_6 from "../../images/k1.jpeg";
import slide_image_7 from "../../images/k2.jpeg";
import slide_image_8 from "../../images/k3.jpeg";
// import slide_image_9 from "../../images/i4.jpeg";

import i1 from "../../images/bk.jpg";

import "./journey.css";
import ImageSlider from "./ImageSlider";

import React from "react";
import Quot from "./Quot";
const slides = [
  { url: slide_image_6 },
  { url: slide_image_7 },
  { url: slide_image_8 },
  // { url: slide_image_9 },
];
const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};
export default function Journey() {
  return (
    <div>
      <div className="pose">
        <img src={i1} alt="hello" />
      </div>
      <div>
        <Quot />
      </div>
      {/* <div>
        <Founder />
      </div> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>

      <div className="foot1">
        <img src="logo.jpeg" alt="logo" class="logo1" />
        <p>&copy; 2024 Meck Teck Research Foundation.All rights Reserved</p>
      </div>
    </div>
  );
}
