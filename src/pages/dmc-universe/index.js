import React from "react";
import Layout from "@theme/Layout";
import Tag from "../../components/Tag";
import ProjectCard from "../../components/ProjectCard";
import Input from "../../components/Input";
import useProjects from "../../hooks/useProjects";
import ParallaxHeader from "../../components/ParallaxHeader";
import SocialButtons from "../../components/SocialButtons";
import ProjectScroller from "../../components/ProjectScroller";
import GoTop from "../../components/GoTop";
import StarBackground from "../../components/StarBackground";
import useScrollbar from "../../hooks/useScrollbar";

export default function Metachain() {
  useScrollbar("dmc-page");
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
    <div className="dmc-page">
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
      <SocialButtons />
      <ParallaxHeader backgroundSrc="/img/dmc_universe_bg.png">
        <div className="flex flex-col items-center justify-center gap-8 px-4 py-16 sm:px-20 md:px-40 md:py-20 2xl:px-96">
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

      <div className="relative bg-gradient-to-b from-indigo-950 to-black px-4 pt-8 md:px-8">
        <StarBackground count={333} />
        <div className="relative">
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
              <ProjectScroller
                title="Our Favourites"
                projects={
                  projects && [...projects].filter((project) => project.fav)
                }
                tags={tags}
              />
              <ProjectScroller
                title="New Projects"
                projects={
                  projects &&
                  [...projects].sort((a, b) => b.id - a.id).slice(0, 5)
                }
                tags={tags}
              />
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
      </div>
    </div>
  );
}
