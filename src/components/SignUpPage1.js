import React, { useState } from "react";
import "../Styles/SignUp.css";

export default function SignUpPage1({
  setCurrentScreen,
  passed,
  setPassed,
  formData,
  handleInputData,
}) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setErrors] = useState("");
  function Validation(name,email, password, confirmPassword) {
    console.log(email);
    console.log(name);
    const regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (regex) {
      setErrors("check the email");
      console.log(error);
    } else if (!name) {
      setErrors("Please provide the name");
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
  const isValid = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    Validation(
      e.target.name.value,
      e.target.email.value,
      e.target.password.value,
      e.target.confirmPassword.value
    );
  };
  return (
    <div className="rightPart">
      <div className="page1-head">
        <strong>Register info</strong>
        <p>please provide name and email address</p>
        <div>
          <p>{error}</p>
        </div>
      </div>
      <form onSubmit={isValid}>
        <div className="page1-body">
          <ul>
            <li>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                required
                name="name"
                defaultValue={formData.name}
                onChange={handleInputData("name")}
              ></input>
            </li>
            <li>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                required
                name="email"
                defaultValue={formData.email}
                onChange={handleInputData("email")}
              ></input>
            </li>
            <li>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                required
                name="password"
                defaultValue={formData.password}
                onChange={handleInputData("password")}
              ></input>
            </li>
            <li>
              <label htmlFor="confirmPassword">ConfirmPassword: </label>
              <input
                type="password"
                required
                name="confirmPassword"
                defaultValue={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </li>
          </ul>
          <button>Next Step</button>
        </div>
      </form>
    </div>
  );
}
