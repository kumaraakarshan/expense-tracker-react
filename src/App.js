import React, { useContext } from "react";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import LoginContext from "./Components/Context/LoginContext";
import Welcome from "./Components/Pages/Welcome";
import IncompleteProfile from "./Components/Pages/IncompleteProfile";
import ForgotPassword from "./Components/Pages/ForgetPassword";
import Expenses from "./Components/Pages/Expenses";
import { ExpenseContextProvider } from "./Components/Context/ExpenseContext";

import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import Header from "./Components/Layout/Header";

function App() {
  const loginCtx = useContext(LoginContext);
  const isLoggedIn = loginCtx.isLoggedIn;
  console.log(isLoggedIn)
  return (
    <React.Fragment>
      <Header />
      {<Route path="/" exact>
          <Redirect to="/signUp" />
        </Route>}
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
      <Route path="/forgotPassword">
        <ForgotPassword />
      </Route>
      
      <ExpenseContextProvider>
        <Route path="/expenses">
          {isLoggedIn ? <Expenses /> : <Redirect to="/signIn" />}
        </Route>
      </ExpenseContextProvider>
    </React.Fragment>
  );
}

export default App;
