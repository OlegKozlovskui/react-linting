import React from "react";
import logo from "./logo.svg";
import "./App.css";

const state = {
  name: "Oleg",
  name3: "Oleg"
};

function App() {
  const { name, name3 } = state;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        sssssssssssssssssssssssssssssssss
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        sssssssssssss
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
