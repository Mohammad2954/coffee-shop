import CategoryProduct from "../components/Home/CategoryProduct/CategoryProduct";
import Products from "../components/Home/Product/Products";
import MainBox from "../components/Home/MainBox/MainBox";
import PopProduct from "../components/Home/popProduct/PopProduct";
import Comment from "../components/Home/comment/Comment";
import Mainheader from "../components/Headre/Mainheader";
import { useGetProducts } from "../components/hooks/useGetProducts";
import { API_URL } from "../components/constants/api.js";

function Home() {
  const { data: menu, isLoading, error } = useGetProducts({ url: API_URL });

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error.message}</div>;

  const sell = menu.categories
    .flatMap((e) => e.items)
    .filter((e) => e.is_best_seller === true);
  const popProducts = menu.categories
    .flatMap((e) => e.items)
    .filter((e) => e.is_popular === true);
  return (
    <>
      <Mainheader />
      <CategoryProduct />
      <Products sell={sell} />
      <MainBox />
      <PopProduct popProducts={popProducts} />
      <Comment />
    </>
  );
}

export default Home;
