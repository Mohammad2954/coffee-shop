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
  console.log(menu);
  console.log(isLoading);
  console.log(error);

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
