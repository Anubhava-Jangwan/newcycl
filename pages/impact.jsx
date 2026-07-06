"use client";

import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import foodWaste from "../public/mission_vision/foodWaste.jpg";
import soilDegradation from "../public/mission_vision/soilDegradation.jpg";
import costOfLivingCrisis from "../public/mission_vision/costOfLivingCrisis.jpg";

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

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Navbar />
      
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-28 pb-16 font-source-sans">
        <blockquote className="p-8 my-10 border-l-4 border-accent-green bg-white rounded-r-[2rem] shadow-premium">
          <p className="text-lg text-left italic leading-relaxed text-ink-dark font-light mb-6">
            “Nutrition is fundamentally a form of energy that can only be
            converted from one form to another. Food, in essence, represents a
            physical manifestation of this energy. However, when we waste food,
            we squander this energy, which transforms into a negative force and
            presents itself in the form of methane emissions, ultimately
            contributing to global warming and taking away life. It is crucial
            that we preserve this energy in its positive form so that it can be
            transformed into a kind of nourishment that gives us life.”
          </p>
          <cite className="not-italic">
            <span className="block text-accent-green font-bold text-base">Anu Khandelwal</span>
            <span className="text-muted text-xs uppercase tracking-wider font-semibold">
              Co-Founder &amp; CEO at Newcycl
            </span>
          </cite>
        </blockquote>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-dark tracking-tight leading-none mb-6">
          We are solving 3 problems at once
        </h1>
        
        <div className="text-base sm:text-lg text-body/90 font-light leading-relaxed mb-10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-500/5 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
              <Image
                src={foodWaste}
                alt="Food Waste"
                className="w-full h-48 object-cover"
              />
              <div className="text-xs uppercase font-bold tracking-wider text-ink-dark p-4 text-center">Food waste</div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-500/5 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
              <Image
                src={soilDegradation}
                alt="Soil Degradation"
                className="w-full h-48 object-cover"
              />
              <div className="text-xs uppercase font-bold tracking-wider text-ink-dark p-4 text-center">Soil degradation</div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-500/5 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
              <Image
                src={costOfLivingCrisis}
                alt="Cost of Living Crisis"
                className="w-full h-48 object-cover"
              />
              <div className="text-xs uppercase font-bold tracking-wider text-ink-dark p-4 text-center">
                Cost of living crisis
              </div>
            </div>
          </div>
        </div>

        <div className="text-base sm:text-lg text-body/90 font-light leading-relaxed mb-12 text-left space-y-6">
          <p>
            Across the world, we’re experiencing the consequences of
            interconnected crises. The cost of living, food waste crisis, and soil
            pollution top the list. The problems are huge and complex, but what if
            a simple solution could make a big difference? At{" "}
            <span className="text-accent-green font-semibold">Newcycl</span>, we believe
            everyone deserves to eat healthy and affordable food. Food waste
            stands in the way of both. It affects food quality and quantity. When
            we waste food, it degrades soil that diminishes the quality of the
            harvest. On the other hand, continual degradation of soil affects its
            harvesting capacity which further leads to high food prices. What we
            need to realize is that a circular food system without waste benefits
            everyone in the ecosystem - farmers, suppliers, retailers, consumers,
            and nature. <span className="text-accent-green font-semibold">Newcycl</span> is
            getting the world closer to that reality.
          </p>
        </div>

        <div className="border-t border-emerald-500/10 pt-10">
          <h3 className="text-2xl sm:text-3xl font-black text-ink-dark tracking-tight mb-4">Some numbers</h3>
          <p className="text-base text-body/90 font-light leading-relaxed mb-8">
            Food waste is a global problem that happens at every point in the food
            supply chain. However, the majority proportion of this waste occurs at
            the consumer level i.e households.
          </p>

          <div className="overflow-hidden rounded-2xl border border-emerald-500/10 shadow-premium bg-white mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-body">
                <thead className="text-xs uppercase tracking-wider text-muted bg-backdrop font-bold border-b border-emerald-500/10">
                  <tr>
                    <th scope="col" className="px-6 py-4 border-r border-emerald-500/10">
                      % of food produced wasted in households
                    </th>
                    <th scope="col" className="px-6 py-4 border-r border-emerald-500/10">
                      % of GHG (methane) emissions caused by food waste
                    </th>
                    <th scope="col" className="px-6 py-4 border-r border-emerald-500/10">
                      % loss of economic value in India due to food waste per year
                    </th>
                    <th scope="col" className="px-6 py-4">
                      #1 component in Indian landfills
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 border-r border-emerald-500/10 text-ink font-bold text-base">40%</td>
                    <td className="px-6 py-4 border-r border-emerald-500/10 text-ink font-bold text-base">10%</td>
                    <td className="px-6 py-4 border-r border-emerald-500/10 text-ink font-bold text-base">
                      USD 15.19 billion
                    </td>
                    <td className="px-6 py-4 text-ink font-bold text-base">
                      Food waste, 40 million tons every year
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500/10 pt-10">
          <h3 className="text-2xl sm:text-3xl font-black text-ink-dark tracking-tight mb-4">
            Enrouting your food waste from plate to soil
          </h3>
          <p className="text-base text-body/90 font-light leading-relaxed mb-8 text-left">
            Today, our waste disposing system is primarily a linear economy based
            on take-make-waste model, which assumes our planet has infinite
            resources. In the circular economy however, products are sourced from
            reused, recycled, or renewable non-toxic materials to minimize the
            need for extraction and the use of virgin natural resources, and{" "}
            <span className="text-accent-green font-semibold">Newcycl</span> is
            institutionalizing such circular system for your kitchen waste to
            enable and strengthen micro circular economies in every household.
          </p>

          <div className="text-center rounded-[2rem] border border-emerald-500/10 bg-white p-4 sm:p-8 shadow-premium mb-6">
            <Image
              src={linearVsCicularGraph}
              alt="Linear vs Circular Graph"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="text-xs uppercase font-bold tracking-wider text-muted mt-4">
              Linear Economy vs Circular Economy
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
