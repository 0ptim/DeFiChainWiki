import { useState, useEffect } from "react";
import useFetchProjects from "./useFetchProjects";
import useFetchTags from "./useFetchTags";
import { filterProjects } from "../utils/filterProjects";

export default function useProjects() {
  const { projects = [] } = useFetchProjects();
  const { tags = [] } = useFetchTags();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    setActiveTags(tags.map((tag) => tag.name));
  }, [tags]);

  const filter = (inputValue) => {
    setFilteredProjects(filterProjects(projects, activeTags, inputValue));
  };

  const onSubmit = (inputValue) => {
    setSearchInput(inputValue);
    filter(inputValue);
  };

  const handleTagClick = (tag) => {
    setActiveTags((prevTags) => {
      let newTags;
      if (prevTags.length === tags.length && prevTags.includes(tag)) {
        newTags = [tag];
      } else if (prevTags.includes(tag)) {
        newTags = prevTags.filter((t) => t !== tag);
        if (newTags.length === 0) newTags = tags.map((tag) => tag.name);
      } else {
        newTags = [...prevTags, tag];
      }
      return newTags;
    });
  };

  useEffect(() => {
    filter(searchInput);
  }, [activeTags]);

  return {
    projects,
    filteredProjects,
    activeTags,
    onSubmit,
    handleTagClick,
    tags,
    searchInput,
  };
}
