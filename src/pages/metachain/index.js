import React, { useState, useEffect, useRef } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Metachain() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data.projects);
        setFilteredProjects(data.projects);
      });
  }, []);

  useEffect(() => {
    fetch("/tags.json")
      .then((response) => response.json())
      .then((data) => {
        setTags(data.tags);
      });
  }, []);

  onsubmit = (inputValue) => {
    setSearchInput(inputValue.toLowerCase());

    var result = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchInput) ||
        project.description.toLowerCase().includes(searchInput) ||
        project.x.toLowerCase().includes(searchInput) ||
        project.website.toLowerCase().includes(searchInput)
    );

    setFilteredProjects(result);
  };

  return (
    <Layout description="Find projects on DeFi Meta Chain">
      <div className="px-8">
        <div className="flex flex-col items-center justify-center gap-8 px-40 py-20">
          <h1>
            <Translate>Metachain.Title</Translate>
          </h1>
          <Input onSubmit={onsubmit} />
          <div className="flex flex-wrap justify-center gap-2">
            {tags &&
              tags.map((tag, index) => <Tag key={index} tag={tag.name} />)}
          </div>
        </div>

        {searchInput ? (
          <div>
            <h2>Search results</h2>
            <div className="mb-10 flex gap-10 overflow-scroll p-4">
              {filteredProjects &&
                filteredProjects.map((project) => (
                  <div key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>
            <h2>Popular Projects</h2>
            <div className="mb-10 flex gap-10 overflow-scroll p-4">
              {projects &&
                projects.map((project) => (
                  <div>
                    <ProjectCard key={project.id} project={project} />
                  </div>
                ))}
            </div>
            <h2>New Projects</h2>
            <div className="mb-10 flex gap-10 overflow-scroll">
              {projects &&
                projects.map((project) => (
                  <div>
                    <ProjectCard key={project.id} project={project} />
                  </div>
                ))}
            </div>
            <h2>All Projects (A-Z)</h2>
            <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2  lg:grid-cols-3">
              {projects &&
                [...projects]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((project) => (
                    <div key={project.id}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

function Tag({ tag }) {
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

function ProjectCard({ project }) {
  return (
    <div className="w-80 cursor-pointer overflow-hidden rounded-md bg-slate-800 transition-transform ease-out hover:scale-105 hover:shadow-lg">
      <img src={project.img} className="" />
      <div className="flex flex-col p-6">
        <h2 className="mb-1 text-xl">{project.name}</h2>
        <p className="text-md m-0 text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Input({ onSubmit }) {
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
