import BreadCramb from "../components/BreadCramb/BreadCramb";
import CartProduct from "../components/Cart/CartProduct";

function Cart() {
  return (
    <div className="mt-20 max-w-content mx-auto px-8">
      <div>
        <BreadCramb />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-full lg:col-span-7   ">
          <CartProduct />
        </div>
        <div className="col-span-full lg:col-span-5 border rounded-lg ">
          <div className="p-4">
            <div className="border-b border-bs-olive-800 flex items-center justify-between px-2 py-4">
              <span>مجموع سفارش :</span>
              <div className="flex items-center gap-2">
                <span>25000</span>
                <span className="text-[10px]"> تومان</span>
              </div>
            </div>
            <div className="border-b border-bs-olive-800 flex items-center justify-between px-2 py-4">
              <span>تخفیف :</span>
              <div className="flex items-center gap-2">
                <span>25000</span>
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
                <span>60000</span>
                <span className="text-[10px]"> تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
