"use client";

import Head from "next/head";

import Navbar from "./Navbar";
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
      <section className="h-screen" />
      <Footer />
    </>
  );
};

export default Index;
