import React from "react";

import { Homemade_Apple } from "next/font/google";
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: ["400"] });

const Empowering = () => {
  return (
    <section className={`mx-auto container px-12 py-48 relative`}>
      <h1 className="w-full my-2 text-5xl font-bold text-center waste-nothing relative">
        World&rsquo;s first company empowering self waste management.
      </h1>
      <div className="my-4 text-center">
        Enabling individuals to take control of their own waste. Whether
        you&rsquo;re a GenZ, Millenial, or Baby Boomer, waste is something that
        we all generate and <br /> it&rsquo;s high time that we take charge of
        it so that our future generations aren&rsquo;t born into a world
        drowning in waste.
      </div>
    </section>
  );
};

export default Empowering;
