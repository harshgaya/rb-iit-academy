"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-[#FBFBFA]">
      {/* HERO SECTION */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-3">
              36+ Years of Academic Excellence
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              About RB IIT NEET Academy
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed">
              “Dreams are not what we see in sleep, but what keeps us awake.” RB
              IIT Academy has been shaping ambitious IIT & NEET aspirants for
              over two decades with disciplined preparation, personal mentoring,
              and proven results.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Small batches (45 students only)",
                "Personal mentoring & counseling",
                "Result-oriented teaching methodology",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white">
                    <FaCheck size={10} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/about/rbiit.jpg"
              alt="P.V. Rama Brahmam"
              width={500}
              height={600}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* ABOUT ACADEMY */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Journey
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            RB IIT Academy was founded with the vision of guiding students
            towards academic excellence. With a result-oriented background and
            time-tested experience, the academy has consistently catered to the
            aspirations of IIT and medical hopefuls who aim to achieve success
            at the highest level.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Over the years, the academy has built a reputation for producing top
            ranks in IIT-JEE, EAMCET, AIEEE, and NEET examinations.
          </p>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            About Founder – P.V. Rama Brahmam
          </h2>

          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              Mr. P.V. Rama Brahmam, M.Sc. Mathematics – Hyderabad Central
              University, is a highly accomplished mathematician with more than
              25 years of invaluable teaching experience.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Renowned for simplifying complex mathematical concepts, he has
              mentored thousands of students to achieve outstanding ranks in
              IIT-JEE, AIEEE, EAMCET, and NEET examinations.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              He has been instrumental in producing state and national ranks,
              including AIR 36, AIR 49, and multiple top 10 state ranks.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Apart from being an exceptional mentor, he is also a respected
              author of several mathematics books including Contemporary College
              Mathematics, Maths Marvels, and Conquering Mathematics.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Why Choose RB IIT Academy
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Personal Attention",
                desc: "Only 45 students per batch ensuring individual focus.",
              },
              {
                title: "Strong Academic Foundation",
                desc: "Structured courses from foundation to advanced level.",
              },
              {
                title: "Consistent Results",
                desc: "Top ranks in IIT, NEET & EAMCET year after year.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#FBFBFA] p-6 rounded-xl border shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "2000+", label: "Students Enrolled" },
            { num: "890+", label: "Courses Uploaded" },
            { num: "512+", label: "Successful Selections" },
            { num: "25+", label: "Years Experience" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white p-6 rounded-xl border shadow-sm"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {item.num}
              </p>
              <p className="text-gray-500 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RANKERS */}
      {/* TOPPERS SECTION */}
      {/* TOPPERS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Meet Our Top Rankers
          </h2>

          {/* Scroll container */}
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            {[
              {
                img: "/about/anurag.jpeg",
                name: "P. Anurag Reddy",
                exam: "IIT Advanced",
                rank: "AIR 36",
              },
              {
                img: "/about/nikhil.jpeg",
                name: "Nikhil",
                exam: "Amrita Engineering Entrance",
                rank: "AIR 1",
              },
              {
                img: "/about/asif.jpeg",
                name: "Asif Khan",
                exam: "TS Board IPE",
                rank: "987/1000",
              },
              {
                img: "/about/sidhart.jpeg",
                name: "Siddharth",
                exam: "JEE Mains",
                rank: "Rank 4",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[250px] sm:min-w-[270px] md:min-w-0 bg-[#FBFBFA] rounded-xl border shadow-sm hover:shadow-md transition snap-start overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-[260px]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-primary font-semibold text-sm mt-1">
                    {item.rank}
                  </p>

                  <p className="text-gray-500 text-xs mt-1">{item.exam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
