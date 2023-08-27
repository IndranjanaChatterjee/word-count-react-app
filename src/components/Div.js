import React, { useState } from "react";
import "./DivStyle.css";

export default function Div(prop) {
  const [text, newText] = useState("Enter text here");
  const [mode, newMode] = useState("Dark mode");
  const [instyle, newstyle] = useState({
    color: "#738290",
    backgroundColor: "#FFFCF7",
  });
  document.body.style.backgroundColor = `${instyle.backgroundColor}`;
  document.body.style.color = `${instyle.color}`;
  const convert1 = () => {
    console.log("clicked");
    let textcase = text.toUpperCase();
    newText(textcase);
  };
  const convert2 = () => {
    console.log("clicked");
    let textcase = text.toLowerCase();
    newText(textcase);
  };
  const convert3 = () => {
    console.log("clicked");
    let textcase = text.slice(0, 1).toUpperCase() + text.slice(1);
    newText(textcase);
  };
  const convert4 = () => {
    console.log("clicked");
    let i = 0;
    let textcase = "";
    for (i = 0; i < text.length; i++) {
      if (text[i] === text[i].toLowerCase()) {
        textcase += text[i].toUpperCase();
      } else if (text[i] === text[i].toUpperCase()) {
        textcase += text[i].toLowerCase();
      }
    }
    newText(textcase);
  };
  const convert5 = () => {
    console.log("clicked");
    
    newText('');
  };
  const change = (e) => {
    console.log("clicked");
    newText(e.target.value);
  };
  const changeMode = () => {
    if (mode === "Dark mode") {
      newMode("Light mode");
      newstyle({
        color: "#FAC9B8",
        backgroundColor: "#2F243A",
        
      });
      /* 9 */
    } else if (mode === "Light mode") {
      newMode("Dark mode");
      newstyle({
        
        color: "#738290",
        backgroundColor: "#FFFCF7",
      });
    }
    console.log(instyle.backgroundColor);
    document.body.style.backgroundColor = `${instyle.backgroundColor}`;
    document.body.style.color = `${instyle.color}`;
  };

  return (
    <>
      <div className="container">
        <h1>Type here</h1>
        <div className="box">
          <textarea
            id="text"
            rows="8"
            value={text}
            onChange={change}
          ></textarea>
        </div>
        <div className="btn">
          <button id="click" onClick={convert1}>
            Convert to UpperCase
          </button>
          <button id="click" onClick={convert2}>
            Convert to LowerCase
          </button>
          <button id="click" onClick={convert3}>
            Captalize
          </button>
          <button id="click" onClick={convert4}>
            Inverse Case
          </button>
          <button id="click" onClick={convert5}>
            Clear
          </button>
        </div>
        <div className="count">
          <span>No. of words:{text.split(" ").length}</span>
          <span>No. of characters:{text.length}</span>
        </div>
      </div>
      <div className="mode">
        <button id="modechange" onClick={changeMode} style={instyle}>
          {mode}
        </button>
      </div>
    </>
  );
}
