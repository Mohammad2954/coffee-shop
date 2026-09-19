import AddTitle from "@/All/AddTitle.jsx";
import Slider from "@/Slider/Slider";
import { useStoreLove } from "@/store/useStoreLove.js";

function PopProduct() {
  const AllData = useStoreLove((state) => state.AllData);
  const popProducts = AllData.filter((e) => e.is_popular === true);
  return (
    <div className=" relative">
      <div className="max-w-content mx-auto px-8 mt-16 z-10 relative">
        <AddTitle title={"محبوب ترین ها"} />
        <div>
          <Slider items={popProducts} />
        </div>
      </div>
      <div className="w-full  bg-[#FFE5BE] absolute top-[-1rem] bottom-0 z-0"></div>
    </div>
  );
}

export default PopProduct;
