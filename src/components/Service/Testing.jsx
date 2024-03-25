import React, { useState, useEffect } from "react";
import { Cursor } from "react-simple-typewriter";

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = words[index];
      setDisplayedText((prevText) => {
        if (prevText === currentWord) {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          return "";
        } else {
          return currentWord.slice(0, prevText.length + 1);
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, [index, words]);

  return <span>{displayedText}</span>;
};

export default function Testing() {
  return (
    <div>
      <div
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: " translate(-50%, -50%)",

          color: "red",
          justifyContent: "space-between",
          fontFamily: "Srisakdi",
        }}
      >
        We make you expert in
        <span style={{ fontWeight: "bold", color: "yellow" }}>
          <Typewriter words={[" Python", " Java", " IOT"]} />
        </span>
        <Cursor />
      </div>
    </div>
  );
}
// import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// export default function Testing() {
//   const { text } = useTypewriter({
//     words: ["Python", "Java", "IOT"],
//   });
//   return (
//     <div>
//       <div style={{ fontSize: "20px", fontWeight: "bold" }}>
//         We make you excel in
//         <span style={{ fontWeight: "bold", color: "green" }}>{text}</span>
//         <Cursor />
//       </div>
//     </div>
//   );
// }
