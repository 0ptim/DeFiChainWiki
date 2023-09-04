import React from "react";

const Star = ({ style }) => (
  <div
    className="absolute h-0.5 w-0.5 animate-blink bg-white"
    style={style}
  ></div>
);

export default Star;
