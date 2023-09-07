import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../ProjectCard";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectScroller({ title, projects, tags }) {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollState = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    console.log(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    const handleScroll = () => {
      checkScrollState();
    };

    scrollerRef.current.addEventListener("scroll", handleScroll);

    checkScrollState();

    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      checkScrollState();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
      <AnimatePresence>
        {canScrollLeft && (
          <motion.div
            className="absolute -left-5 bottom-0 top-0 z-10 flex items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <a onClick={() => scroll(-400)}>
              <motion.div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-xl text-violet-200 opacity-80 shadow-sm transition-all ease-out hover:opacity-100"
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {canScrollRight && (
          <motion.div
            className="absolute -right-5 bottom-0 top-0 z-10 flex items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <a onClick={() => scroll(400)}>
              <motion.div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-xl text-violet-200 opacity-80 shadow-sm transition-all ease-out hover:opacity-100"
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

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
