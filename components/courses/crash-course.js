"use client";

import { FaBolt } from "react-icons/fa";

export default function CrashCourses() {
  return (
    <div className="bg-[#FBFBFA]">
      {/* HERO */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-primary font-semibold mb-2">
            Short Term Preparation
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Crash Courses
          </h1>

          <p className="text-gray-600 mt-5">
            Intensive short-term courses designed for students preparing for
            IIT, NEET, EAMCET and other competitive exams after board exams.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "IIT MAINS Crash Course",
              desc: "Focused preparation for IIT-JEE Mains with mock tests after board exams.",
            },
            {
              title: "EAMCET (Engineering)",
              desc: "Complete revision and practice tests for Engineering EAMCET aspirants.",
            },
            {
              title: "EAMCET (Medical)",
              desc: "Crash preparation program for medical stream EAMCET students.",
            },
            {
              title: "NEET Crash Course",
              desc: "Intensive NEET preparation with quick revision and mock tests.",
            },
            {
              title: "BITSAT Crash Course",
              desc: "Special focus on English, logical reasoning and speed-based problem solving.",
            },
            {
              title: "IIT Foundation (After 10th)",
              desc: "1-month foundation program to strengthen basics and problem-solving ability.",
            },
          ].map((course) => (
            <div
              key={course.title}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaBolt className="text-primary" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  {course.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {course.desc}
              </p>

              <a href="/contact">
                <button className="mt-5 bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90">
                  Enquire Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Limited Seats in Crash Batches
        </h2>

        <p className="mt-4 text-white/90">
          Start your preparation with expert guidance and structured revision.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Book Counselling
          </button>
        </a>
      </section>
    </div>
  );
}
