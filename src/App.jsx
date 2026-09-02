import { useState } from "react";
import { RouterProvider } from "react-router";
import route from "./router/routes";

function App() {
  return <RouterProvider router={route} />;
}

export default App;
