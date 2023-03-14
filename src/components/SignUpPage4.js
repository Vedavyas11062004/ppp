import React from "react";
import "../Styles/SignUp.css";

export default function SignUpPage4({setCurrentScreen ,passed, setPassed}) {
  return (
    <div className="rightPart">
      <div className="page1-head">
        <strong>Outro</strong>
      </div>
      <div className="page1-body">
        <p>lorem 37</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
