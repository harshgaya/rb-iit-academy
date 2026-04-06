"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

export default function RegularTuitions() {
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
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-primary font-semibold mb-2">
            Classroom Programs
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            IIT-JEE (Mains + Advanced) & NEET Coaching
          </h1>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Structured classroom programs designed to build strong concepts,
            improve problem-solving skills, and achieve top ranks in IIT-JEE,
            NEET & Board exams.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
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
      </section>

      {/* IMAGE GRID (4 IMAGES) */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/courses/new2/regular-tution-1.jpeg",
            "/courses/new2/evening_exclusive_2.jpeg",
            "/courses/new2/regular-tution-3.jpeg",
            "/courses/new2/regular-tution-4.jpeg",
          ].map((img, i) => (
            <div key={i} className="relative w-full h-40 md:h-56">
              <Image
                src={img}
                alt="Classroom"
                fill
                className="object-contain rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Complete Coaching for Every Student
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At{" "}
            <span className="font-semibold text-gray-900">
              RB IIT NEET Academy
            </span>
            , we provide both{" "}
            <span className="font-semibold">complete course preparation</span>
            and{" "}
            <span className="font-semibold">subject-wise focused coaching</span>
            .
          </p>

          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              👉{" "}
              <span className="font-semibold text-gray-900">
                All Subjects Coaching:
              </span>
              Full preparation for Physics, Chemistry, and Mathematics/Biology
              aligned with IIT-JEE, NEET & Board exam patterns.
            </p>

            <p>
              👉{" "}
              <span className="font-semibold text-gray-900">
                Individual Subject Coaching:
              </span>
              Strengthen weak subjects with deep concept clarity, targeted
              practice, and expert guidance.
            </p>

            <p>
              👉{" "}
              <span className="font-semibold text-gray-900">
                Flexible Learning:
              </span>
              Choose between{" "}
              <span className="font-semibold">Offline & Online classes</span>
              with{" "}
              <span className="font-semibold">Morning & Evening batches</span>.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="py-10 bg-primary text-white text-center">
        <p className="text-lg md:text-xl font-semibold">
          Strong Fundamentals • Personal Attention • Proven Results
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Offline & Online Classes Available",
            "Morning & Evening Flexible Batches ⭐",
            "Updated Study Material (Latest IIT-JEE & NEET Pattern)",
            "Concept Clarity from Basic to Advanced Level",
            "Regular Tests & Performance Analysis",
            "Limited Batch Size for Personal Attention",
            "Remedial Classes for Weak Students",
            "Special Preparation for JEE Main, Advanced & EAMCET",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                <FaCheck size={12} />
              </span>
              <span className="text-gray-700 font-medium">{item}</span>
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
              "JEE Mains & Advanced Coaching",
              "NEET Physics Coaching",
              "JEE Maths Coaching",
              "JEE Physics Coaching",
            ].map((course) => (
              <div
                key={course}
                className="bg-[#FBFBFA] p-6 rounded-xl border shadow-sm hover:shadow-md transition"
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

          <p className="text-center text-gray-600 mt-8 font-medium">
            Choose Your Batch: Morning or Evening | Study Online or Offline
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Enroll Now</h2>

        <p className="mt-4 text-white/90">
          Limited Seats • Personal Attention • Proven Results
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold shadow-md hover:scale-105 transition">
            Enquire Now
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
              P. V. Rama Brahmam Sir&apos;s IIT NEET Coaaching Programs
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
