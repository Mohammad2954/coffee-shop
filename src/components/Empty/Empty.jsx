import React from "react";

function Empty({ text }) {
  return (
    <div className="">
      <img
        src="/img/Empty/Empty.webp"
        className="w-[22rem] mx-auto"
        alt="empty"
      />
      <h3 className="text-center">{text}</h3>
    </div>
  );
}

export default Empty;
