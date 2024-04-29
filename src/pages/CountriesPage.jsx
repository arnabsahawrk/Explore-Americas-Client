import { Helmet } from "react-helmet-async";
import TouristSpotsBanner from "../components/Banner/TouristSpotsBanner";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import useCountrySpots from "../hooks/useCountrySpots";
import TouristSpotCard from "../components/ToursistSpots/TouristSpotCard";

const CountriesPage = () => {
  const { country } = useParams();

  const { countrySpots, loading } = useCountrySpots(country);
  console.log(countrySpots);

  return (
    <>
      <Helmet>
        <title>{countrySpots?.countryName || "Tourist Spots"}</title>
      </Helmet>
      <section>
        <TouristSpotsBanner />
        <section className="bg-gray-200 dark:bg-gray-800 py-10 min-h-[30vh]">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6">
            <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              {country}
            </h1>
            {loading ? (
              <Spinner />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {countrySpots?.map((countrySpot) => (
                  <TouristSpotCard key={countrySpot?._id} spot={countrySpot} />
                ))}
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default CountriesPage;
