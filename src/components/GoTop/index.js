import React, { useState, useEffect } from "react";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

export default function GoTop() {
  const [showBttn, setShowBttn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (
        !showBttn &&
        window.scrollY > document.documentElement.offsetHeight * 0.9
      ) {
        setShowBttn(true);
      } else if (
        showBttn &&
        window.scrollY <= document.documentElement.offsetHeight * 0.9
      ) {
        setShowBttn(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showBttn]);

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <AnimatePresence>
      {showBttn && (
        <motion.a
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-20"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black text-2xl text-violet-200 opacity-90 shadow-sm transition-all ease-out hover:scale-110 hover:opacity-100">
            <FontAwesomeIcon icon={faChevronCircleUp} />
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
