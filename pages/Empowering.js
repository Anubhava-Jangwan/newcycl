import React from "react";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

import Wave from "./components/Wave";

const Empowering = () => {
  return (
    <section
      className={`mx-auto text-center px-12 py-24 bg-nc-gradient relative ${raleway.className}`}
    >
      <h1 className="w-full my-2 text-3xl font-bold text-center">
        World&lsquo;s first company empowering self waste management.
      </h1>
      <div className="my-4">
        Enabling individuals to take control of their own waste. Whether
        you&lsquo;re a GenZ, Millenial, or Baby Boomer, waste is something that
        we all generate and <br /> it&lsquo;s high time that we take charge of
        it so that our future generations aren&lsquo;t born into a world
        drowning in waste.
      </div>
    </section>
  );
};

export default Empowering;
