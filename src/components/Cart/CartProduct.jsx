function CartProduct() {
  return (
    <div className="border border-coffee-bg  rounded-2xl mb-3 flex sm:items-center sm:justify-between flex-col sm:flex-row">
      <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
        <img
          src="/img/pro/image.jpg"
          alt=""
          className="sm:w-32 w-full rounded-t-2xl sm:rounded-l-none sm:rounded-r-2xl"
        />
        <h3 className=" text-coffee font-bold text-2xl">لاته</h3>
      </div>
      <div className="flex items-center  relative sm:mb-0 mb-3 ">
        <div className="flex items-center gap-4 mr-8">
          <div className="flex items-center">
            <div className="flex items-center gap-3 ml-[150px]">
              <div className=" flex items-center justify-center border border-coffee-bg w-8 h-8 rounded-full">
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
              <div className="flex items-center justify-center border border-coffee-bg w-8 h-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </div>
            </div>
          </div>
          <span className=" absolute left-12">350000</span>
        </div>
        <div className=" absolute left-3 cursor-pointer">
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
    </div>
  );
}

export default CartProduct;
