"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function BhaskaraCourse() {
  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              Senior Inter IIT Programme
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Bhaskara Program <br />
              <span className="text-primary">Target IIT 2027</span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Specially designed for students moving from Class XI to XII who
              want to strengthen concepts, improve problem-solving ability and
              secure top ranks in IIT-JEE and national level engineering exams.
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

            {/* buttons */}
            <div className="flex gap-3 mt-6">
              <a href="/contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90">
                  Enroll Now
                </button>
              </a>

              <a href="/contact">
                <button className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Talk to Counsellor
                </button>
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <Image
              src="/courses/senior.webp"
              alt="IIT coaching"
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
            Program Overview
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            This program is designed for students who feel they have not fully
            utilized Class 11 and want to rebuild strong conceptual foundations
            before IIT-JEE. With personalized attention and structured learning,
            we help students bridge knowledge gaps and improve performance.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Our faculty provides focused guidance, regular assessments, and
            strategic preparation to ensure students achieve their full
            potential in IIT-JEE, BITSAT, EAMCET and other competitive exams.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Completion of Class 12 syllabus with IIT focus",
            "Revision of Class 11 core concepts",
            "Weekly tests & performance analysis",
            "Mock tests & grand tests",
            "Focus on high-weightage topics",
            "Personal mentoring & doubt clearing",
            "Time management & exam strategies",
            "Balanced approach for board + JEE",
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
            Course Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Concept Strengthening",
                desc: "Identify weak areas and rebuild strong fundamentals.",
              },
              {
                title: "Regular Testing",
                desc: "Weekly tests, cumulative exams & mock tests.",
              },
              {
                title: "Strategic Preparation",
                desc: "Focus on scoring topics and exam strategy.",
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
                <b>Course Name:</b> Bhaskara
              </p>
              <p>
                <b>Target:</b> IIT-JEE 2027
              </p>
              <p>
                <b>Eligibility:</b> Class XI passed students
              </p>
              <p>
                <b>Admission:</b> Selection based
              </p>
              <p>
                <b>Course Start:</b> 25 Apr / 10 May 2026
              </p>
              <p>
                <b>Batch Size:</b> Limited seats only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Prepare Smart for IIT 2027
        </h2>

        <p className="mt-4 text-white/90">
          Limited seats available. Start focused preparation today.
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
