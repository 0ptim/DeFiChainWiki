import React from "react";

export default function Input({ onSubmit }) {
  const handleKeyDown = (e) => {
    onSubmit(e.target.value);
  };

  return (
    <input
      className={`w-full rounded-3xl border-2 border-transparent bg-gray-50 p-5 pr-11 text-xl shadow-md outline-none backdrop-blur-sm transition-colors placeholder:text-gray-200 hover:border-main-300 focus:border-main-700 dark:border-main-700 dark:bg-black/40 dark:hover:border-main-600 dark:focus:border-main-500`}
      type="text"
      placeholder="Search for a project..."
      onChange={(e) => {
        handleKeyDown(e);
      }}
    />
  );
}
