function Boxcategory({ title, svg }) {
  return (
    <div className="bg-[#775142] rounded-lg  flex flex-col items-center justify-center py-10 mt-8 shadow-2xl">
      {svg}
      <p className="text-[#F8E4BE]">{title}</p>
    </div>
  );
}

export default Boxcategory;
