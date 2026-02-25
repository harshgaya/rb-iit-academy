"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function NeetLongTerm() {
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
              Charaka Program <br />
              <span className="text-primary">Target NEET 2027</span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Intensive long-term NEET preparation program for Class XII
              completed students who aim to secure seats in top medical colleges
              across India.
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
              src="/courses/neet-long-term.png"
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
            Program Overview
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            NEET is one of India’s most competitive medical entrance exams with
            lakhs of aspirants competing for limited government medical seats.
            Our long-term program is designed to give students a structured,
            focused, and result-oriented preparation.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            With expert faculty, strong conceptual training, regular mock tests,
            and personal mentoring, we ensure students are fully prepared to
            crack NEET and secure top medical ranks.
          </p>
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
    </div>
  );
}
