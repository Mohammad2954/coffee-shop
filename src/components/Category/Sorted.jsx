import "./Soreted.css";
function Sorted() {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-sm border border-coffee-bg w-fit py-1 px-2 select-item">
        <span>مرتب سازی بر اساس جدید ترین</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 7H5c-.37 0-.71.21-.89.54a1 1 0 0 0 .07 1.04l7 10a.997.997 0 0 0 1.64 0l7-10c.21-.31.24-.7.07-1.04A1 1 0 0 0 19 7m-7 9.26L6.92 9h10.16z"></path>
          </svg>
        </div>
      </div>

      <div className="border border-coffee-bg w-fit rounded-sm  hide-item absolute top-[0]">
        <ul className="">
          <li className="hover:bg-amber-950 px-2 py-1 cursor-pointer">
            مرتب سازی بر اساس جدید ترین{" "}
          </li>
          <li className="hover:bg-amber-950 px-2 py-1 cursor-pointer">
            مرتب سازی بر اساس محبوبیت{" "}
          </li>
          <li className="hover:bg-amber-950 px-2 py-1 cursor-pointer">
            مرتب سازی بر اساس قیمت کم{" "}
          </li>
          <li className="hover:bg-amber-950 px-2 py-1 cursor-pointer">
            مرتب سازی بر اساس قیمت زیاد{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sorted;
