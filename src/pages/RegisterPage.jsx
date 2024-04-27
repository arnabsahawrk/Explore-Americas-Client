import { Helmet } from "react-helmet-async";
import RegisterBanner from "../components/Banner/RegisterBanner";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section>
        <RegisterBanner />
      </section>
    </>
  );
};

export default RegisterPage;
