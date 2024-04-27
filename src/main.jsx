import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AllProvider from "./provider/AllProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AllProvider>
        <RouterProvider router={router} />
      </AllProvider>
    </HelmetProvider>
  </React.StrictMode>
);
