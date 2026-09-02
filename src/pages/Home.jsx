import Header from "../components/Headre/Header";
import Category from "../components/category/Category";
import Products from "../components/Product/Products";
import MainBox from "../components/MainBox/MainBox";
import PopProduct from "../components/popProduct/PopProduct";
import Comment from "../components/comment/Comment";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <Category />
      <Products />
      <MainBox />
      <PopProduct />
      <Comment />
      <Footer />
    </>
  );
}

export default Home;
