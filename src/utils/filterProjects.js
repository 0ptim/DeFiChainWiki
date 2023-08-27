export const filterProjects = (projects, activeTags, inputValue) => {
  const lowerCaseInputValue = inputValue.toLowerCase();

  return projects.filter(
    (project) =>
      activeTags.every((tag) => project.tags.includes(tag)) &&
      (project.name.toLowerCase().includes(lowerCaseInputValue) ||
        project.description.toLowerCase().includes(lowerCaseInputValue) ||
        project.x.toLowerCase().includes(lowerCaseInputValue) ||
        project.website.toLowerCase().includes(lowerCaseInputValue))
  );
};
