import React, { useEffect, useReducer, useState } from "react";
import AddProducts from "../Cart/AddProducts";
import { useParams } from "react-router";
import "./active.css";
import clsx from "clsx";
import { useCartStor } from "../../store/useCartStor";
import { useStoreLove } from "../../store/useStoreLove";

function Product({ item }) {
  const [love, setlove] = useState(false);
  const { id, name, story, image, ingredients, size, description } = item;
  const AllData = useStoreLove((state) => state.AllData);
  const addLoveItem = useStoreLove((state) => state.addLoveItem);
  AllData.find((e) => {
    if (e.love === true && e.id === id && love === false) {
      setlove(true);
    }
  });

  const reduser = (dataPro, action) => {
    switch (action.type) {
      case "SizePro":
        return {
          ...dataPro,
          sizePro: action.payload,
          totalPrice: dataPro.count * size[action.payload],
        };
      case "count":
        return {
          ...dataPro,
          count: action.payload,
          totalPrice: action.payload * size[dataPro.sizePro],
        };
      default:
        return {
          ...dataPro,
        };
    }
  };
  const [dataPro, dispatch] = useReducer(reduser, {
    count: 1,
    sizePro: "lg",
    totalPrice: 1 * size["lg"],
  });
  const addCartStor = useCartStor((state) => state.addCart);

  const delCart = useCartStor((state) => state.delCart);
  const handleaddCart = () => {
    const pro = {
      id,
      name,
      story,
      image,
      count: dataPro ? dataPro.count : 1,
      sizePro: dataPro ? dataPro.sizePro : "lg",
      price: dataPro ? dataPro.totalPrice : 1 * size["lg"],
      description,
      formol: size[dataPro.sizePro],
    };
    addCartStor(pro);
  };

  return (
    <div className="max-w-content mx-auto px-8">
      <div className="grid grid-cols-12 gap-6 mt-20">
        <div className="w-full col-span-full sm:col-span-8 p-4 shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)]  rounded-lg ">
          <div className="flex  justify-between gap-4 flex-col lg:flex-row ">
            <div className=" relative">
              <img src={image} alt="" className=" w-full rounded-lg" />

              <svg
                onClick={() => {
                  addLoveItem(id);
                  setlove(!love);
                }}
                className={clsx(
                  "absolute top-1 right-1 w-6 h-6   cursor-pointer ",
                  love ? "text-red-500 fill-red-500" : "fill-none text-white",
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
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

                    dataPro.sizePro === "xl" && "active",
                  )}
                  onClick={() => {
                    dispatch({ type: "SizePro", payload: "xl" });
                  }}
                >
                  بزرگ
                </div>
                <div
                  className={clsx(
                    "border border-box-border py-1 px-3 text-sm rounded-xl cursor-pointer hover:bg-coffee-bg hover:text-text-header transition duration-300 flex items-center justify-center ",
                    dataPro.sizePro === "lg" && "active",
                  )}
                  onClick={() => {
                    dispatch({ type: "SizePro", payload: "lg" });
                  }}
                >
                  متوسط
                </div>
                <div
                  className={clsx(
                    "border border-box-border py-1 px-3 text-sm rounded-xl cursor-pointer hover:bg-coffee-bg hover:text-text-header transition duration-300 flex items-center justify-center ",
                    dataPro.sizePro === "sm" && "active",
                  )}
                  onClick={() => {
                    dispatch({ type: "SizePro", payload: "sm" });
                  }}
                >
                  کوچک
                </div>
              </div>
            </div>
            <div className="mt-8 w-full border border-box-border rounded-lg flex items-center justify-between px-3">
              <span>قیمت :</span>
              <div className="flex items-center">
                <span>{dataPro.totalPrice.toLocaleString()}</span>
                <p className="text-[10px] rotate-90 py-4">تومان</p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
              <AddProducts dataPro={dataPro} dispatch={dispatch} />
              <div
                onClick={() => {
                  handleaddCart();
                }}
                className="cursor-pointer bg-coffee-bg text-sm text-text-header rounded-lg px-3 py-2"
              >
                افزودن به سبد خرید
              </div>
              <button
                onClick={() => {
                  delCart();
                }}
              >
                delet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
