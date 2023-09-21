import React, { useState, useEffect } from "react";

const LoginContext = React.createContext({
  email: null,
  idToken: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
  const [email, setEmail] = useState(localStorage.getItem("email") || null);
  const [idToken, setIdToken] = useState(localStorage.getItem("idToken") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, idToken) => {
    setEmail(email);
    setIdToken(idToken);
    setIsLoggedIn(true);
    localStorage.setItem("email", email);
    localStorage.setItem("idToken", idToken);
  };

  const logoutHandler = () => {
    setEmail(null);
    setIdToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("email");
    localStorage.removeItem("idToken");
  };

 

  const loginContext = {
    email: email,
    idToken: idToken,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
