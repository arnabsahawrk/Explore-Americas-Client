import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TouristSpotsPage from "../pages/TouristSpotsPage";
import AddSpotPage from "../pages/AddSpotPage";
import ListPage from "../pages/ListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/touristSpots",
        element: <TouristSpotsPage />,
      },
      {
        path: "/addSpot",
        element: <AddSpotPage />,
      },
      {
        path: "/addedList",
        element: <ListPage />,
      },
    ],
  },
]);

export default router;
