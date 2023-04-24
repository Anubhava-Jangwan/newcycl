import React from "react";

import Wave from "./components/Wave";

const WeHearYou = () => {
  return (
    <div className={`mx-auto text-center px-12 pt-36 pb-48 dark-bg relative overflow-hidden`}>
      <h1 className="w-full my-2 text-5xl font-bold text-center text-slate-50">
        We hear you
      </h1>
      <div className="my-4 text-slate-50">
        What if we told you that we are working on a solution that eliminates
        the need to throw your stinky garbage altogether?
      </div>
      <div className="absolute -top-24 -left-96 -rotate-180">
        <Wave />
      </div>
      <div className="absolute -top-24 -right-96">
        <Wave />
      </div>
    </div>
  );
};

export default WeHearYou;
