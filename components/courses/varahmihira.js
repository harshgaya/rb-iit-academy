"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function VarahamihiraCourse() {
  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO SECTION */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              IIT Long Term Programme
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Varahamihira Program <br />
              <span className="text-primary">Target IIT 2027</span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Specially designed for Class XII completed students (droppers) who
              aim to secure top ranks in IIT-JEE with focused, structured, and
              result-oriented preparation.
            </p>

            {/* Reviews */}
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

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <a href="/contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90">
                  Enroll Now
                </button>
              </a>

              <a href="/contact">
                <button className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Book Counselling
                </button>
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <Image
              src="/courses/1-year-iit.png"
              alt="IIT Long Term Coaching"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Program Overview
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            This program is specially crafted for two types of aspirants:
            students who want to strengthen weak areas despite prior exposure,
            and those who require complete structured preparation with proper
            guidance and mentoring.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            We combine conceptual clarity, exam temperament training, speed,
            accuracy and structured testing to ensure students are fully
            prepared for IIT-JEE (Main + Advanced) and other competitive exams.
          </p>
        </div>
      </section>

      {/* STUDENT TYPES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold text-lg text-primary">
              Type 1: Strengthening Weak Areas
            </h3>
            <p className="text-gray-600 mt-3">
              Students who already have exposure but need focused guidance,
              targeted revision, and correction of conceptual gaps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold text-lg text-primary">
              Type 2: Complete Structured Preparation
            </h3>
            <p className="text-gray-600 mt-3">
              Students who require comprehensive preparation including subject
              mastery, test strategy, time management, and exam temperament.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Complete syllabus coverage in one academic year",
            "Concept-based preparation (not rote learning)",
            "Focus on JEE Main + Advanced",
            "Weekly tests & grand mock tests",
            "Performance evaluation & feedback",
            "Speed, accuracy & exam temperament training",
            "Limited batch size & personal attention",
            "Final test series for exam readiness",
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

      {/* COURSE DETAILS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Course Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>
                <b>Course Name:</b> Varahamihira
              </p>
              <p>
                <b>Target:</b> IIT-JEE 2027
              </p>
              <p>
                <b>Eligibility:</b> Class XII appeared/passed students
              </p>
              <p>
                <b>Admission:</b> Selection Test
              </p>
              <p>
                <b>Course Start:</b> 25 June / 15 July 2026
              </p>
              <p>
                <b>Batch Strength:</b> Limited seats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Make This Year Count. Crack IIT 2027.
        </h2>

        <p className="mt-4 text-white/90">
          Dedicated long-term program for serious aspirants.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Apply for Admission
          </button>
        </a>
      </section>
    </div>
  );
}
