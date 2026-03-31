"use client";

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: `"Having studied under Rama Brahmam sir for 2 years of my Intermediate, I would say he’s the calmest and coolest teacher I’ve ever met. He doesn’t pressurize the students to produce instant results, and encourages students who are underperforming to gradually improve the basics. He doesn’t hesitate to start from scratch if a student doesn’t follow something. The ambience is excellent in his class and students are naturally motivated to ask doubts and interact more openly. The classification and lucidity in the several programs offered by the institute are excellent. The option of accessing previous papers of challenging examinations has also impressed me a lot."`,
      name: "Tharun Kumar Reddy M",
      role: `AIR 21, IIT-JEE 2011 B.Tech Undergraduate Electrical Engineering,IIT Bombay`,
      img: "/testimonial/tharun.jpeg",
    },
    {
      text: `"Wow! is all I can say. I heard so much about Rama Brahmam Sir prior to attending his classes (thanks to Conquering Mathematics), and I can’t begin to describe the powerful impact he made on me.  Not only did he solve problems in brilliant and awesome methods but more importantly he taught us how to think. He was an inspirational teacher who recognised my strengths. He kept  giving us problems which made us think a lot, which in my opinion helped me crack jee mathematics. Not only this but he helped build my confidence, which is the most  important factor  for cracking jee. To conclude he made me enjoy .Thanks to him I am now pursuing a minor in mathematics."`,
      name: "Venkata Sai Narayana",
      role: "Sophomore Undergraduate ,Electrical Engineering, IIT Bombay, AIR 76 IITJEE -2011",
      img: "/testimonial/venkat.jpeg",
    },
    {
      text: `"I am very glad to say that mathematics is my favourite subject/ There is nothing without MATHS. It was Ramabrahmam sir's lectures which even deepened my interest towards maths. His lecture made a lot of change in the thought process. He taught us how to deal maths in a simpler way. Each and every lecture of him delivered a different strategy to solve math. Thank you sir for your efforts to strengthen our maths."`,
      name: "K.Sri Harsha",
      role: "Second Year Under Graduate,Department of Mechanical Engineering,IIT MADRAS",
      img: "/testimonial/k.harsha_testi.jpeg",
    },

    {
      text: `"Ram Brahmam sir was very proficient in maths and could give very simple, short and very understandable solutions even to the most complex problems. I had thoroughly benefited from his teachings which help me in my academics at IIT Madras even to this day. Just after I had joined  IPL campus, I realised that I was very poor in maths. But Ram Brahmam sir was really helpful to me and guided me a lot. As a result, towards the end of the first year, I was able to do really well and my performance was very comparable to others. And finally, towards the end of my second year, due to constant efforts, I was able to do well in maths and finally I got the highest marks among all three subjects in IIT JEE. I would like to dedicate this result  to Ram Brahmam sir, without whom I feel that I wouldn't be able to achieve such a thing"`,
      name: "Dilip Chakravarthy",
      role: "IIT MADRAS",
      img: "/testimonial/dilip.jpeg",
    },
    {
      text: `"I met Mr. Rama Brahmam when I was in class 9. I had gone to him to learn calculus, at that time I was very interested in physics and I was finding it difficult to learn more of it without understanding calculus. . He agreed to teach me, but he also told me about his passion for math Olympiads and he wanted me to have a go at it. I was initially skeptical but as I did more Olympiad maths, my interest in it grew. I enjoyed the challenge of math Olympiad problems and with time I learnt more theory too. Mr. Rama Brahmam taught me the basics, enough to clear the Math Olympiad. Mr. Rama Brahmam continually encouraged me to do my best and to learn on my own. Mr. Rama Brahmam was a very good teacher. He explains concepts clearly. However, it is his motivation that I am most grateful for. It was because of him that I got bronze medal at International math Olympiad ( IMO ) which has given me so much happiness. Thank you sir for all your support"`,
      name: "Pranav Nuti",
      role: "IMO",
      img: "/testimonial/pranav.jpeg",
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
                <Image
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
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
