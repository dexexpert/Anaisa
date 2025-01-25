import { useState, useEffect } from "react";

const API_URL = "https://testing-void-api.vercel.app/api/getOurCurrencyList"; // 

function useFetchCurrency() {
  const [currencyData, setCurrencyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    let intervalId;

    const fetchCurrency = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }
        const data = await response.json();
        setCurrencyData(data); // Assuming the API returns an array of currencies
        setError(null);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    // Initial fetch
    fetchCurrency();

    // Set interval to fetch every 30 minutes (1800000 ms)
    intervalId = setInterval(fetchCurrency, 30 * 60 * 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return { currencyData, loading, error };
}

export default useFetchCurrency;
