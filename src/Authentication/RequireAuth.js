import React from "react";
import { Navigate, useLocation} from "react-router-dom";
import { useAuth } from "./Auth";

export default function RequireAuth({ children }) {
  const auth = useAuth();
  const location =useLocation();
  console.log("verified !", auth.user);
  if (!auth.user) {
    console.log("enterd signUp");
    return <Navigate to="/login" state={{path:location.pathname}}/>;
  }
  return <div>{children}</div>;
}
