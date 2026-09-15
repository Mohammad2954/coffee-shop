import BreadCramb from "../components/BreadCramb/BreadCramb";
import CartProduct from "../components/Cart/CartProduct";
import { useCartStor } from "../store/useCartStor";
import Empty from "../components/Empty/Empty";
import AddTitle from "../components/All/AddTitle";
import TopPageContent from "../components/TopPageContent/TopPageContent";
function Cart() {
  const allItem = useCartStor((state) => state.item);
  const total = allItem.reduce((prev, nex) => {
    return prev + nex.price;
  }, 0);

  return (
    <div className="mt-20 max-w-content mx-auto px-8">
      <TopPageContent message={"سبد خرید"} />
      {allItem.length > 0 ? (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-full lg:col-span-7   ">
            {allItem?.map((e) => {
              return <CartProduct key={e.id + e.sizePro} {...e} />;
            })}
          </div>
          <div className="col-span-full lg:col-span-5 border rounded-lg ">
            <div className="p-4">
              <div className="border-b border-bs-olive-800 flex items-center justify-between px-2 py-4">
                <span>مجموع سفارش :</span>
                <div className="flex items-center gap-2">
                  <span>{total.toLocaleString()}</span>
                  <span className="text-[10px]"> تومان</span>
                </div>
              </div>
              <div className="border-b border-bs-olive-800 flex items-center justify-between px-2 py-4">
                <span>تخفیف :</span>
                <div className="flex items-center gap-2">
                  <span>0</span>
                  <span className="text-[10px]"> تومان</span>
                </div>
              </div>
              <div className=" flex items-center justify-between px-2 py-4">
                <span>بسته بندی :</span>
                <div className="flex items-center gap-2">
                  <span>0</span>
                  <span className="text-[10px]"> تومان</span>
                </div>
              </div>
              <div className="bg-[#FFE5BE] flex items-center justify-between px-2 py-4 rounded-xl mt-16">
                <span>جمع کل :</span>
                <div className="flex items-center gap-2">
                  <span>{total.toLocaleString()}</span>
                  <span className="text-[10px]"> تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Empty text={"سبد خرید خالیست 🥲"} />
      )}
    </div>
  );
}

export default Cart;
