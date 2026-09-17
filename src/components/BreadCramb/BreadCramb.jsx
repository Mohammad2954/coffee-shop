import { useState } from "react";
import { useMatch, useMatches, useParams } from "react-router";

function BreadCramb() {
  const findCat = useMatches();
  const x = useParams();

  let pathfind = findCat
    .map((e) => {
      switch (e.pathname.split("/")[1]) {
        case "":
          return "خانه";
        case "blog":
          return "وبلاگ";
        case "populer":
          return "مورد علاقه ها";
        case "cart":
          return "سبد خرید";
        case "about":
          return "درباره ما";
        case "contact-us":
          return "ارتباط با ما";
        case "category":
          return "دسته بندی";
        case "product":
          return "محصولات";

        default:
          break;
      }
    })
    .filter((e) => e !== undefined);
  if (x.elemnt !== undefined) {
    pathfind.push(x.elemnt);
  }

  return (
    <div className="w-fit py-1 px-4 bg-coffee-bg rounded-full mr-2 my-4 flex item center gap-2">
      {pathfind.map((e, index) => {
        return (
          <p className="text-sm text-text-header ">
            {e} {pathfind.length === index + 1 ? "" : "/"}
          </p>
        );
      })}
    </div>
  );
}

export default BreadCramb;
