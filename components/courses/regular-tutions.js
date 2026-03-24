"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function RegularTuitions() {
  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      {/* HERO */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <div className="text-primary font-semibold mb-2">
              Classroom Programs
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Regular Tuitions
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Structured classroom programs for IIT-JEE, NEET & Board Exams with
              strong conceptual learning and personal attention
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/courses/regular-tution.jpeg"
              alt="Crash course"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed text-center">
            At RB IIT NEET Academy, we offer flexible learning options to suit
            every student’s schedule. 👉 Offline & Online Coaching Available 👉
            Morning & Evening Batch Options Students can choose the batch timing
            that best fits their school/college schedule, ensuring maximum
            learning without stress. Our programs are designed based on the
            latest IIT-JEE, NEET & Board exam patterns, focusing on strong
            fundamentals, concept clarity, and top results.
          </p>

          {/* <p className="text-gray-600 leading-relaxed mt-4 text-center">
            Updated and comprehensive study materials are provided based on the
            latest exam patterns. Our methodology ensures strong conceptual
            clarity from basic level to advanced competition level.
          </p> */}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Offline & Online Classes Available",
            "Morning & Evening Flexible Batches ⭐",
            "Updated study material based on latest IIT-JEE & NEET pattern",
            "Concept clarity from basic to advanced level",
            "Regular tests & performance analysis",
            "Personal attention with limited batch size",
            "Remedial classes for weak students",
            "Special preparation for IIT-JEE Main, Advanced & EAMCET",
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

              "Individual Subject Coaching",
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
            Choose Your Batch: Morning or Evening | Study Online or Offline
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">ENROLL NOW</h2>

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
