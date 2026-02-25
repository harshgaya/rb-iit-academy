"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import Image from "next/image";

export default function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    { number: 130, suffix: "+", label: "IIT SELECTIONS" },
    { number: 128, suffix: "+", label: "NEET SELECTIONS" },
    { number: 250, suffix: "+", label: "MEDICAL ADMISSIONS" },
    { number: 100, suffix: "%", label: "YEAR-WISE CONSISTENCY" },
  ];

  const toppers = [
    {
      img: "/s1.jpg",
      rank: "AIR 36",
      name: "P. Anurag Reddy",
      college: "IIT JEE Advanced",
    },
    {
      img: "/s2.jpg",
      rank: "127",
      name: "Sharath",
      college: "NEET UG",
    },
    {
      img: "/s3.jpg",
      rank: "AIR 94",
      name: "Nikhil",
      college: "EACET",
    },
    {
      img: "/s4.jpg",
      rank: "AIR 1",
      name: "Amrita",
      college: "AEEE",
    },
  ];

  return (
    <section ref={ref} className="bg-[#F3F4F6] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Results That Build Parent Confidence
        </h2>

        {/* 🔥 STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow-sm border"
            >
              <div className="text-2xl md:text-4xl font-bold text-red-900">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2}
                    separator=","
                  />
                )}
                {item.suffix}
              </div>
              <p className="text-xs md:text-sm mt-2 font-semibold text-gray-600 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 TOPPERS */}
        <div className="mt-10">
          {/* mobile scroll */}
          <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible pb-3 md:pb-0">
            {toppers.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[260px] md:min-w-0 bg-white rounded-xl p-6 text-center border shadow-sm"
              >
                <div className="flex justify-center">
                  <Image
                    src={item.img}
                    alt="student"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-4 border-gray-100"
                  />
                </div>

                <h3 className="mt-4 font-bold text-lg text-red-900">
                  {item.rank}
                </h3>

                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.college}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
