import { Helmet } from "react-helmet-async";
import HomeBanner from "../components/Banner/HomeBanner";
import AddYourBusiness from "../components/ExtraSection/AddYourBusiness";
import CountUpSection from "../components/ExtraSection/CountUpSection";
import TouristSpotsHome from "../components/ToursistSpots/TouristSpotsHome";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <HomeBanner />
        <TouristSpotsHome />
        <CountUpSection />
        <AddYourBusiness />
      </section>
    </>
  );
};

export default HomePage;
