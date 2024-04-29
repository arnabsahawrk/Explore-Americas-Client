import { Helmet } from "react-helmet-async";
import AddedListBanner from "../components/Banner/AddedListBanner";
import AddedSpot from "../components/AddedSpot/AddedSpot";

const ListPage = () => {
  return (
    <>
      <Helmet>
        <title>Added Spot</title>
      </Helmet>
      <section>
        <AddedListBanner />
        <AddedSpot />
      </section>
    </>
  );
};

export default ListPage;
