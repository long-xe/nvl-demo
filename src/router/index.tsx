import { createBrowserRouter } from "react-router-dom";
import Page1 from "../pages/page1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
]);
