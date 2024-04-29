import axios from "axios";
import { useEffect, useState } from "react";

const useCountriesData = () => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://explore-americas-server.vercel.app/countries"
      );
      const { data } = response;
      setCountries(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch countries data.", err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  return { countries, loading };
};

export default useCountriesData;
