import React from "react";
import Link from "next/link";
import Image from "next/image";

import facebook from "../public/facebook.svg";
import instagram from "../public/instagram.svg";
import twitter from "../public/twitter.svg";

const Footer = () => {
  return (
    <footer id="footer" className={`px-4 py-8 sm:px-6 lg:px-8`}>
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <Link href="/">
            <svg
              width="69"
              height="40"
              viewBox="0 0 69 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.3402 36.0837L47.1891 25.644L51.6802 34.4835C52.857 36.7992 51.1038 39.8367 48.617 39.9581C45.0063 40.1353 40.4396 39.8287 36.2343 37.5626L35.7261 36.9637L36.3402 36.0837Z"
                fill="url(#paint0_linear_371_5)"
              />
              <path
                d="M31.9338 36.0837L21.085 25.644L16.5939 34.4835C15.417 36.7992 17.1702 39.8367 19.657 39.9581C23.2678 40.1353 27.8345 39.8287 32.0397 37.5626L32.548 36.9637L31.9338 36.0837Z"
                fill="url(#paint1_linear_371_5)"
              />
              <path
                d="M32.3429 37.6986C32.4825 37.6227 32.6026 37.5122 32.6929 37.3765C32.7831 37.2409 32.8409 37.0843 32.8612 36.9199C32.8816 36.7556 32.864 36.5885 32.8098 36.433C32.7556 36.2775 32.6665 36.1381 32.5501 36.0268L1.02007 5.65034C-1.46381 3.25749 0.982261 -1.00178 4.14191 0.213786L29.0276 8.8791C31.324 9.76286 33.5342 12.0345 33.5342 14.8644V36.5931C33.5359 36.7585 33.4756 36.9179 33.3664 37.0366C33.1351 37.2902 32.544 37.5886 32.352 37.6938L32.3429 37.6986Z"
                fill="url(#paint2_linear_371_5)"
              />
              <path
                d="M35.8215 37.6986C35.6819 37.6227 35.5618 37.5122 35.4716 37.3765C35.3813 37.2409 35.3235 37.0843 35.3032 36.9199C35.2828 36.7556 35.3005 36.5885 35.3547 36.433C35.4089 36.2775 35.498 36.1381 35.6144 36.0268L67.1444 5.65034C69.6282 3.25749 67.1822 -1.00178 64.0225 0.213786L39.1368 8.8791C36.8404 9.76286 34.6302 12.0345 34.6302 14.8644V36.5931C34.6285 36.7585 34.6888 36.9179 34.798 37.0366C35.0293 37.2902 35.6204 37.5886 35.8124 37.6938L35.8215 37.6986Z"
                fill="url(#paint3_linear_371_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_371_5"
                  x1="36.0517"
                  y1="40.0002"
                  x2="54.1719"
                  y2="36.0653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.152251"
                    stopColor="#5433FF"
                    stopOpacity="0.81"
                  />
                  <stop offset="0.555615" stopColor="#20BDFF" />
                  <stop offset="1" stopColor="#A5FECB" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_371_5"
                  x1="32.2224"
                  y1="40.0002"
                  x2="14.1021"
                  y2="36.0653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.152251"
                    stopColor="#5433FF"
                    stopOpacity="0.81"
                  />
                  <stop offset="0.555615" stopColor="#20BDFF" />
                  <stop offset="1" stopColor="#A5FECB" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_371_5"
                  x1="40.9863"
                  y1="42.5753"
                  x2="34.3213"
                  y2="-6.83518"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.152251"
                    stopColor="#5433FF"
                    stopOpacity="0.81"
                  />
                  <stop offset="0.555615" stopColor="#20BDFF" />
                  <stop offset="1" stopColor="#A5FECB" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_371_5"
                  x1="27.1781"
                  y1="42.5753"
                  x2="33.8431"
                  y2="-6.83518"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.152251"
                    stopColor="#5433FF"
                    stopOpacity="0.81"
                  />
                  <stop offset="0.555615" stopColor="#20BDFF" />
                  <stop offset="1" stopColor="#A5FECB" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="flex flex-wrap items-center space-x-4 sm:space-x-8">
          &copy; {new Date().getFullYear()} Newcycl - All Rights Reserved
        </div>

        <div className="flex flex-wrap pl-3">
          <div className="mr-6">Get in touch</div>
          <ul className="flex space-x-4 sm:space-x-4">
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/newcyclofficial"
              >
                <Image
                  src={facebook}
                  alt="Follow us on Facebook"
                  width="24"
                  height="24"
                />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://twitter.com/NewcyclOfficial"
              >
                <Image
                  src={twitter}
                  alt="Follow us on Twitter"
                  width="24"
                  height="24"
                />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/newcycl/"
              >
                <Image
                  src={instagram}
                  alt="Follow us on Instagram"
                  width="24"
                  height="24"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
