import { Helmet } from "react-helmet-async";
import AddSpotBanner from "../components/Banner/AddSpotBanner";
import AddSpot from "../components/AddSpot/AddSpot";

const AddSpotPage = () => {
  return (
    <>
      <Helmet>
        <title>Add Spot</title>
      </Helmet>
      <section>
        <AddSpotBanner />
        <AddSpot />
      </section>
    </>
  );
};

export default AddSpotPage;
