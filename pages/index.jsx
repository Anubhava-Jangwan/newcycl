"use client";

import Head from "next/head";
import dynamic from "next/dynamic";

import Navbar from "../components/Navbar";
import Recognisedby from "../components/RecognisedBy";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import LazySection from "../components/LazySection";
import MissionVisionCarousel from "../components/mission-vission";


const AboutTheProduct = dynamic(() => import("../components/AboutTheProductV2"));
const WasteStories = dynamic(() => import("../components/WasteStories"));
const WeHearYou = dynamic(() => import("../components/WeHearYou"));
const Empowering = dynamic(() => import("../components/Empowering"));
const Earth = dynamic(() => import("../components/Earth"));
const Curve = dynamic(() => import("../components/Curve"));
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
        <Impact />
        <Recognisedby />
        <MissionVisionCarousel />
        <LazySection minHeight={360}>
          <AboutTheProduct />
        </LazySection>
        <LazySection minHeight={520}>
          <WasteStories />
        </LazySection>
        <LazySection minHeight={360}>
          <WeHearYou />
        </LazySection>
        <LazySection minHeight={260}>
          <Empowering />
        </LazySection>
        <LazySection minHeight={900}>
          <Earth />
        </LazySection>
      </section>
      <LazySection minHeight={360}>
        <Curve />
      </LazySection>
      <Cookie />
      <Footer />
    </>
  );
};

export default Index;
