import React from "react";

function Paigination() {
  return (
    <div>
      <div className="flex items-center justify-center gap-3 mx-auto">
        <div className="w-8 h-8 flex items-center justify-center text-lg rounded-sm bg-coffee-bg text-text-header border border-coffee-bg">
          1
        </div>
        <div className="w-8 h-8 flex items-center justify-center text-lg rounded-sm  text-text-header border border-coffee-bg">
          2
        </div>
        <div className="w-8 h-8 flex items-center justify-center text-lg rounded-sm  text-text-header border border-coffee-bg">
          3
        </div>
      </div>
    </div>
  );
}

export default Paigination;
