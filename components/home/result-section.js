"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [page, setPage] = useState(0);

  const stats = [
    { number: 130, suffix: "+", label: "IIT SELECTIONS" },
    { number: 128, suffix: "+", label: "NEET SELECTIONS" },
    { number: 52, suffix: "+", label: "BITS ADMISSIONS" },
    { number: 100, suffix: "%", label: "CONSISTENCY" },
  ];

  const toppers = [
    /* ================= IIT ================= */

    {
      img: "/results/anurag_reddy.jpeg",
      exam: "IIT JEE Advanced",
      title: "ALL INDIA RANK",
      value: "AIR 36",
      name: "P. Anurag Reddy",
      college: "IIT Bombay - CSE",
      quote: "Dedicated revision cycles helped me secure AIR 36.",
    },
    {
      img: "/results/kamal_iit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "Kamal",
      college: "IIT Madras",
      quote: "Consistent mock analysis strengthened my problem-solving speed.",
    },
    {
      img: "/results/new/abhiram_iit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "Abhiram",
      college: "IIT Ropar",
      quote:
        "Weekly doubt-clearing sessions gave me the clarity I needed to crack JEE Advanced.",
    },
    {
      img: "/results/new/c.harshit_kumar_iit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "C. Harshit Kumar",
      college: "IIT Madras",
      quote:
        "Strong conceptual foundations built in class made even the toughest problems approachable.",
    },
    {
      img: "/results/new/g.ajay_iit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "C. Ajay",
      college: "IIT Hyderabad",
      quote:
        "Time management during mocks and staying calm under pressure made all the difference.",
    },
    {
      img: "/results/new/paul_nikhil_iit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "Paul Nikhil",
      college: "IIT Hyderabad",
      quote:
        "Focused study plans and faculty guidance kept me on track throughout my preparation.",
    },
    {
      img: "/results/new/prabhakar_narshimha_nit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "Prabhakar Narshimha",
      college: "NIT Warangal",
      quote:
        "Disciplined daily practice and never skipping revision helped me land NIT Warangal.",
    },
    {
      img: "/results/new/rishpal_iit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "Rishpal",
      college: "IIT Hyderabad",
      quote:
        "Breaking complex topics into smaller chunks and mastering each one was my strategy.",
    },
    {
      img: "/results/new/sai_kiran_iit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "Sai Kiran",
      college: "IIT Roorkee",
      quote:
        "Regular performance reviews and honest self-assessment pushed me to consistently improve.",
    },
    {
      img: "/results/new/vikas_iit.jpeg",
      exam: "IIT JEE Advanced",
      title: "SELECTED",
      value: "IIT JEE Advanced",
      name: "Vikas",
      college: "IIT Dhanbad",
      quote:
        "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
    },

    {
      img: "/results/bhanu_kiran_neet.jpeg",
      exam: "NEET UG",
      title: "FINAL SCORE",
      value: "710 / 720",
      name: "Sharath",
      college: "AIIMS Delhi",
      quote: "Daily biology practice improved my final NEET score.",
    },
    {
      img: "/results/syed_fatima_neet.jpeg",
      exam: "NEET UG",
      title: "SELECTED",
      value: "NEET UG",
      name: "Syed Fatima",
      college: "",
      quote: "Focused mentoring sessions helped me clear NEET confidently.",
    },

    /* ================= NIT ================= */

    {
      img: "/results/Mamatha_NIT.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "NIT",
      name: " Mamatha",
      college: "",
      quote: "Structured guidance helped me secure NIT admission.",
    },
    {
      img: "/results/Vijitha_NIT.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "NIT",
      name: "Vijitha",
      college: "NIT Trichy",
      quote: "Strong conceptual clarity ensured my NIT selection.",
    },

    /* ================= BITS ================= */

    {
      img: "/results/Naga_sriya_bits.jpeg",
      exam: "BITSAT",
      title: "SELECTED",
      value: "BITS",
      name: "Naga Sriya",
      college: "",
      quote: "Smart preparation strategy helped me crack BITSAT.",
    },
    {
      img: "/results/S.L.V.Karthik_bits.jpeg",
      exam: "BITSAT",
      title: "SELECTED",
      value: "BITS",
      name: "S.L.V. Karthik",
      college: "",
      quote: "Time-bound practice made the BITS exam manageable.",
    },
    {
      img: "/results/Anjali_BITS.jpeg",
      exam: "BITS",
      title: "SELECTED",
      value: "BITS",
      name: "Anjali",
      college: "",
      quote: "Regular performance tracking improved my final score.",
    },
    {
      img: "/results/Bhavika_bits.jpeg",
      exam: "BITS",
      title: "SELECTED",
      value: "BITS",
      name: "Bhavika",
      college: "",
      quote: "Focused preparation sessions helped secure my admission.",
    },
    {
      img: "/results/sai_arunkanth_bits.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "BITS",
      name: "Sai Arunkanth",
      college: "BITS Pilani",
      quote: "Consistent mock testing gave me confidence for BITS.",
    },

    /* ================= EAMCET ================= */

    {
      img: "/results/kmv_akhil_102_advanced.jpeg",
      exam: "EAMCET",
      title: "STATE RANK",
      value: "Rank 3",
      name: "Nikhil",
      college: "JNTU Hyderabad",
      quote: "Balanced preparation ensured a top state rank.",
    },
    {
      img: "/results/Haripriya_eamcet.jpeg",
      exam: "EAMCET",
      title: "",
      value: "",
      name: "Haripriya",
      college: "",
      quote: "Consistent revision improved my EAMCET performance.",
    },
    {
      img: "/results/vaishnavi_eamcet.jpeg",
      exam: "EAMCET",
      title: "SELECTED",
      value: "EAMCET",
      name: "Vaishnavi",
      college: "",
      quote: "Concept-based learning helped me clear EAMCET.",
    },
    {
      img: "/results/Meghana_eamcet.jpeg",
      exam: "EAMCET",
      title: "SELECTED",
      value: "EAMCET",
      name: "Meghana",
      college: "",
      quote: "Doubt-clearing sessions strengthened my fundamentals.",
    },
    {
      img: "/results/gaytri_sowmya_eamcet.jpeg",
      exam: "EAMCET",
      title: "SELECTED",
      value: "EAMCET",
      name: "Gaytri Sowmya",
      college: "",
      quote: "Regular assessment helped improve my ranking steadily.",
    },
    {
      img: "/results/P..V.S.E.Haripriya_eamcer.jpeg",
      exam: "EAMCET",
      title: "SELECTED",
      value: "EAMCET",
      name: "Haripriya",
      college: "",
      quote: "Focused preparation improved my exam confidence.",
    },
    {
      img: "/results/R.Vandhana_eamcet.jpeg",
      exam: "EAMCET",
      title: "SELECTED",
      value: "EAMCET",
      name: "R.Vandhana",
      college: "",
      quote: "Weekly mock tests helped refine my accuracy.",
    },
    {
      img: "/results/Suchitra_eamcet.jpeg",
      exam: "EAMCET",
      title: "SELECTED",
      value: "EAMCET",
      name: "Suchitra",
      college: "",
      quote: "Strong basics ensured consistent performance.",
    },
    {
      img: "/results/P.Sreenivas_eamcet.jpeg",
      exam: "EAMCET",
      title: "SELECTED",
      value: "EAMCET",
      name: "P.Sreenivas",
      college: "",
      quote: "Practice under timed conditions improved my results.",
    },

    /* ================= IPE ================= */

    {
      img: "/results/asi_khan_ipe_topper.jpeg",
      exam: "IPE",
      title: "SELECTED",
      value: "IPE Topper",
      name: "Asif Khan",
      college: "",
      quote: "Structured study plan helped me top IPE.",
    },
    {
      img: "/results/s.rayudu_ipe_topper.jpeg",
      exam: "IPE",
      title: "SELECTED",
      value: "IPE Topper",
      name: "S.Rayudu",
      college: "",
      quote: "Consistent board preparation ensured high marks.",
    },
    {
      img: "/results/S.Chaitanya_ipe.jpeg",
      exam: "IPE",
      title: "SELECTED",
      value: "IPE",
      name: "S.Chaitanya",
      college: "",
      quote: "Focused revision cycles helped me excel.",
    },
    {
      img: "/results/Anirudh_ipe.jpeg",
      exam: "IPE",
      title: "SELECTED",
      value: "IPE",
      name: "Anirudh",
      college: "",
      quote: "Strong subject clarity made the difference.",
    },

    /* ================= ENGINEERING ================= */

    {
      img: "/results/G.Nishita_engineering.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Nishita",
      college: "",
      quote: "Consistent preparation helped secure my seat.",
    },
    {
      img: "/results/R.Samyul_Engineering.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "R.Samyul",
      college: "",
      quote: "Concept reinforcement improved my performance.",
    },
    {
      img: "/results/KrishnaChaitanya_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Krishna Chaitanya",
      college: "",
      quote: "Strong fundamentals made engineering admission possible.",
    },
    {
      img: "/results/J.Komal_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "J. Komal",
      college: "",
      quote: "Step-by-step preparation improved my confidence.",
    },
    {
      img: "/results/Dasari_sai_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "J. Dasari Sai",
      college: "",
      quote: "Doubt sessions strengthened my weak areas.",
    },
    {
      img: "/results/Yashswai_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Yashswai",
      college: "",
      quote: "Focused practice ensured steady improvement.",
    },
    {
      img: "/results/ankush_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Ankush",
      college: "",
      quote: "Regular mock tests helped refine my strategy.",
    },
    {
      img: "/results/sindhu_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Sindhu",
      college: "",
      quote: "Consistent mentorship helped me stay on track.",
    },
    {
      img: "/results/abhishek_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Abhishek",
      college: "",
      quote: "Strong conceptual clarity ensured my admission.",
    },
    {
      img: "/results/akhil_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Akhil",
      college: "",
      quote: "Performance tracking improved my final result.",
    },
    {
      img: "/results/akshit_reddy_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Akshit Reddy",
      college: "",
      quote: "Focused preparation sessions boosted my confidence.",
    },
    {
      img: "/results/amitha_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Amitha",
      college: "",
      quote: "Continuous revision helped secure my seat.",
    },
    {
      img: "/results/Anagha_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Anagha",
      college: "",
      quote: "Mock analysis improved my accuracy.",
    },
    {
      img: "/results/B.Marlyin_Joymer_Eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "B. Marlyin Joymer",
      college: "",
      quote: "Strong discipline ensured consistent performance.",
    },
    {
      img: "/results/B.Srika_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "B. Srika",
      college: "",
      quote: "Guided practice helped me stay focused.",
    },
    {
      img: "/results/C.Rishma_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "C. Rishma",
      college: "",
      quote: "Structured schedule improved my results steadily.",
    },
    {
      img: "/results/D.Sailohitaksh_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "D. Sailohitaksh",
      college: "",
      quote: "Stepwise preparation helped me succeed.",
    },
    {
      img: "/results/D.shruti_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "D. Shruti",
      college: "",
      quote: "Regular feedback sessions boosted my performance.",
    },
    {
      img: "/results/Dhanush_eamcet.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Dhanush",
      college: "",
      quote: "Dedicated revision cycles ensured improvement.",
    },
    {
      img: "/results/hita_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Hita",
      college: "",
      quote: "Focused doubt clearing strengthened my concepts.",
    },
    {
      img: "/results/Hitesh_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Hitesh",
      college: "",
      quote: "Consistent study routine helped me achieve my goal.",
    },
    {
      img: "/results/K.Ananya_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "K. Ananya",
      college: "",
      quote: "Practice under exam conditions improved my confidence.",
    },
    {
      img: "/results/kiran_eamcet.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Kiran",
      college: "",
      quote: "Regular assessments improved my ranking.",
    },
    {
      img: "/results/Krishna_Teja_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Krishna Teja",
      college: "",
      quote: "Structured guidance made engineering admission possible.",
    },
    {
      img: "/results/m.minda_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "M. Minda",
      college: "",
      quote: "Strong fundamentals ensured consistent results.",
    },
    {
      img: "/results/Meghana_Eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Meghana",
      college: "",
      quote: "Focused practice improved my final score.",
    },
    {
      img: "/results/Priyanka_Reddy_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Priyanka Reddy",
      college: "",
      quote: "Mentorship sessions helped me stay motivated.",
    },
    {
      img: "/results/Saurav_Patil_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Saurav Patil",
      college: "",
      quote: "Regular problem-solving practice strengthened my preparation.",
    },
    {
      img: "/results/Sravya_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Sravya",
      college: "",
      quote: "Focused revision helped me perform confidently.",
    },
    {
      img: "/results/Tejaswani_eng.jpeg",
      exam: "Engineering",
      title: "SELECTED",
      value: "Engineering",
      name: "Tejaswani",
      college: "",
      quote: "Strong academic support improved my results significantly.",
    },
  ];
  console.log("Total Toppers:", toppers.length);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(toppers.length / itemsPerPage);

  const visibleToppers = toppers.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );
  return (
    <section
      id="result-section"
      ref={ref}
      className="bg-gradient-to-b from-white to-[#F5F7FA] py-16 md:py-24"
    >
      {/* ================= HEADER + STATS ================= */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Results That Speak for Themselves
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Consistent ranks. National selections. Proven academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-primary">
                {inView && <CountUp start={0} end={item.number} duration={2} />}
                {item.suffix}
              </div>
              <p className="text-xs md:text-sm mt-3 font-semibold text-gray-600 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FULL WIDTH SLIDER ================= */}
      <div
        className="overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-8 px-6 md:px-12">
          {Array.from({ length: Math.ceil(toppers.length / 4) }).map(
            (_, pageIndex) => {
              const group = toppers.slice(pageIndex * 4, pageIndex * 4 + 4);

              return (
                <div
                  key={pageIndex}
                  className="
                  flex-none
                  snap-start
                  w-[600px]
                  md:w-[820px]
                "
                >
                  <div className="grid grid-cols-2 gap-6">
                    {group.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="
                        bg-white
                        rounded-2xl
                        p-6
                        border border-gray-100
                        shadow-md
                        hover:shadow-lg
                        transition
                      "
                      >
                        {/* Image */}
                        <div className="flex justify-center">
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                          />
                        </div>

                        {/* Name */}
                        <h3 className="mt-4 text-center font-semibold text-gray-900">
                          {item.name}
                        </h3>

                        {/* Exam */}
                        <div className="flex justify-center mt-2">
                          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {item.exam}
                          </span>
                        </div>

                        {/* Result */}
                        {(item.title || item.value) && (
                          <div className="mt-4 text-center">
                            {item.title && (
                              <p className="text-xs text-gray-400 uppercase tracking-wider">
                                {item.title}
                              </p>
                            )}
                            {item.value && (
                              <p className="text-lg font-bold text-primary mt-1">
                                {item.value}
                              </p>
                            )}
                          </div>
                        )}

                        {/* College */}
                        {item.college && (
                          <p className="mt-2 text-sm text-gray-600 text-center font-medium">
                            {item.college}
                          </p>
                        )}

                        {/* Quote */}
                        <p className="mt-3 text-sm text-gray-500 italic text-center">
                          {item.quote}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
