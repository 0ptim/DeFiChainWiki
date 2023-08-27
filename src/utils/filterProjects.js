export const filterProjects = (projects, activeTags, inputValue) => {
  const lowerCaseInputValue = inputValue.toLowerCase();

  return projects.filter(
    (project) =>
      project.tags.some((tag) => activeTags.includes(tag)) &&
      (project.name.toLowerCase().includes(lowerCaseInputValue) ||
        project.description.toLowerCase().includes(lowerCaseInputValue) ||
        project.x.toLowerCase().includes(lowerCaseInputValue) ||
        project.website.toLowerCase().includes(lowerCaseInputValue))
  );
};
