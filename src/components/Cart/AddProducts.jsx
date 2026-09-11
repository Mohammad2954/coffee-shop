import React from "react";

function AddProducts() {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-3 ">
        <div className=" flex items-center justify-center border text-white border-coffee-bg w-8 h-8 bg-coffee-bg rounded-lg cursor-pointer">
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
        <span>1</span>
        <div className="flex items-center justify-center border text-white border-coffee-bg w-8 h-8 bg-coffee-bg rounded-lg cursor-pointer">
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
