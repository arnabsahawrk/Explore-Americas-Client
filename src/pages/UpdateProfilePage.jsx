import { Helmet } from "react-helmet-async";
import UserDetails from "../components/User/UserDetails";
import EditProfile from "../components/Authentication/EditProfile";
import UpdateUserBanner from "../components/Banner/UpdateUserBanner";

const UpdateProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Edit Profile</title>
      </Helmet>
      <section>
        <UpdateUserBanner />
        <section className="bg-gray-200 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10 flex flex-col lg:flex-row justify-evenly items-center gap-4 min-h-[80vh]">
            <UserDetails />
            <EditProfile />
          </div>
        </section>
      </section>
    </>
  );
};

export default UpdateProfilePage;
