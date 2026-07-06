"use client";

import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "next/image";

import art from "../public/art.png";

const Index = ({ user }) => {
  return (
    <>
      <Head>
        <title>Newcycl | Transform the way you throw waste</title>
        <meta
          name="description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newcycl.com/" />
        <meta
          property="og:title"
          content="Newcycl | Transform the way you throw waste"
        />
        <meta
          property="og:description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        />
        <meta
          property="og:image"
          content="https://www.newcycl.com/newcycl-banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://newcycl.com/" />
        <meta
          property="twitter:title"
          content="Newcycl | Transform the way you throw waste"
        />
        <meta
          property="twitter:description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        />
        <meta
          property="twitter:image"
          content="https://www.newcycl.com/newcycl-banner.png"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Navbar />
      
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-28 pb-16 font-source-sans">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-dark leading-tight tracking-tight mb-12">
          We&rsquo;re on a mission to make zero waste a{" "}
          <span className="text-accent-green font-extrabold">new normal</span>
        </h1>
        
        <div className="space-y-12">
          <div>
            <p className="text-base sm:text-lg text-body/90 font-light leading-relaxed text-left">
              Hey there, we are a small team of engineers and data scientists who
              are super pumped to reduce household waste through{" "}
              <span className="text-ink-dark font-semibold border-b-2 border-accent-green/30 pb-0.5">
                decentralized solutions!
              </span>{" "}
              In this age of the Internet, with{" "}
              <span className="text-ink-dark font-semibold">
                hectic lifestyles and instant gratification
              </span>{" "}
              being the norm, most of our old traditions that were designed to keep{" "}
              <span className="text-ink-dark font-semibold">harmony with nature</span>,
              cannot be practiced in its old form. Notwithstanding this unpleasant
              reality of urban life, we have decided to{" "}
              <span className="text-ink-dark font-semibold border-b-2 border-accent-green/30 pb-0.5">
                unravel the old valuable principles
              </span>{" "}
              in a modern age form.
            </p>
          </div>

          <div className="border-t border-emerald-500/10 pt-10">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-dark mb-4">Our Approach & Vision</h3>
            <p className="text-base sm:text-lg text-body/90 font-light leading-relaxed text-left">
              Our company is harnessing the power of{" "}
              <span className="text-ink-dark font-semibold">
                AI, Technology, and Science
              </span>{" "}
              to create some seriously cool solutions for waste reduction and
              management that eliminates the need of garbage collection for micro
              waste generators i.e. households. We're making the{" "}
              <span className="text-ink-dark font-semibold">
                RRR - Reduce, Reuse, Recycle easier for everyone
              </span>{" "}
              and relentlessly finding new ways to repurpose and reuse waste. It's
              all about making sustainable living accessible to everyone and making{" "}
              <span className="text-ink-dark font-semibold border-b-2 border-accent-green/30 pb-0.5">
                waste reduction a part of our lifestyle.
              </span>
            </p>
          </div>

          <div className="border-t border-emerald-500/10 pt-10">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-dark mb-4">What we Believe</h3>
            <p className="text-base sm:text-lg text-body/90 font-light leading-relaxed text-left">
              We truly believe that the key to success lies in{" "}
              <span className="text-ink-dark font-semibold">
                empowering individuals
              </span>{" "}
              to take control of their own waste and together, we can{" "}
              <span className="text-ink-dark font-semibold border-b-2 border-accent-green/30 pb-0.5">
                make a real difference,
              </span>{" "}
              creating a better future for all of us. And that's something worth
              getting excited about!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-24">
        <div className="flex items-center justify-center rounded-[2rem] overflow-hidden border border-emerald-500/10 bg-white p-4 sm:p-8 shadow-premium">
          <Image
            src={art}
            alt="Newcycl Art Illustration"
            className="w-full h-auto max-w-3xl rounded-2xl object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
