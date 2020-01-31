import React from "react";
import "./Box.css";

const Box = ({ values }) => {
  const { hw, vl } = values;
  /**
   * CSS-in-JS to update styles dynamically on any React State update 😉
   */
  const boxStyle = {
    boxShadow: `${hw}px ${vl}px 5px 0px rgba(72, 77, 77, 0.75)`
  };

  return (
    <div className="box" style={boxStyle}>
      <div className="box__property-container">
        <p className="box__property-container-text">{boxStyle.boxShadow}</p>
      </div>
    </div>
  );
};

export default Box;
