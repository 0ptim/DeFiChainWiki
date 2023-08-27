import React from "react";
import Tag from "../Tag";

export default function ProjectCard({ project }) {
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
