"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaTrophy,
  FaCheckCircle,
  FaStar,
  FaPhone,
  FaWhatsapp,
  FaBookOpen,
  FaChartLine,
  FaUserGraduate,
  FaVideo,
  FaMapMarkerAlt,
  FaMedal,
  FaFire,
  FaBrain,
  FaCalendarAlt,
  FaArrowRight,
  FaAtom,
  FaBolt,
} from "react-icons/fa";
import { MdVerified, MdSpeed } from "react-icons/md";
import { SOCIAL_LINKS } from "@/lib/constants";

const PRIMARY = "#6b1013";
const PRIMARY_LIGHT = "#f9e8e8";

// ── Counter hook ───────────────────────────────────────────────────────────
function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ── InView hook ────────────────────────────────────────────────────────────
function useInView(threshold) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Stat item ──────────────────────────────────────────────────────────────
function StatItem({ value, suffix, label, start }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="text-center p-4">
      <p className="text-4xl font-black" style={{ color: PRIMARY }}>
        {count}
        {suffix}
      </p>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────
const STATS = [
  { value: 36, suffix: "+", label: "Years of Excellence" },
  { value: 4000, suffix: "+", label: "Students Coached" },
  { value: 720, suffix: "+", label: "NEET Top Scorers" },
  { value: 98, suffix: "%", label: "Concept Mastery Rate" },
];

const BATCHES = [
  {
    id: "class11",
    badge: "CLASS 11",
    title: "Class 11 (Junior)",
    subtitle: "Build a Rock-Solid Physics Foundation",
    tag: "1st Year · Starting Fresh",
    days: "3 Days / Week",
    imgSrc: "/courses/neet-physics-11.jpeg",
    imgAlt: "Class 11 NEET Physics Batch",
    popular: false,
    highlights: [
      "Complete NEET Physics Syllabus Year 1",
      "Fundamentals with Concept Clarity",
      "MCQ Practice from Day One",
      "Weekly Tests and Assignments",
      "Doubt Clearing Sessions Included",
    ],
    cta: "Enroll for Class 11",
  },
  {
    id: "class12",
    badge: "CLASS 12",
    title: "Class 12 (Senior)",
    subtitle: "Sharpen Concepts and Crack NEET",
    tag: "2nd Year · Board + NEET",
    days: "3 Days / Week",
    imgSrc: "/courses/neet-physics-12.jpeg",
    imgAlt: "Class 12 NEET Physics Batch",
    popular: true,
    highlights: [
      "Complete NEET Physics Syllabus Year 2",
      "Board + NEET Integrated Preparation",
      "Shortcuts and Problem-Solving Tricks",
      "Previous Year NEET Paper Analysis",
      "Personalized Performance Tracking",
    ],
    cta: "Enroll for Class 12",
  },
  {
    id: "dropper",
    badge: "DROPPERS",
    title: "Droppers Batch",
    subtitle: "Full NEET Preparation — Score Higher",
    tag: "Repeat Aspirants · Intensive",
    days: "6 Days / Week",
    imgSrc: "/courses/neet-physics-dropper.jpeg",
    imgAlt: "Droppers NEET Physics Batch",
    popular: false,
    highlights: [
      "Full NEET Physics Syllabus Revision",
      "Intensive MCQ and Mock Sessions",
      "Rank Improvement Strategy",
      "Previous 10 Years NEET Analysis",
      "One-on-One Doubt Resolution",
    ],
    cta: "Enroll for Droppers Batch",
  },
];

const FEATURES = [
  {
    icon: <FaBrain size={20} />,
    title: "Concept Clarity First",
    desc: "Every topic is taught from scratch with deep understanding before moving to MCQ practice.",
  },
  {
    icon: <FaAtom size={20} />,
    title: "MCQ Practice",
    desc: "Extensive MCQ banks curated from NEET past papers and expected patterns for exam readiness.",
  },
  {
    icon: <FaBolt size={20} />,
    title: "Shortcuts and Problem Solving",
    desc: "Time-saving tricks and smart approaches tailored specifically for NEET Physics questions.",
  },
  {
    icon: <FaChartLine size={20} />,
    title: "Regular Tests",
    desc: "Weekly chapter tests and full-length mock exams with detailed performance feedback.",
  },
  {
    icon: <FaUserGraduate size={20} />,
    title: "Individual Attention",
    desc: "Limited batch size ensures Sir personally resolves every student&apos;s doubts.",
  },
  {
    icon: <FaBookOpen size={20} />,
    title: "Curated Study Material",
    desc: "Handcrafted notes and DPPs refined over 36 years. Precise, purposeful, NEET-focused.",
  },
];

// ── Batch Card ─────────────────────────────────────────────────────────────
function BatchCard({ b, active, onSelect, waLink }) {
  return (
    <div
      onClick={() => onSelect(b.id)}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-200"
      style={{
        border: `2px solid ${active ? PRIMARY : "#e5e7eb"}`,
        boxShadow: active ? "0 8px 24px rgba(107,16,19,0.12)" : "none",
      }}
    >
      {b.popular && (
        <div
          className="text-white text-xs font-bold text-center py-1.5 tracking-wide"
          style={{ background: PRIMARY }}
        >
          MOST POPULAR
        </div>
      )}

      {/* 1:1 image */}
      <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
        <Image src={b.imgSrc} alt={b.imgAlt} fill className="object-cover" />
      </div>

      <div className="p-6">
        <span
          className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-3"
          style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
        >
          {b.tag}
        </span>
        <h3 className="text-xl font-black text-gray-900 mb-1">{b.title}</h3>
        <p className="text-gray-500 text-sm mb-3">{b.subtitle}</p>
        <p
          className="flex items-center gap-1.5 text-sm font-semibold mb-4"
          style={{ color: PRIMARY }}
        >
          <FaCalendarAlt size={13} /> {b.days}
        </p>
        <ul className="space-y-2 mb-5">
          {b.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <FaCheckCircle
                size={13}
                className="mt-0.5 flex-shrink-0"
                style={{ color: PRIMARY }}
              />
              {h}
            </li>
          ))}
        </ul>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white transition hover:opacity-90"
          style={{ background: PRIMARY }}
        >
          {b.cta} <FaArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
export default function NEETPhysicsPage() {
  const [statsRef, statsInView] = useInView(0.3);
  const [floatVisible, setFloatVisible] = useState(false);
  const [activeBatch, setActiveBatch] = useState("class12");

  useEffect(() => {
    const fn = () => setFloatVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const phone = SOCIAL_LINKS.MOBILE;
  const waLink = SOCIAL_LINKS.WHATSAPP;
  return (
    <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200 px-4 py-16 text-center">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-5"
          style={{
            background: PRIMARY_LIGHT,
            color: PRIMARY,
            border: `1px solid ${PRIMARY}33`,
          }}
        >
          <FaMedal /> Mentor of Top NEET Scorers &nbsp;&middot;&nbsp; 36+ Years
          Experience
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 max-w-3xl mx-auto">
          NEET Physics Coaching
          <br />
          <span style={{ color: PRIMARY }}>in Hyderabad</span>
        </h1>

        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
          For Class 11, 12 &amp; Droppers &nbsp;|&nbsp; 36+ Years Experience
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
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
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base border-2 transition"
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

        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Online and Offline Classes",
            "Hyderabad",
            "Limited Seats",
            "Admissions Open",
          ].map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 bg-white border border-gray-200 text-gray-500 text-xs px-3 py-1.5 rounded-full"
            >
              <MdVerified style={{ color: PRIMARY }} /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <section ref={statsRef} className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {STATS.map((s) => (
            <StatItem
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              start={statsInView}
            />
          ))}
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div
            className="flex-shrink-0 rounded-2xl p-8 text-center w-full md:w-56"
            style={{
              background: PRIMARY_LIGHT,
              border: `1px solid ${PRIMARY}22`,
            }}
          >
            <FaTrophy
              size={48}
              className="mx-auto mb-3"
              style={{ color: PRIMARY }}
            />
            <p className="text-3xl font-black text-gray-900">36+</p>
            <p className="text-gray-500 text-sm mt-1">
              Years of Teaching Excellence
            </p>
            <div
              className="mt-4 text-white text-xs font-bold px-3 py-1.5 rounded-full inline-block"
              style={{ background: PRIMARY }}
            >
              Top NEET Scorers Mentored
            </div>
          </div>

          <div className="flex-1">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              About the Mentor
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              P. V. Rama Brahmam Sir
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              At{" "}
              <strong className="text-gray-900">
                RB IIT &amp; NEET Academy
              </strong>
              , we provide specialized NEET Physics coaching for students of{" "}
              <strong className="text-gray-900">
                Class 11, Class 12, and Droppers
              </strong>{" "}
              under the guidance of P. V. Rama Brahmam Sir, who has over{" "}
              <strong style={{ color: PRIMARY }}>
                36+ years of teaching experience
              </strong>
              .
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our program focuses on strong{" "}
              <strong className="text-gray-900">conceptual clarity</strong>, MCQ
              practice, and exam-oriented preparation to help students achieve
              top ranks in NEET. Every session is designed to build confidence
              and ensure no concept is left unclear.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "NEET Physics Expert",
                "Concept-First Method",
                "Hyderabad Based",
                "Online Available",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-lg border"
                  style={{
                    background: PRIMARY_LIGHT,
                    color: PRIMARY,
                    borderColor: `${PRIMARY}33`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BATCHES ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest text-center mb-2"
            style={{ color: PRIMARY }}
          >
            Choose Your Batch
          </p>
          <h2 className="text-3xl font-black text-gray-900 text-center mb-2">
            Three Paths. One Goal &mdash; NEET.
          </h2>
          <p className="text-gray-500 text-center mb-8 max-w-lg mx-auto">
            Select the batch that matches your academic stage.
          </p>

          {/* Tab toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 gap-1 flex-wrap justify-center">
              {BATCHES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBatch(b.id)}
                  className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={
                    activeBatch === b.id
                      ? { background: PRIMARY, color: "#fff" }
                      : { color: "#6b7280" }
                  }
                >
                  {b.badge}
                </button>
              ))}
            </div>
          </div>

          {/* Cards — 3 column grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BATCHES.map((b) => (
              <BatchCard
                key={b.id}
                b={b}
                active={activeBatch === b.id}
                onSelect={setActiveBatch}
                waLink={waLink}
              />
            ))}
          </div>

          {/* Full Course pill */}
          <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-black text-gray-900 text-lg flex items-center gap-2">
                <FaStar style={{ color: PRIMARY }} /> Full Course &mdash; Class
                11 + 12
              </p>
              <p className="text-gray-500 text-sm mt-0.5">
                6 Days / Week &middot; Complete NEET Physics from scratch to
                mastery
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white flex-shrink-0"
              style={{ background: "#25D366" }}
            >
              <FaWhatsapp /> Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest text-center mb-2"
            style={{ color: PRIMARY }}
          >
            Our Method
          </p>
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">
            The RB Teaching Advantage
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="border rounded-xl p-5 hover:shadow-sm transition"
                style={{ borderColor: "#e5e7eb" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${PRIMARY}44`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#e5e7eb")
                }
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: PRIMARY_LIGHT, color: PRIMARY }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODE OF CLASSES ───────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-8">
            Learn Your Way
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <FaMapMarkerAlt
                size={28}
                className="mb-3"
                style={{ color: PRIMARY }}
              />
              <h3 className="font-black text-gray-900 text-lg mb-2">
                Offline Classes
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Face-to-face learning at our Hyderabad centre. Direct
                interaction with Sir for immediate doubt resolution.
              </p>
              <p className="text-sm font-semibold" style={{ color: PRIMARY }}>
                Hyderabad, Telangana
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <FaVideo size={28} className="mb-3" style={{ color: PRIMARY }} />
              <h3 className="font-black text-gray-900 text-lg mb-2">
                Online Classes
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Learn from anywhere in India. Same quality, same personal
                attention &mdash; delivered to your screen.
              </p>
              <p className="text-sm font-semibold" style={{ color: PRIMARY }}>
                Available Pan India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section
        className="py-20 px-4 text-white text-center"
        style={{ background: PRIMARY }}
      >
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase px-4 py-1.5 rounded-full mb-5">
          <FaFire /> Limited Seats &mdash; Admissions Closing Soon
        </span>
        <h2 className="text-4xl font-black mb-4">
          Your NEET Rank Starts <span className="text-yellow-300">Here.</span>
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
          Join thousands of students who trusted P. V. Rama Brahmam Sir&apos;s
          method to crack NEET Physics.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-white font-bold text-lg"
            style={{ background: "#25D366" }}
          >
            <FaWhatsapp size={20} /> WhatsApp to Enroll
          </a>
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-lg border-2 border-white text-white hover:bg-white transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = PRIMARY;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#fff";
            }}
          >
            <FaPhone size={16} /> Call: {phone}
          </a>
        </div>
        <p className="text-white/50 text-sm mt-6">
          Online and Offline &middot; Hyderabad &middot; Pan India Online
        </p>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer className="py-6 px-4 border-t border-gray-200 text-center">
        <p className="font-bold text-gray-800 mb-0.5">
          RB IIT &amp; NEET Academy
        </p>
        <p className="text-gray-500 text-sm">
          NEET Physics Coaching by P. V. Rama Brahmam &middot; Hyderabad
        </p>
        <p className="text-gray-400 text-xs mt-2">
          &copy; {new Date().getFullYear()} RB IIT &amp; NEET Academy. All
          rights reserved.
        </p>
      </footer>

      {/* ── FLOATING CTA ──────────────────────────────────────────── */}
      <div
        className={`fixed bottom-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${floatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
      >
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 max-w-sm w-full mx-4">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-gray-900">
              Admissions Open &mdash; Limited Seats
            </p>
            <p className="text-gray-400 text-xs">
              NEET Physics by P. V. Rama Brahmam Sir
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
    </main>
  );
}
