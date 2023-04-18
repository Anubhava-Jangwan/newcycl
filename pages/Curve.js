import React from "react";
import Image from "next/image";

import curve from "../public/curve.svg";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

const Curve = () => {
  return (
    <div className="mt-48">
      <Image src={curve} width={"100%"} alt="Curve" className="w-full" />
      <div
        className={`mx-auto text-center px-12 py-36 earth-gradient-bg ${raleway.className}`}
      >
        <h1 className="w-full my-2 text-3xl font-bold text-center">
          Convert waste to something beautiful.
        </h1>
      </div>
    </div>
  );
};

export default Curve;
