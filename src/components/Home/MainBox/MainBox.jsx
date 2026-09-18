import { useNavigate } from "react-router";

function MainBox() {
  const x = useNavigate();
  return (
    <div className="max-w-content mx-auto px-8">
      <div className="py-8 bg-coffee-bg px-8 flex items-center justify-between rounded-xl mt-[1rem]">
        <div className="text-center sm:text-start">
          <h3 className="mb-5 text-2xl lg:text-3xl font-bold text-[#805D47] text-shadow-lg">
            انواع شیرینی های خوشمزه 😋
          </h3>
          <p className="text-text-header lg:text-lg text-sm mb-4">
            انواع شیرینی و دسرهای خوشمزه، تازه و متنوع مناسب برای هر سلیقه و هر
            مناسبت
          </p>
          <a
            onClick={() => x("category/شیرینی")}
            className=" cursor-pointer text-sm lg:text-lg mx-auto sm:mx-auto bg-bg-btn p-2 w-32 border border-[#F8E4BE] rounded-full text-[#F8E4BE]"
          >
            همین حالا خرید کن
          </a>
        </div>
        <div className="w-1/5 hidden sm:block">
          <img className="w-[10rem]" src="/img/main/main.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainBox;
