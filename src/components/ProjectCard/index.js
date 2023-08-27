import React from "react";
import Tag from "../Tag";
import { useHistory } from "react-router-dom";

export default function ProjectCard({ project, allTags }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/project?id=${project.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-80 cursor-pointer overflow-hidden rounded-md bg-slate-200 transition-all ease-out hover:scale-105 hover:shadow-md dark:bg-slate-800"
    >
      <img src={project.img} className="" />
      <div className="flex flex-col p-6">
        <h2 className="mb-1 text-xl">{project.name}</h2>
        <p className="text-md m-0 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} tag={tag} allTags={allTags} active={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
