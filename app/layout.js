import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/navigation/floating-button";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import TopHeader from "@/components/navigation/top-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RB IIT NEET Academy",
  description:
    "RB IIT NEET Academy offers expert IIT-JEE and NEET coaching with 36+ years of teaching excellence, experienced faculty, structured study plans, and consistent top results. Join our result-oriented programs for IIT and medical entrance preparation with small batches, regular tests, and personal mentoring. Book a free demo class today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.className} ${geistMono.variable} antialiased`}
      >
        <TopHeader />
        <Navbar />
        {children}
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
