import React from "react";
import BreadCramb from "../components/BreadCramb/BreadCramb";
import AddTitle from "../components/All/AddTitle";
import { useStoreLove } from "../store/useStoreLove";
import Product from "../components/Home/Product/Product";
import Empty from "../components/Empty/Empty";

function Populer() {
  const AllData = useStoreLove((state) => state.AllData);
  console.log(AllData.length);

  return (
    <div className="max-w-content mx-auto px-8">
      <div className="my-8">
        <BreadCramb />
        <div className="mt-8 mr-4">
          <AddTitle title={"مورد علاقه ها"} />
        </div>
      </div>

      {AllData.filter((e) => e.love === true).length > 0 ? (
        <div className="col-span-4 sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
          {AllData.filter((e) => e.love === true).map((event) => (
            <Product {...event} key={event.id} border={true} />
          ))}
        </div>
      ) : (
        <Empty text={"xxxxxxxxxxxxx"} />
      )}
    </div>
  );
}

export default Populer;
