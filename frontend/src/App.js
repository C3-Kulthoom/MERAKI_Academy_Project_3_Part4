import React from "react";
import "./App.css";
import Input from "./components/Input";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";

// import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <br />
      <div className="App">
        {" "}
        Register
        <Switch>
         <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
        <Input></Input>
      </div>
    </>
  );
}
