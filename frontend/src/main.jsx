import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import VegetableDetail from "./pages/OneVegetable";
import RecettePage from "./pages/RecettePage";

import App from "./App";

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
    path: "/api/recette",
    element: <RecettePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
