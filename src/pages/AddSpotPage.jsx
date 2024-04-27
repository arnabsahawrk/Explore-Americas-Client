import { Helmet } from "react-helmet-async";
import AddSpotBanner from "../components/Banner/AddSpotBanner";

const AddSpotPage = () => {
  return (
    <>
      <Helmet>
        <title>Add Spot</title>
      </Helmet>
      <section>
        <AddSpotBanner />
      </section>
    </>
  );
};

export default AddSpotPage;
