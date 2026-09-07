import BreadCramb from "../components/BreadCramb/BreadCramb";

function Cart() {
  return (
    <div className="mt-20 max-w-content mx-auto px-8">
      <div>
        <BreadCramb />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className=" col-span-7  h-52 ">
          <div className="border border-coffee-bg grid grid-cols-12 rounded-2xl">
            <div className="flex items-center justify-between gap-4 col-span-4">
              <img
                src="/img/pro/image.jpg"
                alt=""
                className="w-32 rounded-r-2xl"
              />
              <h3 className=" text-coffee font-bold text-2xl">لاته</h3>
            </div>
            <div className="flex items-center col-span-8 relative">
              <div className="flex items-center gap-4 mr-8">
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center border border-coffee-bg w-8 h-8 rounded-full">
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
        </div>
        <div className=" col-span-5 bg-blue-300 h-52"></div>
      </div>
    </div>
  );
}

export default Cart;
