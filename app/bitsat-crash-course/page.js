import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function BitsatCrash() {
  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              Short Term Intensive Programme
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              BITSAT <br />
              Crash Course 2026
            </h1>

            <p className="text-gray-600 mt-5">
              Focused preparation for BITSAT with speed-based practice, mock
              tests, and strategy to maximize score after board exams.
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
              src="/courses/bitsat.jpeg"
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

          <p className="text-gray-600 mt-6">
            Comprehensive crash course designed for students preparing for
            BITSAT 2026. Focus on speed, accuracy, and full-length mock tests to
            boost performance.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Expert BITSAT faculty & mentors",
            "Daily classes (9:00 AM – 5:00 PM)",
            "Speed-based practice sessions",
            "Full-length mock tests & analysis",
            "Focus on accuracy & time management",
            "Updated BITSAT study material",
            "Special training for English & Logical Reasoning",
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
                <b>Target:</b> BITSAT 2026
              </p>
              <p>
                <b>Eligibility:</b> Class XII (PCM) passed students
              </p>
              <p>
                <b>Course Start:</b> After Board Exams 2026
              </p>
              <p>
                <b>Duration:</b> Till BITSAT Exam
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
            Students aiming for BITS Pilani and other BITS campuses. Ideal for
            those targeting high scores with strong speed and accuracy.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Crash Batch Starts Soon
        </h2>

        <p className="mt-4 text-white/90">
          Limited seats. High-speed preparation for BITSAT.
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
