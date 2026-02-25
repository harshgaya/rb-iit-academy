"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownItems = {
    Courses: [
      { name: "2 Year Inter + IIT Program", href: "/2-year-iit-course" },
      { name: "2 Year Inter + NEET Program", href: "/2-year-neet-course" },
      { name: "Senior Inter + IIT Program", href: "/senior-inter-iit-program" },
      { name: "IIT Longterm Program", href: "/iit-longterm-program" },
      { name: "NEET Longterm Program", href: "/neet-long-term-course" },
      { name: "Crash Course", href: "/crash-course" },
      { name: "Regular Tuition", href: "/regular-tutions" },
      { name: "EAMCET / NEET Crash Course", href: "/eamcet-neet-crash" },
    ],
    // "Previous Year Papers": [
    //   { name: "JEE Mains", href: "#" },
    //   { name: "JEE Advanced", href: "#" },
    //   { name: "EAMCET Engineering", href: "#" },
    //   { name: "EAMCET Medical", href: "#" },
    //   { name: "BITS", href: "#" },
    //   { name: "NTSE", href: "#" },
    //   { name: "IPE", href: "#" },
    //   { name: "CBSE", href: "#" },
    // ],
  };

  return (
    <nav className="bg-[#FBFBFA] border-b text-black border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/navbar/rb-logo.png"
              alt="logo"
              width={45}
              height={45}
            />
            <div className="leading-tight">
              <h1 className="text-[18px] font-semibold text-primary tracking-wide">
                RB IIT NEET Academy
              </h1>
              <p className="text-[11px] text-gray-500 -mt-1">
                IIT • NEET • Foundation
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>

            {Object.keys(dropdownItems).map((menu) => (
              <div key={menu} className="relative group">
                <button className="flex items-center gap-1 hover:text-primary transition font-medium">
                  {menu}

                  {/* Arrow Icon */}
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-4 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dropdownItems[menu].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>

            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
            <Link
              target="blank"
              href="https://iitneetbooks.com/"
              className="hover:text-primary transition"
            >
              Books
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
          menuOpen ? "max-h-[90vh] py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block py-3 font-medium"
          >
            Home
          </Link>

          {Object.keys(dropdownItems).map((menu) => (
            <div key={menu} className="border-t pt-3">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === menu ? null : menu)
                }
                className="w-full flex justify-between items-center font-semibold text-primary"
              >
                {menu}
                <span className="text-lg">
                  {activeDropdown === menu ? "−" : "+"}
                </span>
              </button>

              {activeDropdown === menu && (
                <div className="mt-2 space-y-2 pl-3">
                  {dropdownItems[menu].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm py-2 text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-3 font-medium"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-3 font-medium"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-primary text-white text-center py-3 rounded-lg font-semibold"
          >
            Book Demo Class
          </Link>
        </div>
      </div>
    </nav>
  );
}
