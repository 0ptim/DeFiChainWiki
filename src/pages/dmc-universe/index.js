import React from "react";
import Layout from "@theme/Layout";
import Tag from "../../components/Tag";
import ProjectCard from "../../components/ProjectCard";
import Input from "../../components/Input";
import useProjects from "../../hooks/useProjects";
import ParallaxHeader from "../../components/ParallaxHeader";
import SocialButtons from "../../components/SocialButtons";

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
    <>
      <SocialButtons />
      <ParallaxHeader backgroundSrc="/img/dmc_universe_bg.png">
        <div className="flex flex-col items-center justify-center gap-8 px-4 py-20 sm:px-20 md:px-40 2xl:px-96">
          <div className="dmc-logo h-60 w-60 drop-shadow-logo lg:h-80 lg:w-80"></div>
          <h1 className="text-center font-ps2p text-4xl text-white drop-shadow-strong">
            DMC Universe
          </h1>
          <Input onSubmit={onSubmit} />
          <div className="flex flex-wrap justify-center gap-2 px-4 md:px-8">
            {tags &&
              tags.map((tag) => (
                <Tag
                  key={tag.name}
                  tag={tag.name}
                  allTags={tags}
                  active={activeTags.includes(tag.name)}
                  onClick={() => handleTagClick(tag.name)}
                />
              ))}
          </div>
        </div>
      </ParallaxHeader>

      <div className="px-4 pt-8 md:px-8">
        {searchInput || activeTags.length !== tags.length ? (
          <div>
            <h2>Search results</h2>
            <div className="mb-10 flex flex-wrap gap-10 p-3 pb-5">
              {filteredProjects &&
                filteredProjects.map((project) => (
                  <div key={project.id}>
                    <ProjectCard project={project} allTags={tags} />
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>
            <h2>Our Favourites</h2>
            <div className="mb-10 flex gap-10 overflow-scroll overflow-y-hidden p-3 pb-5">
              {projects &&
                [...projects]
                  .filter((project) => project.fav)
                  .map((project) => (
                    <div key={project.id}>
                      <ProjectCard
                        key={project.id}
                        project={project}
                        allTags={tags}
                      />
                    </div>
                  ))}
            </div>
            <h2>New Projects</h2>
            <div className="mb-10 flex gap-10 overflow-scroll overflow-y-hidden p-3 pb-5">
              {projects &&
                [...projects]
                  .sort((a, b) => b.id - a.id)
                  .slice(0, 5)
                  .map((project) => (
                    <div key={project.id}>
                      <ProjectCard
                        key={project.id}
                        project={project}
                        allTags={tags}
                      />
                    </div>
                  ))}
            </div>
            <h2>All Projects (A-Z)</h2>
            <div className="mb-10 flex flex-wrap justify-between gap-10 p-3 pb-5">
              {projects &&
                [...projects]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((project) => (
                    <div key={project.id}>
                      <ProjectCard project={project} allTags={tags} />
                    </div>
                  ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
