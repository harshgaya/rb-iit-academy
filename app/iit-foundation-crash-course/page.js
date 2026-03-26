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

      {/* COURSE INFO */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Bridge Course + Foundation for IIT / NEET After 10th
          </h2>

          <p className="text-gray-600 mt-6">
            RB IIT NEET Academy’s Foundation Crash Course is designed to bridge
            the gap between different academic backgrounds and prepare students
            for competitive exams like IIT JEE and NEET. Students from various
            boards often miss essential foundational concepts or lack proper
            subject guidance, especially in core areas like Physics and
            Mathematics/Biology. This course systematically fills those gaps,
            strengthens fundamentals, and upgrades students from school-level
            understanding to competitive exam level. We also provide
            well-structured study material to support learning and practice. In
            addition, we conduct regular tests to continuously monitor student
            performance, identify weak areas, and provide proper guidance and
            counseling to help students improve and progress effectively. By
            covering missing topics, reinforcing core concepts, and training
            students in problem-solving and analytical thinking, we ensure that
            every student becomes confident, well-prepared, and capable of
            facing any type of question in a competitive environment.
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
