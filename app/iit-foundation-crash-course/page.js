import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function IitFoundation() {
  const syllabus = [
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
  ];

  return (
    <div
      id="page-container"
      className="bg-[#FBFBFA] text-black overflow-x-hidden"
    >
      {/* HERO */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="break-words">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
              IIT / NEET Foundation Crash Course (After 10th)
            </h1>

            <p className="text-gray-600 mt-4 text-sm md:text-base">
              1-month foundation program to build strong concepts and
              problem-solving skills.
            </p>

            {/* Batch Info */}
            <div className="mt-5 bg-white border rounded-lg p-4 shadow-sm text-sm">
              <p>
                📅 <b>Starts:</b> 6th April
              </p>
              <p>
                ⏳ <b>Duration:</b> 40 Days
              </p>
              <p>
                💰 <b>Fee:</b> ₹25,000
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href="/contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg w-full">
                  Enroll Now
                </button>
              </a>

              <a href="/contact">
                <button className="border px-6 py-3 rounded-lg w-full">
                  Talk to Counsellor
                </button>
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <Image
              src="/courses/iit-foundation-crash.jpeg"
              alt="IIT Foundation"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* BRIDGE COURSE */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Bridge Course + Foundation
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8 text-left">
            {[
              "Bridge academic gaps",
              "Strong concept building",
              "Study material",
              "Regular tests",
              "Mentorship",
              "Exam preparation",
            ].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg border">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center">
            Course Syllabus
          </h2>

          {/* MOBILE SAFE TABLE */}
          <div className="mt-6 w-full overflow-x-auto">
            <div className="min-w-[600px]">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">S.No</th>
                    <th className="p-2">Math</th>
                    <th className="p-2">Physics</th>
                    <th className="p-2">Chemistry</th>
                  </tr>
                </thead>

                <tbody>
                  {syllabus.map((row, i) => (
                    <tr key={i} className="border-t text-center">
                      {row.map((col, j) => (
                        <td key={j} className="p-2 whitespace-nowrap">
                          {col || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-xl md:text-3xl font-bold">Our Results Speak</h2>

        <a href="/result">
          <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg">
            View Results
          </button>
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
          {[
            "Concept building",
            "Problem solving",
            "Daily practice",
            "Doubt clearing",
          ].map((item) => (
            <div key={item} className="flex gap-2 items-center">
              <FaCheck className="text-primary" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <h2 className="text-xl md:text-3xl font-bold">
          Start Your IIT Journey 🚀
        </h2>

        <a href="/contact">
          <button className="mt-4 bg-white text-primary px-6 py-3 rounded-lg">
            Apply Now
          </button>
        </a>
      </section>
    </div>
  );
}
