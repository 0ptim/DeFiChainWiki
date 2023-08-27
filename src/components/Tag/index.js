import React from "react";

export default function Tag({ tag, allTags, active, onClick }) {
  const getCurrentTag = allTags.find((t) => t.name === tag);

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
