import React from "react";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import LoginContext, { LoginContextProvider } from "./Components/Context/LoginContext";
import Welcome from "./Components/Pages/Welcome";
import IncompleteProfile from "./Components/Pages/IncompleteProfile";

import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <React.Fragment>
      <LoginContextProvider>
        <Header/>
       { <Route path="*">
          <Redirect to="/signUp" />
  </Route> }

        <Route path="/signUp">
          <SignUp />
        </Route>

        <Route path="/signIn">
          <SignIn />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/incompleteProfile">
          <IncompleteProfile />
        </Route>
      </LoginContextProvider>
    </React.Fragment>
  );
}

export default App;
