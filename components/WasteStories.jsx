import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

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
    icon: "avatarw1",
  },
  {
    feedback:
      "I don’t do segregation because I feel like my efforts won't matter since not everyone in my society does it.",
    name: "Selvaraj A K",
    location: "Rajaji Nagar",
    icon: "avatarm2",
  },
  {
    feedback:
      "The first thing I do in the morning is run behind the garbage truck. Its a pursuit of garbage truck.",
    name: "Divya Sharma",
    location: "HSR layout",
    icon: "avatarw2",
  },

  {
    feedback:
      "Occasionally, they don't come consecutively for days, and my waste stinks :( Once, it got fungus too. :O",
    name: "Mahalakshami Rao",
    location: "Malleshawaram",
    icon: "avatarw4",
  },
  {
    feedback:
      "It gets really hard to wake up at 7 just to throw my garbage out.",
    name: "Tvesha Narayan",
    location: "BSK 2nd stage",
    icon: "avatarw3",
  },
  {
    feedback:
      "It's impossible to hear garbage truck whistles from my 6th-floor apartment.",
    name: "Vivek Singh",
    location: "Kormangala",
    icon: "avatarm1",
  },
  {
    feedback:
      "The trash truck's timing is so unpredictable; I need to make sure I am home when it comes.",
    name: "Ram Gowda",
    location: "Yelahanka",
    icon: "avatarm3",
  },
];

const WS = () => {
  return (
 <></>
  );
};

export default WS;
