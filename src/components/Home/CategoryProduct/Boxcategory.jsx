import { useNavigate } from "react-router";

function Boxcategory({ title, svg }) {
  const x = useNavigate();
  return (
    <div
      onClick={() => {
        x(`category/${title}`);
      }}
      className=" cursor-pointer rounded-lg  flex flex-col items-center justify-center  lg:text-2xl"
    >
      {svg}
      <p className="text-[#F8E4BE] text-[10px] lg:text-lg">{title}</p>
    </div>
  );
}

export default Boxcategory;
