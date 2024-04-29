import useData from "../../hooks/useData";
import Spinner from "../Spinner/Spinner";
import CountryCard from "./CountryCard";

const Countries = () => {
  const { countries, loading } = useData();

  return (
    <section className="bg-gray-200 dark:bg-gray-800 pb-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6">
        <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Countries
        </h1>
        {/* All Card Loaded  */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries?.map((country) => (
              <CountryCard key={country?._id} country={country} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Countries;
