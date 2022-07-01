import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios(url);
        setIsData(response.data);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetchData = async () => {
    try {
      const response = await axios(url);
      setIsData(response.data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };
  return { isData, isLoading,error, reFetchData };
};

export default useFetch;
