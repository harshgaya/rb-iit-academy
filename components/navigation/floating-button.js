"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";

const PRIMARY = "#6b1013";

export default function FloatingContactButtons() {
  const [hoveredCall, setHoveredCall] = useState(false);
  const [hoveredWa, setHoveredWa] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-2">
      <Link
        href={SOCIAL_LINKS.MOBILE_LINK}
        aria-label="Call us"
        onMouseEnter={() => setHoveredCall(true)}
        onMouseLeave={() => setHoveredCall(false)}
        className="flex items-center justify-end"
      >
        <span
          className="text-sm font-bold text-white whitespace-nowrap overflow-hidden transition-all duration-300"
          style={{
            maxWidth: hoveredCall ? "130px" : "0px",
            opacity: hoveredCall ? 1 : 0,
            background: PRIMARY,
            padding: hoveredCall ? "10px 12px" : "10px 0px",
            borderRadius: "8px 0 0 8px",
          }}
        >
          Call Us Now
        </span>
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center shadow-lg"
          style={{ background: PRIMARY, borderRadius: "8px 0 0 8px" }}
        >
          <FaPhoneAlt className="text-white text-lg" />
        </div>
      </Link>

      <Link
        href={SOCIAL_LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHoveredWa(true)}
        onMouseLeave={() => setHoveredWa(false)}
        className="flex items-center justify-end"
      >
        <span
          className="text-sm font-bold text-white whitespace-nowrap overflow-hidden transition-all duration-300"
          style={{
            maxWidth: hoveredWa ? "130px" : "0px",
            opacity: hoveredWa ? 1 : 0,
            background: "#22c55e",
            padding: hoveredWa ? "10px 12px" : "10px 0px",
            borderRadius: "8px 0 0 8px",
          }}
        >
          Chat with Us
        </span>
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center shadow-lg"
          style={{ background: "#22c55e", borderRadius: "8px 0 0 8px" }}
        >
          <FaWhatsapp className="text-white text-xl" />
        </div>
      </Link>
    </div>
  );
}
