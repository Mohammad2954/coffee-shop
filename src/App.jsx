import { useState } from "react";
import Header from "./components/Headre/Header";
import Category from "./components/category/Category";
import Products from "./components/Product/Products";
import MainBox from "./components/MainBox/MainBox";
import PopProduct from "./components/popProduct/PopProduct";

function App() {
  return (
    <>
      <Header />
      <Category />
      <Products />
      <MainBox />
      <PopProduct />
    </>
  );
}

export default App;
