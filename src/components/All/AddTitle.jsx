import React from "react";
import "./title-style.css";
function AddTitle({ title }) {
  return (
    <h3 className="text-coffee text-2xl font-bold style-title relative">
      {title}
    </h3>
  );
}

export default AddTitle;
