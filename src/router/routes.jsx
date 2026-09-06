import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import RootLayout from "../components/RootLayout/RootLayout";
import Category from "../pages/Category";
import Login from "../pages/Login";
const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category", element: <Category /> },
      { path: "login", element: <Login /> },
      {
        path: "/*",
        element: <Page404 />,
        handle: { Footer: true },
      },
    ],
  },
]);
export default route;
