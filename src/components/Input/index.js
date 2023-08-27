import React from "react";
import { translate } from "@docusaurus/Translate";

export default function Input({ onSubmit }) {
  const handleKeyDown = (e) => {
    onSubmit(e.target.value);
  };

  return (
    <input
      className={`w-full rounded-lg border border-transparent bg-gray-50 p-5 pr-11 text-xl shadow-md outline-none hover:border-main-300 focus:border-main-700 dark:bg-gray-800  dark:hover:border-main-700 dark:focus:border-main-500`}
      type="text"
      placeholder={translate({ message: "Metachain.Placeholder" })}
      onChange={(e) => {
        handleKeyDown(e);
      }}
    />
  );
}
