import React from "react";
import Image from "next/image";

import earth from "../public/polluted-earth.png";

import { Homemade_Apple } from "next/font/google";
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: ["400"] });

function Earth() {
  return (
    <div className={`mx-auto text-center px-12`}>
      <h4
        className={` text-2xl sm:text-3xl text-center leading-loose ${homemadeApple.className}`}
      >
        Here&rsquo;s what does it mean to reduce one&rsquo;s own waste, in terms
        of CO2 emissions.
      </h4>
      <div className="pt-12 mx-auto w-full sm:w-7/12">
        <Image
          style={{ borderRadius: "50%", border: "2px solid rgb(0 0 0 / 16%)" }}
          src={earth}
          width={"100%"}
          alt="Polluted Earth"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Earth;
