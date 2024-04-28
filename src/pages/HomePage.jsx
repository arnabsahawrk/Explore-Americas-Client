import { Helmet } from "react-helmet-async";
import HomeBanner from "../components/Banner/HomeBanner";
import TouristSpots from "../components/ToursistSpots/TouristSpots";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <HomeBanner />
        <TouristSpots />
      </section>
    </>
  );
};

export default HomePage;
