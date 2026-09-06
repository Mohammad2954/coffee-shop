import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import RootLayout from "../components/RootLayout/RootLayout";
import Category from "../pages/Category";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category", element: <Category /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      {
        path: "/*",
        element: <Page404 />,
        handle: { Footer: true },
      },
    ],
  },
]);
export default route;
