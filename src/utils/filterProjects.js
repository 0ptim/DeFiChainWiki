export const filterProjects = (projects, activeTags, tags, inputValue) => {
  const lowerCaseInputValue = inputValue.toLowerCase();

  return projects.filter(
    (project) =>
      (activeTags.length !== tags.length
        ? activeTags.every((tag) => project.tags.includes(tag))
        : true) &&
      (project.name.toLowerCase().includes(lowerCaseInputValue) ||
        project.description.toLowerCase().includes(lowerCaseInputValue) ||
        project.longDescription.toLowerCase().includes(lowerCaseInputValue) ||
        project.mainURL.toLowerCase().includes(lowerCaseInputValue))
  );
};
