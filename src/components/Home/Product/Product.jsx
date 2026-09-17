import React from "react";
import { useNavigate } from "react-router";

import { useStoreLove } from "../../../store/useStoreLove";
import clsx from "clsx";

function Product({
  name,
  description,
  price,
  image,
  id,
  love,
  hide,
  typeShow,
}) {
  const x = useNavigate();
  const addLoveItem = useStoreLove((state) => state.addLoveItem);

  return (
    <div
      className={`" relative bg-white ${typeShow === "row" ? "h-[12rem]" : "h-[365px]"} flex flex-col justify-between  border border-[#E2D9C8] rounded-lg p-4 transition duration-300 sm:hover:border-none sm:hover:bg-[#603709a0]  z-50" ${typeShow === "row" && "col-span-full flex-row "}`}
    >
      <div className={typeShow === "row" && "flex gap-4"}>
        <div
          className={` relative ${typeShow === "row" ? "h-[10rem] w-[10rem]" : "h-[13rem]"}`}
        >
          <img
            src={image}
            className={`${typeShow === "row" ? "h-[10rem] w-[10rem]" : "h-[13rem]"} w-full rounded-lg cursor-pointer`}
            alt=""
            onClick={() => {
              x(`/product/${name}`);
            }}
            onError={(e) => {
              e.target.src = "https://placehold.co/400x300?text=No+Image";
            }}
          />
          {hide ? null : (
            <svg
              onClick={() => addLoveItem(id)}
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
          )}
        </div>
        <div className="mt-4">
          <h3
            className="font-bold text-xl text-coffee line-clamp-1 cursor-pointer"
            onClick={() => {
              x(`/product/${name}`);
            }}
          >
            {name}
          </h3>
          <p className="text-[12px] mt-1 line-clamp-2">{description}</p>
          {typeShow === "row" ? (
            <div class="flex items-center justify-between absolute left-4 bottom-4 gap-4">
              <span class="font-bold">45,000</span>
              <button class="bg-coffee-bg  text-white text-[13px] py-1 px-4 rounded-sm cursor-pointer">
                سفارش
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {typeShow === "row" ? null : (
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold">{price.toLocaleString()}</span>
          <button
            className="bg-coffee-bg  text-white text-[13px] py-1 px-4 rounded-sm cursor-pointer"
            onClick={() => {
              console.log(name);
              x(`/product/${name}`);
            }}
          >
            سفارش
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
