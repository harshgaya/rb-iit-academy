"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/navbar/rb-logo.png"
                alt="RB IIT NEET"
                width={45}
                height={45}
              />
              <h3 className="text-xl font-bold">RB IIT NEET</h3>
            </div>

            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              The RB IIT Academy is one of the pioneers and promoters of
              educational methodologies and ideologies in Hyderabad, Telangana.
            </p>

            {/* social */}
            <div className="flex gap-3 mt-5">
              <a
                href={SOCIAL_LINKS.FACEBOOK}
                className="bg-white/10 p-2 rounded hover:bg-red-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                className="bg-white/10 p-2 rounded hover:bg-red-700 transition"
              >
                <FaInstagram />
              </a>
              <a
                href={SOCIAL_LINKS.TWITTER}
                className="bg-white/10 p-2 rounded hover:bg-red-700 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* SUPPORT LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Courses</li>
              {/* <li className="hover:text-white cursor-pointer">
                Previous Year Papers
              </li>
              <li className="hover:text-white cursor-pointer">
                Study Material
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li> */}
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>

            <div className="space-y-4 text-sm text-gray-300 flex flex-col gap-1">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-500" />
                <p>
                  TELANGANA GRAMEENA BANK, near Fever Hospital Main Road, New
                  Nallakunta, Hyderabad, Telangana 500044
                </p>
              </div>

              <a href={SOCIAL_LINKS.MOBILE_LINK}>
                <div className="flex gap-3 items-center">
                  <FaPhoneAlt className="text-red-500" />
                  <span>{SOCIAL_LINKS.MOBILE}</span>
                </div>
              </a>

              <a href={SOCIAL_LINKS.EMAIL_LINK}>
                <div className="flex gap-3 items-center">
                  <FaEnvelope className="text-red-500" />
                  <span>{SOCIAL_LINKS.EMAIL}</span>
                </div>
              </a>

              {/* <div className="flex gap-3 items-center">
                🌐 <span>www.rbiitacademy.com</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} RB IIT NEET Academy. All rights reserved.
        </div>
        <p className="mt-2 text-center">
          Developed by{" "}
          <a
            href="http://softplix.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 font-medium"
          >
            Softplix.com
          </a>
        </p>
      </div>
    </footer>
  );
}
