"use client";

import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";

import Curve from "../components/Curve";
import Footer from "../components/Footer";

import { getAllPosts } from "../lib/capi";
import JobCard from "../components/job-card";

import NewcyclMap from "../public/newcycl-map.png";

const Careers = ({ user, allJobs }) => {
  return (
    <>
      <Head>
        <title>Careers | Newcycl</title>

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
          content="https://www.newcycl.com/newcycl-careers-banner.png"
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
          content="https://www.newcycl.com/newcycl-careers-banner.png"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Navbar />
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-28 pb-16 font-source-sans">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-dark tracking-tight leading-none mb-4">
          Come join us, let’s make every throw count.
        </h1>
        <div className="text-sm sm:text-base text-body/70 font-light leading-relaxed max-w-2xl mb-14">
          We are looking for passionate individuals to join us on our journey.
        </div>

        <div className="mt-16 border-t border-emerald-500/10 pt-12">
          <h2 className="text-2xl sm:text-3xl font-black text-ink-dark tracking-tight mb-8">
            Current open roles
          </h2>
          <div className="space-y-6">
            {allJobs.length > 0 ? (
              allJobs.map((job) => <JobCard key={job.slug} job={job} />)
            ) : (
              <p className="text-sm text-body/60 font-light">No positions currently open. Write to us below!</p>
            )}
          </div>
        </div>

        <div className="mt-24 border-t border-emerald-500/10 pt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-ink-dark tracking-tight mb-6">
            Why <span className="text-accent-green">Newcycl</span>?
          </h2>
          <p className="text-base text-body/90 font-light leading-relaxed">
            We provide a purpose to your living by aligning you with a
            meaningful cause. We promise to offer a canvas to unleash your
            untapped potential, allowing you to explore boundless possibilities.
            Whether your aim is to broaden your perspectives or delve deeper
            into a specialized field, Newcycl provides the platform. Here, you
            can play, learn, and create in an environment that nurtures
            innovation and growth.
          </p>
        </div>

        <div className="mt-24 border-t border-emerald-500/10 pt-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-ink-dark tracking-tight mb-4">Where we are?</h2>
          <p className="text-sm text-body/70 font-light mb-8">
            We are located at the heart of the startup hub of Bengaluru
          </p>
          <div className="max-w-lg mx-auto rounded-[2rem] overflow-hidden border border-emerald-500/10 bg-white p-4 shadow-premium">
            <Image
              src={NewcyclMap}
              alt="Newcycl Location Map"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="mt-28 border-t border-emerald-500/10 pt-16 text-center max-w-lg mx-auto">
          <h2 className="text-2xl font-black text-ink-dark tracking-tight mb-2">
            Still not finding your area of expertise?
          </h2>
          <p className="text-sm text-body/70 font-light mb-8">Please write to us!</p>

          <a
            href="mailto:hello@newcycl.com"
            className="inline-block bg-accent-green hover:bg-accent-green-hover text-white font-bold tracking-wider uppercase py-3.5 px-8 rounded-2xl shadow-premium transition duration-200 active:scale-95"
          >
            hello@newcycl.com
          </a>
        </div>
      </div>
      <Curve />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const allJobs = getAllPosts([
    "title",
    "eligible",
    "slug",
    "excerpt",
    "skills",
    "experience"
  ]);

  return {
    props: { allJobs },
  };
};

export default Careers;
