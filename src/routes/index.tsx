import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("@components/layout"));
const List = lazy(() => import("@components/pages/list"));
const Form = lazy(() => import("@components/pages/list"));
const ViewItem = lazy(() => import("@components/pages/list"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <List />,
        children: [
          { path: "/create-item", element: <Form /> },
          {
            path: "/:itemId",
            element: <ViewItem />,
          },
        ],
      },
    ],
  },
]);
