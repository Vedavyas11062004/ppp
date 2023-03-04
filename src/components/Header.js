import React, { useState } from "react";
import toggleButton from "../Asserts/list.svg";
export default function Header() {
  const [expanded, setExpanded] = useState("false");
  console.log(expanded);
  const toggle_action = () => {
    if (expanded === "true") {
      setExpanded("false");
    } else {
      setExpanded("true");
    }
  };
  return (
    <div className="header__container">
      <div className="header__left">PPP</div>
      <div className="header__right">
        <ul data-expanded={expanded} className="list">
          <li>codeforces</li>
          <li>github</li>
          <li>leetcode</li>
          <li>codechef</li>
          <li>
            <button className="login">Login</button>
          </li>
          <li>
            <button className="signup">signup</button>
          </li>
        </ul>
      </div>
      <div
        className="toggle-button"
        aria-expanded={expanded}
        onClick={toggle_action}
      >
        <img src={toggleButton} alt="toggle_button"></img>
      </div>
    </div>
  );
}
