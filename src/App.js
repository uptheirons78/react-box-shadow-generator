import React, { useState } from "react";
import Box from "./Box";
import "./App.css";
import Controllers from "./Controllers";

function App() {
  const [values, setValues] = useState({
    hw: "10",
    vl: "10"
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };
  return (
    <div className="app">
      <h1 className="app-title">React Box Shadow Generator</h1>
      <section className="app-wrapper">
        <section className="controllers-section">
          <Controllers values={values} handleChange={handleChange} />
        </section>
        <section className="box-section">
          <Box values={values} />
        </section>
      </section>
    </div>
  );
}

export default App;
