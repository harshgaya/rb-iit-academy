"use client";

import Image from "next/image";

export default function Environment() {
  const images = [
    "/home/class-1.jpg",
    "/home/class-2.jpg",
    "/home/class-3.jpg",
    "/home/class-4.jpg",
  ];

  return (
    <section className="bg-[#F5F5F7] py-16 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Focused Learning Environment
        </h2>

        {/* MOBILE SCROLL + DESKTOP GRID */}
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition snap-center"
            >
              <Image
                src={img}
                alt="classroom"
                width={700}
                height={500}
                className="w-full h-[220px] md:h-[280px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
