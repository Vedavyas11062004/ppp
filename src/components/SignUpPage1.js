import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Styles/SignUp.css";
import LeftPartSignUp from "./LeftPartSignUp";

export default function SignUpPage1({
  setPassword,
  setEmail,
  setConfirmPassword,
  passed,
  setPassed,
}) {
  // console.log(passed);
  return (
    <div className="signUpPage">
      <div className="pageContainer">
        <LeftPartSignUp passed={passed}
              setPassed={setPassed}/>
        <div className="rightPart">
          <div className="page1-head">
            <strong>Register info</strong>
            <p>please provide name and email address</p>
          </div>
          <div className="page1-body">
            <ul>
              <li>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  required
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="confirmPassword">ConfirmPassword: </label>
                <input
                  type="password"
                  required
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </li>
            </ul>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("hello submit");
                setPassed({
                  ...passed,
                  one:"true"
                })
                console.log(passed)
              }}
            >
              <Link to="/signup/page2">Next Step</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
