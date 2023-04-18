import React from "react";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const WeHearYou = () => {
  return (
    <div
      className={`mx-auto text-center px-12 py-48 bg-nc-purple ${raleway.className}`}
    >
      <h1 className="w-full my-2 text-3xl font-bold text-center text-slate-50">
        We hear you
      </h1>
      <div className="my-4 text-slate-50">
        What if we told you that we are working on a solution that eliminates
        the need to throw your stinky garbage altogether?
      </div>
    </div>
  );
};

export default WeHearYou;
