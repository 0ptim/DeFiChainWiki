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
      <div className="px-8">
        <div className="flex flex-col items-center justify-center gap-8 py-20">
          <h1>
            <Translate>Metachain.Title</Translate>
          </h1>
          <Input />
        </div>
        <h2>Popular Projects</h2>
        <div className="mb-10 flex gap-10 overflow-scroll p-4">
          {projects &&
            projects.map((project) => (
              <div className="">
                <ProjectCard key={project.id} project={project} />
              </div>
            ))}
        </div>
        <h2>New Projects</h2>
        <div className="mb-10 flex gap-10 overflow-scroll">
          {projects &&
            projects.map((project) => (
              <div className="">
                <ProjectCard key={project.id} project={project} />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="w-80 cursor-pointer overflow-hidden rounded-md bg-slate-800 transition-transform ease-out hover:scale-105 hover:shadow-lg">
      <img src={project.img} className="" />
      <div className="flex flex-col p-6">
        <h2 className="mb-1 text-xl">{project.name}</h2>
        <p className="text-md m-0 text-slate-400">{project.description}</p>
      </div>
    </div>
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
