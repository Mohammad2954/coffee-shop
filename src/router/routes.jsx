import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";

const route = createBrowserRouter([{ path: "/home", element: <Home /> }]);
export default route;
