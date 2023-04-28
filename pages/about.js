"use client";

import Head from "next/head";

import Navbar from "../components/Navbar";
import Curve from "./Curve";
import Footer from "./Footer";

import Image from "next/image";

import art from "../public/art.png";

const Index = ({ user }) => {
  return (
    <>
      <Head>
        <title>About Newcycl | Transforming the way people throw waste</title>
        <meta
          name="description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="hero-gradient relative lg:px-48 pt-24 mx-auto">
        <h1 className="px-12 text-5xl leading-none sm:mr-12">
          We&rsquo;re on a mission to make zero waste a{" "}
          <span className="text-nc-purple">new normal</span>
        </h1>
        <div className="px-12 mt-12 text-lg text-justify leading-relaxed">
          Hey there, we are a small team of engineers and data scientists who
          are super pumped to reduce household waste through{" "}
          <span className="text-nc-purple font-bold">
            decentralized solutions!
          </span>{" "}
          In this age of the Internet, with{" "}
          <span className="text-nc-purple font-bold">
            hectic lifestyles and instant gratification
          </span>{" "}
          being the norm, most of our old traditions that were designed to keep{" "}
          <span className="text-nc-purple font-bold">harmony with nature</span>,
          cannot be practiced in its old form. Notwithstanding this unpleasant
          reality of urban life, we have decided to{" "}
          <span className="text-nc-purple font-bold">
            unravel the old valuable principles
          </span>{" "}
          in a modern age form.
        </div>
        <h3 className="px-12 mt-12 text-2xl">Our Approach & Vision</h3>
        <div className="px-12 mt-2 text-lg text-justify leading-relaxed">
          Our company is harnessing the power of{" "}
          <span className="text-nc-purple font-bold">
            AI, Technology, and Science
          </span>{" "}
          to create some seriously cool solutions for waste reduction and
          management that eliminates the need of garbage collection for micro
          waste generators i.e. households. We're making the{" "}
          <span className="text-nc-purple font-bold">
            RRR - Reduce, Reuse, Recycle easier for everyone
          </span>{" "}
          and relentlessly finding new ways to repurpose and reuse waste. It's
          all about making sustainable living accessible to everyone and making{" "}
          <span className="text-nc-purple font-bold">
            waste reduction a part of our lifestyle.
          </span>
        </div>
        <h3 className="px-12 mt-12 text-2xl">What we Believe</h3>
        <div className="px-12 mt-2 text-lg text-justify leading-relaxed">
          We truly believe that the key to success lies in{" "}
          <span className="text-nc-purple font-bold">
            empowering individuals
          </span>{" "}
          to take control of their own waste and together, we can{" "}
          <span className="text-nc-purple font-bold">
            make a real difference,
          </span>{" "}
          creating a better future for all of us. And that's something worth
          getting excited about!
        </div>
      </div>
      <div className="lg:px-48 mt-36">
        <div className="flex items-center justify-center mt-12">
          <Image
            src={art}
            width={"100%"}
            alt="Art"
            className="sm:w-8/12 w-11/12"
          />
        </div>
      </div>

      <Curve />
      <Footer />
    </>
  );
};

export default Index;
