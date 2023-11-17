import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import VegetableDetail from "./pages/OneVegetable";
import RecipePage from "./pages/RecipePage";
import NosPaniersPage from "./pages/NosPaniersPage";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
