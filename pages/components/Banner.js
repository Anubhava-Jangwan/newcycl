import React from "react";
import { X } from "react-feather";

export default function Banner() {
  return (
    <div class="z-50 flex justify-between w-full p-4 bg-nc-purple">
      <div class="flex items-center mx-auto">
        <p class="flex items-center text-md text-slate-50">
          <span>Invest in Our Planet - The theme for this Earth Month 🌏</span>
        </p>
      </div>
      <div class="flex items-center">
        <button
          type="button"
          class="flex-shrink-0 inline-flex justify-center items-center text-slate-50 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <X />
          <span class="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}
