import React, { useRef } from 'react';
import './Box.css';
import { hexToRGBA } from './utils';

const Box = ({ values, inset, copied, copyToClipBoard }) => {
  // Component Props
  const { hw, vl, br, sr, sc, bxc, opacity } = values;

  // Variables created with Component Props or State
  const rgba = hexToRGBA(sc, opacity);
  const ins = inset ? 'inset' : '';
  const message = copied ? 'Styles copied on your clipboard!' : '';
  /**
   * CSS-in-JS to update styles dynamically on any React State update 😉
   */
  const boxStyle = {
    background: `${bxc}`,
    boxShadow: `${ins} ${hw}px ${vl}px ${br}px ${sr}px ${rgba}`
  };

  // Reference textarea
  const textareaRef = useRef();

  return (
    <div className='box' style={boxStyle}>
      <p className='box-message'>{message}</p>
      <textarea
        ref={textareaRef}
        className='box-textarea'
        name='styles-container'
        id='styles-container'
        cols='30'
        rows='10'
        value={`box-shadow:${boxStyle.boxShadow};`}
        readOnly
      ></textarea>
      <button className='box-button' onClick={() => copyToClipBoard(textareaRef)}>
        Copy
      </button>
    </div>
  );
};

export default Box;
