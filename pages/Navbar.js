"use client";

import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { Menu as MenuButton, X } from "react-feather";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

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
      <Disclosure
        as="nav"
        className={`bg-white shadow-sm ${raleway.className}`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <svg
                      width="103"
                      height="60"
                      viewBox="0 0 103 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M54.5102 54.1253L70.7835 38.4658L77.5201 51.725C79.2854 55.1985 76.6556 59.7548 72.9254 59.9368C67.5093 60.2027 60.6592 59.7428 54.3514 56.3435L53.589 55.4452L54.5102 54.1253Z"
                        fill="url(#paint0_linear_122_4)"
                      />
                      <path
                        d="M47.9007 54.1253L31.6274 38.4658L24.8908 51.725C23.1255 55.1985 25.7553 59.7548 29.4855 59.9368C34.9016 60.2027 41.7517 59.7428 48.0595 56.3435L48.8219 55.4452L47.9007 54.1253Z"
                        fill="url(#paint1_linear_122_4)"
                      />
                      <path
                        d="M48.5144 56.5479C48.7238 56.434 48.9039 56.2682 49.0393 56.0648C49.1747 55.8614 49.2613 55.6264 49.2919 55.3799C49.3224 55.1334 49.2959 54.8828 49.2146 54.6495C49.1333 54.4162 48.9997 54.2071 48.8251 54.0402L1.5301 8.47551C-2.19571 4.88623 1.47339 -1.50267 6.21287 0.320679L43.5414 13.3186C46.986 14.6443 50.3013 18.0517 50.3013 22.2966V54.8897C50.3039 55.1378 50.2134 55.3769 50.0496 55.5549C49.7027 55.9354 48.816 56.3828 48.528 56.5408L48.5144 56.5479Z"
                        fill="url(#paint2_linear_122_4)"
                      />
                      <path
                        d="M53.7322 56.5479C53.5228 56.434 53.3427 56.2682 53.2073 56.0648C53.0719 55.8614 52.9852 55.6264 52.9547 55.3799C52.9242 55.1334 52.9506 54.8828 53.0319 54.6495C53.1132 54.4162 53.2469 54.2071 53.4215 54.0402L100.716 8.47551C104.442 4.88623 100.773 -1.50267 96.0337 0.320679L58.7052 13.3186C55.2606 14.6443 51.9453 18.0517 51.9453 22.2966V54.8897C51.9427 55.1378 52.0332 55.3769 52.1969 55.5549C52.5439 55.9354 53.4306 56.3828 53.7186 56.5408L53.7322 56.5479Z"
                        fill="url(#paint3_linear_122_4)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_122_4"
                          x1="54.0774"
                          y1="60"
                          x2="81.2578"
                          y2="54.0977"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.152251"
                            stopColor="#5433FF"
                            stopOpacity="0.81"
                          />
                          <stop offset="0.555615" stopColor="#20BDFF" />
                          <stop
                            offset="1"
                            stopColor="#A5FECB"
                            stopOpacity="0.8"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_122_4"
                          x1="48.3335"
                          y1="60"
                          x2="21.1531"
                          y2="54.0977"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.152251"
                            stopColor="#5433FF"
                            stopOpacity="0.81"
                          />
                          <stop offset="0.555615" stopColor="#20BDFF" />
                          <stop
                            offset="1"
                            stopColor="#A5FECB"
                            stopOpacity="0.8"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_122_4"
                          x1="61.4795"
                          y1="63.863"
                          x2="51.482"
                          y2="-10.2528"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.152251"
                            stopColor="#5433FF"
                            stopOpacity="0.81"
                          />
                          <stop offset="0.555615" stopColor="#20BDFF" />
                          <stop
                            offset="1"
                            stopColor="#A5FECB"
                            stopOpacity="0.8"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_122_4"
                          x1="40.7671"
                          y1="63.863"
                          x2="50.7646"
                          y2="-10.2528"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.152251"
                            stopColor="#5433FF"
                            stopOpacity="0.81"
                          />
                          <stop offset="0.555615" stopColor="#20BDFF" />
                          <stop
                            offset="1"
                            stopColor="#A5FECB"
                            stopOpacity="0.8"
                          />
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
                <div className="hidden sm:ml-6 sm:flex sm:items-center"></div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
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
                        ? "bg-slate-50 border-slate-500 text-slate-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
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
