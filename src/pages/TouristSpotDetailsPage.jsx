import { Helmet } from "react-helmet-async";
import TouristSpotsBanner from "../components/Banner/TouristSpotsBanner";
import { useParams } from "react-router-dom";
import useSpotDetails from "../hooks/useSpotDetails";
import SpotDetailsCard from "../components/ToursistSpots/SpotDetailsCard";
import Spinner from "../components/Spinner/Spinner";

const TouristSpotDetailsPage = () => {
  const { id } = useParams();
  const { spot, loading } = useSpotDetails(id);

  return (
    <>
      <Helmet>
        <title>{spot?.spotName || "Details"}</title>
      </Helmet>
      <section>
        <TouristSpotsBanner />
        <section className="bg-gray-200 dark:bg-gray-800 py-10 min-h-[30vh]">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6">
            {loading ? <Spinner /> : <SpotDetailsCard spot={spot} />}
          </div>
        </section>
      </section>
    </>
  );
};

export default TouristSpotDetailsPage;
