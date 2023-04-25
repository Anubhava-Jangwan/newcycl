"use client";

import Head from "next/head";

import Navbar from "./Navbar";
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
      <section className="mt-36">
        <div className="relative px-12 lg:px-48 mx-auto">
          <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
            <h1 className="text-5xl leading-none sm:mr-12">
              We&rsquo;re on a mission to make zero waste a{" "}
              <span className="text-nc-purple">new normal</span>
            </h1>{" "}
            <div className="sm:w-10/12 mt-12">
              <Image src={art} width={"100%"} alt="Art" className="w-full" />
            </div>
          </div>

          <div className="mt-12 text-lg leading-relaxed">
            Hey there, we are a small team of engineers and data scientists who
            are super pumped to reduce household waste through{" "}
            <span className="text-nc-purple font-medium">
              decentralized solutions!
            </span>{" "}
            In this age of the Internet, with{" "}
            <span className="text-nc-purple font-medium">
              hectic lifestyles and instant gratification
            </span>{" "}
            being the norm, most of our old traditions that were designed to
            keep{" "}
            <span className="text-nc-purple font-medium">
              harmony with nature
            </span>
            , cannot be practiced in its old form. Notwithstanding this
            unpleasant reality of urban life, we have decided to{" "}
            <span className="text-nc-purple font-medium">
              unravel the old valuable principles
            </span>{" "}
            in a modern age form.
          </div>

          <h3 className="mt-12 text-2xl">Our Approach & Vision</h3>
          <div className="mt-2 text-lg leading-relaxed">
            Our company is harnessing the power of{" "}
            <span className="text-nc-purple font-medium">
              AI, Technology, and Science
            </span>
            to create some seriously cool solutions for waste reduction and
            management that eliminates the need of garbage collection for micro
            waste generators i.e. households. We're making the{" "}
            <span className="text-nc-purple font-medium">
              RRR - Reduce, Reuse, Recycle easier for everyone
            </span>{" "}
            and relentlessly finding new ways to repurpose and reuse waste. It's
            all about making sustainable living accessible to everyone and
            making{" "}
            <span className="text-nc-purple font-medium">
              waste reduction a part of our lifestyle.
            </span>
          </div>

          <h3 className="mt-12 text-2xl">Our Approach & Vision</h3>
          <div className="mt-2 text-lg leading-relaxed">
            We truly believe that the key to success lies in{" "}
            <span className="text-nc-purple font-medium">
              empowering individuals
            </span>{" "}
            to take control of their own waste and together, we can
            <span className="text-nc-purple font-medium">
              make a real difference,
            </span>{" "}
            creating a better future for all of us. And that's something worth
            getting excited about!
          </div>
        </div>
      </section>
      <Curve />
      <Footer />
    </>
  );
};

export default Index;
