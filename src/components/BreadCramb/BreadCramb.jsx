import { useState } from "react";
import { useMatch, useMatches } from "react-router";

function BreadCramb() {
  const findCat = useMatches();
  let pathfind = findCat
    .map((e) => {
      switch (e.pathname) {
        case "/":
          return "خانه";
        case "/blog":
          return "وبلاگ";
        case "/populer":
          return "مورد علاقه ها";
        case "/cart":
          return "سبد خرید";
        case "/about":
          return "درباره ما";
        case "/contact-us":
          return "ارتباط با ما";

        default:
          break;
      }
    })
    .filter((e) => e !== undefined);

  return (
    <div className="w-fit py-1 px-4 bg-coffee-bg rounded-full mr-2 mb-4 flex item center gap-2">
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
