import Category from "../components/Home/category/Category";
import Products from "../components/Home/Product/Products";
import MainBox from "../components/Home/MainBox/MainBox";
import PopProduct from "../components/Home/popProduct/PopProduct";
import Comment from "../components/Home/comment/Comment";

function Home() {
  return (
    <>
      <Category />
      <Products />
      <MainBox />
      <PopProduct />
      <Comment />
    </>
  );
}

export default Home;
