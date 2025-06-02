import Layout from "@components/layout";
import Form from "@components/pages/form";
import List from "@components/pages/list";
import ViewItem from "@components/pages/ViewItem";
import { createBrowserRouter } from "react-router-dom";

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
