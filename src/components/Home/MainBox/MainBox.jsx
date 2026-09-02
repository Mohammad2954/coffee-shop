function MainBox() {
  return (
    <div className="max-w-content mx-auto px-8">
      <div className="py-8 bg-coffee-bg px-8 flex items-center justify-between rounded-xl mt-20">
        <div className="text-center sm:text-start">
          <h3 className="mb-5 text-2xl lg:text-4xl font-bold text-[#805D47] text-shadow-lg">
            انواع قهوه فوری
          </h3>
          <p className="text-text-header lg:text-lg text-sm mb-4">
            انواع قهوه فوری کلاسیک کافی میکس کاپوچینو لاته موکاچینو هان چاکلت
            نسکافه گلد
          </p>
          <a
            href="#"
            className="text-sm lg:text-lg mx-auto sm:mx-auto bg-bg-btn p-2 w-32 border border-[#F8E4BE] rounded-full text-[#F8E4BE]"
          >
            همین حالا خرید کن
          </a>
        </div>
        <div className="w-1/5 hidden sm:block">
          <img className="w-full" src="/img/main/main.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainBox;
