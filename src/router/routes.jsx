import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";

const route = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/*", element: <Page404 /> },
]);
export default route;
