"use client";

import Head from "next/head";

import Navbar from "../components/Navbar";

import Curve from "../components/Curve";
import Footer from "../components/Footer";

import HeroPost from "../components/post-hero";

import { getAllPosts } from "../lib/capi";
import JobCard from "../components/job-card";

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
      <div className="relative lg:px-48 pt-24 mx-auto">
        <h1 className="px-12 text-5xl leading-none">
          Let’s make every throw count.
        </h1>
        <div className="px-12 mt-6 mb-4 font-light">
          We are looking for 2 interns to join us on our journey.
        </div>

        {allJobs.length > 0 && allJobs.map((job) => <JobCard job={job} />)}
      </div>
      <Curve />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const allJobs = getAllPosts(["title", "elgible"]);

  return {
    props: { allJobs },
  };
};

export default Careers;
