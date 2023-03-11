import React from "react";
import "../Styles/SignUp.css";
import LeftPartSignUp from "./LeftPartSignUp";

export default function SignUpPage1() {
  return (
    <div className="pageContainer">
      <LeftPartSignUp />
      <div className="rightPart">
        <div className="page1-head">
          <strong>Register info</strong>
          <p>please provide name and email address</p>
        </div>
        <div className="page1-body">
          <ul>
            <li>
              <label htmlFor="email">Email: </label>
              <input type="email" required name="email"></input>
            </li>
            <li>
              <label htmlFor="password">Password: </label>
              <input type="password" required name="password"></input>
            </li>
            <li>
              <label htmlFor="confirmPassword">ConfirmPassword: </label>
              <input type="password" required name="confirmPassword"></input>
            </li>
          </ul>
          <button>Next Step</button>
        </div>
      </div>
    </div>
  );
}
