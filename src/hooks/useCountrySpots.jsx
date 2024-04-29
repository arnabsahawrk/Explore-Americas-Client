import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useCountrySpots = (country) => {
  const [countrySpots, setCountrySpots] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountrySpots = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://explore-americas-server.vercel.app/tourist-spots/countries/${country}`
        );
        const { data } = response;
        setCountrySpots(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch country spots data.", err);
      }
    };

    fetchCountrySpots();
  }, [country]);

  return { countrySpots, loading };
};

useCountrySpots.propTypes = {
  country: PropTypes.string.isRequired,
};

export default useCountrySpots;
