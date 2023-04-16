import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={`px-4 py-8 sm:px-6 lg:px-8 ${raleway.className}`}>
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <svg
            width="86"
            height="50"
            viewBox="0 0 86 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.4253 45.1043L58.9863 32.0547L64.6002 43.104C66.0713 45.9986 63.8798 49.7955 60.7713 49.9472C56.2578 50.1688 50.5494 49.7855 45.2929 46.9528L44.6576 46.2042L45.4253 45.1043Z"
              fill="url(#paint0_linear_146_266)"
            />
            <path
              d="M39.9172 45.1043L26.3562 32.0547L20.7423 43.104C19.2713 45.9986 21.4627 49.7955 24.5713 49.9472C29.0847 50.1688 34.7931 49.7855 40.0496 46.9528L40.6849 46.2042L39.9172 45.1043Z"
              fill="url(#paint1_linear_146_266)"
            />
            <path
              d="M40.4287 47.1233C40.6032 47.0283 40.7533 46.8902 40.8661 46.7207C40.9789 46.5512 41.0511 46.3553 41.0766 46.1499C41.102 45.9445 41.08 45.7357 41.0122 45.5412C40.9445 45.3468 40.8331 45.1726 40.6876 45.0335L1.27509 7.06293C-1.82976 4.07186 1.22783 -1.25223 5.17739 0.267233L36.2845 11.0989C39.155 12.2036 41.9178 15.0431 41.9178 18.5805V45.7414C41.9199 45.9482 41.8445 46.1474 41.708 46.2958C41.4189 46.6128 40.68 46.9857 40.44 47.1173L40.4287 47.1233Z"
              fill="url(#paint2_linear_146_266)"
            />
            <path
              d="M44.7768 47.1233C44.6023 47.0283 44.4522 46.8902 44.3394 46.7207C44.2265 46.5512 44.1543 46.3553 44.1289 46.1499C44.1034 45.9445 44.1255 45.7357 44.1932 45.5412C44.261 45.3468 44.3724 45.1726 44.5179 45.0335L83.9304 7.06293C87.0352 4.07186 83.9776 -1.25223 80.0281 0.267233L48.921 11.0989C46.0504 12.2036 43.2877 15.0431 43.2877 18.5805V45.7414C43.2856 45.9482 43.3609 46.1474 43.4974 46.2958C43.7865 46.6128 44.5254 46.9857 44.7654 47.1173L44.7768 47.1233Z"
              fill="url(#paint3_linear_146_266)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_146_266"
                x1="45.0646"
                y1="49.9999"
                x2="67.7149"
                y2="45.0813"
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
                id="paint1_linear_146_266"
                x1="40.2779"
                y1="49.9999"
                x2="17.6276"
                y2="45.0813"
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
                id="paint2_linear_146_266"
                x1="51.2329"
                y1="53.2192"
                x2="42.9016"
                y2="-8.54397"
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
                id="paint3_linear_146_266"
                x1="33.9726"
                y1="53.2192"
                x2="42.3038"
                y2="-8.54397"
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
                <Facebook />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://twitter.com/NewcyclOfficial"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/newcycl/"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
