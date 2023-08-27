import { useEffect, useState } from "react";

const useFetchJson = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch("/tags.json", { signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("An unexpected error happened:", error);
        }
      }
    };

    fetchData();

    return () => {
      // Abort fetch
      controller.abort();
    };
  }, []);

  return data;
};

export default useFetchJson;
