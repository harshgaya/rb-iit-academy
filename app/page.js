import CTASection from "@/components/home/cta-section";
import Environment from "@/components/home/environment";
import Faculty from "@/components/home/faculty";
import Hero from "@/components/home/hero-section";
import Programs from "@/components/home/programs";
import ResultsSection from "@/components/home/result-section";
import StudyTech from "@/components/home/study-tech";
import Testimonials from "@/components/home/testimonial";
import WhyChoose from "@/components/home/why-choose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ResultsSection />
      <Programs />
      <WhyChoose />
      <Faculty />
      <StudyTech />
      <Environment />
      <Testimonials />
      <CTASection />
    </>
  );
}
