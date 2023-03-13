import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SignUp.css";
import LeftPartSignUp from "./LeftPartSignUp";

export default function SignUpPage3({ friends, setFriend ,passed,setPassed}) {
  return (
    <div className="signUpPage">
      <div className="pageContainer">
        <LeftPartSignUp passed={passed} setPassed={setPassed} />
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
                setPassed({
                    ...passed,
                    three:"true"
                })
              }}
            >
             <Link to="/signup/page4">Next Step</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
