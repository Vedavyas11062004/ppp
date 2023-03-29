import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Authentication/Auth";
import "../Styles/SignUp.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const [sub, setSub] = useState(null);
  useEffect(() => {
    if (sub) {
      fetch("https://leaderboard-backend.onrender.com/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("hello", data);
          if (data.token) {
            auth.login(data.token);
            navigate(redirectPath, { replace: true });
          } else {
            setErrors(data.message);
          }
        });
    }
  }, [email, password, auth, sub ,navigate,redirectPath]);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="rightPart login">
      <div className="page1-head">
        <strong>Login info</strong>
        <p>please provide name and email address</p>
        <div>{sub && <p>{error}</p>}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="page1-body">
          <ul>
            <li>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                required
                name="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                required
                name="password"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </li>
          </ul>
          <button onClick={() => setSub(true)}>Login</button>
        </div>
      </form>
    </div>
  );
}
