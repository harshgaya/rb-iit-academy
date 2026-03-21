// "use client";
// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";

// export default function ResultsCarousel() {
//   const results = [
//     {
//       name: "Anurag Reddy",
//       rank: "36",
//       exam: "IIT-JEE Advanced 2025",
//       image: "/carousal/car-1.jpeg",
//       highlight: "gold",
//     },
//     {
//       name: "KMV Akhil",
//       rank: "94",
//       exam: "IIT-JEE Advanced 2025",
//       image: "/carousal/car-2.jpeg",
//       highlight: "blue",
//     },
//     {
//       name: "Bhanu Kiran",
//       rank: "127",
//       exam: "NEET 2025",
//       image: "/carousal/car-3.jpeg",
//       highlight: "primary",
//     },
//     {
//       name: "Bhanu Kiran",
//       rank: "127",
//       exam: "NEET 2025",
//       image: "/carousal/car-4.jpeg",
//       highlight: "primary",
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setIndex((prev) => (prev + 1) % results.length);
//     }, 4000);
//   };

//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(timerRef.current);
//   }, []);

//   const goTo = (i) => {
//     setIndex(i);
//     startTimer();
//   };

//   const accentColor = (type) => {
//     if (type === "gold") return "text-yellow-500";
//     if (type === "blue") return "text-blue-600";
//     return "text-primary";
//   };

//   const current = results[index];

//   return (
//     <section className="py-2 bg-gradient-to-b from-white to-slate-50">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-10">
//           National Rankers
//         </h2> */}

//         {/* Image-only sliding carousel */}
//         <div className="relative overflow-hidden w-full">
//           <div
//             className="flex transition-transform duration-700 ease-in-out h-full"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {results.map((student, i) => (
//               <div key={i} className="min-w-full flex justify-center">
//                 <div className="relative w-full h-[1200px] sm:h-[380px] md:h-[500px]">
//                   <Image
//                     src={student.image}
//                     alt={student.name}
//                     fill
//                     className="object-contain drop-shadow-xl"
//                     priority={i === 0}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Info — updates instantly on slide change */}
//         {/* <div className="mt-8">
//           <div className="text-xs tracking-widest text-gray-400 uppercase">
//             All India Rank
//           </div>
//           <div
//             className={`text-6xl md:text-7xl font-extrabold mt-1 ${accentColor(current.highlight)}`}
//           >
//             {current.rank}
//           </div>
//           <h3 className="mt-4 text-2xl font-semibold text-gray-900">
//             {current.name}
//           </h3>
//           <p className="mt-1 text-gray-500 text-sm">{current.exam}</p>
//           <div className="mt-4 w-16 h-1 mx-auto bg-primary rounded-full" />
//         </div> */}

//         {/* Dots */}
//         <div className="flex justify-center gap-3 mt-6">
//           {results.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 i === index ? "bg-primary scale-125" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ResultsCarousel() {
  const results = [
    {
      name: "Anurag Reddy",
      rank: "36",
      exam: "IIT-JEE Advanced 2025",
      image: "/carousal/car-1.jpeg",
      highlight: "gold",
    },
    {
      name: "KMV Akhil",
      rank: "94",
      exam: "IIT-JEE Advanced 2025",
      image: "/carousal/car-2.jpeg",
      highlight: "blue",
    },
    {
      name: "Bhanu Kiran",
      rank: "127",
      exam: "NEET 2025",
      image: "/carousal/car-3.jpeg",
      highlight: "primary",
    },
    {
      name: "Bhanu Kiran",
      rank: "127",
      exam: "NEET 2025",
      image: "/carousal/car-4.jpeg",
      highlight: "primary",
    },
    {
      name: "Bhanu Kiran",
      rank: "127",
      exam: "NEET 2025",
      image: "/carousal/car-5.jpeg",
      highlight: "primary",
    },
    {
      name: "Bhanu Kiran",
      rank: "127",
      exam: "NEET 2025",
      image: "/carousal/car-6.jpeg",
      highlight: "primary",
    },
  ];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % results.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setIndex(i);
    startTimer();
  };

  return (
    <section className="py-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {results.map((student, i) => (
              <div key={i} className="min-w-full">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-5">
          {results.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-primary scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
