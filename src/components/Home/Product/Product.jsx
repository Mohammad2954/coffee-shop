import React from "react";

function Product({ name, description, price, image }) {
  return (
    <div className="bg-white shadow-[0_0_40px_-5px_rgba(0,0,0,0.25)] flex flex-col justify-between  border border-[#E2D9C8] rounded-lg p-4 ">
      <div>
        <div className=" relative">
          <img
            src={image}
            className="w-full  sm:h-[13rem] rounded-lg"
            alt=""
            onError={(e) => {
              e.target.src = "https://placehold.co/400x300?text=No+Image";
            }}
          />
          <svg
            className="absolute top-1 right-1 w-6 h-6 text-white"
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
        <div className="mt-4">
          <h3 className="font-bold text-xl text-coffee line-clamp-1">{name}</h3>
          <p className="text-[12px] mt-1 line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="font-bold">{price.toLocaleString()}</span>
        <button className="bg-coffee-bg  text-white text-[13px] py-1 px-4 rounded-sm">
          سفارش
        </button>
      </div>
    </div>
  );
}

export default Product;
