import Sidebar from "../components/Category/Sidebar";
import Sorted from "../components/Category/Sorted";
import Product from "../components/Home/Product/Product";
import Paigination from "../components/Paigination/Paigination";
import { useGetProducts } from "../components/hooks/useGetProducts.jsx";
import { API_URL } from "../components/constants/api.js";
import LoaderSpinner from "../components/LoaderSpiner/LoaderSpinner.jsx";
import { useNavigate, useParams } from "react-router";
import TopPageContent from "../components/TopPageContent/TopPageContent.jsx";
import { useEffect, useReducer, useState } from "react";
import { useStoreLove } from "../store/useStoreLove.js";

function Category() {
  const { data: menu, isLoading, error } = useGetProducts({ url: API_URL });
  const x = useParams();
  const [result, setResult] = useState([]);
  const [findProduct, setFindProduct] = useState("");
  const [typeShow, setTypeShow] = useState("col");
  const AllData = useStoreLove((state) => state.AllData);

  useEffect(() => {
    checkLove(result);
  }, [AllData]);

  const findFerstfunc = () => {
    let findFerst = menu.categories.filter((e) => {
      if (e.name === x.elemnt) {
        return { ...e };
      }
    })[0].items;

    checkLove(findFerst);
  };
  const findProductFunc = () => {
    if (findProduct.length > 0) {
      const product = menu.categories
        .flatMap((e) => e.items)
        .filter((e) => {
          if (e.name.includes(findProduct.trim())) {
            return e;
          }
        });
      checkLove(product);
    } else {
      findFerstfunc();
    }
  };

  const checkLove = (produc) => {
    const newResult = produc.map((product) => {
      const lovedProduct = AllData.find((love) => love.id === product.id);

      if (lovedProduct) {
        return { ...product, ...lovedProduct };
      }

      return product;
    });

    setResult(newResult);
  };
  const getPopularityScore = (product) => {
    if (product.is_popular === true) return 2;
    if (product.is_popular === false) return 1;
    return 0;
  };
  const reducer = (sortedpro, action) => {
    switch (action.type) {
      case "pop":
        result.sort((a, b) => getPopularityScore(b) - getPopularityScore(a));
        return { ...sortedpro, sort: action.type, value: action.payload };

      case "cheep":
        result.sort((a, b) => a.price - b.price);

        return { ...sortedpro, sort: action.type, value: action.payload };

      case "expensive":
        result.sort((a, b) => b.price - a.price);
        return { ...sortedpro, sort: action.type, value: action.payload };

      default:
        findFerstfunc();
        return {
          ...sortedpro,
          value: "مرتب سازی بر اساس جدید ترین",
          sort: "new",
        };
    }
  };
  const [sortedpro, dispatch] = useReducer(reducer, {
    sort: "new",
    value: "مرتب سازی بر اساس جدید ترین",
  });
  if (isLoading) return <LoaderSpinner />;
  if (error) return <div>خطا: {error.message}</div>;
  useEffect(() => {
    if (menu) {
      findFerstfunc();
    }
  }, []);
  return (
    <div className=" mx-auto mt-20 px-8">
      <TopPageContent message={"دسته بندی"} />
      <div className=" bg-[#FFE5BE]    px-8  rounded-lg flex items-center justify-between py-4">
        <div className="flex gap-4 justify-between ga-4 w-full sm:flex-row flex-col">
          <div className="flex items-center gap-3 h-8">
            <div className="flex items-center gap-2 ">
              <div
                className={`cursor-pointer rounded-sm  ${typeShow === "col" && "bg-coffee-bg text-text-header"}`}
                onClick={() => {
                  setTypeShow("col");
                }}
              >
                <svg
                  className=" border border-coffee-bg p-1 rounded-sm h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h4v4H3zm7 0h4v4h-4z"></path>
                  <path d="M10 3h4v4h-4zm7 0h4v4h-4zM3 17h4v4H3zm7 0h4v4h-4z"></path>
                  <path d="M10 17h4v4h-4zm7 0h4v4h-4zM3 10h4v4H3zm7 0h4v4h-4z"></path>
                  <path d="M10 10h4v4h-4zm7 0h4v4h-4z"></path>
                </svg>
              </div>
              <div
                className={`cursor-pointer rounded-sm  ${typeShow === "row" && "bg-coffee-bg text-text-header"}`}
                onClick={() => {
                  setTypeShow("row");
                }}
              >
                <svg
                  className=" border border-coffee-bg p-0.5 rounded-sm h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 11h16v2H4zm0-5h16v2H4zm0 10h16v2H4z"></path>
                </svg>
              </div>
            </div>
            <div className="  relative w-52 h-8">
              <input
                value={findProduct}
                onChange={(event) => {
                  setFindProduct(event.target.value);
                }}
                type="text"
                placeholder="محصول مورد نظر ..."
                className=" pr-2 absolute left-0 right-0 h-8 text-sm outline-0 border-2 border-coffee-bg rounded-sm"
              />
              <div
                className="cursor-pointer"
                onClick={() => {
                  findProductFunc();
                }}
              >
                <svg
                  className=" absolute left-2 top-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6"></path>
                </svg>
              </div>
            </div>
          </div>

          <Sorted sortedpro={sortedpro} dispatch={dispatch} />
        </div>
      </div>
      <div className="grid sm:grid-cols-4">
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        <div
          className={`"col-span-4 sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 z-5" `}
        >
          {result.map((event) => (
            <Product
              {...event}
              key={event.id}
              border={true}
              hide={false}
              typeShow={typeShow}
            />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Paigination />
      </div>
    </div>
  );
}

export default Category;
