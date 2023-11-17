import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import VegetableDetail from "./pages/OneVegetable";

import App from "./App";
import NosPaniersPage from "./pages/NosPaniersPage";
import PanierDetailsPage from "./pages/PanierDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/vegetables`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/vegetables/:id",
    element: <VegetableDetail />,
  },
  {
    path: "/nos-paniers",
    element: <NosPaniersPage />,
  },
  {
    path: "/nos-paniers/:type",
    element: <PanierDetailsPage />,
    loader: async ({ params }) => {
      const paniers = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/basket/${params.type}`)
        .then((res) => res.data)
        .catch((err) => {
          console.error(err);
        });

      return { paniers, ...params };
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
