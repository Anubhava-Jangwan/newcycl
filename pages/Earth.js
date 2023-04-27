import React, { useState } from "react";
import Image from "next/image";
import { BatteryCharging, Droplet, Edit, Truck } from "react-feather";

import earth from "../public/polluted-earth.png";

import { Homemade_Apple } from "next/font/google";
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: ["400"] });

const icons = [
  { key: "car", icon: "Truck" },
  { key: "paper", icon: "Edit" },
  { key: "charging", icon: "BatteryCharging" },
  { key: "waterbottle", icon: "Droplet" },
  { key: "burger", icon: "Truck" },
  { key: "banana", icon: "Truck" },
];

const fIcons = { BatteryCharging, Edit, Droplet, Truck };

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
  burger: {
    title: "Eating 2,000 bananas",
    subTitle:
      "which is like eating your 40 years of bananas 🍌 quota in a month (an average person eats 51 bananas in a year)",
  },
  banana: {
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
        Here&rsquo;s what does it mean to reduce one&rsquo;s own waste, in terms
        of CO2 emissions.
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
                  <Icon />
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
