import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    async function getData() {
      try {
        setLoading(true);

        const response = await fetch(url);
        if (!response.ok) throw new Error("Erro na requisição");

        const json = await response.json();

        if (isActive) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isActive) setError(err.message);
      } finally {
        if (isActive) setLoading(false);
      }
    }

    getData();

    return () => {
      isActive = false;
    };
  }, [url]);

  return { data, loading, error };
}
