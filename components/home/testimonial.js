"use client";

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: `"The level of discipline and structured curriculum here is unmatched. The teachers personally monitored my son's weak areas in Mathematics. He is now successfully studying at IIT Roorkee."`,
      name: "Rajesh Kumar",
      role: "Parent of IITian",
      img: "/p1.jpg",
    },
    {
      text: `"As parents, the weekly progress reports and regular PTMs gave us immense confidence. The coaching environment is completely result-oriented without any unnecessary distractions."`,
      name: "Meenakshi Iyer",
      role: "Parent of Medical Student",
      img: "/p2.jpg",
    },
    {
      text: `"The test series here strictly follows the actual exam pattern which completely removed my exam fear. The study material was sufficient, I never had to refer to multiple books."`,
      name: "Vikram Reddy",
      role: "NEET Rank 184",
      img: "/p3.jpg",
    },
  ];

  return (
    <section className="bg-[#F5F5F7] py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          What Parents & Students Say
        </h2>

        {/* Mobile Scroll + Desktop Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-0 bg-white rounded-xl border shadow-sm hover:shadow-xl transition duration-300 p-6 snap-center"
            >
              {/* Text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-6">
                {/* <Image
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                /> */}
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
