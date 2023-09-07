import React from "react";

export default function Tag({ tag, allTags, active, onClick }) {
  const getCurrentTag = allTags.find((t) => t.name === tag);

  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-full px-2 py-1 text-xs font-bold leading-none text-gray-800 transition-opacity ${
        getCurrentTag?.tailwindColor
      } ${active ? "" : "opacity-70"}`}
      onClick={onClick}
    >
      {tag}
    </div>
  );
}
