"use client";

import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const featuredPrograms = [
  {
    badge: "Most Popular",
    title: "Integrated Inter + IIT Programme",
    subtitle: "IIT JEE, BITSAT, EAMCET & Other Engineering Entrances",
    items: ["Class 11 & 12", "2 Years Duration", "Offline Mode"],
    link: "/2-year-iit-course",
    watermark: "IIT",
  },
  {
    badge: "Top Rated",
    title: "Integrated Inter + NEET Programme",
    subtitle: "Board (Inter) + NEET + EAMCET in One Structured Program",
    items: ["Class 11 & 12", "2 Years Duration", "Offline Mode"],
    link: "/2-year-neet-course",
    watermark: "NEET",
  },
  {
    badge: "Recommended",
    title: "Senior Inter + IIT",
    subtitle: "Class 12 + Complete Revision of important Class 11 topics",
    items: ["Class 12 Integrated", "1 Year Duration", "Offline Mode"],
    link: "/senior-inter-iit-program",
    watermark: "JEE",
  },
];

const otherPrograms = [
  {
    title: "IIT /NEET Foundation Program (After 10th)",
    items: [
      "Designed for CBSE / ICSE / State Board Students",
      "Build Strong Concepts for IIT JEE",
      "Offline Mode",
    ],
    link: "/iit-foundation-crash-course",
  },
  {
    title: "IIT Maths",
    items: [
      "IIT Maths (JEE Mains & Advanced)",
      "Get Top Ranks in IIT JEE with our Specialized Maths Program",
      "Online/Offline Mode",
    ],
    link: "/iit-maths",
  },
  {
    title: "NEET Physics Mastery",
    items: [
      "Advanced Physics Program for NEET Excellence",
      "Concept-to-Rank Approach with Deep Problem Solving",
      "Hybrid Learning: Online + Classroom Experience",
    ],
    link: "/neet-physics",
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
    items: ["Class 12 / Droppers", "40–50 Days", "Offline Mode"],
    link: "/eamcet-crash-course",
  },
  {
    title: "NEET Crash Course",
    items: ["Class 12 / Droppers", "40–50 Days", "Offline Mode"],
    link: "/neet-crash-course",
  },
  {
    title: "BITSAT Crash Course",
    items: ["Class 12 / Droppers", "40–50 Days", "Offline Mode"],
    link: "/bitsat-crash-course",
  },
  {
    title: "IIT MAINS Crash Course",
    items: ["Class 12 / Droppers", "40–50 Days", "Offline Mode"],
    link: "/iit-mains-crash-course",
  },
  {
    title: "IIT JEE / NEET FOUNDATION (Classes 6–10)",
    items: ["Class 6 to 10", "1 to 5 Years Duration", "Offline Mode"],
    link: "/foundation-program",
  },
  {
    title: "JEE Mains + Advanced & NEET — All or Individual Subjects",
    items: [
      "IIT JEE / BITSAT / Individual Subject Coaching",
      "Till Exam",
      "Offline/Online Mode",
    ],
    link: "/iit-jee-and-neet-coaching",
  },
];

export default function Programs() {
  return (
    <section className="bg-[#FBFBFA] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <p className="text-center text-xs font-semibold tracking-[3px] uppercase text-[#9a7b2c] mb-1">
          Our Programmes
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Programs Offered
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8">
          Start with our most selected programs below
        </p>

        {/* ── FEATURED CARDS (first 3) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {featuredPrograms.map((prog, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl p-6 flex flex-col"
              style={{
                background: "#3d0a0c",
                border: "1px solid #6b1013",
              }}
            >
              {/* Gold top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, #b8872a, #f0c84a, #b8872a)",
                }}
              />

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1 mb-4"
                style={{ background: "#1a0405", border: "1px solid #9a7b2c" }}
              >
                <span
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{ background: "#f0c84a" }}
                />
                <span
                  className="text-[10px] font-semibold tracking-[1.5px] uppercase"
                  style={{ color: "#e0aa3e" }}
                >
                  {prog.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {prog.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: "#d4a0a0" }}
              >
                {prog.subtitle}
              </p>

              {/* Divider */}
              <hr className="mb-4" style={{ borderColor: "#5a1215" }} />

              {/* Items */}
              <div className="space-y-3 flex-1">
                {[
                  { icon: <FaGraduationCap />, text: prog.items[0] },
                  { icon: <FaCalendarAlt />, text: prog.items[1] },
                  { icon: <FaMapMarkerAlt />, text: prog.items[2] },
                ].map(({ icon, text }, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "#f0d0d0" }}
                  >
                    <span
                      className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 text-[10px]"
                      style={{ background: "#5a1215", color: "#f0c84a" }}
                    >
                      {icon}
                    </span>
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a href={prog.link} className="mt-6 block">
                <button
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #b8872a, #e0aa3e)",
                    color: "#1a0405",
                  }}
                >
                  Enroll Now <HiArrowRight className="text-base" />
                </button>
              </a>

              {/* Ghost watermark text */}
              <span
                className="absolute -bottom-3 -right-2 text-[80px] font-bold pointer-events-none select-none leading-none"
                style={{ color: "rgba(255,255,255,0.03)", fontFamily: "serif" }}
              >
                {prog.watermark}
              </span>
            </div>
          ))}
        </div>

        {/* ── OTHER PROGRAMS (regular cards) ── */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          {otherPrograms.map((prog, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug">
                {prog.title}
              </h3>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-[#6b1013] flex-shrink-0" />
                  {prog.items[0]}
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#6b1013] flex-shrink-0" />
                  {prog.items[1]}
                </div>
                {prog.items[2] && (
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#6b1013] flex-shrink-0" />
                    {prog.items[2]}
                  </div>
                )}
              </div>

              <a href={prog.link}>
                <button className="mt-4 w-full border border-gray-200 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
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
