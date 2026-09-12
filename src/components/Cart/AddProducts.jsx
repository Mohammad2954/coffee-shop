import React, { useState } from "react";

function AddProducts() {
  const [count, setCount] = useState(1);
  const increas = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrise = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-3 ">
        <div
          onClick={() => {
            increas();
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
        <span>{count}</span>
        <div
          onClick={() => {
            decrise();
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
