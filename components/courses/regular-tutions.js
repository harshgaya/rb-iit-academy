"use client";

import { FaCheck } from "react-icons/fa";

export default function RegularTuitions() {
  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-primary font-semibold mb-2">
            Classroom Programs
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Regular Tuitions
          </h1>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Structured classroom programs designed for IIT-JEE, NEET and Board
            exam preparation with strong conceptual learning and personal
            attention.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed text-center">
            RB IIT Academy has designed its classroom programme keeping in mind
            the ever-changing pattern of IIT-JEE and competitive exams. Our
            focus is to help students excel in both competitive examinations and
            board exams through structured teaching and continuous assessment.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4 text-center">
            Updated and comprehensive study materials are provided based on the
            latest exam patterns. Our methodology ensures strong conceptual
            clarity from basic level to advanced competition level.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Updated study material based on latest IIT-JEE pattern",
            "Concept clarity from basics to advanced level",
            "Remedial classes for weak students",
            "Regular tests & performance analysis",
            "Special preparation for IIT Mains & CET",
            "Personal attention with limited batch size",
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

      {/* COURSES OFFERED */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Courses Offered
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "IIT JEE (Mains & Advanced) – Junior Inter",
              "IIT JEE (Mains & Advanced) – Senior Inter",
              "BITSAT Preparation",
              "EAMCET Preparation",
              "Individual Subject Coaching",
              "Maths / Physics / Chemistry (Single or All Subjects)",
            ].map((course) => (
              <div
                key={course}
                className="bg-[#FBFBFA] p-6 rounded-xl border shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                    <FaCheck size={12} />
                  </span>
                  <p className="font-semibold text-gray-800">{course}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            Morning & Evening batches available with limited seats.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Admissions Open for Regular Batches
        </h2>

        <p className="mt-4 text-white/90">
          Limited seats. Personal attention. Proven results.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Enquire Now
          </button>
        </a>
      </section>
    </div>
  );
}
