import React from "react";
import ReactDOM from "react-dom";

import "./design.scss";

function App() {
  return (
    <div className="App">
      <h1>This is the start of my design portfolio</h1>
      <h2>Let the games begin!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);