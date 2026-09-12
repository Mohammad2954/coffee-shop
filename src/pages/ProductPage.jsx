import React from "react";
import Product from "../components/Product/Product";
import BreadCramb from "../components/BreadCramb/BreadCramb";

function ProductPage() {
  return (
    <div>
      <div className="max-w-content mx-auto px-8 mt-8">
        <BreadCramb />
      </div>
      <Product />
    </div>
  );
}

export default ProductPage;
