import Product from "./Product";
import AddTitle from "../../All/AddTitle";
function Products({ sell }) {
  return (
    <div className="max-w-content mx-auto px-8 mt-20">
      <AddTitle title={"پر فروش ترین ها"} />
      <div className="grid  grid-cols- lg:grid-cols-5 sm:grid-cols-3 gap-4  mt-4">
        {sell.map((pro) => {
          return <Product {...pro} key={pro.id} />;
        })}
      </div>
    </div>
  );
}

export default Products;
