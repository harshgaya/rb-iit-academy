"use client";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import ImageCarousel from "./image_carousal";

export default function Hero() {
  return (
    <section className="bg-[#FBFBFA] py-2 md:py-4 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div>
          {/* top trust line */}
          <div className="text-primary text-xs md:text-sm font-semibold mb-3 flex items-center gap-2 flex-wrap">
            {/* 🔥 BRAND BADGE (clean & premium) */}
            <span className="bg-primary text-white px-2 py-0.5 rounded text-[10px] md:text-xs font-semibold">
              RB IIT NEET
            </span>

            {/* Existing content */}
            <span>
              36+ YEARS EXPERIENCE | IIT-JEE & NEET SPECIALISTS | LIMITED SEATS
            </span>
          </div>

          {/* heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Proven <br className="hidden md:block" />
            IIT-JEE & NEET Results Year After Year
          </h1>

          {/* ✅ RESULTS — ALWAYS 2/2 IN MOBILE */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              {
                name: "Anurag Reddy",
                rank: "AIR 36",
                exam: "IIT JEE Advanced",
                image: "/home/anurag_reddy.jpeg",
              },
              {
                name: "Siddharth",
                rank: "AIR 4",
                exam: "JEE Main",
                image: "/results/new/siddhart_jee_main_rank_4.jpeg",
              },
              {
                name: "Nikhil",
                rank: "AEEE Rank 1, EAMCET Rank 94",
                exam: "AEEE & EAMCET",
                image: "/results/new/aeee_rank_1.jpg",
              },
              {
                name: "Elina Senapathi",
                rank: "AIR 16",
                exam: "NEET",
                image: "/results/new/elina.jpeg",
              },
              {
                image: "/results/bhanu_kiran_neet.jpeg",
                exam: "NEET UG",

                rank: "AIR 127",
                name: "Sharath",
              },

              {
                name: "500+ Students",
                rank: "500+",
                exam: "Selections",
                image: null,
              },
            ].map((student, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  {/* Student Image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {student.image ? (
                      <Image
                        src={student.image}
                        alt={student.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-lg">🏆</span>
                    )}
                  </div>

                  {/* Student Info */}
                  <div>
                    <p className="text-primary font-bold text-sm md:text-base">
                      {student.rank}
                    </p>
                    <p className="text-xs text-gray-500">{student.exam}</p>
                    <p className="text-xs font-medium text-gray-800 mt-1">
                      {student.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* desc */}
          <p className="text-gray-500 mt-5 text-sm md:text-base">
            Structured preparation, expert faculty, daily testing and personal
            mentoring designed for top ranks.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="/result">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition w-full sm:w-auto">
                View Results
              </button>
            </a>

            <a href={SOCIAL_LINKS.WHATSAPP}>
              <button className="border border-gray-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full sm:w-auto">
                Talk to Academic Counsellor
              </button>
            </a>
          </div>

          {/* trust badges */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6 text-sm font-medium text-gray-700">
            {[
              "Small batches",
              "Individual attention",
              "Weekly parent updates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white">
                  <FaCheck size={10} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <ImageCarousel />
      </div>
    </section>
  );
}
