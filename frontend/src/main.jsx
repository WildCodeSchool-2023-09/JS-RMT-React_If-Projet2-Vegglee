import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import VegetableDetail from "./pages/OneVegetable";
import RecipePage from "./pages/RecipePage";
import App from "./App";
import NosPaniersPage from "./pages/NosPaniersPage";
import RecipeDetail from "./pages/OneRecipe";

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
    path: "/api/recettes",
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
