import React, { useState } from "react";
import Box from "./Box";
import Controllers from "./Controllers";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    hw: "10", // horizontal width
    vl: "10", // vertical length
    br: "5", // blur radius
    sr: "0", // spread radius
    sc: "#484D4D", // shadow color
    bxc: "#ff435f", // box color
    opacity: "0.75" // opacity
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
