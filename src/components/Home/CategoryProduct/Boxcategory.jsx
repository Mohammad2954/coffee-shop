function Boxcategory({ title, svg }) {
  return (
    <div className=" rounded-lg  flex flex-col items-center justify-center  lg:text-2xl">
      {svg}
      <p className="text-[#F8E4BE] text-[10px] lg:text-lg">{title}</p>
    </div>
  );
}

export default Boxcategory;
