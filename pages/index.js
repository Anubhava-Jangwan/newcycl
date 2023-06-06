"use client";

import Head from "next/head";
import dynamic from "next/dynamic";

import Navbar from "../components/Navbar";
import WasteStories from "../components/WasteStories";
import WeHearYou from "../components/WeHearYou";
import AboutTheProduct from "../components/AboutTheProductV2";
import Empowering from "../components/Empowering";
const Earth = dynamic(() => import("../components/Earth"), { ssr: false });
import Curve from "../components/Curve";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Cookie = dynamic(() => import("../components/Cookie"), { ssr: false });

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
      <section className="">
        <Hero />
        <AboutTheProduct />
        <WasteStories />
        <WeHearYou />
        <Empowering />
        <Earth />
      </section>
      <Curve />
      <Cookie />
      <Footer />
    </>
  );
};

export default Index;
