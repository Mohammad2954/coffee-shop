import { useEffect, useReducer, useState } from "react";
import { useCartStor } from "../../store/useCartStor";
import AddProducts from "./AddProducts";

function CartProduct({ name, image, price, sizePro, id, count }) {
  const deletItem = useCartStor((state) => state.deletItem);
  const reduser = (state, action) => {
    switch (action.type) {
      case "count":
        return {
          ...state,
          count: action.payload,
          totalPrice: action.payload * state.findPric,
        };

      default:
        return { ...state };
    }
  };
  const [proInfo, dispatch] = useReducer(reduser, {
    count: count,
    findPric: price / count,
    totalPrice: count * price,
  });

  return (
    <div className=" relative border border-coffee-bg  rounded-2xl mb-3 flex sm:items-center sm:justify-between flex-col sm:flex-row">
      <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
        <img
          src={image}
          alt=""
          className="sm:w-32 w-full h-[21rem] sm:h-[128px] rounded-t-2xl sm:rounded-l-none sm:rounded-r-2xl"
        />
        <h3 className=" text-coffee font-bold text-2xl">{name}</h3>
        <div className=" absolute top-2 right-4 bg-coffee-bg text-[10px] text-text-header rounded-full py-1 px-2">
          {sizePro === "xl" ? "بزرگ" : sizePro === "lg" ? "متوسط" : "کوچک"}
        </div>
      </div>
      <div className="flex items-center  relative sm:mb-0 mb-3 ">
        <div className="flex items-center gap-4 mr-8 ml-52">
          <AddProducts dataPro={proInfo} dispatch={dispatch} />
          <span className=" absolute left-16 flex gap-3 flex-row-reverse">
            <p className="text-sm">تومان</p>
            {proInfo.totalPrice.toLocaleString()}
          </span>
        </div>
      </div>
      <div
        onClick={() => {
          deletItem(id, sizePro);
        }}
        className=" absolute left-3 cursor-pointer bottom-4 sm:bottom-13"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-red-800 size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}

export default CartProduct;
