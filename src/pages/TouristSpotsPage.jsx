import { Helmet } from "react-helmet-async";
import TouristSpotsBanner from "../components/Banner/TouristSpotsBanner";
import TouristSpots from "../components/ToursistSpots/TouristSpots";

const TouristSpotsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tourist Spots</title>
      </Helmet>
      <section>
        <TouristSpotsBanner />
        <TouristSpots />
      </section>
    </>
  );
};

export default TouristSpotsPage;
