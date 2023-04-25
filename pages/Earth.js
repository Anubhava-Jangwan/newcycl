import React, { useState } from "react";

import { Homemade_Apple } from "next/font/google";
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: ["400"] });

const icons = [
  { key: "car", icon: "" },
  { key: "bag", icon: "" },
  { key: "phone", icon: "" },
  { key: "waterbottle", icon: "" },
  { key: "burger", icon: "" },
  { key: "banana", icon: "" },
];

const cardsTitle = {
  car: "Driving a car for 120 miles (193 km)",
  bag: "Using 2,800 plastic bags",
  phone: "Charging a smartphone 16,000 times",
  waterbottle: "Drinking 2,000 bottles of water",
  burger: "Consuming 600 hamburgers",
  banana: "Eating 2,000 bananas",
};

const Earth = () => {
  const [key, setKey] = useState("car");
  return (
    <div className={`mx-auto text-center px-12`}>
      <h4
        className={` text-2xl sm:text-3xl text-center leading-loose ${homemadeApple.className}`}
      >
        Here&rsquo;s what does it mean to reduce one&rsquo;s own waste, in terms
        of CO2 emissions.
      </h4>
      <div className="flex items-center justify-center">
        <section
          className={`gap-6 grid grid-cols-3 sm:grid-cols-6 mt-24 w-full sm:w-8/12`}
        >
          {icons.map((icon) => {
            return (
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setKey(icon.key)}
                  className={`hover:bg-blue-600 hover:text-white flex h-16 items-center justify-center ring rounded-full w-16 ${
                    key === icon.key
                      ? "emission-icons-selected"
                      : "emission-icons"
                  }`}
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_112_32)">
                      <path
                        d="M41.6667 19.7875L20.8334 48.9541L25 30.2041H8.33337L29.1667 1.03748L25 19.7875H41.6667Z"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_112_32">
                        <rect width="50" height="50" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            );
          })}
        </section>
      </div>
      <div className="mt-24 flex items-center justify-center">
        <div class="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl w-3/5 p-12">
          <h5 class="mb-2 text-2xl font-bold tracking-tight">
            {cardsTitle[key]}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Earth;
