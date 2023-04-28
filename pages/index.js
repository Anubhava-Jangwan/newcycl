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
        <title>Newcycl | Transforming the way people throw waste</title>
        <meta
          name="description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
