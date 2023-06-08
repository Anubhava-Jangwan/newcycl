"use client";

import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Curve from "../components/Curve";
import Footer from "../components/Footer";

import foodWaste from "../public/foodWaste.jpg";
import soilDegradation from "../public/soilDegradation.jpg";
import costOfLivingCrisis from "../public/costOfLivingCrisis.jpg";

import linearVsCicularGraph from "../public/linear-vs-circular-graph.png";

const Index = ({ user }) => {
  return (
    <>
      <Head>
        <title>Impact</title>
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
        <meta property="twitter:title" content="Impact" />
        <meta
          property="twitter:description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        />
        <meta
          property="twitter:image"
          content="https://www.newcycl.com/newcycl-banner.png"
        />

        <link rel="icon" href="/nc-favicon.ico" sizes="any" />
      </Head>
      <Navbar />
      <div className="relative lg:px-48 pt-24 mx-auto">
        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
          <p className="text-xl italic leading-relaxed text-gray-900">
            “Nutrition is fundamentally a form of energy that can only be
            converted from one form to another. Food, in essence, represents a
            physical manifestation of this energy. However, when we waste food,
            we squander this energy, which transforms into a negative force and
            presents itself in the form of methane emissions, ultimately
            contributing to global warming and taking away life. It is crucial
            that we preserve this energy in its positive form so that it can be
            transformed into a kind of nourishment that gives us life.”{" "}
            <span className="block mt-4 text-nc-purple">
              - Anu Khandelwal, Co-Founder & CEO at Newcycl
            </span>
          </p>
        </blockquote>
        <h1 className="px-12 mt-12 text-5xl leading-none sm:mr-12">
          We are solving 3 problems at once
        </h1>
        <div className="px-12 mt-2 text-lg text-justify leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr my-8 text-center">
            <div className="">
              <Image
                src={foodWaste}
                width={"100%"}
                alt="Food Waste"
                className="w-full"
              />
              <div className="text-sm mt-2 text-gray-500">Food waste</div>
            </div>
            <div className="">
              <Image
                src={soilDegradation}
                width={"100%"}
                alt="Food Waste"
                className="w-full"
              />
              <div className="text-sm mt-2 text-gray-500">Soil degradation</div>
            </div>
            <div className="">
              <Image
                src={costOfLivingCrisis}
                width={"100%"}
                alt="Food Waste"
                className=""
              />
              <div className="text-sm mt-2 text-gray-500">
                Cost of living crisis
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-2 text-lg text-justify leading-relaxed">
          Across the world, we’re experiencing the consequences of
          interconnected crises. The cost of living, food waste crisis, and soil
          pollution top the list. The problems are huge and complex, but what if
          a simple solution could make a big difference? At{" "}
          <span className="mt-4 text-nc-purple">Newcycl</span>, we believe
          everyone deserves to eat healthy and affordable food. Food waste
          stands in the way of both. It affects food quality and quantity. When
          we waste food, it degrades soil that diminishes the quality of the
          harvest. On the other hand, continual degradation of soil affects its
          harvesting capacity which further leads to high food prices. What we
          need to realize is that a circular food system without waste benefits
          everyone in the ecosystem - farmers, suppliers, retailers, consumers,
          and nature. <span className="mt-4 text-nc-purple">Newcycl</span> is
          getting the world closer to that reality.
        </div>
        <h3 className="px-12 mt-12 text-2xl">Some numbers</h3>
        <div className="px-12 mt-2 text-lg text-justify leading-relaxed">
          Food waste is a global problem that happens at every point in the food
          supply chain. However, the majority proportion of this waste occurs at
          the consumer level i.e households.
        </div>
        <div className="px-12 mt-6">
          <div className="relative overflow-x-auto">
            <table className="border border-collapse w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className="px-6 py-3 border border-slate-300">
                    % of food produced wasted in households.
                  </th>
                  <th scope="col" className="px-6 py-3 border border-slate-300">
                    % of GHG (methane) emissions caused by food waste.
                  </th>
                  <th scope="col" className="px-6 py-3 border border-slate-300">
                    % loss of economic value in India due to food waste per year
                  </th>
                  <th scope="col" className="px-6 py-3 border border-slate-300">
                    #1 component in Indian landfills.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-l">
                  <td className="px-6 py-4 border border-slate-300">40%</td>
                  <td className="px-6 py-4 border border-slate-300">10%</td>
                  <td className="px-6 py-4 border border-slate-300">
                    USD 15.19 billion
                  </td>
                  <td className="px-6 py-4 border border-slate-300">
                    Food waste, 40 million tons every year
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h3 className="px-12 mt-12 text-2xl">
          Enrouting your food waste from plate to soil
        </h3>
        <div className="px-12 mt-2 text-lg text-justify leading-relaxed">
          Today, our waste disposing system is primarily a linear economy based
          on take-make-waste model, which assumes our planet has infinite
          resources. In the circular economy however, products are sourced from
          reused, recycled, or renewable non-toxic materials to minimize the
          need for extraction and the use of virgin natural resources, and{" "}
          <span className="mt-4 text-nc-purple">Newcycl</span> is
          institutionalizing such circular system for your kitchen waste to
          enable and strengthen micro circular economies in every household.
        </div>
        <div className="text-center">
          <Image
            src={linearVsCicularGraph}
            alt="Linear vs Circular Graph"
            className="w-full"
          />
          <div className="text-sm -mt-2 text-gray-500">
            Linear Economy vs Circular Economy
          </div>
        </div>
      </div>
      <Curve />
      <Footer />
    </>
  );
};

export default Index;
