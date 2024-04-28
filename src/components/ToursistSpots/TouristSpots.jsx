import { IoMdArrowDropdownCircle } from "react-icons/io";
import useData from "../../hooks/useData";
import Spinner from "../Spinner/Spinner";
import TouristSpotCard from "./TouristSpotCard";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const TouristSpots = () => {
  const { spots, isLoading, lowToHigh, highToLow } = useData();

  //Sending Request Database For Sorting Via Server
  const lowToHighCost = () => {
    lowToHigh();
  };
  const highToLowCost = () => {
    highToLow();
  };

  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6">
        <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          All Tourist Spots
        </h1>
        {/* Sorted Spots  */}
        <div className="flex justify-center">
          <Menu>
            <MenuHandler>
              <Button className="flex items-center gap-1 px-4 py-2 bg-[#F91842] text-gray-200 font-semibold text-base shadow-none hover:shadow-none rounded-sm capitalize">
                Filter By <IoMdArrowDropdownCircle />
              </Button>
            </MenuHandler>
            <MenuList className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-200 shadow-2xl">
              <MenuItem onClick={() => lowToHighCost()}>
                Low To High Cost
              </MenuItem>
              <MenuItem onClick={() => highToLowCost()}>
                High To Low Cost
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        {/* All Card Loaded  */}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spots?.map((spot) => (
              <TouristSpotCard key={spot?._id} spot={spot} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TouristSpots;
