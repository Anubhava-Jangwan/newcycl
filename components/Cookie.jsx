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
      className={`fixed flex items-center justify-between max-w-xl mx-auto bg-ink-dark/95 border border-white/10 text-white inset-x-5 p-4 bottom-10 rounded-2xl shadow-premium backdrop-blur-lg z-50 transition-all duration-300 ${
        hideCookie ? "hidden translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <p className="ml-2 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
        By continuing to use this site you consent to the use of cookies in
        accordance with our cookie policy.
      </p>

      <button
        onClick={() => {
          setHideCookie(!hideCookie);
          updateCookie(new Date().getTime(), 365);
        }}
        className="flex-shrink-0 inline-flex justify-center items-center text-white/70 hover:text-white hover:bg-white/10 rounded-xl text-sm p-2 transition duration-200"
      >
        <X size={18} />
      </button>
    </section>
  );
};

export default Cookie;
