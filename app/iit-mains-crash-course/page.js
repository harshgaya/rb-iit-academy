import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function IitMainsCrash() {
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
    </div>
  );
}
