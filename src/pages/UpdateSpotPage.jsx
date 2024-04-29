import { Helmet } from "react-helmet-async";
import AddedListBanner from "../components/Banner/AddedListBanner";
import useAuth from "../hooks/useAuth";
import UpdateSpot from "../components/UpdateSpot/UpdateSpot";

const UpdateSpotPage = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>{user?.displayName || "Update"}</title>
      </Helmet>
      <section>
        <AddedListBanner />
        <UpdateSpot />
      </section>
    </>
  );
};

export default UpdateSpotPage;
