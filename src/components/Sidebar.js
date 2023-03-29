import React from "react";
import "../Styles/Sidebar.css";
import homelogo from "../Asserts/home.svg";
import profilelogo from "../Asserts/profile.svg";
import leetcodelogo from "../Asserts/leetcode.svg";
import githublogo from "../Asserts/github.svg";
import codeforceslogo from "../Asserts/code-forces.svg";
import logoutlogo from "../Asserts/box-arrow-left.svg";
// import codecheflogo from '../Asserts/icons8-codechef.svg'
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/Auth";

export default function Sidebar(props) {
  const auth = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    console.log("logout");
    auth.logout();
    navigate("/");
  }
  return (
    <div className="sidebar" aria-expanded={props.expanded}>
      <ul>
        <li>
          <NavLink to="/">
            <span>
              <img src={homelogo} alt=""></img>
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/codeforces">
            <span>
              <img src={codeforceslogo} alt=""></img>
            </span>
            Codeforces
          </NavLink>
        </li>
        <li>
          <NavLink to="/github">
            <span>
              <img src={githublogo} alt=""></img>
            </span>
            Github
          </NavLink>
        </li>
        <li>
          <NavLink to="/leetcode">
            <span>
              <img src={leetcodelogo} alt=""></img>
            </span>
            Leetcode
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/codechef">
            <span>
              <img src={codecheflogo} alt=""></img>
            </span>
            Codechef
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/profile">
            <span>
              <img src={profilelogo} alt=""></img>
            </span>
            Profile
          </NavLink>
        </li>
        <li className="logout">
          {/* <NavLink to="/">
            <span>
              <img src={logoutlogo} alt=""></img>
            </span>
            Logout
          </NavLink> */}
          <button onClick={handleLogout}>
            <span>
              <img src={logoutlogo} alt=""></img>
            </span>
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
