import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Search from "./pages/Search.tsx";
import Details from "./pages/Details.tsx";
import Error from "./err/Error.tsx";
import Timeout from "./err/Timeout.tsx";
import ErrorServer from "./err/ErrorServer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorServer />,

    children: [
      {
        path: "/errorserver",
        element: <ErrorServer />,
      },
      {
        path: "/timeout",
        element: <Timeout />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
