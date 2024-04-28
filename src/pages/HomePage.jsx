import { Helmet } from "react-helmet-async";
import HomeBanner from "../components/Banner/HomeBanner";
import TouristSpots from "../components/ToursistSpots/TouristSpots";
import AddYourBusiness from "../components/ExtraSection/AddYourBusiness";
import CountUpSection from "../components/ExtraSection/CountUpSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <HomeBanner />
        <TouristSpots />
        <CountUpSection />
        <AddYourBusiness />
      </section>
    </>
  );
};

export default HomePage;
