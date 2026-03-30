import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function IitFoundation() {
  return (
    <div id="page-container" className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      <section id="hero-section" className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              Foundation Programme
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              IIT / NEET Foundation Crash Course (After 10th)
            </h1>

            <p className="text-gray-600 mt-5">
              1-month foundation program to strengthen basics and develop strong
              problem-solving skills for IIT JEE & NEET preparation.
            </p>

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

            <div className="flex gap-3 mt-6">
              <a href="/contact">
                <button
                  id="enroll-btn"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90"
                >
                  Enroll Now
                </button>
              </a>

              <a href="/contact">
                <button
                  id="counsellor-btn"
                  className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                >
                  Talk to Counsellor
                </button>
              </a>
            </div>
          </div>

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

      {/* BRIDGE COURSE */}
      <section id="bridge-course-section" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Bridge Course + Foundation for IIT / NEET After 10th
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Designed to strengthen fundamentals and prepare students for
            competitive exams with confidence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
            {[
              [
                "Bridge Academic Gaps",
                "Covers missing concepts across boards.",
              ],
              ["Strong Concept Building", "Focus on deep understanding."],
              ["Structured Study Material", "Well-designed notes & practice."],
              ["Regular Tests", "Track progress & improve performance."],
              ["Personal Mentorship", "Guidance from expert faculty."],
              ["Exam-Level Preparation", "Train for real competitive exams."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section id="syllabus-section" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Course Syllabus Overview
          </h2>

          <div className="overflow-x-auto mt-10">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">S.No</th>
                  <th className="p-3">Mathematics</th>
                  <th className="p-3">Physics</th>
                  <th className="p-3">Chemistry</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["1", "Sets", "Motion in One Dimension", "Atomic Structure"],
                  ["2", "Relations", "Newton’s Laws", "Periodic Table"],
                  ["3", "Numbers", "Work Energy", "Chemical Bonding"],
                  ["4", "Logarithms", "Differentiation", "Mole Concept"],
                  ["5", "Equations", "Applications", "Solutions"],
                  ["6", "Progressions", "Integration", "Gaseous State"],
                  ["7", "Trigonometry", "Vectors", "Organic Chemistry"],
                  ["8", "Graphs", "Current Electricity", ""],
                  ["9", "Coordinate Geometry", "Optics", ""],
                  ["10", "Plane Geometry", "", ""],
                  ["11", "Matrices", "", ""],
                  ["12", "Binomial Theorem", "", ""],
                  ["13", "Functions", "", ""],
                ].map((row, i) => (
                  <tr key={i} className="border-t text-center">
                    {row.map((col, j) => (
                      <td key={j} className="p-3">
                        {col || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results-section" className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our Results Speak for Themselves
        </h2>

        <p className="text-gray-600 mt-4">
          See our students’ success in IIT JEE & NEET.
        </p>

        <a href="/result">
          <button
            id="results-btn"
            className="mt-6 bg-primary text-white px-8 py-3 rounded-lg font-semibold"
          >
            View Results
          </button>
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Concept building",
            "Problem solving",
            "Daily practice",
            "Doubt clearing",
            "Logical thinking",
            "Study material",
            "Regular tests",
            "Guidance sessions",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                <FaCheck size={12} />
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Start Your IIT Journey Today 🚀
        </h2>

        <p className="mt-4">Limited seats available. Enroll now.</p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Apply Now
          </button>
        </a>
      </section>
    </div>
  );
}
