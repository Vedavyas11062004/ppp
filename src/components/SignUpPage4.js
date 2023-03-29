import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/Auth";
import "../Styles/SignUp.css";

export default function SignUpPage4() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location=useLocation();
  const redirectPath=location.state?.path||'/';
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
            auth.login("user");
            console.log(auth.user);
            navigate(redirectPath,{replace:true});
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
