import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import NosPaniersPage from "./pages/NosPaniersPage";

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
