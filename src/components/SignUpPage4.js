import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SignUp.css";
import LeftPartSignUp from "./LeftPartSignUp";

export default function SignUpPage4({passed,setPassed}) {
  return (
    <div className="signUpPage">
      <div className="pageContainer">
        <LeftPartSignUp passed={passed} setPassed={setPassed}/>
        <div className="rightPart">
          <div className="page1-head">
            <strong>Outro</strong>
          </div>
          <div className="page1-body">
            <p>lorem 37</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPassed({
                    one:"false",
                    two:"false",
                    three:"false",
                    four:"false"
                })
              }}
            >
             <Link to="/">Next Step</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
