"use client";

import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { Menu as MenuButton, X } from "react-feather";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

import Banner from "./components/Banner";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index({ user }) {
  const pathname = usePathname();

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <Banner />
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <svg
                      width="103"
                      height="50"
                      viewBox="0 0 627 369"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M323.896 335.22L419.76 242.971L458.906 320.019L458.907 320.02C463.743 329.536 462.62 340.675 457.531 349.669C452.436 358.674 443.6 365.125 433.484 365.619L433.483 365.619C400.926 367.218 360.104 364.447 322.557 344.382L319.783 341.113L323.896 335.22Z"
                        fill="url(#paint0_linear_269_3)"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M304.104 335.22L208.24 242.971L169.094 320.019L169.093 320.02C164.257 329.536 165.38 340.675 170.469 349.669C175.564 358.674 184.4 365.125 194.516 365.619L194.517 365.619C227.074 367.218 267.896 364.447 305.443 344.382L308.217 341.113L304.104 335.22Z"
                        fill="url(#paint1_linear_269_3)"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M298.129 348C299.403 347.307 300.499 346.298 301.322 345.061C302.146 343.824 302.673 342.394 302.859 340.894C303.045 339.395 302.884 337.87 302.389 336.451C301.894 335.032 301.081 333.76 300.019 332.745L12.3081 55.5594C-10.3573 33.7246 11.9631 -5.14127 40.7949 5.9508L267.877 85.0218C288.831 93.0861 309 113.815 309 139.638V337.912C309.015 339.421 308.465 340.876 307.469 341.959C305.358 344.274 299.964 346.996 298.212 347.956L298.129 348Z"
                        fill="url(#paint2_linear_269_3)"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M328.871 348C327.597 347.307 326.501 346.298 325.678 345.061C324.854 343.824 324.327 342.394 324.141 340.894C323.955 339.395 324.116 337.87 324.611 336.451C325.106 335.032 325.919 333.76 326.981 332.745L614.692 55.5594C637.357 33.7246 615.037 -5.14127 586.205 5.9508L359.123 85.0218C338.169 93.0861 318 113.815 318 139.638V337.912C317.985 339.421 318.535 340.876 319.531 341.959C321.642 344.274 327.036 346.996 328.788 347.956L328.871 348Z"
                        fill="url(#paint3_linear_269_3)"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_269_3"
                          x1="318.971"
                          y1="369"
                          x2="484.318"
                          y2="333.094"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.152251"
                            stopColor="#5433FF"
                            stopOpacity="0.81"
                          ></stop>
                          <stop offset="0.555615" stopColor="#20BDFF"></stop>
                          <stop
                            offset="1"
                            stopColor="#A5FECB"
                            stopOpacity="0.8"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_269_3"
                          x1="309.029"
                          y1="369"
                          x2="143.682"
                          y2="333.094"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.152251"
                            stopColor="#5433FF"
                            stopOpacity="0.81"
                          ></stop>
                          <stop offset="0.555615" stopColor="#20BDFF"></stop>
                          <stop
                            offset="1"
                            stopColor="#A5FECB"
                            stopOpacity="0.8"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_269_3"
                          x1="377"
                          y1="392.5"
                          x2="316.182"
                          y2="-58.371"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.152251"
                            stopColor="#5433FF"
                            stopOpacity="0.81"
                          ></stop>
                          <stop offset="0.555615" stopColor="#20BDFF"></stop>
                          <stop
                            offset="1"
                            stopColor="#A5FECB"
                            stopOpacity="0.8"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_269_3"
                          x1="250"
                          y1="392.5"
                          x2="310.818"
                          y2="-58.371"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.152251"
                            stopColor="#5433FF"
                            stopOpacity="0.81"
                          ></stop>
                          <stop offset="0.555615" stopColor="#20BDFF"></stop>
                          <stop
                            offset="1"
                            stopColor="#A5FECB"
                            stopOpacity="0.8"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "text-gray-900"
                          : "text-gray-500 hover:text-gray-700",
                        "inline-flex items-center px-1 pt-1 font-medium"
                      )}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? <X /> : <MenuButton />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "bg-slate-50 text-slate-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 text-base font-medium"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
