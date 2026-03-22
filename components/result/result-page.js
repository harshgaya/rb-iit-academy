"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useRef, useState } from "react";
import Image from "next/image";

const EXAM_META = {
  "IIT JEE Advanced": {
    color: "#E8450A",
    light: "#FFF1EC",
    border: "#FFD5C5",
    label: "IIT",
  },
  "NEET UG": {
    color: "#0A7E6E",
    light: "#E8F8F5",
    border: "#B8EBE4",
    label: "NEET",
  },
  BITSAT: {
    color: "#6C2FD4",
    light: "#F2EDFF",
    border: "#D9CAFF",
    label: "BITS",
  },
  BITS: {
    color: "#6C2FD4",
    light: "#F2EDFF",
    border: "#D9CAFF",
    label: "BITS",
  },
  Engineering: {
    color: "#0070C0",
    light: "#E8F3FF",
    border: "#BDD8F5",
    label: "ENG",
  },
  EAMCET: {
    color: "#B05C00",
    light: "#FFF5E8",
    border: "#FFDDAA",
    label: "EAMCET",
  },
  IPE: { color: "#1A6E2F", light: "#EDFBF2", border: "#AAEDC4", label: "IPE" },
};

const ALL_FILTERS = ["All", "IIT", "NEET", "BITS", "EAMCET", "ENG", "IPE"];

const stats = [
  {
    number: 130,
    suffix: "+",
    label: "IIT Selections",
    color: "#E8450A",
    bg: "#FFF1EC",
    border: "#FFD5C5",
  },
  {
    number: 128,
    suffix: "+",
    label: "NEET Selections",
    color: "#0A7E6E",
    bg: "#E8F8F5",
    border: "#B8EBE4",
  },
  {
    number: 52,
    suffix: "+",
    label: "BITS Admissions",
    color: "#6C2FD4",
    bg: "#F2EDFF",
    border: "#D9CAFF",
  },
  {
    number: 100,
    suffix: "%",
    label: "Consistency",
    color: "#B05C00",
    bg: "#FFF5E8",
    border: "#FFDDAA",
  },
];

