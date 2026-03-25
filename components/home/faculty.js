"use client";

import Image from "next/image";
import { FaBriefcase, FaGraduationCap, FaTrophy } from "react-icons/fa";

export default function Faculty() {
  const faculty = [
    {
      img: "/faculty/rb.png",
      name: "P.V.RAMA BRAHMAM",
      role: "Maths EXPERT",
      exp: "36 Years Exp.",
      edu: "Hyderabad Central University",
      tag: "IIT & NEET Specialist",
    },
    {
      img: "/faculty/sumit.jpeg",
      name: "Sumit Sir",
      role: "Physics Expert",
      exp: "15 Years Exp.",
      edu: "IIT Bombay",
      tag: "IIT & NEET Specialist",
    },
    {
      img: "/faculty/jit.png",
      name: "N. Jitendara Sir",
      role: "Chemistry Expert",
      exp: "30 Years Exp.",
      edu: "Osmania University",
      tag: "IIT & NEET Specialist",
    },
    {
      img: "/faculty/chandra.png",
      name: "Chandra Sir",
      role: "Biology Expert",
      exp: "33 Years Exp.",
      edu: "Genetics, Osmania University",
      tag: "NEET Specialist",
    },
  ];

  return (
    <section className="bg-[#FBFBFA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Learn from India’s Top IIT-JEE & NEET Faculty
        </h2>

        {/* cards */}
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4">
          {faculty.map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] md:min-w-0 bg-white rounded-xl border shadow-sm hover:shadow-xl transition duration-300 overflow-hidden snap-start"
            >
              {/* image */}
              <div className="relative w-full h-[260px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* content */}
              <div className="p-5 text-center">
                {/* name */}
                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>

                {/* role */}
                <p className="text-red-800 font-semibold text-sm mt-1 tracking-wide">
                  {item.role}
                </p>

                {/* 🔥 SPECIALIZATION BADGE */}
                <div className="mt-2">
                  <span className="text-[11px] bg-red-100 text-red-800 px-2 py-1 rounded-full font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* 🔥 AUTHORITY PROOF */}
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px]">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                    <FaTrophy size={10} /> Top Rankers Produced
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    1000+ Students Trained
                  </span>
                </div>

                {/* details */}
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <FaBriefcase className="text-gray-400" />
                    {item.exp}
                  </div>

                  <div className="flex items-center justify-center gap-2 text-center">
                    <span className="max-w-[220px]">{item.edu}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
