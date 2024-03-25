import React from "react";
import "./Socialmedia.css";

export default function Socialmedia() {
  const Instagram =
    "https://www.instagram.com/meckteck_research_foundation?igsh=bzN5MXg3b3VicTRu";
  const LinkedIn =
    "http://www.linkedin.com/in/meck-teck-research-foundation-5a59252b3";
  const Facebook = "https://www.facebook.com/profile.php?id=100089119484017";
  return (
    <>
      <a href={Instagram} target="_blank" rel="noopener noreferrrer">
        <img
          src="https://www.instagram.com/static/images/ico/xxhdpi_launcher.png/99cf3909d459.png"
          alt="Instagram"
        />
      </a>
      <span style={{ margin: "0 10px" }}></span>
      <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
        <img
          src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
          alt="LinkedIn"
        />
      </a>
      <span style={{ margin: "0 10px" }}></span>
      <a href={Facebook} target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
          alt="Facebook"
        />
      </a>
    </>
  );
}
