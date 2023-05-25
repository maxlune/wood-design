import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import MaterialDetails from "../views/Material";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/material/:id",
    element: <MaterialDetails />,
  },
]);
