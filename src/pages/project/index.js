import React, { useEffect, useState } from "react";
import useFetchProjects from "../../hooks/useFetchProjects";
import useFetchTags from "../../hooks/useFetchTags";
import Layout from "@theme/Layout";
import { useLocation } from "@docusaurus/router";
import ProjectCard from "../../components/ProjectCard";

export default function Project() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const id = query.get("id");

  const { projects = [] } = useFetchProjects();
  const { tags = [] } = useFetchTags();

  const project = projects.find((project) => project.id === Number(id));

  return (
    <Layout description="Find projects on DeFi Meta Chain">
      {project && tags && <ProjectCard project={project} allTags={tags} />}
    </Layout>
  );
}
