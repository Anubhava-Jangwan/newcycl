"use client";

import Head from "next/head";

import Navbar from "./Navbar";
import WeHearYou from "./WeHearYou";
import AboutTheProduct from "./AboutTheProductV2";
import Empowering from "./Empowering";
import Curve from "./Curve";
import Footer from "./Footer";

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
        {/* <WasteStories /> */}
        <WeHearYou />
        <AboutTheProduct />

        <Empowering />
      </section>
      <Curve />
      <Footer />
    </>
  );
};

export default Index;
