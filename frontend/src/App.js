import "./App.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import NewArticle from "./components/Newarticle";

import { Route } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <div style={{ border: "2px , green , doted" }}>
      <Navigation token={token} setToken={setToken}></Navigation>
      <br />
      <div className="App">
        {" "}
        <h1>WELCOME TO OUR BLOG</h1>
        <Route
          exact
          path="/Login"
          render={() => <Login token={token} setToken={setToken} />}
        />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route
          exact
          path="/Newarticle"
          render={() => <NewArticle token={token} />}
        />
      </div>
    </div>
  );
}
