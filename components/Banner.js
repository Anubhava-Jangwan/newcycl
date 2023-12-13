import React, { useState } from "react";
import { X } from "react-feather";

const Banner = () => {
  const [hideBanner, setHideBanner] = useState(false);

  return (
    <div className="banner-container">
      <div className="h-3"></div>
      <div
        className={`banner text-center z-50 flex justify-between w-full px-4 py-2 banner-gradient-bg transition-all ${
          hideBanner ? "hidden" : ""
        }`}
      >
        <div className="flex items-center mx-auto">
          <div className="text-md">
            In 2021, 931 million tonnes of food waste was generated, with{" "}
            <span className="font-bold">61% coming from households</span>.
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="flex-shrink-0 inline-flex justify-center items-center hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setHideBanner(!hideBanner)}
          >
            <X />
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
