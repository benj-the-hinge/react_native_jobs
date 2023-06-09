import { useState, useEffect } from "react";
import axios from "axios";

import MockData from "../mockData.json";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "af60765d88mshfb4127dfe666754p1513b8jsn5c83e34ef397",
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   params: { ...query },
  // };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // const response = await axios.request(options);
      const response = MockData;
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
