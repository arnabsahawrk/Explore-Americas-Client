import useData from "../../hooks/useData";
import Spinner from "../Spinner/Spinner";
import TouristSpotCard from "./TouristSpotCard";

const TouristSpots = () => {
  const { spots, isLoading } = useData();

  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6">
        <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          All Tourist Spots
        </h1>
        {/* All Card Loaded  */}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
