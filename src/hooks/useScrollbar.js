import { useEffect } from "react";

function useScrollbar(className) {
  useEffect(() => {
    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
}

export default useScrollbar;
