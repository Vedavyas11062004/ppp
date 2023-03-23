import React, { useEffect, useRef, useState } from "react";
import LeftPartSignUp from "../components/LeftPartSignUp";
import SignUpPage1 from "../components/SignUpPage1";
import SignUpPage2 from "../components/SignUpPage2";
import SignUpPage3 from "../components/SignUpPage3";
import SignUpPage4 from "../components/SignUpPage4";
import "../Styles/SignUp.css";

export default function SignUp() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    codeforces: "",
    leetcode: "",
    github: "",
    name: "",
  });
  let [passed, setPassed] = useState({
    one: "true",
    two: "false",
    three: "false",
    four: "false",
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  useEffect(() => {
    if (passed.four) {
      fetch("https://leaderboard-backend.onrender.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          codeforces: formData.codeforces,
          leetcode: formData.leetcode,
          github: formData.github,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  },[passed.four]);

  const screens = useRef([
    <SignUpPage1
      setCurrentScreen={setCurrentScreen}
      passed={passed}
      setPassed={setPassed}
      formData={formData}
      handleInputData={handleInputData}
    />,
    <SignUpPage2
      setCurrentScreen={setCurrentScreen}
      passed={passed}
      setPassed={setPassed}
      formData={formData}
      handleInputData={handleInputData}
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

  return (
    <div className="signUpPage">
      <div className="pageContainer">
        <LeftPartSignUp passed={passed} />
        {screens.current[currentScreen]}
      </div>
    </div>
  );
}
