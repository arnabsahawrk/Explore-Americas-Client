import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <main className="text-pretty">
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
