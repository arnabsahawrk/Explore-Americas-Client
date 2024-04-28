import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useSpotDetails = (id) => {
  const [spot, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpot = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://explore-americas-server.vercel.app/tourist-spots/${id}`
        );
        const { data } = response;
        setSpot(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch spot data.", err);
      }
    };

    fetchSpot();
  }, [id]);

  return { spot, loading };
};

useSpotDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default useSpotDetails;
