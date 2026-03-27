"use client";

import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function EamcetNeetCrash() {
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
              EAMCET (EAPCET) Crash Course <br />
              Coaching in Hyderabad – 2026
            </h1>

            <p className="text-gray-600 mt-5">
              This EAMCET (EAPCET) Crash Course in Hyderabad is specially
              designed for Class XII completed students aiming to secure top
              ranks in engineering and medical entrance exams. At RB IIT NEET
              Academy, Nallakunta, we provide intensive revision, daily
              practice, and exam-focused preparation to help students achieve
              high scores in EAMCET 2026.
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
              src="/courses/new2/eamcet-crash.jpeg"
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
            This EAMCET (EAPCET) Crash Course in Hyderabad is an intensive
            short-term coaching programme designed for students aiming to
            achieve top ranks in EAMCET 2026 within a limited time. The
            programme is structured to effectively cover the equivalent of a
            2-year syllabus in just 40–50 days through a well-planned schedule
            that includes focused revision, daily exams, and continuous
            assessment. Our expert faculty deliver complete theory in a
            simplified synopsis-based approach, followed by formula revision,
            standard problem-solving techniques, and practice of most frequently
            asked questions from previous years. Special emphasis is given to
            high-weightage topics, speed, and accuracy. Along with academic
            training, we provide continuous mentoring, motivation, and
            monitoring to help students overcome exam fear and stress, ensuring
            they stay confident and focused. Our goal is to improve student
            performance rapidly and help them achieve the best possible rank in
            EAMCET 2026 through dedicated guidance and result-oriented training.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            "Senior & experienced faculty",
            "Daily classes (9:00 AM – 5:00 PM)",
            "Alternate day exams",
            "Regular performance monitoring",
            "Grand test at course end",
            "Updated study material provided",
            "Special focus on scoring topics",
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
                <b>Target:</b> EAMCET 2026
              </p>
              <p>
                <b>Eligibility:</b> Class XII passed students
              </p>
              <p>
                <b>Course Start:</b> 16 March 2026
              </p>
              <p>
                <b>Duration:</b> 40 -50 DAYS
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
            Students who completed Class XII with BiPC/PCM and aim to secure top
            ranks in EAMCET. Minimum eligibility 40–45% marks as per category.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Crash Batch Starts Soon
        </h2>

        <p className="mt-4 text-white/90">
          Limited seats. Daily intensive preparation.
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
