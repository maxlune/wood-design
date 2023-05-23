import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Material from "../views/Material";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/material",
    element: <Material />,
  },
]);
