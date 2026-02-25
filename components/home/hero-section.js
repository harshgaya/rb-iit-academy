"use client";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#FBFBFA] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* top trust line */}
          <div className="text-primary text-xs md:text-sm font-semibold mb-3 flex items-center gap-2 flex-wrap">
            <span>✔</span>
            <span>
              36+ YEARS EXPERIENCE | IIT-JEE & NEET SPECIALISTS | LIMITED SEATS
            </span>
          </div>

          {/* heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Proven IIT-JEE & <br className="hidden md:block" /> NEET Results
            Year <br className="hidden md:block" /> After Year
          </h1>

          {/* ✅ RESULTS — ALWAYS 2/2 IN MOBILE */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-200 rounded-full" />
                <div>
                  <p className="text-primary font-bold text-sm">AIR 112</p>
                  <p className="text-xs text-gray-500">IIT BOMBAY</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-200 rounded-full" />
                <div>
                  <p className="text-primary font-bold text-sm">AIR 387</p>
                  <p className="text-xs text-gray-500">IIT MADRAS</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-200 rounded-full" />
                <div>
                  <p className="text-primary font-bold text-sm">Rank 542</p>
                  <p className="text-xs text-gray-500">GOVT MEDICAL</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <p className="text-primary font-bold text-sm">500+</p>
                  <p className="text-xs text-gray-500">SELECTIONS</p>
                </div>
              </div>
            </div>
          </div>

          {/* desc */}
          <p className="text-gray-500 mt-5 text-sm md:text-base">
            Structured preparation, expert faculty, daily testing and personal
            mentoring designed for top ranks.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="/contact">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition w-full sm:w-auto">
                Book Free Demo Class
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

        {/* ✅ IMAGE — ALWAYS BOTTOM IN MOBILE */}
        <div className="relative mt-10 md:mt-0">
          <Image
            src="/home/iit-b.jpg"
            alt="students"
            width={600}
            height={500}
            priority
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
