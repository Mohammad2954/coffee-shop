function Products() {
  return (
    <div className="max-w-content mx-auto px-8">
      <h3 className="text-coffee text-2xl font-bold">پر فروش ترین</h3>
      <div className="grid grid-cols-4 gap-2">
        <div className="">
          <img src="/img/pro/image.png" alt="" />
          <div>
            <span>قهوه</span>
            <span>قهوه 50% | شیر 50%</span>
            <span>460000</span>
          </div>
          <button>سفارش</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
