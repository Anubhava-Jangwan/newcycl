import React, { useState } from "react";
import { X } from "react-feather";

const Banner = () => {
  const [hideBanner, setHideBanner] = useState(false);

  return (
    <div
      className={`z-50 flex justify-between w-full px-4 py-2 bg-nc-purple transition-all ${
        hideBanner ? "hidden" : ""
      }`}
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-md text-slate-50">
          <span>Invest in Our Planet - The theme for this Earth Month 🌏</span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="flex-shrink-0 inline-flex justify-center items-center text-slate-50 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setHideBanner(!hideBanner)}
        >
          <X />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
