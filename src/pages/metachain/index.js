import React, { useState, useEffect } from "react";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Tag from "../../components/Tag";
import ProjectCard from "../../components/ProjectCard";
import Input from "../../components/Input";
import useFetchProjects from "../../hooks/useFetchProjects";
import useFetchTags from "../../hooks/useFetchTags";
import { filterProjects } from "../../utils/filterProjects";

export default function Metachain() {
  const { projects = [] } = useFetchProjects();
  const { tags = [] } = useFetchTags();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    setActiveTags(tags.map((tag) => tag.name));
  }, [tags]);

  const filter = (inputValue) => {
    setFilteredProjects(filterProjects(projects, activeTags, inputValue));
  };

  const onsubmit = (inputValue) => {
    setSearchInput(inputValue);
    filter(inputValue);
  };

  const handleTagClick = (tag) => {
    setActiveTags((prevTags) => {
      let newTags;
      if (prevTags.length === tags.length && prevTags.includes(tag)) {
        newTags = [tag];
      } else if (prevTags.includes(tag)) {
        newTags = prevTags.filter((t) => t !== tag);
        if (newTags.length === 0) newTags = tags.map((tag) => tag.name);
      } else {
        newTags = [...prevTags, tag];
      }

      return newTags;
    });
  };

  useEffect(() => {
    filter(searchInput);
  }, [activeTags]);

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

        {searchInput || activeTags.length !== tags.length ? (
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
