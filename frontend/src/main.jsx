import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";

import App from "./App";
import NosPaniersPage from "./pages/NosPaniersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return axios
        .get("http://localhost:3310/api/vegetables")
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
    <RouterProvider router={router}>
      <Routes>
        <Route path="/nos-paniers" element={<NosPaniersPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </RouterProvider>
  </React.StrictMode>
);
