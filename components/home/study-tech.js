"use client";

import Image from "next/image";
import {
  FaBookOpen,
  FaLayerGroup,
  FaClipboardList,
  FaChartLine,
  FaUserCheck,
  FaVideo,
  FaLaptop,
  FaChartBar,
  FaPenFancy,
} from "react-icons/fa";

export default function StudyTech() {
  const studyPoints = [
    {
      icon: <FaBookOpen />,
      text: "IIT / NEET focused comprehensive study material",
    },
    {
      icon: <FaLayerGroup />,
      text: "Foundation books mapping standard syllabus",
    },
    {
      icon: <FaClipboardList />,
      text: "NTSE & previous year question banks",
    },
    {
      icon: <FaChartLine />,
      text: "Rigorous weekly & monthly pattern tests",
    },
    {
      icon: <FaUserCheck />,
      text: "In-depth rank analysis and corrective sessions",
    },
  ];

  const techPoints = [
    {
      icon: <FaVideo />,
      text: "Live online classes and recorded video library",
    },
    {
      icon: <FaLaptop />,
      text: "Dedicated test portal for CBT practice",
    },
    {
      icon: <FaChartBar />,
      text: "Real-time performance dashboard for parents",
    },
    {
      icon: <FaPenFancy />,
      text: "Exam-pattern based mock tests environment",
    },
  ];

  return (
    <section className="bg-[#F5F5F7]  md:py-10">
      <div className=" space-y-20">
        <div className="bg-[#F3F4F6] max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center ">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Comprehensive Study <br /> Material & Test System
              </h2>

              <div className="mt-6 space-y-4">
                {studyPoints.map((item, i) => (
                  <div key={i} className="flex gap-3 text-gray-700 items-start">
                    <span className="text-red-800 mt-1">{item.icon}</span>
                    <span className="text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/home/study.jpg"
                alt="study"
                width={600}
                height={420}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-[#FBFBFA]">
          <div className="max-w-7xl mx-auto px-4 py-15 grid md:grid-cols-2 gap-10 items-center ">
            <div className="order-last md:order-first">
              <Image
                src="/home/tech.jpg"
                alt="tech"
                width={600}
                height={420}
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                Technology-Enabled Learning
              </h2>

              <div className="mt-6 space-y-4">
                {techPoints.map((item, i) => (
                  <div key={i} className="flex gap-3 text-gray-700 items-start">
                    <span className="text-red-800 mt-1">{item.icon}</span>
                    <span className="text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
