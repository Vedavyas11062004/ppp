import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import SignUp from "./Pages/SignUp";
import Codeforces from "./Pages/Codeforces";
import LandingPage from "./Pages/LandingPage";
import Leetcode from "./Pages/Leetcode";
import Codechef from "./Pages/Codechef";
import Github from "./Pages/Github";
import SignUpPage1 from "./components/SignUpPage1";
import SignUpPage2 from "./components/SignUpPage2";
import SignUpPage3 from "./components/SignUpPage3";
import SignUpPage4 from "./components/SignUpPage4";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [codechef, setCodechef] = useState("");
  const [github, setGithub] = useState("");
  const [friends, setFriend] = useState([]);
  const [passed, setPassed] = useState({
    one: "false",
    two: "false",
    three: "false",
    four: "false",
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/codeforces" element={<Codeforces />}></Route>
        <Route path="/leetcode" element={<Leetcode />}></Route>
        <Route path="/codechef" element={<Codechef />}></Route>
        <Route path="/github" element={<Github />}></Route>
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
        <Route
          path="/signup"
          element={
            <SignUpPage1
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              passed={passed}
              setPassed={setPassed}
            />
          }
        />
        <Route
          path="/signup/page2"
          element={
            <SignUpPage2
              setCodeforces={setCodeforces}
              setLeetcode={setLeetcode}
              setCodechef={setCodechef}
              setGithub={setGithub}
              passed={passed}
              setPassed={setPassed}
            />
          }
        />
        <Route
          path="/signup/page3"
          element={
            <SignUpPage3
              friends={friends}
              setFriend={setFriend}
              passed={passed}
              setPassed={setPassed}
            />
          }
        />
        <Route
          path="/signup/page4"
          element={<SignUpPage4 passed={passed} setPassed={setPassed} />}
        />
      </Routes>
    </div>
  );
}

export default App;
