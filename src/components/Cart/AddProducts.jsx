import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCartStor } from "../../store/useCartStor";

function AddProducts({ dataPro, dispatch, id, sizePro }) {
  const increaseDate = useCartStor((state) => state.increaseDate);
  const decriseData = useCartStor((state) => state.decriseData);
  const coutElem = useCartStor((state) => state.coutElem);
  // console.log(coutElem(id, sizePro));

  const increas = () => {
    if (dataPro.count < 10) {
      dispatch({ type: "count", payload: dataPro.count + 1 });
    } else {
      toast.error("بیشتر از حد مجاز");
    }
  };
  const decrise = () => {
    if (dataPro.count > 1) {
      dispatch({ type: "count", payload: dataPro.count - 1 });
    } else {
      toast.error("کمتر از حد مجاز");
    }
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-3 ">
        <div
          onClick={() => {
            if (id) {
              increaseDate(id, sizePro);
            } else {
              increas();
            }
          }}
          className=" flex items-center justify-center border text-white border-coffee-bg w-8 h-8 bg-coffee-bg rounded-lg cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <span>{id ? coutElem(id, sizePro) : dataPro?.count}</span>
        <div
          onClick={() => {
            if (id) {
              decriseData(id, sizePro);
            } else {
              decrise();
            }
          }}
          className="flex items-center justify-center border text-white border-coffee-bg w-8 h-8 bg-coffee-bg rounded-lg cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
