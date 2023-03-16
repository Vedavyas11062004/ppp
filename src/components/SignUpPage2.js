import React, { useState } from "react";
import "../Styles/SignUp.css";

export default function SignUpPage2({ setCurrentScreen,setPassed }) {
  const [codeforces, setCodeforces] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [codechef, setCodechef] = useState("");
  const [github, setGithub] = useState("");
  const [error2, setErrors2] = useState("");

  function isValid2(codeforces, codechef, leetcode, github) {
    if (!(codeforces || codechef || leetcode || github)) {
      setErrors2("Please provide atleast one platform credentials");
      console.log("next let");
    }
    else{
      setCurrentScreen((n) => n + 1);
      setPassed((n) => ({
        ...n,
        two: "false",
        three: "true",
      }));
    }
  }

  return (
    <div className="rightPart">
      <div className="page1-head">
        <strong>Platforms info</strong>
        <p>please provide username of the Platforms</p>
        <div>
          <p>{error2}</p>
        </div>
      </div>
      <div className="page1-body">
        <ul>
          <li>
            <label htmlFor="codeforces">Codeforces Username: </label>
            <input
              type="text"
              value={codeforces}
              name="codeforces"
              onChange={(e) => setCodeforces(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="leetcode">Leetcode Username: </label>
            <input
              type="text"
              name="leetcode"
              value={leetcode}
              onChange={(e) => setLeetcode(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="codechef">Codechef Username: </label>
            <input
              type="text"
              name="codechef"
              value={codechef}
              onChange={(e) => setCodechef(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="github">Github Username: </label>
            <input
              type="text"
              name="github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            ></input>
          </li>
        </ul>
        <button
          onClick={(e) => {
            e.preventDefault();
            isValid2(codeforces, codechef, leetcode, github);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
