import AddProducts from "./AddProducts";

function CartProduct() {
  return (
    <div className=" relative border border-coffee-bg  rounded-2xl mb-3 flex sm:items-center sm:justify-between flex-col sm:flex-row">
      <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
        <img
          src="/img/pro/image.jpg"
          alt=""
          className="sm:w-32 w-full rounded-t-2xl sm:rounded-l-none sm:rounded-r-2xl"
        />
        <h3 className=" text-coffee font-bold text-2xl">لاته</h3>
      </div>
      <div className="flex items-center  relative sm:mb-0 mb-3 ">
        <div className="flex items-center gap-4 mr-8 ml-52">
          <AddProducts />
          <span className=" absolute left-16 flex gap-3 flex-row-reverse">
            <p className="text-sm">تومان</p>350000
          </span>
        </div>
      </div>
      <div className=" absolute left-3 cursor-pointer bottom-4 sm:bottom-7">
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
