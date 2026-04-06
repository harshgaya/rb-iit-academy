"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

export default function AryabhataCourse() {
  const [floatVisible, setFloatVisible] = useState(false);
  const phone = SOCIAL_LINKS.MOBILE;
  const waLink = SOCIAL_LINKS.WHATSAPP;
  useEffect(() => {
    const fn = () => setFloatVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              2 Year IIT JEE Course (Class 11 + 12)
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Aryabhata Programme <br />
              <span className="text-primary">
                {" "}
                IIT JEE 2028 (Main + Advanced)
              </span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Specially designed integrated programme for Class X to XI moving
              students who aim to secure top ranks in IIT-JEE and national level
              competitive exams.
            </p>

            {/* reviews */}
            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-700 text-sm ml-2 font-semibold">
                5/5 Student Reviews
              </span>
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

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/courses/new2/2-year-iit-aryabhat.jpeg"
              alt="IIT coaching"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* COURSE OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Course Overview
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-center">
            Students coming from different boards and schools often have
            differences in conceptual understanding. To eliminate this gap, we
            begin with a focused 8-week Bridge Program. This phase ensures that
            every student: Builds strong fundamentals Covers essential concepts
            required for IIT-level preparation Reaches a uniform standard for
            advanced learning After this, students enter our 2-Year IIT JEE
            Program (Class 11 & 12), where they are trained rigorously in:
            Advanced concepts Competitive problem-solving JEE Main & Advanced
            pattern practice
          </p>

          {/* <p className="text-gray-600 mt-4 leading-relaxed text-center">
            Students joining immediately after Class X get an 8-week head start,
            enabling them to build confidence, understand JEE pattern, and
            develop a competitive mindset.
          </p> */}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[
            "Early IIT preparation after Class X",
            "Strong foundation in Maths, Physics & Chemistry",
            "Daily practice & problem solving sessions",
            "Conceptual and analytical learning",
            "Regular tests & performance tracking",
            "Personal mentoring & doubt sessions",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                <FaCheck size={12} />
              </span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COURSE STRUCTURE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Course Structure
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FBFBFA] p-6 rounded-xl border shadow-sm">
              <h3 className="font-bold text-lg text-primary">
                First Year (Class 11)
              </h3>
              <p className="text-gray-600 mt-3">
                Complete Class 11 syllabus integrated with IIT-JEE preparation,
                tests, and conceptual learning.
              </p>
            </div>

            <div className="bg-[#FBFBFA] p-6 rounded-xl border shadow-sm">
              <h3 className="font-bold text-lg text-primary">
                Second Year (Class 12)
              </h3>
              <p className="text-gray-600 mt-3">
                Advanced IIT preparation, revision, mock tests, and board exam
                support with continuous performance evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE DETAILS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Course Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>
                <b>Course Name:</b> Aryabhata Programme
              </p>
              <p>
                <b>Target:</b> IIT JEE 2028 (Main + Advanced)
              </p>
              <p>
                <b>Eligibility:</b> Class X appearing/passed students
              </p>
              <p>
                <b>Admission:</b> Through Selection Test replace with Admission
                through Scholarship cum Selection Test
              </p>
              <p>
                <b>Course Start:</b> 25 May / 15 June 2026
              </p>
              <p>
                <b>Batch Size:</b> Limited Seats Only replace with Only 30–40
                Students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Admissions Open for IIT 2028 Batch
        </h2>
        <p className="mt-4 text-white/90">
          Limited seats available. Book counselling now.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Enroll Now
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
              P. V. Rama Brahmam Sir&apos;s Target IIT 2028 Foundation batch
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
