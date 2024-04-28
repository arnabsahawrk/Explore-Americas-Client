import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TouristSpotsPage from "../pages/TouristSpotsPage";
import AddSpotPage from "../pages/AddSpotPage";
import ListPage from "../pages/ListPage";
import TouristSpotDetailsPage from "../pages/TouristSpotDetailsPage";

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
        path: "/addedSpot",
        element: <ListPage />,
      },
      {
        path: "/touristSpots/:id",
        element: <TouristSpotDetailsPage />,
      },
    ],
  },
]);

export default router;
