"use client";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCheck, FaPhone, FaStar, FaWhatsapp } from "react-icons/fa";
const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

export default function IitFoundation() {
  const [floatVisible, setFloatVisible] = useState(false);
  useEffect(() => {
    const fn = () => setFloatVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const phone = SOCIAL_LINKS.MOBILE;
  const waLink = SOCIAL_LINKS.WHATSAPP;
  const syllabus = [
    ["1", "Sets", "Motion in One Dimension", "Atomic Structure"],
    ["2", "Relations", "Newton’s Laws", "Periodic Table"],
    ["3", "Numbers", "Work Energy", "Chemical Bonding"],
    ["4", "Logarithms", "Differentiation", "Mole Concept"],
    ["5", "Equations", "Applications", "Solutions"],
    ["6", "Progressions", "Integration", "Gaseous State"],
    ["7", "Trigonometry", "Vectors", "Organic Chemistry"],
    ["8", "Graphs", "Current Electricity", ""],
    ["9", "Coordinate Geometry", "Optics", ""],
    ["10", "Plane Geometry", "", ""],
    ["11", "Matrices", "", ""],
    ["12", "Binomial Theorem", "", ""],
    ["13", "Functions", "", ""],
  ];

  return (
    <div
      id="page-container"
      className="bg-[#FBFBFA] text-black overflow-x-hidden"
    >
      {/* HERO */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="break-words">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
              IIT / NEET Foundation Crash Course (After 10th)
            </h1>

            <p className="text-gray-600 mt-4 text-sm md:text-base">
              1-month foundation program to build strong concepts and
              problem-solving skills.
            </p>

            {/* Batch Info */}
            <div className="mt-5 bg-white border rounded-lg p-4 shadow-sm text-sm">
              <p>
                📅 <b>Starts:</b> 6th April
              </p>
              <p>
                ⏳ <b>Duration:</b> 40 Days
              </p>
              <p>
                💰 <b>Fee:</b> ₹25,000
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-start mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-base"
                style={{ background: "#25D366" }}
              >
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base border-2 transition hover:text-white"
                style={{ borderColor: PRIMARY, color: PRIMARY }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = PRIMARY;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = PRIMARY;
                }}
              >
                <FaPhone size={16} /> {phone}
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <Image
              src="/courses/iit-foundation-crash.jpeg"
              alt="IIT Foundation"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* BRIDGE COURSE */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Bridge Course + Foundation
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8 text-left">
            {[
              "Bridge academic gaps",
              "Strong concept building",
              "Study material",
              "Regular tests",
              "Mentorship",
              "Exam preparation",
            ].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg border">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center">
            Course Syllabus
          </h2>

          {/* MOBILE SAFE TABLE */}
          <div className="mt-6 w-full overflow-x-auto">
            <div className="min-w-[600px]">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">S.No</th>
                    <th className="p-2">Math</th>
                    <th className="p-2">Physics</th>
                    <th className="p-2">Chemistry</th>
                  </tr>
                </thead>

                <tbody>
                  {syllabus.map((row, i) => (
                    <tr key={i} className="border-t text-center">
                      {row.map((col, j) => (
                        <td key={j} className="p-2 whitespace-nowrap">
                          {col || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-xl md:text-3xl font-bold">Our Results Speak</h2>

        <a href="/result">
          <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg">
            View Results
          </button>
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
          {[
            "Concept building",
            "Problem solving",
            "Daily practice",
            "Doubt clearing",
          ].map((item) => (
            <div key={item} className="flex gap-2 items-center">
              <FaCheck className="text-primary" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <h2 className="text-xl md:text-3xl font-bold">
          Start Your IIT Journey 🚀
        </h2>

        <a href="/contact">
          <button className="mt-4 bg-white text-primary px-6 py-3 rounded-lg">
            Apply Now
          </button>
        </a>
      </section>
      <div
        className={`fixed bottom-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${floatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
      >
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 max-w-sm w-full mx-4">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-gray-900">
              Admissions Open &mdash; Limited Seats
            </p>
            <p className="text-gray-400 text-xs">
              P. V. Rama Brahmam Sir&apos;s IIT/NEET Foundation batch
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-bold text-sm"
            style={{ background: "#25D366" }}
          >
            <FaWhatsapp /> Enroll
          </a>
        </div>
      </div>
    </div>
  );
}
