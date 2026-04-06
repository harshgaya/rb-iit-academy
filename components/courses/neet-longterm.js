"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

export default function NeetLongTerm() {
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
              NEET Long Term Programme
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Charaka Programme <br />
              <span className="text-primary">
                NEET Long Term Coaching in Hyderabad- Target NEET 2027
              </span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              This NEET Long Term Coaching Programme in Hyderabad is specially
              designed for Class XII completed students (droppers) who aim to
              secure top ranks in NEET. At RB IIT NEET Academy, Nallakunta, we
              provide expert guidance, structured preparation, and
              result-oriented training to help students get admission into top
              medical colleges across India.
            </p>

            {/* rating */}
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

          {/* IMAGE */}
          <div>
            <Image
              src="/courses/new2/neet-1-year.jpeg"
              alt="NEET Long Term Coaching"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Programme Overview
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            NEET is one of India’s most competitive medical entrance
            examinations, with lakhs of aspirants competing for limited
            government medical seats. Our NEET Long Term Coaching Programme in
            Hyderabad is designed to provide structured, focused, and
            result-oriented preparation for students aiming to secure top
            medical ranks.
          </p>

          {/* Paragraph + Points */}
          <div className="text-gray-600 mt-6 leading-relaxed text-left">
            <p>
              At RB IIT NEET Academy, Nallakunta, we emphasize strong conceptual
              clarity, regular practice, and continuous performance evaluation.
              With expert faculty, systematic study plans, mock tests, and
              personal mentoring, we ensure students are fully prepared to crack
              NEET with confidence.
            </p>

            <p className="mt-6 font-semibold text-gray-800">
              🔬 Our Unique Approach – Strong Foundation for Physics
            </p>

            <p className="mt-3">
              Many students find Physics difficult in NEET not because of
              concepts alone, but due to a weak foundation in basic Mathematics.
            </p>

            <p className="mt-4 font-medium">
              👉 At our academy, we follow a step-by-step foundation approach:
            </p>

            <div className="mt-3 space-y-2">
              <p>
                • We first teach the required basic Mathematics concepts
                essential for Physics
              </p>
              <p>
                • Then we gradually move to conceptual Physics understanding
              </p>
              <p>
                • Finally, students practice all types of NEET-level problems
                with confidence
              </p>
            </div>

            <p className="mt-5 font-medium">This method helps students:</p>

            <div className="mt-3 space-y-2">
              <p>✔️ Improve problem-solving ability</p>
              <p>✔️ Increase speed and accuracy</p>
              <p>✔️ Handle all models of Physics questions in NEET</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Complete NEET syllabus coverage",
            "Physics, Chemistry & Biology mastery",
            "Concept-based learning & problem solving",
            "Regular tests & performance tracking",
            "Full-length NEET mock exams",
            "Time management & exam strategy",
            "Personal mentoring & doubt sessions",
            "Previous year paper practice",
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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Foundation & Basics",
                desc: "Strong conceptual base for Physics, Chemistry & Biology.",
              },
              {
                title: "Full Syllabus Coverage",
                desc: "Complete NEET syllabus in structured modules.",
              },
              {
                title: "Revision & Grand Tests",
                desc: "5 months dedicated revision & mock tests.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#FBFBFA] p-6 rounded-xl border shadow-sm"
              >
                <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                <p className="text-gray-600 mt-3 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Course Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>
                <b>Course Name:</b> Charaka
              </p>
              <p>
                <b>Target:</b> NEET 2027
              </p>
              <p>
                <b>Eligibility:</b> Class XII passed students
              </p>
              <p>
                <b>Admission:</b> Selection Test
              </p>
              <p>
                <b>Course Start:</b> 25 July / 20 Aug 2026
              </p>
              <p>
                <b>Duration:</b> 12–14 Months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Crack NEET 2027 with Right Guidance
        </h2>

        <p className="mt-4 text-white/90">
          Limited seats available for serious medical aspirants.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Apply for Admission
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
              P. V. Rama Brahmam Sir&apos;s Target NEET 2027 batch
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
