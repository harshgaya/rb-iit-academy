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
    <div className="bg-yellow-500 text-white text-xs">
      <div className="max-w-7xl mx-auto px-3 py-1.5 flex items-center justify-between">
        {/* LEFT - Contact */}
        <div className="flex items-center gap-3 overflow-hidden">
          <a
            href={SOCIAL_LINKS.EMAIL_LINK}
            className="flex items-center gap-1 hover:opacity-80 transition truncate"
          >
            <FaEnvelope className="text-white/80 text-xs" />
            <span className="truncate max-w-[110px] sm:max-w-none">
              {SOCIAL_LINKS.EMAIL}
            </span>
          </a>

          <a
            href={SOCIAL_LINKS.MOBILE_LINK}
            className="flex items-center gap-1 hover:opacity-80 transition whitespace-nowrap"
          >
            <FaPhoneAlt className="text-white/80 text-xs" />
            <span>{SOCIAL_LINKS.MOBILE}</span>
          </a>
        </div>

        {/* RIGHT - Social */}
        <div className="flex items-center gap-2">
          <a
            href={SOCIAL_LINKS.FACEBOOK}
            className="bg-white/10 p-1.5 rounded hover:bg-white hover:text-[#8B0E12] transition"
          >
            <FaFacebookF className="text-xs" />
          </a>

          <a
            href={SOCIAL_LINKS.INSTAGRAM}
            className="bg-white/10 p-1.5 rounded hover:bg-white hover:text-[#8B0E12] transition"
          >
            <FaInstagram className="text-xs" />
          </a>

          <a
            href={SOCIAL_LINKS.TWITTER}
            className="bg-white/10 p-1.5 rounded hover:bg-white hover:text-[#8B0E12] transition"
          >
            <FaTwitter className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}
