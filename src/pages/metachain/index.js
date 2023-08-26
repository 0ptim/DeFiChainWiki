import React, { useState, useEffect, useRef } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Metachain() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data.projects);
      });
  }, []);

  return (
    <Layout description="Find projects on DeFi Meta Chain">
      <div className="flex flex-col items-center justify-center gap-8 py-20">
        <h1>
          <Translate>Metachain.Title</Translate>
        </h1>
        <Input />
      </div>
      <div className="grid grid-cols-2 gap-10 px-8 pb-8 lg:grid-cols-3 xl:grid-cols-4">
        {projects &&
          projects.map((project) => (
            <div className="cursor-pointer overflow-hidden rounded-md bg-slate-800 transition-transform ease-out hover:scale-105 hover:shadow-lg">
              <img src={project.img} className="" />
              <div className="flex flex-col p-6">
                <h2 className="mb-1 text-xl">{project.name}</h2>
                <p className="text-md m-0 text-slate-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}

function Input({ onSubmit }) {
  const [inputValue, setinputValue] = useState("");
  const handleKeyDown = (event) => {
    onSubmit();
  };

  return (
    <input
      className={`w-4/5 rounded-lg border border-transparent bg-gray-50 p-5 pr-11 text-xl shadow-md outline-none hover:border-main-300 focus:border-main-700 dark:bg-gray-800  dark:hover:border-main-700 dark:focus:border-main-500`}
      type="text"
      placeholder={translate({ message: "Metachain.Placeholder" })}
      value={inputValue}
      onChange={(e) => {
        setinputValue(e.target.value);
        setError(false);
      }}
      onKeyDown={handleKeyDown}
    />
  );
}
