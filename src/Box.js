import React from "react";
import "./Box.css";
import { hexToRGBA } from "./utils";

const Box = ({ values }) => {
  const { hw, vl, br, sr, sc, bxc, opacity } = values;
  const rgba = hexToRGBA(sc, opacity);
  /**
   * CSS-in-JS to update styles dynamically on any React State update 😉
   */
  const boxStyle = {
    background: `${bxc}`,
    boxShadow: `${hw}px ${vl}px ${br}px ${sr}px ${rgba}`
  };

  return (
    <div className="box" style={boxStyle}>
      <div className="box__property-container">
        <p className="box__property-container-text">
          box-shadow: {boxStyle.boxShadow};
        </p>
      </div>
    </div>
  );
};

export default Box;
