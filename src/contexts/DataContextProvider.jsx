import { createContext } from "react";
import PropTypes from "prop-types";
import useTouristSpots from "../hooks/useTouristSpots";

export const DataContext = createContext(null);
const DataContextProvider = ({ children }) => {
  const { spots, isLoading, refetch, lowToHigh, highToLow } = useTouristSpots();

  const allData = {
    spots,
    isLoading,
    refetch,
    lowToHigh,
    highToLow,
  };
  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
