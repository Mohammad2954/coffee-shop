import BreadCramb from "../components/BreadCramb/BreadCramb";
import Sorted from "../components/Category/Sorted";

function Category() {
  return (
    <div className="max-w-content mx-auto mt-20 ">
      <BreadCramb />
      <div className=" bg-[#FFE5BE]    px-8  rounded-lg flex items-center justify-between py-4">
        <div className="flex gap-4 justify-between ga-4 w-full sm:flex-row flex-col">
          <div className="flex items-center gap-3 h-8">
            <div className="flex items-center gap-2 ">
              <div className=" cursor-pointer rounded-sm bg-coffee-bg text-text-header">
                <svg
                  className=" border border-coffee-bg p-1 rounded-sm h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h4v4H3zm7 0h4v4h-4z"></path>
                  <path d="M10 3h4v4h-4zm7 0h4v4h-4zM3 17h4v4H3zm7 0h4v4h-4z"></path>
                  <path d="M10 17h4v4h-4zm7 0h4v4h-4zM3 10h4v4H3zm7 0h4v4h-4z"></path>
                  <path d="M10 10h4v4h-4zm7 0h4v4h-4z"></path>
                </svg>
              </div>
              <div className=" cursor-pointer">
                <svg
                  className=" border border-coffee-bg p-0.5 rounded-sm h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 11h16v2H4zm0-5h16v2H4zm0 10h16v2H4z"></path>
                </svg>
              </div>
            </div>
            <div className="  relative w-52 h-8">
              <input
                type="text"
                placeholder="محصول مورد نظر ..."
                className=" pr-2 absolute left-0 right-0 h-8 text-sm outline-0 border-2 border-coffee-bg rounded-sm"
              />
              <div>
                <svg
                  className=" absolute left-2 top-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6"></path>
                </svg>
              </div>
            </div>
          </div>

          <Sorted />
        </div>
      </div>
    </div>
  );
}

export default Category;
