"use client";

import Image from "next/image";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Faculty() {
  const faculty = [
    {
      img: "/faculty/rb-sir.jpeg",
      name: "P.V.RAMA BRAHMAM",
      role: "Maths EXPERT",
      exp: "36 Years Exp.",
      edu: "Hyderabad Central University",
    },
    {
      img: "/faculty/sumit.jpeg",
      name: "Sumit Sir",
      role: "Physics Expert",
      exp: "15 Years Exp.",
      edu: "IIT Bombay",
    },
    {
      img: "/faculty/jit.jpeg",
      name: "N. Jitendara Sir",
      role: "Chemistry Expert",
      exp: "30 Years Exp.",
      edu: "M.Sc,B.Ed Chemistry, Osmania University",
    },
    {
      img: "/faculty/chandra.jpeg",
      name: "Chandra Sir",
      role: "Bilogy Expert",
      exp: "33 Years Exp.",
      edu: "M.Sc Genetics, Osmania University",
    },
  ];

  return (
    <section className="bg-[#FBFBFA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Meet Our Expert Faculty
        </h2>

        {/* mobile scroll + desktop grid */}
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
                  className="object-cover"
                />
              </div>

              {/* content */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>

                <p className="text-red-800 font-semibold text-sm mt-1 tracking-wide">
                  {item.role}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <FaBriefcase className="text-gray-400" />
                    {item.exp}
                  </div>

                  <div className="flex items-start justify-center gap-2">
                    <FaGraduationCap className="text-gray-400 mt-1 shrink-0" />

                    <span className="text-center leading-relaxed max-w-[220px]">
                      {item.edu}
                    </span>
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
