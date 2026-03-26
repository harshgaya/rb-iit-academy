"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function Sushruta() {
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
              This programme is specially designed for students who join our
              institute immediately after Class 10 and aspire to become doctors.
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
    </div>
  );
}
