import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import RootLayout from "../components/RootLayout/RootLayout";
import Category from "../pages/Category";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import Blog from "../pages/Blog";
import About from "../pages/About";
import ProductPage from "../pages/ProductPage";
import Populer from "../pages/Populer";
const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, handle: { crumb: "خانه" } },
      {
        path: "category/:category-name?",
        element: <Category />,
        handle: { crumb: "دسته بندی" },
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "cart", element: <Cart />, handle: { crumb: "سبد خرید" } },
      {
        path: "contact-us",
        element: <ContactUs />,
        handle: { crumb: "ارتباط با ما" },
      },
      { path: "blog", element: <Blog />, handle: { crumb: "وبلاگ" } },
      { path: "about", element: <About />, handle: { crumb: "درباره ما" } },
      {
        path: "product/:elemnt",
        element: <ProductPage />,
        handle: { crumb: "محصولات" },
      },
      {
        path: "populer",
        element: <Populer />,
        handle: { crumb: "مورد علاقه ها" },
      },
      {
        path: "/*",
        element: <Page404 />,
        handle: { Footer: true },
      },
    ],
  },
]);
export default route;
