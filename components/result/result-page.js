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
  "IIT JEE Main": {
    color: "#C4320A",
    light: "#FFF4EE",
    border: "#FECDBB",
    label: "MAIN",
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
  // Engineering and EAMCET both map to ENG label
  Engineering: {
    color: "#0070C0",
    light: "#E8F3FF",
    border: "#BDD8F5",
    label: "ENG",
  },
  EAMCET: {
    color: "#0070C0",
    light: "#E8F3FF",
    border: "#BDD8F5",
    label: "ENG",
  },
  IPE: { color: "#1A6E2F", light: "#EDFBF2", border: "#AAEDC4", label: "IPE" },
};

// CHANGE 1: Added MAIN tab; CHANGE 2: Merged ENG+EAMCET under ENG
const ALL_FILTERS = ["All", "IIT", "MAIN", "NEET", "BITS", "ENG", "IPE"];

const stats = [
  {
    number: 130,
    suffix: "+",
    label: "IIT Advanced Selections",
    color: "#E8450A",
    bg: "#FFF1EC",
    border: "#FFD5C5",
  },
  {
    number: 150,
    suffix: "+",
    label: "JEE Mains Selections",
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
    number: 300,
    suffix: "+",
    label: "EAMCET Selections",
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

// CHANGE 3: Every person has a unique quote. No entry skipped — all 132 toppers preserved.
const toppers = [
  // ── IIT JEE Advanced ──────────────────────────────────────────────────────
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
    img: "/results/kamal_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 474",
    name: "Kamal",
    college: "",
    quote:
      "Consistent mock analysis and reviewing every mistake sharpened my problem-solving speed.",
  },
  {
    img: "/results/new3/k.m.v.akhil.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 103",
    name: "K.M.V Akhil",
    college: "",
    quote:
      "Balancing subjects equally and never leaving a topic halfway got me to AIR 103.",
  },
  {
    img: "/results/new/c.harshit_kumar_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 772",
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
    title: "All India Rank",
    value: "Rank 639",
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
      "Disciplined daily practice and never skipping revision helped me land my IIT seat.",
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
    title: "Rank",
    value: "RANK 1456",
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
      "Staying consistent even on tough days and trusting the process got me to IIT.",
  },
  {
    img: "/results/new2/a.s.karthik_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "A.S. Karthik",
    college: "",
    quote:
      "Faculty mentorship at every step eliminated my weak areas before the exam.",
  },
  {
    img: "/results/new2/punith_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 192",
    name: "Punith",
    college: "",
    quote:
      "Solving every previous year paper multiple times built the intuition I needed for AIR 192.",
  },
  {
    img: "/results/new2/sai_varun_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 1663",
    name: "Sai Varun",
    college: "",
    quote:
      "Structured weekly targets and honest mock debriefs turned my preparation around.",
  },
  {
    img: "/results/new2/saveen_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Saveen",
    college: "",
    quote:
      "Never compromising on conceptual clarity — that habit carried me through Advanced.",
  },
  {
    img: "/results/new2/siri_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Siri",
    college: "",
    quote:
      "Peer learning and group doubt sessions gave me perspectives I would have missed alone.",
  },
  {
    img: "/results/new2/vanya_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Vanya",
    college: "",
    quote:
      "Staying positive during setbacks and treating every test as a learning opportunity worked.",
  },
  {
    img: "/results/new2/varshini_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Varshini",
    college: "",
    quote:
      "Daily two-hour revision blocks were non-negotiable — they compound over months.",
  },
  {
    img: "/results/new2/varshit_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 3384",
    name: "Varshit",
    college: "",
    quote:
      "Accuracy over speed — that shift in mindset improved my score dramatically.",
  },
  {
    img: "/results/new3/varshit_jee_advanced_930.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 930",
    name: "Varshit",
    college: "",
    quote:
      "Smart elimination in MCQs and careful time allocation secured my AIR 930.",
  },
  {
    img: "/results/new2/vishes_meena_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 333",
    name: "Vishes Meena",
    college: "",
    quote:
      "Relentless focus on physics numericals in the final month gave me the edge I needed.",
  },
  {
    img: "/results/new2/zenith_prabhkar_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "All India Rank",
    value: "AIR 992",
    name: "Zenith Prabhkar",
    college: "",
    quote:
      "Sticking to a routine even during holidays kept my momentum alive through preparation.",
  },
  {
    img: "/results/new2/vasudev_iit.jpeg",
    exam: "IIT JEE Advanced",
    title: "SELECTED",
    value: "IIT JEE Advanced",
    name: "Vasudev",
    college: "",
    quote:
      "Believing in the process and trusting my faculty was the foundation of my success.",
  },

  // ── IIT JEE Main (CHANGE 1 — separate tab) ───────────────────────────────
  {
    img: "/results/new/siddhart_jee_main_rank_4.jpeg",
    exam: "IIT JEE Main",
    title: "ALL INDIA RANK",
    value: "AIR 04",
    name: "Siddhart",
    college: "",
    quote:
      "Daily revision and mock tests helped me achieve AIR 4 in JEE Main, setting a strong foundation for Advanced.",
  },
  {
    img: "/results/new/abhiram_iit.jpeg",
    exam: "IIT JEE Main",
    title: "All India Rank",
    value: "AIR 242",
    name: "Abhiram",
    college: "",
    quote:
      "Weekly doubt-clearing sessions gave me the clarity I needed to crack JEE Mains with confidence.",
  },

  // ── NEET UG ───────────────────────────────────────────────────────────────
  {
    img: "/results/bhanu_kiran_neet.jpeg",
    exam: "NEET UG",
    title: "Rank",
    value: "681",
    name: "Sharath",
    college: "",
    quote:
      "Daily biology practice and timed chapter tests steadily improved my final NEET score.",
  },
  {
    img: "/results/new3/p.srujana.jpeg",
    exam: "NEET UG",
    title: "Rank",
    value: "170",
    name: "P.Srujana",
    college: "",
    quote:
      "Focusing on NCERT line-by-line and leaving no concept half-understood got me AIR 170.",
  },
  {
    img: "/results/new/elina.jpeg",
    exam: "NEET UG",
    title: "Rank",
    value: "16",
    name: "Elina Senapathi",
    college: "_",
    quote:
      "Daily mockups and focused revision across all three subjects helped me achieve a top NEET rank.",
  },
  {
    img: "/results/syed_fatima_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Syed Fatima",
    college: "",
    quote:
      "Focused mentoring sessions and structured doubt clearing helped me clear NEET confidently.",
  },
  {
    img: "/results/new2/A.Vanjari_Akshitsa_neet.jpeg",
    exam: "NEET UG",
    title: "All India Rank",
    value: "NEET UG",
    name: "A. Vanjari Akshitsa",
    college: "AIR 264",
    quote:
      "Consistent 12-hour study days and prioritising weak chapters turned my preparation around.",
  },
  {
    img: "/results/new2/deepika_neet.jpeg",
    exam: "NEET UG",
    title: "Rank",
    value: "273",
    name: "Deepika",
    college: "AIR 273",
    quote:
      "Systematic revision cycles and flashcard-based memory tricks helped me retain biology effectively.",
  },
  {
    img: "/results/new2/mokshita_neet.jpeg",
    exam: "NEET UG",
    title: "Rank",
    value: "543",
    name: "Mokshita",
    college: "",
    quote:
      "Practicing previous year NEET papers daily gave me confidence and exam-day composure.",
  },
  {
    img: "/results/new2/n.rahul_chowdary_neet.jpeg",
    exam: "NEET UG",
    title: "Rank",
    value: "299",
    name: "N. Rahul Chowdary",
    college: "",
    quote:
      "Subject-wise time allocation and dedicated chemistry revision in the last month lifted my rank.",
  },
  {
    img: "/results/new2/pramodh_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Pramodh",
    college: "",
    quote:
      "Faculty-guided weekly test series exposed my gaps early and gave me time to correct them.",
  },
  {
    img: "/results/new2/sharath_neet.jpeg",
    exam: "NEET UG",
    title: "Rank",
    value: "127",
    name: "Sharath",
    college: "",
    quote:
      "Balancing school board and NEET preparation required smart scheduling — that discipline paid off.",
  },
  {
    img: "/results/new2/surendar_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Surendar",
    college: "",
    quote:
      "Treating every wrong answer as a teacher rather than a failure shaped my whole approach.",
  },
  {
    img: "/results/new2/tushara_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "Tushara",
    college: "",
    quote:
      "Strong faculty support and a nurturing environment kept me motivated through tough preparation.",
  },
  {
    img: "/results/new2/v.mounika_neet.jpeg",
    exam: "NEET UG",
    title: "SELECTED",
    value: "NEET UG",
    name: "V. Mounika",
    college: "",
    quote:
      "Visualising exam-day success from day one kept me driven even during exhausting revision weeks.",
  },

  // ── BITS / BITSAT ─────────────────────────────────────────────────────────
  {
    img: "/results/Naga_sriya_bits.jpeg",
    exam: "BITSAT",
    title: "SELECTED",
    value: "BITS",
    name: "Naga Sriya",
    college: "",
    quote:
      "Smart preparation strategy focusing on speed and accuracy helped me crack BITSAT.",
  },
  {
    img: "/results/S.L.V.Karthik_bits.jpeg",
    exam: "BITSAT",
    title: "SELECTED",
    value: "BITS",
    name: "S.L.V. Karthik",
    college: "",
    quote:
      "Time-bound practice sessions under exam conditions made the actual BITSAT feel manageable.",
  },
  {
    img: "/results/Anjali_BITS.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Anjali",
    college: "",
    quote:
      "Regular performance tracking after every mock revealed hidden patterns in my errors.",
  },
  {
    img: "/results/Bhavika_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Bhavika",
    college: "",
    quote:
      "Structured doubt sessions twice a week prevented concepts from piling up unresolved.",
  },
  {
    img: "/results/new/bharat_teja_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Bharat Teja",
    college: "",
    quote:
      "Solving previous year papers repeatedly gave me the pattern recognition needed for BITS.",
  },
  {
    img: "/results/new/greeshma_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Greeshma",
    college: "",
    quote:
      "Staying consistent with weekly tests and timely revisions made BITS a reality for me.",
  },
  {
    img: "/results/new/Maniratna_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Maniratna",
    college: "",
    quote:
      "Mastering speed and accuracy together — not one at the expense of the other — was my real key.",
  },
  {
    img: "/results/new/sanath_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Sanath",
    college: "",
    quote:
      "Strong basics paired with smart time management during the test helped me secure my BITS seat.",
  },
  {
    img: "/results/new/sanjay_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Sanjay",
    college: "",
    quote:
      "Daily mock practice and carefully analysing every error built the confidence I needed for BITSAT.",
  },
  {
    img: "/results/new/srija_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Srija",
    college: "",
    quote:
      "Prioritising high-weightage chapters first ensured the best return on my preparation time.",
  },
  {
    img: "/results/new2/anvesh_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Anvesh",
    college: "",
    quote:
      "Never skipping a mock test, no matter how busy, kept my readiness consistent throughout.",
  },
  {
    img: "/results/new2/aveen_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Aveen",
    college: "",
    quote:
      "Identifying my strongest subject and using it to save time for harder ones was a game-changer.",
  },
  {
    img: "/results/new2/krishna_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Krishna",
    college: "",
    quote:
      "Quality study over long hours — focussed 6-hour sessions beat unfocussed 12-hour ones every time.",
  },
  {
    img: "/results/new2/m.nitya_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "M. Nithya",
    college: "",
    quote:
      "Subject rotation daily ensured no topic felt rusty when exam day finally arrived.",
  },
  {
    img: "/results/new2/nithin_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Nithin",
    college: "",
    quote:
      "Maintaining an error log and revisiting it weekly eliminated recurring mistakes completely.",
  },
  {
    img: "/results/new2/srija_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Srija",
    college: "",
    quote:
      "Keeping the end goal visible — a BITS campus — motivated me through the hardest revision days.",
  },
  {
    img: "/results/new2/steffi_roy_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Steffi Roy",
    college: "",
    quote:
      "Pairing conceptual learning with application-based problems early on made BITSAT feel natural.",
  },
  {
    img: "/results/new2/supriya_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Supriya",
    college: "",
    quote:
      "Exam temperament — staying calm when a question is hard — is a skill I practised deliberately.",
  },
  {
    img: "/results/new2/Vijita_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Vijita",
    college: "",
    quote:
      "Short daily revision of formulas prevented the forgetting curve from undoing my hard work.",
  },
  {
    img: "/results/new2/vivek_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Vivek",
    college: "",
    quote:
      "Attempting the easiest questions first in BITSAT and returning to tougher ones saved precious time.",
  },
  {
    img: "/results/sai_arunkanth_bits.jpeg",
    exam: "BITS",
    title: "SELECTED",
    value: "BITS",
    name: "Sai Arunkanth",
    college: "BITS Pilani",
    quote:
      "Consistent mock testing and tracking my percentile weekly gave me confidence going into BITSAT.",
  },

  // ── EAMCET (CHANGE 2 — merged with Engineering under ENG filter) ──────────
  {
    img: "/results/Haripriya_eamcet.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "EAMCET",
    name: "Haripriya",
    college: "",
    quote:
      "Consistent revision of formulae sheets each morning sharpened my EAMCET performance.",
  },
  {
    img: "/results/new3/varshit.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "Rank 448",
    name: "Varshit",
    college: "",
    quote:
      "Targeting rank under 500 from day one kept my preparation sharply focused and goal-oriented.",
  },
  {
    img: "/results/new3/nitin_eamcet_ran_686.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "Rank 686",
    name: "Nitin",
    college: "",
    quote:
      "Revising entire syllabus at least three times before the exam cemented every concept.",
  },
  {
    img: "/results/new3/dinesh_reddy_eamcet_rank_756.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "Rank 756",
    name: "Dinesh Reddy",
    college: "",
    quote:
      "Devoting extra time to mathematics, my weakest section, turned it into a scoring asset.",
  },
  {
    img: "/results/new3/disha_aggrwaal_eamcet_5600.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "Rank 5600",
    name: "Disha Aggrwaal",
    college: "",
    quote:
      "Staying calm during the actual exam and trusting preparation helped me perform at my best.",
  },
  {
    img: "/results/new3/anuudeep_reddy_eamcet_2260.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "Rank 2260",
    name: "Anuudeep Reddy",
    college: "",
    quote:
      "Attempting full-length EAMCET mocks under timed conditions built stamina for exam day.",
  },
  {
    img: "/results/vaishnavi_eamcet.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "EAMCET",
    name: "Vaishnavi",
    college: "",
    quote:
      "Concept-based learning over rote memorisation helped me adapt to any question pattern.",
  },
  {
    img: "/results/Meghana_eamcet.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "EAMCET",
    name: "Meghana",
    college: "",
    quote:
      "Doubt-clearing sessions twice a week ensured no chapter was left with loose ends.",
  },
  {
    img: "/results/gaytri_sowmya_eamcet.jpeg",
    exam: "EAMCET",
    title: "Rank",
    value: "RANK 1542",
    name: "Gaytri Sowmya",
    college: "",
    quote:
      "Regular assessments tracked my progress and helped me focus revision where it mattered most.",
  },
  {
    img: "/results/new3/k.toyesh_eamcet_787.jpeg",
    exam: "EAMCET",
    title: "Rank",
    value: "RANK 787",
    name: "K. Toyesh",
    college: "",
    quote:
      "Short-answer revision drills on chapters I feared most converted them into scoring areas.",
  },
  {
    img: "/results/P..V.S.E.Haripriya_eamcer.jpeg",
    exam: "EAMCET",
    title: "Rank",
    value: "Rank 5566",
    name: "Haripriya",
    college: "",
    quote:
      "Focused preparation and revisiting fundamentals gave me the exam confidence I needed.",
  },
  {
    img: "/results/R.Vandhana_eamcet.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "EAMCET",
    name: "R. Vandhana",
    college: "",
    quote:
      "Weekly mock tests refined my accuracy and taught me which questions to skip and which to attempt.",
  },
  {
    img: "/results/Suchitra_eamcet.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "EAMCET",
    name: "Suchitra",
    college: "",
    quote:
      "Strong basics built in the first year ensured I had a solid foundation for the final exam.",
  },
  {
    img: "/results/P.Sreenivas_eamcet.jpeg",
    exam: "EAMCET",
    title: "SELECTED",
    value: "EAMCET",
    name: "P. Sreenivas",
    college: "",
    quote:
      "Practising under timed conditions regularly trained me to perform under real exam pressure.",
  },
  {
    img: "/results/KrishnaChaitanya_eng.jpeg",
    exam: "EAMCET",
    title: "Rank",
    value: "Rank 9895",
    name: "Krishna Chaitanya",
    college: "",
    quote:
      "Strong fundamentals and problem-solving practice made engineering admission achievable.",
  },
  {
    img: "/results/J.Komal_eng.jpeg",
    exam: "EAMCET",
    title: "Rank",
    value: "RANK 4229",
    name: "J. Komal",
    college: "",
    quote:
      "Step-by-step preparation and building on each chapter progressively improved my confidence.",
  },

  // ── Engineering (CHANGE 2 — merged with EAMCET under ENG filter) ──────────
  {
    img: "/results/Mamatha_NIT.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "NIT",
    name: "Mamatha",
    college: "",
    quote:
      "Structured guidance and consistent practice helped me secure my NIT admission.",
  },
  {
    img: "/results/Vijitha_NIT.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "NIT",
    name: "Vijitha",
    college: "",
    quote:
      "Strong conceptual clarity across all subjects ensured a confident NIT selection.",
  },
  {
    img: "/results/G.Nishita_engineering.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Nishita",
    college: "",
    quote:
      "Consistent preparation habits formed early in the year made the final push manageable.",
  },
  {
    img: "/results/R.Samyul_Engineering.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "R. Samyul",
    college: "",
    quote:
      "Concept reinforcement through application-based problems improved my overall performance.",
  },
  {
    img: "/results/Dasari_sai_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "J. Dasari Sai",
    college: "",
    quote:
      "Doubt sessions with faculty strengthened my weak areas and boosted overall confidence.",
  },
  {
    img: "/results/Yashswai_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Yashswai",
    college: "",
    quote:
      "Focused practice on high-scoring topics ensured steady and visible improvement each week.",
  },
  {
    img: "/results/ankush_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Ankush",
    college: "",
    quote:
      "Regular mock tests helped me refine exam strategy and reduce careless mistakes.",
  },
  {
    img: "/results/sindhu_eng.jpeg",
    exam: "Engineering",
    title: "Rank",
    value: "Rank 7583",
    name: "Sindhu",
    college: "",
    quote:
      "Consistent mentorship helped me stay on track when my momentum dipped mid-preparation.",
  },
  {
    img: "/results/abhishek_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Abhishek",
    college: "",
    quote:
      "Strong conceptual clarity across physics, chemistry, and maths ensured my engineering admission.",
  },
  {
    img: "/results/akhil_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Akhil",
    college: "",
    quote:
      "Performance tracking after each test helped identify blind spots before they cost marks.",
  },
  {
    img: "/results/akshit_reddy_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Akshit Reddy",
    college: "",
    quote:
      "Focused preparation sessions built both subject mastery and exam-day confidence.",
  },
  {
    img: "/results/amitha_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Amitha",
    college: "",
    quote:
      "Continuous revision of error notes prevented the same mistakes from recurring in mocks.",
  },
  {
    img: "/results/Anagha_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Anagha",
    college: "",
    quote:
      "Mock analysis after every test — not just taking it — was what actually moved my scores.",
  },
  {
    img: "/results/B.Marlyin_Joymer_Eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "B. Marlyin Joymer",
    college: "",
    quote:
      "Strong discipline and refusing to skip revision days ensured consistent performance throughout.",
  },
  {
    img: "/results/B.Srika_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "B. Srika",
    college: "",
    quote:
      "Guided practice with personalised feedback helped me stay focused and avoid drift.",
  },
  {
    img: "/results/C.Rishma_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "C. Rishma",
    college: "",
    quote:
      "A structured daily schedule eliminated guesswork and let me measure progress clearly.",
  },
  {
    img: "/results/D.Sailohitaksh_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "D. Sailohitaksh",
    college: "",
    quote:
      "Stepwise preparation — mastering each concept before moving to the next — built a strong base.",
  },
  {
    img: "/results/D.shruti_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "D. Shruti",
    college: "",
    quote:
      "Regular feedback from faculty sessions helped me course-correct early and often.",
  },
  {
    img: "/results/Dhanush_eamcet.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Dhanush",
    college: "",
    quote:
      "Dedicated revision cycles across all subjects ensured no area was left underprepared.",
  },
  {
    img: "/results/hita_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Hita",
    college: "",
    quote:
      "Focused doubt clearing strengthened my conceptual foundation before every exam.",
  },
  {
    img: "/results/Hitesh_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Hitesh",
    college: "",
    quote:
      "A consistent study routine — same time, same place every day — built the habit of deep focus.",
  },
  {
    img: "/results/K.Ananya_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "K. Ananya",
    college: "",
    quote:
      "Practising under exam conditions consistently made the actual test feel like just another mock.",
  },
  {
    img: "/results/kiran_eamcet.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Kiran",
    college: "",
    quote:
      "Regular assessments benchmarked my progress and kept me accountable to my targets.",
  },
  {
    img: "/results/Krishna_Teja_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Krishna Teja",
    college: "",
    quote:
      "Structured guidance gave me a clear roadmap when the volume of syllabus felt overwhelming.",
  },
  {
    img: "/results/m.minda_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "M. Minda",
    college: "",
    quote:
      "Strong fundamentals ensured that even unfamiliar question formats could be reasoned through.",
  },
  {
    img: "/results/Meghana_Eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Meghana",
    college: "",
    quote:
      "Focused practice on past paper trends helped me allocate preparation time most effectively.",
  },
  {
    img: "/results/Priyanka_Reddy_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Priyanka Reddy",
    college: "",
    quote:
      "Mentorship sessions kept me motivated and course-corrected me during difficult preparation phases.",
  },
  {
    img: "/results/Saurav_Patil_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Saurav Patil",
    college: "",
    quote:
      "Regular problem-solving practice across difficulty levels strengthened my overall preparation.",
  },
  {
    img: "/results/Sravya_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Sravya",
    college: "",
    quote:
      "Focused revision in the final weeks helped me consolidate everything and perform with confidence.",
  },
  {
    img: "/results/Tejaswani_eng.jpeg",
    exam: "Engineering",
    title: "SELECTED",
    value: "Engineering",
    name: "Tejaswani",
    college: "",
    quote:
      "Strong academic support throughout the year improved my scores significantly and consistently.",
  },

  // ── IPE ───────────────────────────────────────────────────────────────────
  {
    img: "/results/asi_khan_ipe_topper.jpeg",
    exam: "IPE",
    title: "Score",
    value: "987/1000",
    name: "Asif Khan",
    college: "",
    quote:
      "A structured study plan covering every chapter ensured I never had an unexpected surprise in IPE.",
  },
  {
    img: "/results/new3/vishwas_ipe_980.jpeg",
    exam: "IPE",
    title: "Score",
    value: "980/1000",
    name: "Vishwas",
    college: "",
    quote:
      "Completing past question papers for every subject built familiarity with IPE patterns.",
  },
  {
    img: "/results/gaytri_sowmya_eamcet.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "Marks 974",
    name: "Gaytri Sowmya",
    college: "",
    quote:
      "Regular self-assessment and structured notes helped me stay ahead throughout the year.",
  },
  {
    img: "/results/new3/varshit.jpeg",
    exam: "IPE",
    title: "Score",
    value: "985/1000",
    name: "Varshit",
    college: "",
    quote:
      "Consistent revision in the final two months consolidated everything I had studied across the year.",
  },
  {
    img: "/results/new3/satwik_sanjay_ipe_982.jpeg",
    exam: "IPE",
    title: "Score",
    value: "982/1000",
    name: "Satwik Sanjay",
    college: "",
    quote:
      "Covering every derivation and practising diagram-based questions gave me full marks in theory.",
  },
  {
    img: "/results/new3/kavya_gaytri_ipe_980.jpeg",
    exam: "IPE",
    title: "Score",
    value: "980/1000",
    name: "Kavya Gaytri",
    college: "",
    quote:
      "Writing neat, structured answers in practice tests translated directly to better IPE marks.",
  },
  {
    img: "/results/new3/v.ajay_ipe_984.jpeg",
    exam: "IPE",
    title: "Score",
    value: "984/1000",
    name: "V. Ajay",
    college: "",
    quote:
      "Mastering long-answer formats and time management within sections made the difference in IPE.",
  },
  {
    img: "/results/new3/yeshwanth_ipe_987.jpeg",
    exam: "IPE",
    title: "Score",
    value: "987/1000",
    name: "Yeshwanth",
    college: "",
    quote:
      "Aiming for zero errors in the objective section freed up marks for creative answers in theory.",
  },
  {
    img: "/results/s.rayudu_ipe_topper.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "973/100",
    name: "S. Rayudu",
    college: "",
    quote:
      "Consistent board preparation across both years of intermediate ensured high IPE marks.",
  },
  {
    img: "/results/new3/chiranjeevi_ipe_982.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "982/1000",
    name: "Chiranjeevi",
    college: "",
    quote:
      "Revision schedules that alternated subjects daily prevented mental fatigue before IPE.",
  },
  {
    img: "/results/new3/v.meghana_ipe_977.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "977/1000",
    name: "V. Meghana",
    college: "",
    quote:
      "Practising answer presentation and diagrams as carefully as the content itself boosted my marks.",
  },
  {
    img: "/results/new3/t.s.reddy.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "977/1000",
    name: "T. S. Reddy",
    college: "",
    quote:
      "Treating IPE preparation seriously alongside competitive exams gave me the best of both.",
  },
  {
    img: "/results/new3/divyamsh_kasi.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "963/1000",
    name: "Divyamsh Kasi",
    college: "",
    quote:
      "Consistent board preparation and targeted chapter summaries helped me score well in IPE.",
  },
  {
    img: "/results/new3/sai_deepika_ipe_964.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "964/1000",
    name: "Sai Deepika",
    college: "",
    quote:
      "Going through model papers repeatedly ensured familiarity with question formats in every subject.",
  },
  {
    img: "/results/new3/sai_srujan_ipe_960.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "960/1000",
    name: "Sai Srujan",
    college: "",
    quote:
      "Focussing on full marks in objective sections gave me a safety buffer for essay questions.",
  },
  {
    img: "/results/new3/m.vineeth_reddy_ipe_963.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "963/1000",
    name: "M. Vineeth Reddy",
    college: "",
    quote:
      "Consistent board preparation integrated with entrance coaching made both manageable simultaneously.",
  },
  {
    img: "/results/new3/spandana_ipe_965.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "965/1000",
    name: "Spandana",
    college: "",
    quote:
      "Careful time allocation in the exam — starting with strongest sections — gave me composure.",
  },
  {
    img: "/results/new3/k.bhanu_ipe_965.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "965/1000",
    name: "K. Bhanu",
    college: "",
    quote:
      "Revising short-answer formats frequently ensured I never lost easy marks in IPE.",
  },
  {
    img: "/results/new3/haripriya_ipe_963.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "963/1000",
    name: "Haripriya",
    college: "",
    quote:
      "Thorough preparation across all units left no chapter as a risk on exam day.",
  },
  {
    img: "/results/new3/rahul_charan_ipe_960.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "960/1000",
    name: "Rahul Charan",
    college: "",
    quote:
      "Smart use of the reading time at the start of the exam helped me plan my attempt order.",
  },
  {
    img: "/results/new3/lohitaksh_reddy_ipe.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "964/1000",
    name: "Lohitaksh Reddy",
    college: "",
    quote:
      "Consistent board preparation and faculty guidance ensured a strong IPE score without shortcuts.",
  },
  {
    img: "/results/new3/tejaswini_ipe_975.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "975/1000",
    name: "Tejaswini",
    college: "",
    quote:
      "Maintaining neat answer books and well-labelled diagrams maximised marks across every subject.",
  },
  {
    img: "/results/S.Chaitanya_ipe.jpeg",
    exam: "IPE",
    title: "SELECTED",
    value: "IPE",
    name: "S. Chaitanya",
    college: "",
    quote:
      "Focused revision cycles in the final month helped me consolidate and perform at my best.",
  },
  {
    img: "/results/new3/anirudh_ipe.jpeg",
    exam: "IPE",
    title: "Marks",
    value: "978 /1000",
    name: "Anirudh",
    college: "",
    quote:
      "Strong subject clarity built through the year made the final IPE exam feel straightforward.",
  },
  {
    img: "/results/new2/Bhavya_ipe.jpeg",
    exam: "IPE",
    title: "SELECTED",
    value: "IPE",
    name: "Bhavya",
    college: "",
    quote:
      "Keeping study sessions distraction-free and goal-oriented each day was my consistent habit.",
  },
  {
    img: "/results/new3/d.shruti.jpeg",
    exam: "IPE",
    title: "SELECTED",
    value: "IPE",
    name: "D. Shruti",
    college: "",
    quote:
      "Treating every chapter test as an opportunity to identify gaps early paid off in IPE.",
  },
  {
    img: "/results/new2/NagaSriya_ipe.jpeg",
    exam: "IPE",
    title: "Score",
    value: "979/1000",
    name: "NagaSriya",
    college: "",
    quote:
      "Covering every formula and theorem in the syllabus with zero assumptions gave me 979 marks.",
  },
  {
    img: "/results/new2/Vyshnavi_ipe.jpeg",
    exam: "IPE",
    title: "Score",
    value: "965/1000",
    name: "Vyshnavi",
    college: "",
    quote:
      "Building strong subject clarity from the very first chapter meant revision felt effortless.",
  },
];

/* ─── helpers ────────────────────────────────────────────────────────────── */
function examLabel(exam) {
  const map = {
    "IIT JEE Advanced": "IIT",
    "IIT JEE Main": "MAIN",
    "NEET UG": "NEET",
    BITSAT: "BITS",
    BITS: "BITS",
    // CHANGE 2: EAMCET merged with Engineering under ENG
    EAMCET: "ENG",
    Engineering: "ENG",
    IPE: "IPE",
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
    MAIN: { color: "#C4320A", light: "#FFF4EE", border: "#FECDBB" },
    NEET: { color: "#0A7E6E", light: "#E8F8F5", border: "#B8EBE4" },
    BITS: { color: "#6C2FD4", light: "#F2EDFF", border: "#D9CAFF" },
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
      <section
        id="results-section"
        ref={ref}
        className="relative overflow-hidden"
        style={{ background: "#FFFFFF" }}
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
