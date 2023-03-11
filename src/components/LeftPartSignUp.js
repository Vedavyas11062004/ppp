import React from "react";
import "../Styles/SignUp.css";

export default function LeftPartSignUp() {
  return (
    <div className="leftPart">
      <ol>
        <li>
          <div>1</div>
          <div>
            <span>STEP 1</span>
            <span>REGISTER INFO</span>
          </div>
        </li>
        <li>
          <div>2</div>
          <div>
            <span>STEP 2</span>
            <span>PLATFORMS INFO</span>
          </div>
        </li>
        <li>
          <div>3</div>
          <div>
            <span>STEP 3</span>
            <span>ADD FRIENDS</span>
          </div>
        </li>
        <li>
          <div>4</div>
          <div>
            <span>STEP 4</span>
            <span>OUTRO</span>
          </div>
        </li>
      </ol>
    </div>
  );
}
