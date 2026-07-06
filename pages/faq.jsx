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
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 pt-28 pb-16 font-source-sans">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-dark tracking-tight leading-none mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqJSON.map((faq, index) => {
            return (
              <div key={index} className="p-6 bg-white border border-emerald-500/5 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300">
                <div className="text-lg font-bold text-ink-dark mb-2">{faq.question}</div>
                <div className="text-base text-body/90 font-light leading-relaxed">{faq.answer}</div>
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
