import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SignUp.css";
import LeftPartSignUp from "./LeftPartSignUp";

export default function SignUpPage2({
  setCodeforces,
  setLeetcode,
  setCodechef,
  setGithub,
  passed,
  setPassed,
}) {
  return (
    <div className="signUpPage">
      <div className="pageContainer">
        <LeftPartSignUp passed={passed} setPassed={setPassed} />
        <div className="rightPart">
          <div className="page1-head">
            <strong>Platforms info</strong>
            <p>please provide username of the Platforms</p>
          </div>
          <div className="page1-body">
            <ul>
              <li>
                <label htmlFor="codeforces">Codeforces Username: </label>
                <input
                  type="text"
                  name="codeforces"
                  onChange={(e) => setCodeforces(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="leetcode">Leetcode Username: </label>
                <input
                  type="text"
                  name="leetcode"
                  onChange={(e) => setLeetcode(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="codechef">Codechef Username: </label>
                <input
                  type="text"
                  name="codechef"
                  onChange={(e) => setCodechef(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="github">Github Username: </label>
                <input
                  type="text"
                  name="github"
                  onChange={(e) => setGithub(e.target.value)}
                ></input>
              </li>
            </ul>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPassed({
                  ...passed,
                  two: "true",
                });
              }}
            >
              <Link to="/signup/page3">Next Step</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
