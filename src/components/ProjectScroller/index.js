import React from "react";
import ProjectCard from "../ProjectCard";

export default function ProjectScroller({ title, projects, tags }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="mb-10 flex gap-10 overflow-scroll overflow-y-hidden p-3 pb-5">
        {projects &&
          projects.map((project) => (
            <div key={project.id}>
              <ProjectCard key={project.id} project={project} allTags={tags} />
            </div>
          ))}
      </div>
    </>
  );
}
