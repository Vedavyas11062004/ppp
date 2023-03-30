import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toggleButton from "../Asserts/list.svg";
import { useAuth } from "../Authentication/Auth";
export default function Header() {
  const [expanded, setExpanded] = useState("false");
  const auth = useAuth();
  const navigate = useNavigate();
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
          <li>
            <Link to="/codeforces" style={{ textDecoration: "none" }}>
              codeforces
            </Link>
          </li>
          <li>
            <Link to="/github" style={{ textDecoration: "none" }}>
              github
            </Link>
          </li>
          <li>
            <Link to="/leetcode" style={{ textDecoration: "none" }}>
              leetcode
            </Link>
          </li>
          {/* <li>
            <Link to="/codechef" style={{ textDecoration: "none" }}>
              codechef
            </Link>
          </li> */}
          <li>
            {!auth.user && (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="login">Login</button>
              </Link>
            )}
          </li>
          <li>
            {!auth.user && (
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button className="signup">signup</button>
              </Link>
            )}
          </li>
          <li>
            {auth.user && (
              <button
                className="signup"
                onClick={() => {
                  auth.logout();
                  navigate("/");
                }}
              >
                logout
              </button>
            )}
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
