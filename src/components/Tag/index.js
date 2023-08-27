import React, { useState, useEffect } from "react";
import classNames from "classnames";

export default function Tag({ tag, active, onClick }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("/tags.json")
      .then((response) => response.json())
      .then((data) => {
        setTags(data.tags);
      });
  }, []);

  const getCurrentTag = tags.find((t) => t.name === tag);

  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-full px-2 py-1 text-xs font-bold leading-none text-white ${
        getCurrentTag?.tailwindColor
      } ${active ? "" : "brightness-50"}`}
      onClick={onClick}
    >
      {tag}
    </div>
  );
}
