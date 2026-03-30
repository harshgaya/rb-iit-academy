import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function IitFoundation() {
  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              Foundation Programme
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              IIT / NEET Foundation Crash Course (After 10th)
            </h1>

            <p className="text-gray-600 mt-5">
              1-month foundation program to strengthen basics and develop strong
              problem-solving skills for future IIT-JEE preparation.
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
            <div className="flex gap-3 mt-6">
              <a href="/contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90">
                  Enroll Now
                </button>
              </a>

              <a href="/contact">
                <button className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Talk to Counsellor
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/courses/iit-foundation-crash.jpeg"
              alt="IIT Foundation"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="bridge-course-section" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2
            id="bridge-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Bridge Course + Foundation for IIT / NEET After 10th
          </h2>

          {/* Subtitle */}
          <p
            id="bridge-subtitle"
            className="text-gray-600 mt-4 max-w-3xl mx-auto"
          >
            A specially designed crash course to strengthen fundamentals and
            prepare students for IIT JEE & NEET with confidence.
          </p>

          {/* Points Grid */}
          <div
            id="bridge-points"
            className="grid md:grid-cols-2 gap-6 mt-10 text-left"
          >
            {/* Point 1 */}
            <div
              id="point-gap"
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Bridge Academic Gaps
              </h3>
              <p className="text-gray-600 text-sm">
                Covers missing concepts from different boards and ensures a
                strong foundation in Physics, Chemistry, Mathematics, and
                Biology.
              </p>
            </div>

            {/* Point 2 */}
            <div
              id="point-foundation"
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Strong Concept Building
              </h3>
              <p className="text-gray-600 text-sm">
                Focus on conceptual clarity and deep understanding required for
                competitive exams like IIT JEE and NEET.
              </p>
            </div>

            {/* Point 3 */}
            <div
              id="point-material"
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Structured Study Material
              </h3>
              <p className="text-gray-600 text-sm">
                Well-designed notes and practice material to support learning
                and improve problem-solving skills.
              </p>
            </div>

            {/* Point 4 */}
            <div
              id="point-tests"
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Regular Tests & Analysis
              </h3>
              <p className="text-gray-600 text-sm">
                Frequent tests to track progress, identify weak areas, and
                improve performance with proper feedback.
              </p>
            </div>

            {/* Point 5 */}
            <div
              id="point-guidance"
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Personal Guidance & Mentorship
              </h3>
              <p className="text-gray-600 text-sm">
                Expert mentoring and counseling to help students stay focused,
                motivated, and on the right track.
              </p>
            </div>

            {/* Point 6 */}
            <div
              id="point-confidence"
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Exam-Level Preparation
              </h3>
              <p className="text-gray-600 text-sm">
                Training in analytical thinking and problem-solving to handle
                any type of competitive exam question confidently.
              </p>
            </div>
          </div>

          {/* Bottom Description */}
          <p
            id="bridge-description"
            className="text-gray-600 mt-10 max-w-3xl mx-auto"
          >
            This course transforms students from basic school-level
            understanding to competitive exam readiness by strengthening
            concepts, improving practice, and building confidence for IIT JEE
            and NEET success.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Concept building from basics",
            "Introduction to IIT-level problem solving",
            "Daily practice sessions",
            "Doubt clearing by expert faculty",
            "Focus on logical thinking & fundamentals",
            "Structured study material provided",
            "Regular tests & performance tracking",
            "Motivation & study guidance sessions",
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
                <b>Target:</b> IIT-JEE Foundation
              </p>
              <p>
                <b>Eligibility:</b> After Class 10
              </p>
              <p>
                <b>Course Duration:</b> 1 Month
              </p>
              <p>
                <b>Course Start:</b> After Board Exams
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
            Students who have completed Class 10 and want to start early
            preparation for IIT-JEE with strong conceptual clarity and
            problem-solving skills.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Build Your IIT Foundation Early
        </h2>

        <p className="mt-4 text-white/90">
          Limited seats. Start your journey towards IIT today.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Apply Now
          </button>
        </a>
      </section>
    </div>
  );
}
