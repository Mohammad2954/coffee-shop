import React from "react";
import BreadCramb from "../BreadCramb/BreadCramb";
import AddTitle from "../All/AddTitle";

function TopPageContent({ message }) {
  return (
    <div>
      <BreadCramb />
      <div className="mt-8 mr-16">
        <AddTitle title={message} />
      </div>
    </div>
  );
}

export default TopPageContent;
