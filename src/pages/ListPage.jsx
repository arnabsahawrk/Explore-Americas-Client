import { Helmet } from "react-helmet-async";
import AddedListBanner from "../components/Banner/AddedListBanner";

const ListPage = () => {
  return (
    <>
      <Helmet>
        <title>Added List</title>
      </Helmet>
      <section>
        <AddedListBanner />
      </section>
    </>
  );
};

export default ListPage;
