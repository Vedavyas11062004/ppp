import React, { useState } from "react";
import "../Styles/SignUp.css";

export default function SignUpPage2({
  setCurrentScreen,
  setPassed,
  formData,
  handleInputData,
}) {
  const [error2, setErrors2] = useState("");

  function Validation(codeforces,leetcode,github) {
    if (!(codeforces || leetcode || github)) {
      setErrors2("Please provide atleast one platform credentials");
      console.log("next let");
    } else {
      setCurrentScreen((n) => n + 1);
      setPassed((n) => ({
        ...n,
        two: "false",
        three: "true",
      }));
    }
  }

  const isValid = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    Validation(
      e.target.codeforces.value,
      e.target.leetcode.value,
      e.target.github.value,
    );
  };

  return (
    <div className="rightPart">
      <div className="page1-head">
        <strong>Platforms info</strong>
        <p>please provide username of the Platforms</p>
        <div>
          <p>{error2}</p>
        </div>
      </div>
      <form onSubmit={isValid}>
        <div className="page1-body">
          <ul>
            <li>
              <label htmlFor="codeforces">Codeforces Username: </label>
              <input
                type="text"
                name="codeforces"
                defaultValue={formData.codeforces}
                onChange={handleInputData("codeforces")}
              ></input>
            </li>
            <li>
              <label htmlFor="leetcode">Leetcode Username: </label>
              <input
                type="text"
                name="leetcode"
                defaultValue={formData.leetcode}
                onChange={handleInputData("leetcode")}
              ></input>
            </li>
            <li>
              <label htmlFor="github">Github Username: </label>
              <input
                type="text"
                name="github"
                defaultValue={formData.github}
                onChange={handleInputData("github")}
              ></input>
            </li>
          </ul>
          <button>Next Step</button>
        </div>
      </form>
    </div>
  );
}
