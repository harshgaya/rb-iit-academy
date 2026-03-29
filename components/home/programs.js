"use client";

import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Programs() {
  const programs = [
    {
      title: "Integrated Inter + IIT Programme(2 Years)",
      subtitle: "IIT JEE, BITSAT, EAMCET & Other Engineering Entrances",
      items: ["Class 11 & 12", "2 Years Duration", "Offline Mode"],
      link: "/2-year-iit-course",
    },
    {
      title: "Integrated Inter + NEET Programme(2 Years)",
      items: ["Class 11 & 12", "2 Years Duration", "Offline Mode"],
      link: "/2-year-neet-course",
      subtitle: "Board (Inter) + NEET + EAMCET in One Structured Program",
    },
    {
      title: "Senior Inter + IIT",
      items: ["Class 12 Integrated", "1 Year Duration", "Offline Mode"],
      link: "/senior-inter-iit-program",
      subtitle: "Class 12 + Complete Revision of important class 11 topics",
    },
    {
      title: "IIT Long Term Program",
      items: ["12th Pass / Droppers", "1 Year Duration", "Offline Mode"],
      link: "/iit-longterm-program",
    },
    {
      title: "NEET Long Term Program",
      items: ["12th Pass / Droppers", "1 Year Duration", "Offline Mode"],
      link: "/neet-long-term-course",
    },
    {
      title: "EAMCET / EAPCET Crash Course",
      items: ["Class 12 / Droppers", "40 -50 DAYS", "Offline Mode"],
      link: "/eamcet-neet-crash",
    },
    {
      title: "NEET Crash Course",
      items: ["Class 12 / Droppers", "40 -50 DAYS", "Offline Mode"],
      link: "/neet-crash-course",
    },
    {
      title: "BITSAT Crash Course",
      items: ["Class 12 / Droppers", "40 -50 DAYS", "Offline Mode"],
      link: "/bitsat-crash-course",
    },
    {
      title: "IIT MAINS Crash Course",
      items: ["Class 12 / Droppers", "40 -50 DAYS", "Offline Mode"],
      link: "/iit-mains-crash-course",
    },
    {
      title: "IIT JEE / NEET FOUNDATION ( CLASSES 6 -10)",
      items: ["Class 6 to 10", "1 to 5 Years Duration", "Offline Mode"],
      link: "/foundation-program",
    },

    {
      title:
        "JEE Mains + Advanced & NEET Classes Available for All Subjects or Individual Subjects",
      items: [
        "IIT JEE/Bitsat/Individual Subject Coaching",
        "Till Exam",
        "Offline/Online Mode",
      ],
      link: "/regular-tutions",
    },
    {
      title: "IIT Foundation (After 10th)",
      items: ["IIT JEE", "3 months", "Offline Mode"],
      // items: [
      //   "1-month foundation program to strengthen basics and problem-solving ability.",
      // ],
      link: "/iit-foundation-crash-course",
    },
  ];

  return (
    <section className="bg-[#FBFBFA]  md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Programs Offered
        </h2>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-3">
          {programs.map((prog, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-0 bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {prog.title}
              </h3>
              <p
                className="
              text-black mb-3 text-sm"
              >
                {prog.subtitle}
              </p>

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

              <a href={prog.link}>
                <button className="mt-6 text-black w-full border border-gray-200 rounded-lg py-3 font-semibold hover:bg-gray-100 transition">
                  View Details
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
