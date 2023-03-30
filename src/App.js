import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Codeforces from "./Pages/Codeforces";
import LandingPage from "./Pages/LandingPage";
import Leetcode from "./Pages/Leetcode";
import Codechef from "./Pages/Codechef";
import Github from "./Pages/Github";
import Auth from "./Authentication/Auth";
import RequireAuth from "./Authentication/RequireAuth";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
    <div className="App">
      <Auth>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            path="/codeforces"
            element={
              <RequireAuth>
                <Codeforces />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/leetcode"
            element={
              <RequireAuth>
                <Leetcode />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/codechef"
            element={
              <RequireAuth>
                <Codechef />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/github"
            element={
              <RequireAuth>
                <Github />
              </RequireAuth>
            }
          ></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
