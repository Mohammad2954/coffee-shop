import Product from "./Product";
import AddTitle from "../../All/AddTitle";
import Slider from "../../Slider/Slider";
function Products({ sell }) {
  return (
    <div className="max-w-content mx-auto px-8 mt-20">
      <AddTitle title={"پر فروش ترین ها"} />
      <div className="">
        <Slider items={sell} />
      </div>
    </div>
  );
}

export default Products;
