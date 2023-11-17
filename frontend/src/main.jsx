import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import VegetableDetail from "./pages/OneVegetable";
import RecipePage from "./pages/RecipePage";
import NosPaniersPage from "./pages/NosPaniersPage";
import RecipeDetail from "./pages/OneRecipe";
import PanierDetailsPage from "./pages/PanierDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/vegetables/:id",
    element: <VegetableDetail />,
  },
  {
    path: "/recettes",
    element: <RecipePage />,
  },
  {
    path: "/nos-paniers",
    element: <NosPaniersPage />,
  },
  {
    path: "/recettes/:id",
    element: <RecipeDetail />,
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
