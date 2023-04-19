import React from "react";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

import WasteStoryCard from "./WasteStoryCard";

const stories = [
  {
    feedback:
      "I do not know when the garbage wala comes. The timing gets really annoying",
    name: "Tanvi Nagar",
    location: "Resident of BTM Layout 2nd Stage",
  },
  {
    feedback:
      "I do not know when the garbage wala comes. The timing gets really annoying",
    name: "Tanvi Nagar",
    location: "Resident of BTM Layout 2nd Stage",
  },
  {
    feedback:
      "I do not know when the garbage wala comes. The timing gets really annoying",
    name: "Tanvi Nagar",
    location: "Resident of BTM Layout 2nd Stage",
  },
  {
    feedback:
      "I do not know when the garbage wala comes. The timing gets really annoying",
    name: "Tanvi Nagar",
    location: "Resident of BTM Layout 2nd Stage",
  },
  {
    feedback:
      "I do not know when the garbage wala comes. The timing gets really annoying",
    name: "Tanvi Nagar",
    location: "Resident of BTM Layout 2nd Stage",
  },
  {
    feedback:
      "I do not know when the garbage wala comes. The timing gets really annoying",
    name: "Tanvi Nagar",
    location: "Resident of BTM Layout 2nd Stage",
  },
  {
    feedback:
      "I do not know when the garbage wala comes. The timing gets really annoying",
    name: "Tanvi Nagar",
    location: "Resident of BTM Layout 2nd Stage",
  },
];

const WS = () => {
  return (
    <div className="pt-24">
      <div className="py-24 "></div>
      <div className="smoke pb-24">
        <div className={`mx-auto text-center px-12 py-6 ${raleway.className}`}>
          <h1 className="w-full my-2 text-3xl font-bold text-center">
            Waste Stories
          </h1>
          <div className="my-4">
            These are some feedbacks we collected from common people who deal
            with waste daily.
          </div>
        </div>
        <div className="flex flex-row mx-6 pb-12 overflow-x-auto">
          {stories.map((story, index) => {
            return <WasteStoryCard story={story} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WS;
