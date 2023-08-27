import React from "react";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Tag from "../../components/Tag";
import ProjectCard from "../../components/ProjectCard";
import Input from "../../components/Input";
import useProjects from "../../hooks/useProjects";

export default function Metachain() {
  const {
    projects,
    filteredProjects,
    activeTags,
    onSubmit,
    handleTagClick,
    tags,
    searchInput,
  } = useProjects();

  return (
    <Layout description="Find projects on DeFi Meta Chain">
      <div className="px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-8 px-2 py-20 md:px-40 2xl:px-96">
          <h1>
            <Translate>Metachain.Title</Translate>
          </h1>
          <Input onSubmit={onSubmit} />
          <div className="flex flex-wrap justify-center gap-2">
            {tags &&
              tags.map((tag) => (
                <Tag
                  key={tag.id}
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
            <div className="mb-10 flex flex-wrap gap-10">
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
            <h2>Our Favourites</h2>
            <div className="mb-10 flex gap-10 overflow-scroll p-4">
              {projects &&
                [...projects]
                  .filter((project) => project.fav)
                  .map((project) => (
                    <div key={project.id}>
                      <ProjectCard key={project.id} project={project} />
                    </div>
                  ))}
            </div>
            <h2>New Projects</h2>
            <div className="mb-10 flex gap-10 overflow-scroll p-4">
              {projects &&
                [...projects]
                  .sort((a, b) => b.id - a.id)
                  .slice(0, 5)
                  .map((project) => (
                    <div key={project.id}>
                      <ProjectCard key={project.id} project={project} />
                    </div>
                  ))}
            </div>
            <h2>All Projects (A-Z)</h2>
            <div className="mb-10 flex flex-wrap justify-between gap-10">
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
