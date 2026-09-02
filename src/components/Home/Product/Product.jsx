import React from "react";

function Product({ name, description, price, image, border }) {
  return (
    <div
      className={`  ${border ? "border border-box-border bg-box-bg" : "bg-white"} rounded-2xl relative  mt-6 sm:mt-12 sm:block flex justify-between items-center`}
    >
      <img
        src={image}
        alt=""
        className="sm:w-full w-1/2 rounded-r-2xl sm:rounded-t-2xl sm:rounded-b-none"
      />
      <div className="w-1/2 px-4 flex items-center sm:w-full sm:jutify-centesr flex-col gap-2 mt-3 mb-8 ">
        <span className=" text-text-box font-bold text-xl">{name}</span>
        <span className="text-text-box-black text-sm text-center truncate w-full">
          {description}
        </span>
        <span className="text-text-box font-bold text-lg">
          {price.toLocaleString()} تومان
        </span>
      </div>
      <button className=" bg-box-btn rounded-full px-6 py-2 text-coffe absolute bottom-[-20px] left-1/6 sm:left-0 sm:right-0 w-24 mx-auto">
        سفارش
      </button>
    </div>
  );
}

export default Product;
