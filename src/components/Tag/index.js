import React, { useState, useEffect } from "react";

export default function Tag({ tag }) {
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
      className={`flex items-center justify-center rounded-full px-2 py-1 text-xs font-bold leading-none text-white ${
        getCurrentTag?.tailwindColor || "bg-main-500"
      }`}
    >
      {tag}
    </div>
  );
}
