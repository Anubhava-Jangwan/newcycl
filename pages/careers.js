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
      <div className="relative lg:px-48 pt-24 mx-auto">
        <h1 className="px-12 text-5xl leading-none">
          Come join us, let’s make every throw count.
        </h1>
        <div className="px-12 mt-3 mb-4 font-light italic">
          We are looking for 2 interns to join us on our journey.
        </div>

        <div className="mt-12 px-12 text-left">
          <div className="text-2xl font-bold leading-none">
            Current open roles
          </div>
        </div>

        {allJobs.length > 0 && allJobs.map((job) => <JobCard job={job} />)}

        <div className="mt-24 px-12 text-center">
          <div className="text-2xl font-bold leading-none">
            Why <span className="text-nc-purple">Newcycl</span>?
          </div>
          <div className="my-6 leading-6">
            We provide a purpose to your living by aligning you with a
            meaningful cause. We promise to offer a canvas to unleash your
            untapped potential, allowing you to explore boundless possibilities.
            Whether your aim is to broaden your perspectives or delve deeper
            into a specialized field, Newcycl provides the platform. Here, you
            can play, learn, and create in an environment that nurtures
            innovation and growth.
          </div>
        </div>

        <div className="mt-24 px-12 text-center">
          <div className="text-2xl font-bold leading-none">Where we are?</div>
          <div className="my-6 leading-6">
            We are located at the heart of startup hub of Bengaluru
          </div>
          <div className="mt-12 mb-6 px-6 max-w-lg m-auto">
            <Image
              src={NewcyclMap}
              width={"100%"}
              alt="Curve"
              className="w-full"
            />
          </div>
          <div className=""></div>
        </div>

        <div className="mt-36 px-12 text-center">
          <div className="text-2xl font-bold leading-none">
            Still not finding your area of expertise?
          </div>
          <div className="leading-none my-6">Please write to us!</div>

          <a
            href="mailto:hello@newcycl.com"
            className="cursor-pointer w-full bg-nc-purple-900 text-white font-medium py-2 px-4 rounded"
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
