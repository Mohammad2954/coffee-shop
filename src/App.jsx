import { useState } from "react";
import Header from "./components/Headre/Header";
import Category from "./components/category/Category";
import Products from "./components/Product/Products";

function App() {
  return (
    <>
      <Header />
      <Category />
      <Products />
    </>
  );
}

export default App;
