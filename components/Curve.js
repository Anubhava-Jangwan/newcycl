import React from "react";
import Image from "next/image";

import curve from "../public/curve.svg";

const Curve = () => {
  return (
    <div className="mt-24">
      <Image src={curve} width={"100%"} alt="Curve" className="w-full" />
      <div className={`mx-auto text-center px-12 py-24 earth-gradient-bg`}>
        <div className="w-full my-2 text-3xl font-bold text-center pb-12">
          Convert waste to something beautiful.
        </div>
      </div>
    </div>
  );
};

export default Curve;
