import React, { useState, useEffect } from "react";
import "../styles/Eyes.css";

const Eyes = () => {
  const [direction, setDirection] = useState("middle");

  useEffect(() => {
    const pupils = document.querySelectorAll(".pupil");

    pupils.forEach((pupil) => {
      let top = parseInt(window.getComputedStyle(pupil).top);
      let left = parseInt(window.getComputedStyle(pupil).left);

      switch (direction) {
        case "up":
          pupil.style.top = `10px`;
          break;
        case "middle":
          pupil.style.top = `35px`;
          pupil.style.left = `35px`;
          break;
        case "down":
          pupil.style.top = `60px`;
          break;
        case "left":
          pupil.style.left = `10px`;
          break;
        case "right":
          pupil.style.left = `60px`;
          break;
        default:
          console.log("default");
      }
    });
  }, [direction]);

  return (
    <div className="eyeContainer">
      <div className="code-container">
        <h1>Starting code:</h1>
        <code>
          <code>
            <span className="keyword">const</span> [
            <span className="variable">direction</span>,{" "}
            <span className="variable">setDirection</span>] ={" "}
            <span className="function">useState</span>(
            <span className="text">"middle"</span>);
          </code>
        </code>
        <h1>Function executed onClick:</h1>
        <code>
          <span className="function">setDirection</span>(
          <span className="text">"{direction}"</span>)
        </code>
        <h1>State:</h1>
        <code>
          direction {"=>"} <span className="text">"{direction}"</span>
        </code>
      </div>
      <div className="eyes">
        <div className="eye">
          <div className="pupil" id="pupil1"></div>
        </div>
        <div className="eye">
          <div className="pupil" id="pupil2"></div>
        </div>
        <div className="controls">
          <button id="up" onClick={() => setDirection("up")}>
            ▲
          </button>
          <button id="middle" onClick={() => setDirection("middle")}>
            ●
          </button>
          <button id="down" onClick={() => setDirection("down")}>
            ▼
          </button>
          <button id="left" onClick={() => setDirection("left")}>
            ◄
          </button>
          <button id="right" onClick={() => setDirection("right")}>
            ►
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
