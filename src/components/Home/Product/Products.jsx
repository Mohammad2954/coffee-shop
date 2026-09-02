import Product from "./Product";
import { data } from "../../data";
function Products() {
  return (
    <div className="max-w-content mx-auto px-8 mt-20">
      <h3 className="text-coffee text-2xl font-bold">پر فروش ترین</h3>
      <div className="grid  grid-cols- lg:grid-cols-5 sm:grid-cols-3 gap-4 mt-[-1rem]">
        {data.map((pro) => {
          return <Product {...pro} key={pro.id} border={true} />;
        })}
      </div>
    </div>
  );
}

export default Products;
