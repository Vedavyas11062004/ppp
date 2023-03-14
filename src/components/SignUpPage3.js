import React, { useState } from "react";
import "../Styles/SignUp.css";

export default function SignUpPage3({ setCurrentScreen, setPassed }) {
  const [friends, setFriend] = useState([]);
  return (
    <div className="rightPart">
      <div className="page1-head">
        <strong>Add friends</strong>
        <p>please provide your friends username</p>
      </div>
      <div className="page1-body">
        <ul>
          <li>
            <label htmlFor="frd1">friend 1: </label>
            <input
              type="text"
              required
              name="frd1"
              onChange={(e) =>
                setFriend([
                  ...friends,
                  {
                    name: e.target.value,
                  },
                ])
              }
            ></input>
          </li>
          <li>
            <label htmlFor="frd2">friend 2: </label>
            <input
              type="text"
              required
              name="frd2"
              onChange={(e) =>
                setFriend([
                  ...friends,
                  {
                    name: e.target.value,
                  },
                ])
              }
            ></input>
          </li>
          <li>
            <label htmlFor="frd3">friend 3: </label>
            <input
              type="text"
              required
              name="frd3"
              onChange={(e) =>
                setFriend([
                  ...friends,
                  {
                    name: e.target.value,
                  },
                ])
              }
            ></input>
          </li>
        </ul>
        <button
          onClick={(e) => {
            e.preventDefault();
            setPassed((n) => ({
              ...n,
              three: "false",
              four: "true",
            }));
            setCurrentScreen((n) => n + 1);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
