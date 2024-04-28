import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import Spinner from "../Spinner/Spinner";
import TouristSpotCard from "./TouristSpotCard";

const TouristSpotsHome = () => {
  const { spots, isLoading } = useData();

  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6">
        <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Tourist Spots
        </h1>
        {/* All Card Loaded  */}
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {spots?.slice(0, 6).map((spot) => (
                <TouristSpotCard key={spot?._id} spot={spot} />
              ))}
            </div>
            <div className="text-center mt-5 md:mt-6">
              <Link to={`/touristSpots`}>
                <button className="px-4 py-2 font-semibold text-base bg-[#F91842] text-gray-200">
                  All Tourist Spots
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TouristSpotsHome;
