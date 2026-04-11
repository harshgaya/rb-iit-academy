"use client";
import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

export default function FoundationCourse() {
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
              IIT–NEET Foundation Program (Class 6–10)
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Build Strong Concepts <br />
              <span className="text-primary">Achieve Big Dreams</span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Give your child a head start for IIT-JEE & NEET success with
              expert guidance, structured learning, and advanced practice from
              an early stage.
            </p>

            {/* Reviews */}
            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-700 text-sm ml-2 font-semibold">
                Trusted by Students & Parents
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

            <p className="text-red-500 font-semibold mt-4">
              🎯 Limited Seats Available
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/courses/new2/foundation-course.jpeg"
              alt="Foundation course"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* SYLLABUS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Common Core Program
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              For 9th &amp; 10th Entering Students &nbsp;|&nbsp; For 8th
              Students with Strong Basics &amp; 8th Entering Students Also
              Allowed
            </p>
            <p className="mt-1 font-semibold text-gray-700">
              Mathematics + Physics &nbsp;&mdash;&nbsp; IIT &amp; NEET
              Foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MATHEMATICS */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                📐 Mathematics{" "}
                <span className="text-gray-500 font-normal text-sm">
                  (35 Hours)
                </span>
              </h3>
              <div className="w-full overflow-x-auto">
                <div className="min-w-[340px]">
                  <table className="w-full border text-sm">
                    <thead style={{ background: PRIMARY_LIGHT }}>
                      <tr>
                        <th className="p-2 border text-left">S.No</th>
                        <th className="p-2 border text-left">Topic</th>
                        <th className="p-2 border text-center">Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1", "Number Systems + Basics", "5"],
                        ["2", "Algebra", "9"],
                        ["3", "Coordinate Geometry", "4"],
                        ["4", "Trigonometry (Core Concepts)", "6"],
                        ["5", "Plane Geometry", "8"],
                        ["6", "Mixed Problem Solving + Tests", "3"],
                      ].map(([no, topic, hrs]) => (
                        <tr key={no} className="border-t">
                          <td className="p-2 border text-center">{no}</td>
                          <td className="p-2 border">{topic}</td>
                          <td className="p-2 border text-center">{hrs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* PHYSICS */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                ⚡ Physics{" "}
                <span className="text-gray-500 font-normal text-sm">
                  (25 Hours)
                </span>
              </h3>
              <div className="w-full overflow-x-auto">
                <div className="min-w-[340px]">
                  <table className="w-full border text-sm">
                    <thead style={{ background: PRIMARY_LIGHT }}>
                      <tr>
                        <th className="p-2 border text-left">S.No</th>
                        <th className="p-2 border text-left">Topic</th>
                        <th className="p-2 border text-center">Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1", "Motion (Concepts + Graphs)", "5"],
                        ["2", "Vectors (Basics & Applications)", "4"],
                        ["3", "Newton's Laws", "4"],
                        ["4", "Work, Energy & Power", "4"],
                        ["5", "Sound", "4"],
                        ["6", "Heat & Temperature", "4"],
                      ].map(([no, topic, hrs]) => (
                        <tr key={no} className="border-t">
                          <td className="p-2 border text-center">{no}</td>
                          <td className="p-2 border">{topic}</td>
                          <td className="p-2 border text-center">{hrs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* TOTAL */}
          <div className="mt-8 bg-white border rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Total Academic Load
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4 text-gray-700">
              <p>
                📐 Mathematics: <span className="font-semibold">35 Hours</span>
              </p>
              <p>
                ⚡ Physics: <span className="font-semibold">25 Hours</span>
              </p>
            </div>
            <p className="mt-4 font-bold text-lg" style={{ color: PRIMARY }}>
              ✔ Total: 60 Hours
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Complete Core Concepts in Just 60 Hours
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Start Early?
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Building a strong foundation at an early stage helps students
            develop clarity, confidence, and a competitive mindset for IIT-JEE,
            NEET, and Olympiads.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
            {/* Card 1 */}
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900">
                📅 Flexible Weekend Classes
              </h3>
              <p className="text-gray-600 mt-2">
                Classes are conducted on weekends to ensure no pressure on
                school academics.
              </p>
              <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1">
                <li>Saturday: 6:00 PM – 8:00 PM</li>
                <li>Sunday: 10:00 AM – 12:00 Noon</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900">
                📚 Structured Learning Plan
              </h3>
              <p className="text-gray-600 mt-2">
                A well-planned syllabus with clear timelines is provided at
                admission.
              </p>
              <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1">
                <li>Topic-wise schedule</li>
                <li>Defined number of classes</li>
                <li>Step-by-step progression</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900">
                📖 Quality Study Material
              </h3>
              <p className="text-gray-600 mt-2">
                Students receive class-wise study material tailored to their
                level.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900">
                👨‍🏫 Expert Faculty
              </h3>
              <p className="text-gray-600 mt-2">
                Highly experienced teachers focus on concept clarity,
                problem-solving, and analytical thinking.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900">
                📊 Regular Testing & Analysis
              </h3>
              <p className="text-gray-600 mt-2">
                Systematic exams help track performance and identify improvement
                areas.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900">
                🏆 Olympiad & NTSE Preparation
              </h3>
              <p className="text-gray-600 mt-2">
                Special training for national & international competitions to
                build competitive skills early.
              </p>
            </div>

            {/* Card 7 */}
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition md:col-span-2">
              <h3 className="font-semibold text-lg text-gray-900">
                👨‍👩‍👧 Personalized Guidance & Counseling
              </h3>
              <p className="text-gray-600 mt-2">
                Regular sessions with students and parents to improve study
                habits, track progress, and guide performance at home.
              </p>
            </div>
          </div>

          <p className="text-primary font-semibold mt-10 text-lg">
            🚀 Early Foundation = Future Rankers
          </p>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[
            "Concept-based learning in Physics, Chemistry, Maths & Biology",
            "Olympiad & advanced level problem-solving practice",
            "Structured curriculum aligned with CBSE + competitive exams",
            "Weekly tests with detailed performance analysis",
            "Experienced faculty with proven results",
            "Special study material with concept notes & exam questions",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mt-1">
                <FaCheck size={12} />
              </span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Who Can Join?
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="bg-[#FBFBFA] p-6 rounded-xl shadow">
              Class 6–10 Students
            </div>

            <div className="bg-[#FBFBFA] p-6 rounded-xl shadow">
              IIT / NEET Aspirants
            </div>

            <div className="bg-[#FBFBFA] p-6 rounded-xl shadow">
              Olympiad Preparation
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[
            "Proven teaching methodology",
            "Focus on strong concept clarity",
            "Regular mentoring & doubt solving",
            "Result-oriented preparation",
            "Small batch size for personal attention",
            "Continuous progress tracking",
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

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Admissions Open for Foundation Program
        </h2>

        <p className="mt-4 text-white/90">
          Start early and stay ahead in IIT-JEE & NEET preparation.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="tel:9030565621">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold">
              Call Now
            </button>
          </a>

          <a href="/contact">
            <button className="border border-white px-8 py-4 rounded-lg font-bold">
              Enroll Today
            </button>
          </a>
        </div>

        <p className="mt-4 text-yellow-300 font-semibold">
          ⚡ Limited Seats Only
        </p>
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
              IIT NEET Foundation batch for Class 6–10 students
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
