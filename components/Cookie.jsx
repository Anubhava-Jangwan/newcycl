import React, { useEffect, useState } from "react";
import { X } from "react-feather";

import useCookie from "../hooks/useCookie";

const Cookie = () => {
  const [hideCookie, setHideCookie] = useState(true);
  const [cookie, updateCookie] = useCookie("nck");

  useEffect(() => {
    if (cookie) {
      setHideCookie(true);
    } else {
      setHideCookie(false);
    }
  }, []);

  return (
    <section
      className={`fixed flex items-center justify-between max-w-screen-lg mx-auto bg-ink text-white inset-x-5 p-4 bottom-10 md:w-2/3 rounded-2xl shadow-2xl z-50 ${
        hideCookie ? "hidden" : ""
      }`}
    >
      <p className="ml-4 text-sm text-gray-60">
        By continuing to use this site you consent to the use of cookies in
        accordance with our cookie policy.
      </p>

      <button
        onClick={() => {
          setHideCookie(!hideCookie);
          updateCookie(new Date().getTime(), 365);
        }}
        className="flex-shrink-0 inline-flex justify-center items-center hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
      >
        <X />
      </button>
    </section>
  );
};

export default Cookie;
