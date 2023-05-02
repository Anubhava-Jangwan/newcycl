import Link from "next/link";
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
          <p className="flex items-center text-md">
            <span>
              The rate of waste production in Israel is among the highest in the
              <Link
                className="ml-1 underline"
                target="_blank"
                href="https://www.haaretz.com/opinion/2023-04-30/ty-article-opinion/.premium/israel-is-crowded-and-drowning-in-garbage-and-the-future-isnt-much-brighter/00000187-cec2-d6a1-ad87-eed3d5b50000"
              >
                OECD
              </Link>
            </span>
          </p>
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
