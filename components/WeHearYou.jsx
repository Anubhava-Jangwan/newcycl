import React from "react";

import Wave from "../components/Wave";

const WeHearYou = () => {
  return (
    <div
      className={`-mt-1 sm:mt-0 mx-auto text-center px-12 pt-36 pb-48 dark-bg relative overflow-hidden`}
    >
      <h2 className="w-full my-2 text-5xl font-bold text-center text-slate-50">
        We hear you
      </h2>
      <div className="my-4 text-slate-50">
     
      </div>
      <div className="absolute -top-24 sm:-left-96 -left-112 -rotate-180">
        <Wave />
      </div>
      <div className="absolute -top-24 sm:-right-96 -right-112">
        <Wave />
      </div>
    </div>
  );
};

export default WeHearYou;
