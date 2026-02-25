"use client";

import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Programs() {
  const programs = [
    {
      title: "2 Year IIT Program",
      items: ["Class 11 & 12", "2 Years Duration", "Offline & Online Mode"],
    },
    {
      title: "2 Year NEET Program",
      items: ["Class 11 & 12", "2 Years Duration", "Offline & Online Mode"],
    },
    {
      title: "Senior Inter + IIT",
      items: ["Class 12 Integrated", "1 Year Duration", "Offline Mode"],
    },
    {
      title: "Long Term Program",
      items: ["12th Pass / Droppers", "1 Year Duration", "Offline Mode"],
    },
    {
      title: "Crash Course",
      items: ["Class 12 / Droppers", "3 Months Duration", "Online & Offline"],
    },
    {
      title: "Foundation",
      items: ["Class 6 to 10", "1 to 5 Years Duration", "Offline Mode"],
    },
  ];

  return (
    <section className="bg-[#FBFBFA]  md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Programs Offered
        </h2>

        {/* 🔥 MOBILE SCROLL + DESKTOP GRID */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-3">
          {programs.map((prog, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-0 bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition"
            >
              {/* title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5">
                {prog.title}
              </h3>

              {/* features */}
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-red-800" />
                  {prog.items[0]}
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-red-800" />
                  {prog.items[1]}
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-red-800" />
                  {prog.items[2]}
                </div>
              </div>

              {/* button */}
              <button className="mt-6 text-black w-full border border-gray-200 rounded-lg py-3 font-semibold hover:bg-gray-100 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
