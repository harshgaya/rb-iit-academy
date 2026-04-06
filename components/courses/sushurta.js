"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

export default function Sushruta() {
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
              Integrated Inter + NEET Programme(2 Years)
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sushruta <br />
              <span className="text-primary">Target NEET 2028</span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              {/* This programme is specially designed for students who join our
              institute immediately after Class 10 and aspire to become doctors. */}
              Board (Inter) + NEET + EAMCET in One Structured Program
            </p>

            {/* rating */}
            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-700 text-sm ml-2 font-semibold">
                5/5 Student & Parent Rating
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
              src="/courses/new2/2-year-neet.jpeg"
              alt="NEET coaching"
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

          <p className="text-gray-600 mt-6 leading-relaxed">
            This program is structured in two phases to ensure strong and
            systematic preparation: Phase 1: Foundation Phase (8 Weeks)
            Foundation classes begin for students who join after Class 10. This
            phase focuses on: Strengthening Basic Mathematics required for
            Physics Building fundamental concepts in Physics and Chemistry
            Developing the base required for advanced problem-solving This
            ensures all students reach a strong and uniform foundation.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Phase 2: Main Program (2 Years – Inter + NEET) After completing the
            foundation phase, students enter the main program, which is designed
            to: Complete Inter (Board) syllabus thoroughly Provide structured
            preparation for NEET Build strong concepts in Physics, Chemistry,
            and Biology Train students for national-level competition
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Complete NEET syllabus coverage",
            "Concept-based learning (not rote)",
            "Daily practice & MCQ solving",
            "Weekly tests & rank analysis",
            "Biology intensive preparation",
            "Personal doubt clearing sessions",
            "Board + NEET integrated teaching",
            "Motivation & performance tracking",
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

      {/* STRUCTURE */}
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
                Strong foundation in Physics, Chemistry & Biology with
                integrated board + NEET preparation and weekly tests.
              </p>
            </div>

            <div className="bg-[#FBFBFA] p-6 rounded-xl border shadow-sm">
              <h3 className="font-bold text-lg text-primary">
                Second Year (Class 12)
              </h3>
              <p className="text-gray-600 mt-3">
                Advanced NEET preparation, full syllabus revision, mock tests,
                and exam-oriented training for top medical ranks.
              </p>
            </div>
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
                <b>Course Name:</b> Sushruta
              </p>
              <p>
                <b>Target Exam:</b> NEET 2028
              </p>
              <p>
                <b>Eligibility:</b> Class X passed students
              </p>
              <p>
                <b>Admission:</b> Through screening test
              </p>
              <p>
                <b>Batch Size:</b> Limited seats (small batch)
              </p>
              <p>
                <b>Mode:</b> Classroom program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Start Your Medical Journey Today
        </h2>
        <p className="mt-4 text-white/90">
          Admissions open for NEET 2028 batch. Limited seats only.
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
              P. V. Rama Brahmam Sir&apos;s Target NEET 2028 batch
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
