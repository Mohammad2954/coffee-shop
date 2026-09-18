import { useNavigate } from "react-router";

function Mainheader() {
  const x = useNavigate();
  return (
    <div className="relative bg-coffee-bg">
      <img
        src="/img/loader/loaderimg.jpg"
        alt=""
        className="mt-[-84px] hidden sm:block"
      />
      <div className="text-center mx-auto sm:text-start sm:mt-0 py-28 sm:py-0 sm:absolute z-10 left-22 top-1/2 flex gap-4 flex-col">
        <h2 className="text-4xl font-bold text-[#805D47] text-shadow-lg text-center">
          خرید آنلاین انواع قهوه
        </h2>
        <p className="text-text-header">
          فروشگاه اینترنتی قهوه تلخ فروشنده انواع قهوه و شیرینی !!!{" "}
        </p>
        <button
          onClick={() => {
            x("category/انواع قهوه");
          }}
          className="mx-auto  bg-bg-btn p-2 w-32 border border-[#F8E4BE] rounded-full text-[#F8E4BE] cursor-pointer"
        >
          خرید قهوه
        </button>
      </div>
    </div>
  );
}

export default Mainheader;
