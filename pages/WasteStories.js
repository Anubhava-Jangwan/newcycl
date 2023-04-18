import React from "react";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const WS = () => {
  return (
    <div className="pt-24">
      <div className="py-24 "></div>
      <div className="smoke pb-12">
        <div className={`mx-auto text-center px-12 py-6 ${raleway.className}`}>
          <h1 className="w-full my-2 text-3xl font-bold text-center">
            Waste Stories
          </h1>
          <div className="my-4">
            These are some feedbacks we collected from common people who deal
            with waste daily.
          </div>
        </div>
        <div className="flex pb-12 overflow-x-auto">
          <div className="card">
            <div>
              I do not know when the garbage wala comes. The timing gets really
              annoying
            </div>
            <div className="font-medium mt-6">Tanvi Nagar</div>
            <div className="font-medium">Resident of BTM Layout 2nd Stage</div>
          </div>
          <div className="card">
            <div>
              I do not know when the garbage wala comes. The timing gets really
              annoying
            </div>
            <div className="font-medium mt-6">Tanvi Nagar</div>
            <div className="font-medium">Resident of BTM Layout 2nd Stage</div>
          </div>
          <div className="card">
            <div>
              I do not know when the garbage wala comes. The timing gets really
              annoying
            </div>
            <div className="font-medium mt-6">Tanvi Nagar</div>
            <div className="font-medium">Resident of BTM Layout 2nd Stage</div>
          </div>
          <div className="card">
            <div>
              I do not know when the garbage wala comes. The timing gets really
              annoying
            </div>
            <div className="font-medium mt-6">Tanvi Nagar</div>
            <div className="font-medium">Resident of BTM Layout 2nd Stage</div>
          </div>
          <div className="card">
            <div>
              I do not know when the garbage wala comes. The timing gets really
              annoying
            </div>
            <div className="font-medium mt-6">Tanvi Nagar</div>
            <div className="font-medium">Resident of BTM Layout 2nd Stage</div>
          </div>
          <div className="card">
            <div>
              I do not know when the garbage wala comes. The timing gets really
              annoying
            </div>
            <div className="font-medium mt-6">Tanvi Nagar</div>
            <div className="font-medium">Resident of BTM Layout 2nd Stage</div>
          </div>
          <div className="card">
            <div>
              I do not know when the garbage wala comes. The timing gets really
              annoying
            </div>
            <div className="font-medium mt-6">Tanvi Nagar</div>
            <div className="font-medium">Resident of BTM Layout 2nd Stage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WS;
