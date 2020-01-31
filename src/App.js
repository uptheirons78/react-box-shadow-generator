import React from "react";
import Box from "./Box";
import "./App.css";
import Controllers from "./Controllers";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">React Box Shadow Generator</h1>
      <section className="app-wrapper">
        <section className="controllers-section">
          <Controllers />
        </section>
        <section className="box-section">
          <Box />
        </section>
      </section>
    </div>
  );
}

export default App;
