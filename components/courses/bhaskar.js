"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

export default function BhaskaraCourse() {
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
              Senior Inter + IIT Programme
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Bhaskara Programme <br />
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

          {/* IMAGE */}
          <div>
            <Image
              src="/courses/new2/senior-iit.jpeg"
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
            Programme Overview
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            This programme is specially designed for students who feel they have
            not fully utilized Class 11 and want to rebuild strong conceptual
            foundations for IIT-JEE. Through a structured and result-oriented
            approach, we help students: Identify and bridge learning gaps
            Strengthen core concepts Improve problem-solving skills 👉 Along
            with the Class 12 syllabus, we systematically revise and strengthen
            key and challenging topics from Class 11 to ensure a strong
            foundation. With expert faculty support, regular assessments, and
            strategic preparation, students are trained to achieve their best
            performance in IIT-JEE, BITSAT, EAMCET, and other competitive exams.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Through a structured and result-oriented approach, we help students:
            Identify and bridge learning gaps Strengthen core concepts Improve
            problem-solving skills 👉 Along with the Class 12 syllabus, we
            systematically revise and strengthen key and challenging topics from
            Class 11 to ensure a strong foundation. With expert faculty support,
            regular assessments, and strategic preparation, students are trained
            to achieve their best performance in IIT-JEE, BITSAT, EAMCET, and
            other competitive exams.
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
      <div
        className={`fixed bottom-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${floatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
      >
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 max-w-sm w-full mx-4">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-gray-900">
              Admissions Open &mdash; Limited Seats
            </p>
            <p className="text-gray-400 text-xs">
              P. V. Rama Brahmam Sir&apos;s Target IIT 2027 batch
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
