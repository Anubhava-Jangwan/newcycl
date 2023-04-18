import React from "react";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const WeHearYou = () => {
  return (
    <div
      className={`reverse-smoke mx-auto text-center px-12 py-48 ${raleway.className}`}
    >
      <h1 className="w-full my-2 text-3xl font-bold text-center text-slate-0">
        We hear you
      </h1>
      <div className="my-4 text-slate-5">
        What if we told you that we are working on a solution that eliminates
        the need to throw your stinky garbage altogether?
      </div>
    </div>
  );
};

export default WeHearYou;
