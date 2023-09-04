import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ href, label, icon }) => (
  <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
    <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-lg text-violet-200 opacity-70 shadow-sm transition-all ease-out hover:scale-110 hover:opacity-90">
      <FontAwesomeIcon icon={icon} />
    </div>
  </a>
);

export default Button;
