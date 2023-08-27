import { useEffect, useState } from "react";

const useFetchJson = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/tags.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useFetchJson;