const toppers = [
  {
    img: "/results/anurag_reddy.jpeg",
    exam: "IIT JEE Advanced",
    title: "ALL INDIA RANK",
    value: "AIR 36",
    name: "P. Anurag Reddy",
    college: "",
    quote:
      "Dedicated revision cycles and targeted practice helped me secure AIR 36.",
  },
  {
    img: "/results/new/siddhart_jee_main_rank_4.jpeg",
    exam: "IIT JEE Main",
    title: "ALL INDIA RANK",
    value: "AIR 4",
    name: "Siddhart",
    college: "",
    quote:
      "Daily revision and mock tests helped me achieve AIR 4 in JEE Main, setting a strong foundation for Advanced.",
  },

  {
    img: "/results/kamal_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Kamal",
    college: "",
    quote:
      "Consistent mock analysis and reviewing every mistake sharpened my problem-solving speed.",
  },
  {
    img: "/results/new/abhiram_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Abhiram",
    college: "",
    quote:
      "Weekly doubt-clearing sessions gave me the clarity I needed to crack JEE Advanced.",
  },
  {
    img: "/results/new/c.harshit_kumar_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "C. Harshit Kumar",
    college: "",
    quote:
      "Strong conceptual foundations built in class made even the toughest problems approachable.",
  },
  {
    img: "/results/new/g.ajay_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "C. Ajay",
    college: "",
    quote:
      "Time management during mocks and staying calm under pressure made all the difference.",
  },
  {
    img: "/results/new/paul_nikhil_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Paul Nikhil",
    college: "",
    quote:
      "Focused study plans and faculty guidance kept me on track throughout my preparation.",
  },
  {
    img: "/results/new/prabhakar_narshimha_nit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Prabhakar Narshimha",
    college: "",
    quote:
      "Disciplined daily practice and never skipping revision helped me land NIT Warangal.",
  },
  {
    img: "/results/new/rishpal_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Rishpal",
    college: "",
    quote:
      "Breaking complex topics into smaller chunks and mastering each one was my strategy.",
  },
  {
    img: "/results/new/sai_kiran_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Sai Kiran",
    college: "",
    quote:
      "Regular performance reviews and honest self-assessment pushed me to consistently improve.",
  },
  {
    img: "/results/new/vikas_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Vikas",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/a.s.karthik_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "A.S. Karthik",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/punith_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Punith",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/sai_varun_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Sai Varun",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/saveen_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Saveen",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/siri_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Siri",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/vanya_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Vanya",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/varshini_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Varshini",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/varshit_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Varshit",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/vishes_meena_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Vishes Meena",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/zenith_prabhkar_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Zenith Prabhkar",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/new2/vasudev_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Vasudev",
    college: "",
    quote:
      "Staying consistent even on tough days and trusting the process got me to IIT Dhanbad.",
  },
  {
    img: "/results/bhanu_kiran_neet.jpeg",
    exam: "NEET UG",
    title: "FINAL SCORE",
    value: "710 / 720",
    name: "Sharath",
    college: "",
    quote: "Daily biology practice improved my final NEET score.",
  },
  {
    img: "/results/new/elina.jpeg",
    exam: "NEET UG",
    title: "FINAL SCORE",
    value: "Rank 16",
    name: "Elina Senapathi",
    college: "_",
    quote:
      "Daily mockups and focused revision helped me achieve a top NEET rank.",
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
  {
    img: "/results/new2/A.Vanjari_Akshitsa_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "A. Vanjari Akshitsa",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },
  {
    img: "/results/new2/deepika_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Deepika",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },
  {
    img: "/results/new2/mokshita_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Mokshita",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },
  {
    img: "/results/new2/n.rahul_chowdary_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "N. Rahul Chowdary",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },
  {
    img: "/results/new2/pramodh_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Pramodh",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },
  {
    img: "/results/new2/sharath_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Sharath",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },
  {
    img: "/results/new2/surendar_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Surendar",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },
  {
    img: "/results/new2/tushara_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Tushara",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },

  {
    img: "/results/Mamatha_NIT.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "NIT",
    name: "Mamatha",
    college: "",
    quote: "Structured guidance helped me secure NIT admission.",
  },
  {
    img: "/results/new2/v.mounika_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "V. Mounika",
    college: "",
    quote: "Focused mentoring sessions helped me clear NEET confidently.",
  },
  {
    img: "/results/Vijitha_NIT.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "NIT",
    name: "Vijitha",
    college: "",
    quote: "Strong conceptual clarity ensured my NIT selection.",
  },
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
    img: "/results/new/bharat_teja_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Bharat Teja",
    college: "",
    quote:
      "Solving previous year papers repeatedly gave me the edge I needed for BITS.",
  },
  {
    img: "/results/new/greeshma_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Greeshma",
    college: "",
    quote:
      "Staying consistent with weekly tests and timely revisions made BITS a reality.",
  },
  {
    img: "/results/new/Maniratna_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Maniratna",
    college: "",
    quote:
      "Mastering speed and accuracy together was the real key to cracking BITSAT.",
  },
  {
    img: "/results/new/sanath_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Sanath",
    college: "",
    quote:
      "Strong basics and smart time management during the exam helped me get into BITS.",
  },
  {
    img: "/results/new/sanjay_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Sanjay",
    college: "",
    quote:
      "Daily mock practice and learning from every error built my confidence for BITSAT.",
  },
  {
    img: "/results/new/srija_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Srija",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/anvesh_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Anvesh",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/aveen_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Aveen",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/krishna_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Krishna",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/m.nitya_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "M. Nithya",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/nithin_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Nithin",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/srija_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Srija",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/steffi_roy_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Steffi Roy",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/supriya_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Supriya",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/Vijita_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Vijita",
    college: "",
    quote: "Focused preparation sessions helped secure my admission.",
  },
  {
    img: "/results/new2/vivek_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Vivek",
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
  // {
  //   img: "/results/kmv_akhil_102_advanced.jpeg",
  //   exam: "EAMCET",
  //   title: "STATE RANK",
  //   value: "Rank 3",
  //   name: "Nikhil",
  //   college: "JNTU Hyderabad",
  //   quote: "Balanced preparation ensured a top state rank.",
  // },
  {
    img: "/results/Haripriya_eamcet.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "EAMCET",
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
    name: "R. Vandhana",
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
    name: "P. Sreenivas",
    college: "",
    quote: "Practice under timed conditions improved my results.",
  },
  {
    img: "/results/asi_khan_ipe_topper.jpeg",
    exam: "IPE",
    title: "IPE TOPPER",
    value: "State Topper",
    name: "Asif Khan",
    college: "",
    quote: "Structured study plan helped me top IPE.",
  },
  {
    img: "/results/s.rayudu_ipe_topper.jpeg",
    exam: "IPE",
    title: "IPE TOPPER",
    value: "State Topper",
    name: "S. Rayudu",
    college: "",
    quote: "Consistent board preparation ensured high marks.",
  },
  {
    img: "/results/S.Chaitanya_ipe.jpeg",
    exam: "IPE",
    title: "SELECTED",
    value: "IPE",
    name: "S. Chaitanya",
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
  {
    img: "/results/new2/Bhavya_ipe.jpeg",
    exam: "IPE",
    title: "SELECTED",
    value: "IPE",
    name: "Bhavya",
    college: "",
    quote: "Strong subject clarity made the difference.",
  },
  {
    img: "/results/new2/D.Shruti_ipe.jpeg",
    exam: "IPE",
    title: "SELECTED",
    value: "IPE",
    name: "D. Shruti",
    college: "",
    quote: "Strong subject clarity made the difference.",
  },
  {
    img: "/results/new2/NagaSriya_ipe.jpeg",
    exam: "IPE",
    title: "SELECTED",
    value: "IPE",
    name: "NagaSriya",
    college: "",
    quote: "Strong subject clarity made the difference.",
  },
  {
    img: "/results/new2/Vyshnavi_ipe.jpeg",
    exam: "IPE",
    title: "SELECTED",
    value: "IPE",
    name: "Vyshnavi",
    college: "",
    quote: "Strong subject clarity made the difference.",
  },
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
    name: "R. Samyul",
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

/* ─── helpers ────────────────────────────────────────────────────────────── */
function examLabel(exam) {
  const map = {
    "IIT JEE Advanced": "IIT",
    "NEET UG": "NEET",
    BITSAT: "BITS",
    BITS: "BITS",
    EAMCET: "EAMCET",
    IPE: "IPE",
    Engineering: "ENG",
  };
  return map[exam] ?? "ENG";
}

function getMeta(exam) {
  return (
    EXAM_META[exam] ?? {
      color: "#6B7280",
      light: "#F9FAFB",
      border: "#E5E7EB",
      label: "EXM",
    }
  );
}

const isHero = (item) =>
  item.title === "ALL INDIA RANK" ||
  item.value === "710 / 720" ||
  item.title === "STATE RANK" ||
  item.title === "IPE TOPPER";

/* ─── Card ───────────────────────────────────────────────────────────────── */
function TopperCard({ item, index }) {
  const meta = getMeta(item.exam);
  const hero = isHero(item);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: -8 }}
      transition={{
        duration: 0.44,
        delay: (index % 16) * 0.032,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col bg-white overflow-hidden"
      style={{
        borderRadius: 24,
        border: hero ? `1.5px solid ${meta.border}` : "1.5px solid #EBEBEB",
        boxShadow: hero
          ? `0 3px 0 0 ${meta.color}, 0 16px 48px -8px ${meta.color}20`
          : "0 1px 3px rgba(0,0,0,0.04), 0 8px 28px -4px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Left accent stripe */}
      <div
        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
        style={{ background: hero ? meta.color : `${meta.color}40` }}
      />

      {/* Hero badge */}
      {hero && (
        <div
          className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider"
          style={{ background: meta.color, color: "white" }}
        >
          ★ Top Ranker
        </div>
      )}

      <div className="flex flex-col gap-3.5 px-5 pt-5 pb-4 pl-6 h-full">
        {/* Avatar + name */}
        <div className="flex items-center gap-3.5">
          {/* Avatar */}
          <div
            className="relative flex-shrink-0 overflow-hidden"
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              border: `2px solid ${meta.border}`,
              boxShadow: `0 2px 10px ${meta.color}18`,
            }}
          >
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-1 min-w-0">
            <p
              className="text-gray-900 font-bold leading-tight"
              style={{
                fontSize: "1.05rem",
                letterSpacing: "-0.01em",
              }}
            >
              {item.name}
            </p>
            {item.college && (
              <p className="text-[11px] text-gray-400 mt-0.5 truncate font-medium">
                {item.college}
              </p>
            )}

            {/* Exam tag */}
            <span
              className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider"
              style={{
                fontSize: "9px",
                background: meta.light,
                color: meta.color,
                border: `1px solid ${meta.border}`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: meta.color, flexShrink: 0 }}
              />
              {examLabel(item.exam)}
            </span>
          </div>
        </div>

        {/* Achievement */}
        {(item.title || item.value) && (
          <div
            className="rounded-2xl text-center py-3 px-4"
            style={{
              background: `linear-gradient(135deg, ${meta.light} 0%, white 100%)`,
              border: `1px solid ${meta.border}`,
            }}
          >
            {item.title && (
              <p
                className="font-bold tracking-[0.18em] uppercase mb-1"
                style={{
                  fontSize: "8.5px",
                  color: `${meta.color}AA`,
                }}
              >
                {item.title}
              </p>
            )}
            {item.value && (
              <p
                className="font-extrabold leading-none"
                style={{
                  fontSize: hero ? "1.55rem" : "1.1rem",
                  color: meta.color,
                  letterSpacing: "-0.02em",
                }}
              >
                {item.value}
              </p>
            )}
          </div>
        )}

        {/* Quote */}
        <p
          className="text-[11px] leading-relaxed mt-auto pt-3 border-t"
          style={{
            color: "#B0B7C3",
            borderColor: "#F3F4F6",
            fontStyle: "italic",
          }}
        >
          {item.quote}
        </p>
      </div>
    </motion.article>
  );
}

/* ─── FILTER PILL ────────────────────────────────────────────────────────── */
function FilterPill({ label, count, active, onClick, color, light, border }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: active ? (label === "All" ? "#111827" : light) : "white",
        color: active ? (label === "All" ? "white" : color) : "#6B7280",
        border: active
          ? `1.5px solid ${label === "All" ? "#111827" : border}`
          : "1.5px solid #E5E7EB",
        boxShadow: active
          ? label === "All"
            ? "0 4px 14px rgba(0,0,0,0.2)"
            : `0 4px 14px ${color}25`
          : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {active && label !== "All" && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: color, flexShrink: 0 }}
        />
      )}
      {label}
      <span
        className="text-[9px] px-1.5 py-0.5 rounded-full font-bold leading-none"
        style={{
          background: active
            ? label === "All"
              ? "rgba(255,255,255,0.15)"
              : `${color}22`
            : "#F3F4F6",
          color: active
            ? label === "All"
              ? "rgba(255,255,255,0.85)"
              : color
            : "#9CA3AF",
        }}
      >
        {count}
      </span>
    </button>
  );
}

