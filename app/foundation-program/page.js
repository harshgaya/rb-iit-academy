import FoundationCourse from "./foundation-program";
export const metadata = {
  title: "IIT NEET Foundation Program | RB Academy",
  description:
    "Foundation course for Class 6–10 students. Build strong concepts for IIT-JEE, NEET & Olympiads.",

  openGraph: {
    title: "IIT NEET Foundation Program",
    description:
      "Start early. Build strong concepts for IIT-JEE & NEET success.",
    url: "https://yourdomain.com/foundation-course",
    siteName: "RB IIT NEET Academy",
    images: [
      {
        url: "https://yourdomain.com/courses/new2/foundation-course.jpeg", // MUST be full URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IIT NEET Foundation Program",
    description: "Early foundation for future rankers 🚀",
    images: ["https://yourdomain.com/courses/new2/foundation-course.jpeg"],
  },
};

export default function Page() {
  return <FoundationCourse />;
}
