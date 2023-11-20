import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Layout from "./Layout";
import VegetableDetail from "./pages/OneVegetable";
import RecipePage from "./pages/RecipePage";
import NosPaniersPage from "./pages/NosPaniersPage";
import PanierDetailsPage from "./pages/PanierDetailsPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "vegetables/:id", element: <VegetableDetail /> },
      { path: "recettes", element: <RecipePage /> },
      { path: "nos-paniers", element: <NosPaniersPage /> },
      {
        path: "nos-paniers/:type",
        element: <PanierDetailsPage />,
        loader: async ({ params }) => {
          const paniers = await axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/api/basket/${params.type}`
            )
            .then((res) => res.data)
            .catch((err) => {
              console.error(err);
            });
          return { paniers, ...params };
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
