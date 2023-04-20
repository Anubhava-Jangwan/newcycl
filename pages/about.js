"use client";

import Head from "next/head";

import Navbar from "./Navbar";
import Curve from "./Curve";
import Footer from "./Footer";

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
          <h1 className="text-5xl leading-none">
            We&lsquo;re on a mission to make zero waste a <br />
          </h1>
          <h1 className="text-5xl leading-none">
            <span className="text-nc-purple">new normal</span>
          </h1>

          <div className="mt-12 text-lg leading-relaxed">
            Hey there, we are a small team of engineers and data scientists who
            are super pumped to reduce household waste through decentralized
            solutions! Honestly, we&lsquo;re pretty obsessed with it. We started
            Newcycl when we realized just how much waste we produce and how
            it&lsquo;s wrecking our environment. It&lsquo;s crazy to think that
            all that trash is impacting our soil, air, water, and ultimately us.
          </div>

          <h3 className="mt-12 text-2xl">The grave waste problem</h3>
          <div className="mt-2 text-lg leading-relaxed">
            Most garbage collection systems in use today are manual and perform
            pick-ups that are either unnecessary or tardy. Unnecessary pickups
            increase{" "}
            <a
              className="text-blue-400 underline"
              target="_blank"
              href="https://wastehero.io/newsroom/6-major-benefits-of-iot-waste-management-for-smart-cities/"
            >
              annual collection expenses by 70%
            </a>
            . Moreover, frequent route congestions, which often results from
            ineffective route planning, also raise the volume of fuel consumed
            to carry out the collections. The whole process contributes to an{" "}
            <a
              className="text-blue-400 underline"
              target="_blank"
              href="https://wastehero.io/newsroom/6-major-benefits-of-iot-waste-management-for-smart-cities/"
            >
              increase in carbon footprint by 50%
            </a>
            .<h3 className="mt-12 text-2xl">Our Vision</h3>
            <div className="mt-2 text-lg leading-relaxed">
              But that&lsquo;s where we come in. Our company is harnessing the
              power of technology to create some seriously cool solutions for
              waste reduction and management that eliminates the need of garbage
              collection for micro waste generators i.e. households. We&lsquo;re
              making the{" "}
              <span className="text-nc-purple font-medium">
                RRR - Reduce, Reuse, Recycle
              </span>{" "}
              easier for everyone and relentlessly finding new ways to repurpose
              and reuse waste. It&lsquo;s all about making sustainable living
              accessible to everyone and make waste reduction a part of our
              lifestyle. We truly believe that the key to success lies in
              empowering individuals to take control of their own waste and
              together, we can make a real difference. It&lsquo;s not just about
              making the world a better place, it&lsquo;s about creating a
              better future for all of us. And that&lsquo;s something worth
              getting excited about!
            </div>
          </div>
        </div>
      </section>
      <Curve />
      <Footer />
    </>
  );
};

export default Index;
