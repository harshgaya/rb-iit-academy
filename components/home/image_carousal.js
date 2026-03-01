"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ResultsCarousel() {
  const results = [
    {
      name: "Anurag Reddy",
      rank: "36",
      exam: "IIT-JEE Advanced 2025",
      image: "/carousal/anurag_reddy.jpeg",
      highlight: "gold",
    },
    {
      name: "KMV Akhil",
      rank: "94",
      exam: "IIT-JEE Advanced 2025",
      image: "/carousal/kmv_akhil_102_advanced.jpeg",
      highlight: "blue",
    },
    {
      name: "Bhanu Kiran",
      rank: "127",
      exam: "NEET 2025",
      image: "/carousal/bhanu_kiran_neet.jpeg",
      highlight: "primary",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % results.length);
    }, 4000);
    return () => clearInterval(slider);
  }, []);

  const accentColor = (type) => {
    if (type === "gold") return "text-yellow-500";
    if (type === "blue") return "text-blue-600";
    return "text-primary";
  };

  return (
    <section className="py-2 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-16">
          National Rankers
        </h2>

        <div className="relative h-[520px] flex items-center justify-center">
          {results.map((student, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-700 ${
                i === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={260}
                  height={320}
                  className="object-cover drop-shadow-xl"
                  priority
                />
              </div>

              {/* Rank Typography */}
              <div className="mt-10">
                <div className="text-sm tracking-widest text-gray-500">
                  ALL INDIA RANK
                </div>

                <div
                  className={`text-6xl md:text-7xl font-extrabold mt-2 ${accentColor(
                    student.highlight,
                  )}`}
                >
                  {student.rank}
                </div>
              </div>

              {/* Name */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {student.name}
              </h3>

              {/* Exam */}
              <p className="mt-2 text-gray-500 text-sm">{student.exam}</p>

              {/* Elegant underline accent */}
              <div className="mt-6 w-16 h-1 mx-auto bg-primary rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {results.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-primary scale-125" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
