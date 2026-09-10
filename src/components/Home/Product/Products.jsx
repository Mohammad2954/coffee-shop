import Product from "./Product";
import { data } from "../../data";
import AddTitle from "../../All/AddTitle";
function Products() {
  return (
    <div className="max-w-content mx-auto px-8 mt-20">
      <AddTitle title={"پر فروش ترین ها"} />
      <div className="grid  grid-cols- lg:grid-cols-5 sm:grid-cols-3 gap-4 mt-[-1rem]">
        {data.map((pro) => {
          return <Product {...pro} key={pro.id} />;
        })}
      </div>
    </div>
  );
}

export default Products;
