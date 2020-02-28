import React from "react";

import "./Card.scss";

const Card = ({ children, className, style }) => (
  <div className={`card ${className}`} style={style}>
    {children}
  </div>
);

export default Card;
