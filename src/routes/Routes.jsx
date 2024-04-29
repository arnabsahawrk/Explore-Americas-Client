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
import CountriesPage from "../pages/CountriesPage";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddSpotPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/addedSpot",
        element: (
          <PrivateRoute>
            <ListPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSpots/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSpots/tourist-spots/countries/:country",
        element: <CountriesPage />,
      },
    ],
  },
]);

export default router;
