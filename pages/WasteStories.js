import React from "react";

import WasteStoryCard from "./WasteStoryCard";

import { Dancing_Script, Pangolin } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });
const pangolin = Pangolin({ subsets: ["latin"], weight: ["400"] });


const stories = [
  {
    feedback:
      "I do not know when the garbage wala comes. The timing is so odd.",
    name: "Tanvi Nagar",
    location: "BTM Layout 2nd Stage",
  },
  {
    feedback:
      "The trash truck's timing is so unpredictable; I need to make sure I am home when it comes.",
    name: "Ram Gowda",
    location: "Yelahanka",
  },
  {
    feedback:
      "Occasionally, they don't come consecutively for days, and my waste stinks :( Once, it got fungus too. :O",
    name: "Mahalakshami Rao",
    location: "Malleshawaram, Dollars colony",
  },
  {
    feedback:
      "It gets really hard to wake up at 7 just to throw my garbage out.",
    name: "Tvesha Narayan",
    location: "BSK 2nd stage",
  },
  {
    feedback:
      "It's impossible to hear garbage truck whistles from my 6th-floor apartment.",
    name: "Vivek Singh",
    location: "Kormangala",
  },
  {
    feedback:
      "The first thing I do in the morning is run behind the garbage truck. Its a pursuit of garbage truck.",
    name: "Divya Sharma",
    location: "HSR layout",
  },
  {
    feedback:
      "I wanna separate my trash, but not everyone in my area is doing it. It makes me feel like my efforts won't matter, so I give up on doing it too.",
    name: "Selvaraj A K",
    location: "Rajaji Nagar",
  },
];

const WS = () => {
  return (
    <>
      <div className="smoke pb-24">
        <div className={`mx-auto text-center px-12 py-6`}>
          <h1
            className={`w-full my-2 text-5xl font-bold text-center ${dancingScript.className}`}
          >
            Waste Stories
          </h1>
          <div className={`my-4 ${pangolin.className}`}>
            These are some feedbacks we collected from Bengaluru people who deal
            with waste daily.
          </div>
        </div>
        <div className="flex flex-row mx-6 overflow-x-auto">
          {stories.map((story, index) => {
            return <WasteStoryCard key={index} story={story} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default WS;
