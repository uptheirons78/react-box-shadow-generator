import React from "react";
import "./Controllers.css";

const Controllers = ({ values, handleChange }) => {
  return (
    <div className="controllers-container">
      <div className="controllers-container__inside-wrapper">
        <h3 className="controllers-container__inside-wrapper-title">
          Positioning Controllers
        </h3>
        <label htmlFor="hw">Horizontal Width</label>
        <input
          type="range"
          name="hw"
          id="hw"
          min="-200"
          max="200"
          value={values.hw}
          step="1"
          onChange={handleChange}
        />
        <label htmlFor="vl">Vertical Length</label>
        <input
          type="range"
          name="vl"
          id="vl"
          min="-200"
          max="200"
          value={values.vl}
          step="1"
          onChange={handleChange}
        />
        <label htmlFor="br">Blur Radius</label>
        <input
          type="range"
          name="br"
          id="br"
          min="0"
          max="300"
          value={values.br}
          step="1"
          onChange={handleChange}
        />
        <label htmlFor="sr">Spread Radius</label>
        <input
          type="range"
          name="sr"
          id="sr"
          min="-200"
          max="200"
          value={values.sr}
          step="1"
          onChange={handleChange}
        />
      </div>
      <div className="controllers-container__inside-wrapper">
        <h3 className="controllers-container__inside-wrapper-title">
          Color Controllers
        </h3>
        <label htmlFor="sc">Shadow Color</label>
        <input
          type="color"
          name="sc"
          id="sc"
          value={values.sc}
          onChange={handleChange}
        />
        <label htmlFor="bxc">Box Color</label>
        <input
          type="color"
          name="bxc"
          id="bxc"
          value={values.bxc}
          onChange={handleChange}
        />
        <label htmlFor="sr">Opacity</label>
        <input
          type="range"
          name="opacity"
          id="opacity"
          min="0"
          max="1"
          value={values.opacity}
          step="0.05"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Controllers;
