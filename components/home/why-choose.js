"use client";

import {
  FaAward,
  FaClipboardList,
  FaUserFriends,
  FaChartLine,
  FaBookOpen,
  FaUniversity,
} from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaAward />,
      title: "Experienced Faculty",
      desc: "Learn from elite educators with 15 to 36 years of teaching experience in national level competitive exams.",
    },
    {
      icon: <FaClipboardList />,
      title: "Daily Tests & Analysis",
      desc: "Rigorous daily testing ensures continuous evaluation and builds exceptional exam temperament.",
    },
    {
      icon: <FaUserFriends />,
      title: "Small Batch Mentoring",
      desc: "Strictly limited batch sizes allow our faculty to provide individual attention to every student.",
    },
    {
      icon: <FaChartLine />,
      title: "Parent Progress Tracking",
      desc: "Weekly performance reports and attendance updates are communicated directly to parents.",
    },
    {
      icon: <FaBookOpen />,
      title: "Quality Study Material",
      desc: "Comprehensive, highly researched study material aligned perfectly with the latest exam patterns.",
    },
    {
      icon: <FaUniversity />,
      title: "Disciplined Environment",
      desc: "A strictly monitored academic-focused environment that keeps students away from distractions.",
    },
  ];

  return (
    <section className="bg-[#F3F4F6] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Why Parents Choose Our Institute
        </h2>

        {/* Mobile Scroll + Desktop Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory pb-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-0 bg-white rounded-xl p-6 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 snap-start"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-50 text-red-800 text-xl mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
