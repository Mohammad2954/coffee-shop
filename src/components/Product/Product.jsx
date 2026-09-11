import React from "react";
import AddProducts from "../Cart/AddProducts";
import { useLocation, useParams } from "react-router";
import { useGetProducts } from "../hooks/useGetProducts";
import { API_URL } from "../constants/api.js";

function Product() {
  const x = useParams();
  const { data: menu, isLoading, error } = useGetProducts({ url: API_URL });

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error.message}</div>;
  const { name, story, image, ingredients, size } = menu.categories
    .flatMap((e) => e.items)
    .filter((e) => e.name === x.elemnt)[0];

  return (
    <div className="max-w-content mx-auto px-8">
      <div className="grid grid-cols-12 gap-6 mt-20">
        <div className="w-full col-span-full sm:col-span-8 p-4 shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)]  rounded-lg ">
          <div className="flex  justify-between gap-4 flex-col lg:flex-row ">
            <div>
              <img src={image} alt="" className=" rounded-lg" />
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
                <div className="border border-box-border py-1 px-3 text-sm rounded-xl cursor-pointer hover:bg-coffee-bg hover:text-text-header transition duration-300 flex items-center justify-center ">
                  بزرگ
                </div>
                <div className="border border-box-border py-1 px-3 text-sm rounded-xl cursor-pointer hover:bg-coffee-bg hover:text-text-header transition duration-300 flex items-center justify-center">
                  متوسط
                </div>
                <div className="border border-box-border py-1 px-3 text-sm rounded-xl cursor-pointer hover:bg-coffee-bg hover:text-text-header transition duration-300 flex items-center justify-center">
                  کوچک
                </div>
              </div>
            </div>
            <div className="mt-8 w-full border border-box-border rounded-lg flex items-center justify-between px-3">
              <span>قیمت :</span>
              <div className="flex items-center">
                <span>{size.lg.toLocaleString()}</span>
                <p className="text-[10px] rotate-90 py-4">تومان</p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
              <AddProducts />
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
