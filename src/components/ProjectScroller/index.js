import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../ProjectCard";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectScroller({ title, projects, tags }) {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const { scrollWidth, clientWidth } = scrollerRef.current;
    setCanScrollRight(scrollWidth > clientWidth);

    const handleScroll = () => {
      setCanScrollLeft(scrollerRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollerRef.current.scrollLeft < scrollWidth - clientWidth
      );
    };

    scrollerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (scrollOffset) => {
    scrollerRef.current.scrollTo({
      left: scrollerRef.current.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <div className="absolute bottom-0 left-0 top-0 z-10 flex items-center">
          <button
            className="h-10 w-10 cursor-pointer rounded-full border-none bg-gray-700 transition-all ease-out hover:scale-110"
            onClick={() => scroll(-400)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
      )}

      {canScrollRight && (
        <div className="absolute bottom-0 right-0 top-0 z-10 flex items-center">
          <button
            className="h-10 w-10 cursor-pointer rounded-full border-none bg-gray-600 transition-all ease-out hover:scale-110"
            onClick={() => scroll(400)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      <h2>{title}</h2>
      <div
        className="mb-10 flex gap-10 overflow-scroll overflow-y-hidden p-3 pb-5"
        ref={scrollerRef}
      >
        {projects &&
          projects.map((project) => (
            <div key={project.id}>
              <ProjectCard key={project.id} project={project} allTags={tags} />
            </div>
          ))}
      </div>
    </div>
  );
}
