import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ href, label, icon }) => (
  <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-sm transition-all ease-out hover:scale-110">
      <FontAwesomeIcon icon={icon} />
    </div>
  </a>
);

export default Button;
