import React, { useState, useEffect, useRef } from "react";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Tag from "../../components/Tag";
import ProjectCard from "../../components/ProjectCard";
import Input from "../../components/Input";

export default function Metachain() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);

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

  useEffect(() => {
    setActiveTags(tags.map((tag) => tag.name));
  }, [tags]);

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

  const handleTagClick = (tag) => {
    setActiveTags((prevTags) => {
      if (prevTags.length === tags.length && prevTags.includes(tag)) {
        // If all tags are active and clicked tag is currently active
        // So only this tag should stay active and all other tags should be inactive
        return [tag];
      } else if (prevTags.includes(tag)) {
        // The clicked tag is currently active and not all tags are active,
        // So we remove this tag from activeTags. If no tags are left active, we return all tags
        const newTags = prevTags.filter((t) => t !== tag);
        return newTags.length !== 0 ? newTags : tags.map((tag) => tag.name);
      } else {
        // clicked tag is not currently active, so add it back to activeTags
        return [...prevTags, tag];
      }
    });
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
              tags.map((tag, index) => (
                <Tag
                  key={index}
                  tag={tag.name}
                  active={activeTags.includes(tag.name)}
                  onClick={() => handleTagClick(tag.name)}
                />
              ))}
          </div>
        </div>

        {searchInput ? (
          <div>
            <h2>Search results</h2>
            <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2  lg:grid-cols-3">
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
            <div className="mb-10 flex gap-10 overflow-scroll p-4">
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
