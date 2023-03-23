import React, { useEffect, useRef, useState } from "react";
import LeftPartSignUp from "../components/LeftPartSignUp";
import SignUpPage1 from "../components/SignUpPage1";
import SignUpPage2 from "../components/SignUpPage2";
import SignUpPage3 from "../components/SignUpPage3";
import SignUpPage4 from "../components/SignUpPage4";
import "../Styles/SignUp.css";

export default function SignUp() {
  const [currentScreen, setCurrentScreen] = useState(0);
  let [passed, setPassed] = useState({
    one: "true",
    two: "false",
    three: "false",
    four: "false",
  });

  useEffect(() => {
    fetch("https://leaderboard-backend.onrender.com/api/users/signin")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const screens = useRef([
    <SignUpPage1
      setCurrentScreen={setCurrentScreen}
      passed={passed}
      setPassed={setPassed}
    />,
    <SignUpPage2
      setCurrentScreen={setCurrentScreen}
      passed={passed}
      setPassed={setPassed}
    />,
    <SignUpPage3
      setCurrentScreen={setCurrentScreen}
      passed={passed}
      setPassed={setPassed}
    />,
    <SignUpPage4
      setCurrentScreen={setCurrentScreen}
      passed={passed}
      setPassed={setPassed}
    />,
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
