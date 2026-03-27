import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";

export default function FoundationCourse() {
  return (
    <div className="bg-[#FBFBFA] text-black">
      {/* HERO */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="text-primary text-sm font-semibold mb-2">
              IIT–NEET Foundation Program (Class 6–10)
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Build Strong Concepts <br />
              <span className="text-primary">Achieve Big Dreams</span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Give your child a head start for IIT-JEE & NEET success with
              expert guidance, structured learning, and advanced practice from
              an early stage.
            </p>

            {/* Reviews */}
            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-700 text-sm ml-2 font-semibold">
                Trusted by Students & Parents
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <a href="tel:9030565621">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90">
                  Call Now
                </button>
              </a>

              <a href="/contact">
                <button className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Book Free Demo
                </button>
              </a>
            </div>

            <p className="text-red-500 font-semibold mt-4">
              🎯 Limited Seats Available
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <Image
              src="/courses/new2/foundation-course.jpeg"
              alt="Foundation course"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHY START EARLY */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Start Early?
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            RB IIT NEET Academy offers a well-structured IIT Foundation Program
            for students of Classes 6 to 10, conducted on weekends to ensure
            smooth balance with school academics. Classes are held on Saturdays
            (6:00 PM – 8:00 PM) and Sundays (10:00 AM – 12:00 Noon), making it
            convenient for students to learn without academic pressure. The
            program is carefully designed with a planned syllabus and schedule,
            which is provided to students at the time of admission. It clearly
            outlines the topics to be covered, the number of classes required
            for each topic, and the structured progression of learning. Study
            material is provided class-wise, ensuring students get the right
            content at the right stage. All subjects are taught by highly
            experienced faculty with a strong focus on concept clarity,
            problem-solving ability, and analytical thinking. A systematic
            examination system is followed to regularly assess student
            performance, track improvement, and identify areas that need
            attention. In addition, special guidance is provided for NTSE,
            Olympiads, and other national and international Mathematics and
            Science competitions. Students are trained to develop competitive
            skills and are evaluated class-wise to understand their progress and
            readiness for global-level competition. The academy also emphasizes
            continuous monitoring and personalized support. Regular counseling
            sessions are conducted for both students and parents to guide them
            on academic progress, study habits, and performance improvement.
            Parents are also guided on how to effectively monitor their child’s
            learning at home. Through close monitoring, interactive teaching,
            and continuous encouragement, we ensure that every student actively
            participates in the learning process and steadily improves in both
            academic performance and competitive readiness.
          </p>

          <p className="text-primary font-semibold mt-4">
            Early foundation = Future Rankers 🚀
          </p>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[
            "Concept-based learning in Physics, Chemistry, Maths & Biology",
            "Olympiad & advanced level problem-solving practice",
            "Structured curriculum aligned with CBSE + competitive exams",
            "Weekly tests with detailed performance analysis",
            "Experienced faculty with proven results",
            "Special study material with concept notes & exam questions",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mt-1">
                <FaCheck size={12} />
              </span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Who Can Join?
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="bg-[#FBFBFA] p-6 rounded-xl shadow">
              Class 6–10 Students
            </div>

            <div className="bg-[#FBFBFA] p-6 rounded-xl shadow">
              IIT / NEET Aspirants
            </div>

            <div className="bg-[#FBFBFA] p-6 rounded-xl shadow">
              Olympiad Preparation
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[
            "Proven teaching methodology",
            "Focus on strong concept clarity",
            "Regular mentoring & doubt solving",
            "Result-oriented preparation",
            "Small batch size for personal attention",
            "Continuous progress tracking",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                <FaCheck size={12} />
              </span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Admissions Open for Foundation Program
        </h2>

        <p className="mt-4 text-white/90">
          Start early and stay ahead in IIT-JEE & NEET preparation.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="tel:9030565621">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold">
              Call Now
            </button>
          </a>

          <a href="/contact">
            <button className="border border-white px-8 py-4 rounded-lg font-bold">
              Enroll Today
            </button>
          </a>
        </div>

        <p className="mt-4 text-yellow-300 font-semibold">
          ⚡ Limited Seats Only
        </p>
      </section>
    </div>
  );
}
