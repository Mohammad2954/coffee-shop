function Mainheader() {
  return (
    <div className="pt-[85px] flex flex-col-reverse sm:grid  sm:grid-cols-2 items-center justify-between max-w-content mx-auto px-8">
      <div>
        <div className=" relative ">
          <img
            className="hidden sm:block w-full z-10 relative"
            src="/img/imageheader1.png"
            alt=""
          />
          <div className="text-center mx-auto sm:text-start sm:mt-0 mt-16 sm:absolute z-10  sm:w-2/3 top-1/2 flex gap-4 flex-col">
            <h2 className="text-4xl font-bold text-[#805D47] text-shadow-lg">
              خرید آنلاین انواع قهوه
            </h2>
            <p className="text-text-header">
              فروشگاه اینترنتی قهوه خرید انواع پودر و دان قهوه با قیمت مناسب
            </p>
            <button className="mx-auto sm:mr-0 bg-bg-btn p-2 w-32 border border-[#F8E4BE] rounded-full text-[#F8E4BE]">
              خرید و مشاوره
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <img className="w-full " src="/img/imageheader2.png" alt="" />
      </div>
    </div>
  );
}

export default Mainheader;
