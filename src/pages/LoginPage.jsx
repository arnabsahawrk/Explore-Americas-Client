import { Helmet } from "react-helmet-async";
import LoginBanner from "../components/Banner/LoginBanner";
import LogIn from "../components/Authentication/LogIn";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <section>
        <LoginBanner />
        <LogIn />
      </section>
    </>
  );
};

export default LoginPage;
