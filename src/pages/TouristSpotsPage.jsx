import { Helmet } from "react-helmet-async";
import TouristSpotsBanner from "../components/Banner/TouristSpotsBanner";

const TouristSpotsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tourist Spots</title>
      </Helmet>
      <section>
        <TouristSpotsBanner />
      </section>
    </>
  );
};

export default TouristSpotsPage;
