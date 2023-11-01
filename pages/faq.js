"use client";

import Head from "next/head";

import Navbar from "../components/Navbar";
import Curve from "../components/Curve";
import Footer from "../components/Footer";

const faqJSON = [
  {
    question: "Q. What are your likes?",
    answer: "A. My likes includes paneer, soybeans, curry, sambhar, dal & rice",
  },
  {
    question: "Q. What are your dislikes?",
    answer: "A. I dislike poop, chicken, fish & milk",
  },
];

const FAQ = ({}) => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta
          name="description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newcycl.com/impact" />
        <meta property="og:title" content="Impact" />
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
        <meta property="twitter:title" content="FAQ" />
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
        <h1 className="px-12 mt-12 text-5xl leading-none sm:mr-12">
          Frequently Asked Questions
        </h1>

        <div className="px-12 mt-6 q-and-a">
          {faqJSON.map((faq) => {
            return (
              <div className="faq my-6">
                <div className="text-xl">{faq.question}</div>
                <div className="text-xl">{faq.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-36"></div>
      <Curve />
      <Footer />
    </>
  );
};

export default FAQ;
