import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useAddedSpot = (email) => {
  const [addedSpot, setAddedSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

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
  }, [email, toggle]);

  const refetchUser = () => {
    setToggle(!toggle);
  };

  return { addedSpot, loading, refetchUser };
};

useAddedSpot.propTypes = {
  name: PropTypes.string.isRequired,
};

export default useAddedSpot;
