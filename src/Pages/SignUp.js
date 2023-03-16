import React, { useEffect, useRef, useState } from "react";
import LeftPartSignUp from "../components/LeftPartSignUp";
import SignUpPage1 from "../components/SignUpPage1";
import SignUpPage2 from "../components/SignUpPage2";
import SignUpPage3 from "../components/SignUpPage3";
import SignUpPage4 from "../components/SignUpPage4";
import "../Styles/SignUp.css";

export default function SignUp() {
  const [currentScreen, setCurrentScreen] = useState(0);
  let [passed,setPassed]= useState({
    one: "true",
    two: "false",
    three: "false",
    four: "false",
  });

  // useEffect(() => {
  //   if (currentScreen === 1) {
  //     passed.current = {
  //       ...passed.current,
  //       one: "false",
  //       two: "true",
  //     };
  //   } else if (currentScreen === 2) {
  //     passed.current = {
  //       ...passed.current,
  //       two: "false",
  //       three: "true",
  //     };
  //   } else if (currentScreen === 3) {
  //     passed.current = {
  //       ...passed.current,
  //       three: "false",
  //       four: "true",
  //     };
  //   }
  // }, [currentScreen]);

  const screens = useRef([
    <SignUpPage1 setCurrentScreen={setCurrentScreen} passed={passed} setPassed={setPassed}/>,
    <SignUpPage2 setCurrentScreen={setCurrentScreen} passed={passed} setPassed={setPassed} />,
    <SignUpPage3 setCurrentScreen={setCurrentScreen} passed={passed} setPassed={setPassed}/>,
    <SignUpPage4 setCurrentScreen={setCurrentScreen} passed={passed} setPassed={setPassed}/>,
  ]);

  console.log(currentScreen);

  return (
    <div className="signUpPage">
      <div className="pageContainer">
        <LeftPartSignUp passed={passed} />
        {screens.current[currentScreen]}
      </div>
    </div>
  );
}
