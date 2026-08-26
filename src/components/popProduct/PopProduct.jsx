import { data } from "../data.js";
import Product from "../Product/Product.jsx";
function PopProduct() {
  return (
    <div className=" relative">
      <div className="max-w-content mx-auto px-8 mt-16 z-10 relative">
        <h3 className="text-coffee text-2xl font-bold">محبوب ترین</h3>
        <div className="grid  grid-cols- lg:grid-cols-5 sm:grid-cols-3 gap-4 mt-[-1rem]">
          {data.slice(0, 5).map((pro) => {
            return <Product {...pro} key={pro.id} border={false} />;
          })}
        </div>
      </div>
      <div className="w-full  bg-[#FFE5BE] absolute top-[-1rem] bottom-[-4.4rem] z-0"></div>
    </div>
  );
}

export default PopProduct;
