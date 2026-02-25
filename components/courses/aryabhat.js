"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function AryabhataCourse() {
  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              2 Years Inter + IIT Program
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Aryabhata Program <br />
              <span className="text-primary">Target IIT 2028</span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Specially designed integrated program for Class X to XI moving
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

            {/* buttons */}
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

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/courses/arya.webp"
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
            We identify talented students with strong analytical and
            problem-solving abilities and nurture them for IIT & top national
            institutes. This course bridges the gap between school learning and
            IIT-level preparation by strengthening conceptual clarity and
            logical thinking.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed text-center">
            Students joining immediately after Class X get an 8-week head start,
            enabling them to build confidence, understand JEE pattern, and
            develop a competitive mindset.
          </p>
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
                <b>Course Name:</b> Aryabhata Program
              </p>
              <p>
                <b>Target:</b> IIT 2028
              </p>
              <p>
                <b>Eligibility:</b> Class X appearing/passed students
              </p>
              <p>
                <b>Admission:</b> Through Selection Test
              </p>
              <p>
                <b>Course Start:</b> 25 May / 15 June 2026
              </p>
              <p>
                <b>Batch Size:</b> Limited Seats Only
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
    </div>
  );
}
