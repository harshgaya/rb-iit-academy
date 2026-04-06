"use client";
import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

export default function IitMainsCrash() {
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
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              Short Term Intensive Programme
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              IIT JEE Mains Crash Course <br />
              Coaching in Hyderabad – 2026
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Best IIT JEE Mains Coaching in Nallakunta, Hyderabad
            </h2>

            <p className="text-gray-600 mt-5">
              This IIT JEE Mains Crash Course in Hyderabad is designed for
              students aiming to achieve high scores in JEE Main 2026 after
              board exams. At RB IIT NEET Academy, Nallakunta, we provide
              intensive revision, full-length mock tests, and exam-focused
              preparation to help students improve their performance in a short
              time.
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

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/courses/new2/iit-mains-crash.jpeg"
              alt="Crash course"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* COURSE INFO */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Intensive Short Term Coaching
          </h2>

          <div className="text-gray-600 mt-6 leading-relaxed text-left">
            {/* Intro Paragraph */}
            <p>
              This IIT JEE Mains Crash Course Coaching in Hyderabad is an
              intensive short-term programme designed for students preparing for
              JEE Main 2026 after board exams. The course focuses on rapid
              revision, smart preparation, and maximizing performance within a
              limited time.
            </p>

            {/* Key Features */}
            <p className="mt-5 font-medium">👉 What this programme offers:</p>

            <div className="mt-3 space-y-2">
              <p>• Rapid revision of all important concepts</p>
              <p>• Structured problem-solving practice</p>
              <p>• Full-length mock tests based on actual exam pattern</p>
            </div>

            {/* Teaching Approach */}
            <p className="mt-6">
              With a well-planned schedule, our expert faculty focus on clear
              concept revision, shortcut techniques, and practice of important
              and frequently asked questions from previous years.
            </p>

            {/* Outcomes */}
            <p className="mt-5 font-medium">📊 Performance Improvement:</p>

            <div className="mt-3 space-y-2">
              <p>✔️ Improve speed and accuracy</p>
              <p>✔️ Develop strong exam strategy</p>
              <p>✔️ Gain confidence through regular testing</p>
            </div>

            {/* Final Line */}
            <p className="mt-6">
              Through continuous mentoring and focused preparation, we help
              students strengthen their concepts quickly and achieve the best
              possible rank in IIT JEE Mains 2026.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Senior & experienced IIT-JEE faculty",
            "Daily classes (9:00 AM – 5:00 PM)",
            "Regular mock tests after boards",
            "Performance analysis & rank tracking",
            "Full syllabus revision plan",
            "Updated JEE study material provided",
            "Special focus on high-weightage topics",
            "Separate hostel for boys & girls",
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

      {/* DETAILS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#FBFBFA] p-8 rounded-xl border shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Course Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>
                <b>Target:</b> IIT-JEE Mains 2026
              </p>
              <p>
                <b>Eligibility:</b> Class XII (PCM) passed students
              </p>
              <p>
                <b>Course Start:</b> After Board Exams 2026
              </p>
              <p>
                <b>Duration:</b> Till JEE Mains Exam
              </p>
              <p>
                <b>Admission:</b> Direct / Selection
              </p>
              <p>
                <b>Hostel:</b> Available (Boys & Girls)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD JOIN */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Who Should Join
          </h2>

          <p className="text-gray-600 mt-5">
            Students who completed Class XII with PCM and aim to score high
            percentile in IIT-JEE Mains. Ideal for quick revision after boards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Crash Batch Starts Soon
        </h2>

        <p className="mt-4 text-white/90">
          Limited seats. Focused preparation with mock tests.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Apply Now
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
              IIT Mains Crash Course batch
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
