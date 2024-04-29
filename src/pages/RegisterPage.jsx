import { Helmet } from "react-helmet-async";
import RegisterBanner from "../components/Banner/RegisterBanner";
import Register from "../components/Authentication/Register";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section>
        <RegisterBanner />
        <Register />
      </section>
    </>
  );
};

export default RegisterPage;
