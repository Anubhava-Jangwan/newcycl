"use client";

import Head from "next/head";

import Navbar from "../components/Navbar";
import WasteStories from "../components/WasteStories";
import WeHearYou from "../components/WeHearYou";
import AboutTheProduct from "../components/AboutTheProductV2";
import Empowering from "../components/Empowering";
import Earth from "../components/Earth";
import Curve from "../components/Curve";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Index = ({ user }) => {
  return (
    <>
      <Head>
        <title>Newcycl | Transform the way you throw waste</title>{" "}
        <meta
          name="title"
          content="Newcycl | Transform the way you throw waste"
        />
        <meta
          name="description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/*  */}
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
        {/*  */}
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
      <Footer />
    </>
  );
};

export default Index;
