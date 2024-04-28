import axios from "axios";
import { useEffect, useState } from "react";

const useTouristSpots = () => {
  const [spots, setSpots] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const fetchSpots = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://explore-americas-server.vercel.app/tourist-spots"
      );
      const { data } = response;
      setSpots(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Failed to fetch spots data.", err);
    }
  };

  const refetch = () => {
    setToggle(!toggle);
  };

  //Ascending Sorting
  const lowToHigh = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://explore-americas-server.vercel.app/tourist-spot-ascending"
      );
      const { data } = response;
      setSpots(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Failed to sorting spots data.", err);
    }
  };
  //Descending Sorting
  const highToLow = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://explore-americas-server.vercel.app/tourist-spot-descending"
      );
      const { data } = response;
      setSpots(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Failed to sorting spots data.", err);
    }
  };

  useEffect(() => {
    fetchSpots();
  }, [toggle]);

  return { spots, isLoading, refetch, lowToHigh, highToLow };
};

export default useTouristSpots;
