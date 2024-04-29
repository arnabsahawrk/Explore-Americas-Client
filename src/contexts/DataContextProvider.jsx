import { createContext } from "react";
import PropTypes from "prop-types";
import useTouristSpots from "../hooks/useTouristSpots";
import useCountriesData from "../hooks/useCountriesData";

export const DataContext = createContext(null);
const DataContextProvider = ({ children }) => {
  const { spots, isLoading, refetch, lowToHigh, highToLow } = useTouristSpots();
  const { countries, loading } = useCountriesData();

  const allData = {
    spots,
    isLoading,
    refetch,
    lowToHigh,
    highToLow,
    countries,
    loading,
  };
  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
