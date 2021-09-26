import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

const _App = () => (
  <>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  </>
);

export default _App;
