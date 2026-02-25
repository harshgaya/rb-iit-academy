"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-yellow-500 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={SOCIAL_LINKS.EMAIL_LINK}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <FaEnvelope className="text-white/80" />
            <span>{SOCIAL_LINKS.EMAIL}</span>
          </a>

          <a
            href={SOCIAL_LINKS.MOBILE_LINK}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <FaPhoneAlt className="text-white/80" />
            <span>{SOCIAL_LINKS.MOBILE}</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SOCIAL_LINKS.FACEBOOK}
            className="bg-white/10 p-2 rounded hover:bg-white hover:text-[#8B0E12] transition"
          >
            <FaFacebookF />
          </a>

          <a
            href={SOCIAL_LINKS.INSTAGRAM}
            className="bg-white/10 p-2 rounded hover:bg-white hover:text-[#8B0E12] transition"
          >
            <FaInstagram />
          </a>

          <a
            href={SOCIAL_LINKS.TWITTER}
            className="bg-white/10 p-2 rounded hover:bg-white hover:text-[#8B0E12] transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
