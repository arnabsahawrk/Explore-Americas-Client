import { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";

const useData = () => {
  const allData = useContext(DataContext);
  return allData;
};

export default useData;
