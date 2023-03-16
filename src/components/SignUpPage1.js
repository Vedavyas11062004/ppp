import React, { useState } from "react";
import "../Styles/SignUp.css";

export default function SignUpPage1({ setCurrentScreen, passed, setPassed }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setErrors] = useState("");
  function isValid(email, password, confirmPassword) {
    const regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (regex) {
      setErrors("check the email");
      console.log(error);
    } else if (String(password).trim().length < 8) {
      setErrors("Password must be min 8 charecters");
      console.log(error);
    } else if (password !== confirmPassword) {
      setErrors("check the password and confirm password");
      console.log(error);
    } else {
      setCurrentScreen((n) => n + 1);
      setPassed({
        ...passed,
        one: "false",
        two: "true",
      });
      console.log(true);
    }
  }
  return (
    <div className="rightPart">
      <div className="page1-head">
        <strong>Register info</strong>
        <p>please provide name and email address</p>
        <div>
          <p>{error}</p>
        </div>
      </div>
      <div className="page1-body">
        <ul>
          <li>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              required
              value={password}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </li>
        </ul>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log("hello submit");
            isValid(email, password, confirmPassword);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
