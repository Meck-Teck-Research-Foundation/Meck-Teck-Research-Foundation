import React from "react";
import "./Home.css";
import myImage from "./WHY.png";

export default function Image() {
  return (
    <div className="imag">
      <img src={myImage} alt="My Image" />
    </div>
  );
}

// import React from "react";
// import "./Home.css";
// import myImage from "./WHY.png";
// export default function () {
//   return (
//     <div>
//       <img src={myImage} alt="My Image" />
//     </div>
//   );
// }
