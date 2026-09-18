import { useState } from "react";
import { useNavigate } from "react-router";
import "./Soreted.css";
function Sidebar({ name, items }) {
  const x = useNavigate();
  const [isHidden, setIshidden] = useState(true);
  return (
    <>
      <h4
        className="pr-2 flex flex-col gap-2 mt-3 border-r cursor-pointer item-element relative"
        onClick={() => setIshidden(!isHidden)}
      >
        {name}
        <ul
          className={`pr-2  text-sm text-[#00000086] ${isHidden && "hidden"} `}
        >
          {items.map((e) => (
            <li
              className="cursor-pointer hover:text-black"
              key={e.id}
              onClick={() => {
                x(`/product/${e.name}`);
              }}
            >
              {e.name}
            </li>
          ))}
        </ul>
      </h4>
    </>
  );
}

export default Sidebar;
