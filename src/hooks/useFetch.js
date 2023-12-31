import { useEffect, useState } from "react";
const useFetch = (fetchFn, initialState) => {
  const [fetchedData, setFetchedData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchFn();
        setIsLoading(false);
        setFetchedData([...data]);
      } catch (error) {
        setError({ message: error.message || "It's not you its us...." });
        setIsLoading(false);
      }
    })();
  }, []);

  return { fetchedData, setFetchedData, isLoading, error };
};

export default useFetch;
