import CategoryProduct from "../components/Home/CategoryProduct/CategoryProduct";
import Products from "../components/Home/Product/Products";
import MainBox from "../components/Home/MainBox/MainBox";
import PopProduct from "../components/Home/popProduct/PopProduct";
import Comment from "../components/Home/comment/Comment";
import Mainheader from "../components/Headre/Mainheader";
import { useGetProducts } from "../components/hooks/useGetProducts";
import { API_URL } from "../components/constants/api.js";
import LoaderSpinner from "../components/LoaderSpiner/LoaderSpinner.jsx";

import { useStoreLove } from "../store/useStoreLove.js";
import { useEffect } from "react";

function Home() {
  const addal = useStoreLove((state) => state.addal);
  const AllData = useStoreLove((state) => state.AllData);

  const { data: menu, isLoading, error } = useGetProducts({ url: API_URL });

  useEffect(() => {
    if (menu && AllData.length === 0) {
      addal(menu.categories.flatMap((e) => e.items));
    }
  }, [menu]);

  if (isLoading) return <LoaderSpinner />;
  if (error) return <div>خطا: {error.message}</div>;

  const sell = menu.categories
    .flatMap((e) => e.items)
    .filter((e) => e.is_best_seller === true);
  const popProducts = AllData.filter((e) => e.is_popular === true);

  return (
    <>
      <Mainheader />
      <CategoryProduct />
      <Products />
      <MainBox />
      <PopProduct />
      <Comment />
    </>
  );
}

export default Home;
