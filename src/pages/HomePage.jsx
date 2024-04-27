import { Helmet } from "react-helmet-async";
import HomeBanner from "../components/Banner/HomeBanner";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <HomeBanner />
      </section>
    </>
  );
};

export default HomePage;
