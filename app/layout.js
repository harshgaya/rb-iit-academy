import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/navigation/floating-button";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import TopHeader from "@/components/navigation/top-header";
import Script from "next/script";

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
  metadataBase: new URL("https://rbiitacademy.com/"),
  title: "RB IIT NEET Academy | IIT-JEE & NEET Coaching Institute",
  description:
    "RB IIT NEET Academy offers expert IIT-JEE and NEET coaching with 36+ years of teaching excellence, experienced faculty, structured study plans, and consistent top results. Join our result-oriented programs for IIT and medical entrance preparation with small batches, regular tests, and personal mentoring. Book a free demo class today.",
  keywords:
    "RB IIT Academy, NEET Coaching, IIT JEE Coaching, EAMCET Coaching, Best Coaching Institute India, IIT Preparation, Medical Entrance Coaching, NEET Preparation, JEE Preparation, Coaching Institute Bihar, Top IIT Coaching",
  authors: [{ name: "RB IIT NEET Academy", url: "https://rbiitacademy.com/" }],
  creator: "RB IIT NEET Academy",

  openGraph: {
    title: "RB IIT NEET Academy | IIT-JEE & NEET Coaching Institute",
    description:
      "Join RB IIT NEET Academy for IIT-JEE, NEET & EAMCET preparation with expert faculty, small batches, and proven results. Book your free demo class now.",
    url: "https://rbiitacademy.com/",
    type: "website",
    siteName: "RB IIT NEET Academy",
    images: [
      {
        url: "/navbar/rb-logo.png",
        width: 1200,
        height: 630,
        alt: "RB IIT NEET Academy Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@rbiitacademy",
    title: "RB IIT NEET Academy | IIT-JEE & NEET Coaching",
    description:
      "Expert coaching for IIT-JEE, NEET & EAMCET with 36+ years experience. Small batches, personal mentoring & top results.",
    images: ["/navbar/rb-logo.png"],
  },

  icons: {
    icon: "/navbar/rb-logo.png",
    apple: "/navbar/rb-logo.png",
  },

  alternates: {
    canonical: "https://rbiitacademy.com/",
    languages: {
      en: "https://rbiitacademy.com/",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.className} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17886698493"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17886698493');
          `}
        </Script>
        <TopHeader />
        <Navbar />
        {children}
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
