import React from "react";
import "../Styles/SignUp.css";

export default function LeftPartSignUp({ passed}) {
  // console.log(passed);
  return (
    <div className="leftPart">
      <ol>
        <li>
          <div aria-checked={passed.one}>1</div>
          <div>
            <span>STEP 1</span>
            <span>REGISTER INFO</span>
          </div>
        </li>
        <li>
          <div aria-checked={passed.two}>2</div>
          <div>
            <span>STEP 2</span>
            <span>PLATFORMS INFO</span>
          </div>
        </li>
        <li>
          <div aria-checked={passed.three}>3</div>
          <div>
            <span>STEP 3</span>
            <span>ADD FRIENDS</span>
          </div>
        </li>
        <li>
          <div aria-checked={passed.four}>4</div>
          <div>
            <span>STEP 4</span>
            <span>OUTRO</span>
          </div>
        </li>
      </ol>
    </div>
  );
}
