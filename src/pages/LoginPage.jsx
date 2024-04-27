import { Helmet } from "react-helmet-async";
import LoginBanner from "../components/Banner/LoginBanner";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <section>
        <LoginBanner />
      </section>
    </>
  );
};

export default LoginPage;