/* ─── MAIN ───────────────────────────────────────────────────────────────── */
export default function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? toppers
      : toppers.filter((t) => examLabel(t.exam) === active);

  const filterMeta = {
    All: { color: "#111827", light: "#F9FAFB", border: "#E5E7EB" },
    IIT: { color: "#E8450A", light: "#FFF1EC", border: "#FFD5C5" },
    NEET: { color: "#0A7E6E", light: "#E8F8F5", border: "#B8EBE4" },
    BITS: { color: "#6C2FD4", light: "#F2EDFF", border: "#D9CAFF" },
    EAMCET: { color: "#B05C00", light: "#FFF5E8", border: "#FFDDAA" },
    ENG: { color: "#0070C0", light: "#E8F3FF", border: "#BDD8F5" },
    IPE: { color: "#1A6E2F", light: "#EDFBF2", border: "#AAEDC4" },
  };

  const counts = ALL_FILTERS.reduce((acc, f) => {
    acc[f] =
      f === "All"
        ? toppers.length
        : toppers.filter((t) => examLabel(t.exam) === f).length;
    return acc;
  }, {});

  return (
    <>
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;0,800;1,600;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
      `}</style> */}

      <section
        id="results-section"
        ref={ref}
        className="relative overflow-hidden"
        style={{
          background: "#FFFFFF",
        }}
      >
        {/* ── Dot grid ── */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(#E5E7EB 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            opacity: 0.6,
          }}
        />

        {/* ── Colour blobs ── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.06] blur-3xl"
            style={{ background: "#E8450A" }}
          />
          <div
            className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-[0.05] blur-3xl"
            style={{ background: "#0A7E6E" }}
          />
          <div
            className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full opacity-[0.04] blur-3xl"
            style={{ background: "#6C2FD4" }}
          />
        </div>

        {/* ── Large watermark ── */}
        <div
          className="pointer-events-none select-none absolute z-0"
          style={{
            fontSize: "clamp(100px, 16vw, 240px)",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(0,0,0,0.045)",
            right: -10,
            top: -10,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          Results
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          {/* ═══ HEADER ═══ */}
          <div className="mb-16">
            {/* Eyebrow line */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-7"
            >
              <div
                className="w-10 h-px"
                style={{
                  background: "linear-gradient(90deg, #E8450A, #B05C00)",
                }}
              />
              <span
                className="text-[10px] font-bold tracking-[0.3em] uppercase"
                style={{ color: "#E8450A" }}
              >
                Proven Excellence
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="text-gray-900 leading-[1.04] mb-5"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                maxWidth: 720,
              }}
            >
              Results That{" "}
              <em style={{ fontStyle: "italic", color: "#E8450A" }}>Speak</em>{" "}
              for{" "}
              <span className="relative inline-block">
                Themselves
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.75,
                    delay: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 2,
                    height: 4,
                    borderRadius: 99,
                    background: "linear-gradient(90deg, #E8450A, #F59E0B)",
                    display: "block",
                    transformOrigin: "left",
                  }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-gray-500 text-base leading-relaxed"
              style={{ maxWidth: 480 }}
            >
              Consistent ranks, national selections, and proven academic
              excellence — year after year, batch after batch.
            </motion.p>
          </div>

          {/* ═══ STATS ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-6 overflow-hidden group"
                style={{
                  border: `1.5px solid ${s.border}`,
                  boxShadow: `0 2px 0 0 ${s.color}22, 0 4px 20px rgba(0,0,0,0.06)`,
                }}
              >
                {/* Decorative circle */}
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${s.color}0C` }}
                />
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ background: s.color }}
                />
                <div
                  className="font-extrabold leading-none mb-3"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: s.color,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {inView && (
                    <CountUp start={0} end={s.number} duration={2.2} />
                  )}
                  {s.suffix}
                </div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#9CA3AF" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* ═══ FILTERS ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {ALL_FILTERS.map((f) => {
              const fm = filterMeta[f] ?? filterMeta.All;
              return (
                <FilterPill
                  key={f}
                  label={f}
                  count={counts[f]}
                  active={active === f}
                  onClick={() => setActive(f)}
                  color={fm.color}
                  light={fm.light}
                  border={fm.border}
                />
              );
            })}
          </motion.div>

          {/* ═══ GRID ═══ */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filtered.map((item, i) => (
                <TopperCard
                  key={`${item.name}-${item.exam}-${i}`}
                  item={item}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ═══ FOOTER ═══ */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <div
              className="h-px flex-1 max-w-24"
              style={{
                background: "linear-gradient(90deg, transparent, #E5E7EB)",
              }}
            />
            <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
              {filtered.length} of {toppers.length} toppers
            </p>
            <div
              className="h-px flex-1 max-w-24"
              style={{
                background: "linear-gradient(90deg, #E5E7EB, transparent)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
