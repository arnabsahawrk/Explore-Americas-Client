import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useAddedSpot = (email) => {
  const [addedSpot, setAddedSpot] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserSpots = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://explore-americas-server.vercel.app/userSpots/${email}`
        );
        const { data } = response;
        setAddedSpot(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch added spot data.", err);
      }
    };
    fetchUserSpots();
  }, [email]);

  return { addedSpot, loading };
};

useAddedSpot.propTypes = {
  name: PropTypes.string.isRequired,
};

export default useAddedSpot;
