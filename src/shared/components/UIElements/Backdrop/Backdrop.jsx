import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.scss";

const Backdrop = ({ onClick }) =>
  ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById("backdrop-hook")
  );

export default Backdrop;