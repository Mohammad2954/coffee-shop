import React, { useState } from "react";
import Product from "../components/Product/Product";
import BreadCramb from "../components/BreadCramb/BreadCramb";
import { useLocation, useMatch, useMatches, useParams } from "react-router";
import { useGetProducts } from "../components/hooks/useGetProducts.jsx";
import { API_URL } from "../components/constants/api.js";
import LoaderSpinner from "../components/LoaderSpiner/LoaderSpinner.jsx";
import TopPageContent from "../components/TopPageContent/TopPageContent.jsx";
function ProductPage() {
  const { data: menu, isLoading, error } = useGetProducts({ url: API_URL });

  if (isLoading) return <LoaderSpinner />;
  if (error) return <div>خطا: {error.message}</div>;
  const [name, setName] = useState();
  return (
    <div>
      <div className="max-w-content mx-auto px-8 mt-8">
        <TopPageContent message={name} />
      </div>
      <Product menu={menu} setName={setName} />
    </div>
  );
}

export default ProductPage;
