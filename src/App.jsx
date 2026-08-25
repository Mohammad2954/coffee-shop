import { useState } from "react";
import Header from "./components/Headre/Header";
import Category from "./components/category/Category";
import Products from "./components/Product/Products";
import MainBox from "./components/MainBox/MainBox";

function App() {
  return (
    <>
      <Header />
      <Category />
      <Products />
      <MainBox />
    </>
  );
}

export default App;
