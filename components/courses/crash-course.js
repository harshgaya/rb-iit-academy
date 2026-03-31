"use client";

import { FaBolt } from "react-icons/fa";

export default function CrashCourses() {
  return (
    <div className="bg-[#FBFBFA]">
      {/* HERO */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-primary font-semibold mb-2">
            Short Term Preparation
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Crash Courses
          </h1>

          <p className="text-gray-600 mt-5">
            This NEET Crash Course in Hyderabad is designed for Class XII
            completed students aiming to achieve top ranks in NEET 2026. At RB
            IIT NEET Academy, Nallakunta, we provide intensive revision, daily
            tests, and expert mentoring to ensure maximum performance in a short
            time.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "IIT/NEET Foundation Crash Course (After 10th)",
              desc: "1-month foundation program to strengthen basics and problem-solving ability.",
              link: "/iit-foundation-crash-course",
            },
            {
              title:
                "EAMCET (EAPCET) Crash Course Coaching in Hyderabad – 2026",
              subtitle:
                "Best EAMCET Coaching Institute in Nallakunta, Hyderabad",
              desc: "Complete revision and practice tests for Engineering EAMCET aspirants.",
              link: "/eamcet-crash-course",
            },
            {
              title: "NEET Crash Course",
              desc: "Intensive NEET preparation with quick revision and mock tests.",
              link: "/neet-crash-course",
            },
            {
              title: "BITSAT Crash Course",
              desc: "Special focus on English, logical reasoning and speed-based problem solving.",
              link: "/bitsat-crash-course",
            },
            {
              title: "IIT MAINS Crash Course",
              desc: "Focused preparation for IIT-JEE Mains with mock tests after board exams.",
              link: "/iit-mains-crash-course",
            },

            // {
            //   title: "EAMCET (Medical)",
            //   desc: "Crash preparation program for medical stream EAMCET students.",
            //   link: "/eamcet-neet-crash",
            // },
          ].map((course) => (
            <div
              key={course.title}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaBolt className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-sm text-black"> {course.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {course.desc}
              </p>

              <div className="flex gap-2">
                <a href={course.link}>
                  <button className="mt-5 bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90">
                    View Details
                  </button>
                </a>
                <a href="/contact">
                  <button className="mt-5 bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90">
                    Enquire Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Limited Seats in Crash Batches
        </h2>

        <p className="mt-4 text-white/90">
          Start your preparation with expert guidance and structured revision.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-white text-primary px-8 py-4 rounded-lg font-bold">
            Book Counselling
          </button>
        </a>
      </section>
    </div>
  );
}
