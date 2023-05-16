import React, { useState } from "react";
import Image from "next/image";
import { BatteryCharging, Droplet, Edit, Monitor, Truck } from "react-feather";

import earth from "../public/polluted-earth.png";

import { Homemade_Apple } from "next/font/google";
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: ["400"] });

const CarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      
      strokeLinejoin="round"
    >
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
      <circle cx="6.5" cy="16.5" r="2.5"></circle>
      <circle cx="16.5" cy="16.5" r="2.5"></circle>
    </svg>
  );
};

const PaperIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
      <path d="M18 14h-8"></path>
      <path d="M15 18h-5"></path>
      <path d="M10 6h8v4h-8V6Z"></path>
    </svg>
  );
};

const BananaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <script xmlns="">window._wordtune_extension_installed = true;</script>
      <path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
      <path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />
    </svg>
  );
};

const WaterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2h8"></path>
      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"></path>
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path>
    </svg>
  );
};

const WorkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
    </svg>
  );
};

const icons = [
  { key: "car", icon: "CarIcon" },
  { key: "paper", icon: "PaperIcon" },
  { key: "charging", icon: "BatteryCharging" },
  { key: "waterbottle", icon: "WaterIcon" },
  { key: "banana", icon: "BananaIcon" },
  { key: "work", icon: "WorkIcon" },
];

const fIcons = {
  BananaIcon,
  BatteryCharging,
  CarIcon,
  Droplet,
  Edit,
  Monitor,
  PaperIcon,
  Truck,
  WaterIcon,
  WorkIcon,
};

const cardsTitle = {
  car: {
    title: "Driving a car for 120 miles (193 km)",
    subTitle: "which is like driving 🚗 from Bengaluru to Mysuru and back.",
  },
  paper: {
    title: "Printing 50,000 sheets of paper",
    subTitle: "which is like cutting 6 trees 🌳",
  },
  charging: {
    title: "Charging a smartphone 16,000 times",
    subTitle:
      "which is like consuming 300 KW of electricity 🔌 that could run your refrigerator for 4 months.",
  },
  waterbottle: {
    title: "Drinking 2,000 bottles of water",
    subTitle:
      "which is like drinking all water🚰 that approximately 500 people drink in a day",
  },
  banana: {
    title: "Eating 2,000 bananas",
    subTitle:
      "which is like eating your 40 years of bananas 🍌 quota in a month (an average person eats 51 bananas in a year)",
  },
  work: {
    title: "Running a computer for 3,000 hours",
    subTitle: "which is like doing 1 year of full time job 💻 in a month.",
  },
};

const Earth = () => {
  const [key, setKey] = useState("car");
  return (
    <div className={`mx-auto text-center px-12`}>
      <div className="pb-16 mx-auto w-full sm:w-6/12">
        <Image
          style={{ borderRadius: "50%", border: "2px solid rgb(0 0 0 / 16%)" }}
          src={earth}
          width={"100%"}
          alt="Polluted Earth"
          className="w-full"
        />
      </div>
      <h4
        className={` text-2xl sm:text-3xl text-center leading-loose ${homemadeApple.className}`}
      >
        Here&rsquo;s what does it mean to reduce one&rsquo;s monthly waste, in
        terms of CO2 emissions.
      </h4>
      <div className="flex items-center justify-center">
        <section
          className={`gap-6 grid grid-cols-3 sm:grid-cols-6 mt-24 w-full sm:w-8/12`}
        >
          {icons.map((icon) => {
            const Icon = fIcons[icon.icon];
            return (
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setKey(icon.key)}
                  className={`hover:bg-nc-purple-900 hover:text-white flex h-16 items-center justify-center ring ring-offset-2 rounded-full w-16 ${
                    key === icon.key ? "bg-nc-purple-900 text-white" : ""
                  }`}
                >
                  {icon.svgType ? (
                    <Image
                      src={icon.icon}
                      width={36}
                      height={32}
                      alt={icon.key}
                    ></Image>
                  ) : (
                    <Icon />
                  )}
                </button>
              </div>
            );
          })}
        </section>
      </div>
      <div className="mt-24 flex items-center justify-center">
        <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl w-full sm:w-3/5 p-12">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {cardsTitle[key].title}
          </h5>
          <p className="my-3 text-xl font-normal text-gray-700">
            {cardsTitle[key].subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Earth;
