import React, { createContext, useContext, useState } from "react";
const Authcontext = createContext(null);

export default function Auth({ children }) {
  const [user, setUser] = useState(null);
  const login = (value) => {
    setUser(value);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <Authcontext.Provider value={{ login, logout, user }}>
      {children}
    </Authcontext.Provider>
  );
}

export const useAuth=()=>{
    return useContext(Authcontext)
}