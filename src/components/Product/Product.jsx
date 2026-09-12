import React, { useEffect, useState } from "react";
import AddProducts from "../Cart/AddProducts";
import { useLocation, useParams } from "react-router";
import { useGetProducts } from "../hooks/useGetProducts";
import { API_URL } from "../constants/api.js";

import "./active.css";
import clsx from "clsx";
import LoaderSpinner from "../LoaderSpiner/LoaderSpinner.jsx";

function Product() {
  const [count, setCount] = useState(1);
  const x = useParams();
  const { data: menu, isLoading, error } = useGetProducts({ url: API_URL });

  if (isLoading) return <LoaderSpinner />;
  if (error) return <div>خطا: {error.message}</div>;

  const { name, story, image, ingredients, size } = menu.categories
    .flatMap((e) => e.items)
    .filter((e) => e.name === x.elemnt)[0];
  const [sizePro, setSizePro] = useState("lg");
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(size[sizePro] * count);
  }, [sizePro, count]);

  return (
    <div className="max-w-content mx-auto px-8">
      <div className="grid grid-cols-12 gap-6 mt-20">
        <div className="w-full col-span-full sm:col-span-8 p-4 shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)]  rounded-lg ">
          <div className="flex  justify-between gap-4 flex-col lg:flex-row ">
            <div className=" relative">
              <img src={image} alt="" className=" rounded-lg" />
              <svg
                class="absolute top-1 right-1 w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                ></path>
              </svg>
            </div>
            <div>
              <div>
                <h3 className="text-xl font-bold text-coffee">{name}</h3>
                <p className="text-sm text-[#9b8164]">{story}</p>
              </div>
              <div className="mt-5">
                <h4 className="text-coffee text-xl mb-3">مواد تشکیل‌دهنده :</h4>
                <ul className="list-disc text-sm mr-4">
                  {ingredients.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-full sm:col-span-4 p-4 shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)]  rounded-lg h-fit">
          <div>
            <div>
              <span>سایز :</span>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <div
                  className={clsx(
                    "border border-box-border py-1 px-3 text-sm rounded-xl cursor-pointer hover:bg-coffee-bg hover:text-text-header transition duration-300 flex items-center justify-center ",
                    sizePro === "xl" && "active",
                  )}
                  onClick={() => {
                    setSizePro("xl");
                  }}
                >
                  بزرگ
                </div>
                <div
                  className={clsx(
                    "border border-box-border py-1 px-3 text-sm rounded-xl cursor-pointer hover:bg-coffee-bg hover:text-text-header transition duration-300 flex items-center justify-center ",
                    sizePro === "lg" && "active",
                  )}
                  onClick={() => {
                    setSizePro("lg");
                  }}
                >
                  متوسط
                </div>
                <div
                  className={clsx(
                    "border border-box-border py-1 px-3 text-sm rounded-xl cursor-pointer hover:bg-coffee-bg hover:text-text-header transition duration-300 flex items-center justify-center ",
                    sizePro === "sm" && "active",
                  )}
                  onClick={() => {
                    setSizePro("sm");
                  }}
                >
                  کوچک
                </div>
              </div>
            </div>
            <div className="mt-8 w-full border border-box-border rounded-lg flex items-center justify-between px-3">
              <span>قیمت :</span>
              <div className="flex items-center">
                <span>{totalPrice.toLocaleString()}</span>
                <p className="text-[10px] rotate-90 py-4">تومان</p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
              <AddProducts count={count} setCount={setCount} />
              <div className="cursor-pointer bg-coffee-bg text-sm text-text-header rounded-lg px-3 py-2">
                افزودن به سبد خرید
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
