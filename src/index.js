import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import KillerContainer from "./killerContainer";

function App() {
  return (
    <div className="App">
      <h1>Killer Pool</h1>
      <KillerContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
