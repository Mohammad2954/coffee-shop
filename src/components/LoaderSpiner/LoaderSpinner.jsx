import React from "react";

function LoaderSpinner() {
  return (
    <div className="loading-overlay fixed top-0 z-50 bg-white w-full h-content flex  justify-center">
      <div className="loader"></div>
    </div>
  );
}

export default LoaderSpinner;
