import React from "react";

import Wave from "./components/Wave";

const Empowering = () => {
  return (
    <section className={`mx-auto text-center px-12 py-48 relative`}>
      <h1 className="w-full my-2 text-5xl font-bold text-center">
        World&lsquo;s first company empowering self waste management.
      </h1>
      <div className="my-4">
        Enabling individuals to take control of their own waste. Whether
        you&lsquo;re a GenZ, Millenial, or Baby Boomer, waste is something that
        we all generate and <br /> it&lsquo;s high time that we take charge of
        it so that our future generations aren&lsquo;t born into a world
        drowning in waste.
      </div>
      <h4 className="text-3xl mt-48 text-nc-purple">
        Here&lsquo;s what does it mean to reduce one&lsquo;s own waste,
      </h4>
      <h4 className="text-3xl mt-2 text-nc-purple">
        in terms of CO2 emissions.
      </h4>
    </section>
  );
};

export default Empowering;
