"use client";

import { addLead } from "@/lib/api";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    studentClass: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    if (!/^[0-9]{10}$/.test(form.mobile))
      err.mobile = "Enter valid 10 digit mobile";
    if (!form.studentClass) err.studentClass = "Select class";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      await addLead({
        name: form.name,
        mobile: form.mobile,
        class: form.studentClass,
        message: form.message,
      });

      setSuccess(true);
      setForm({
        name: "",
        mobile: "",
        studentClass: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#8B0E12] py-14 md:py-20 text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Start Your Child’s IIT / NEET Journey Today
            </h2>

            <p className="mt-4 text-white/90">
              Limited seats. Personal attention. Proven system.
            </p>

            <div className="mt-8 space-y-4 flex flex-col gap-3">
              <a href={SOCIAL_LINKS.MOBILE_LINK}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>
                  <span className="text-lg font-semibold">
                    {SOCIAL_LINKS.MOBILE}
                  </span>
                </div>
              </a>

              <a href={SOCIAL_LINKS.WHATSAPP} target="_blank">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <FaWhatsapp />
                  </div>
                  <span className="text-lg font-semibold">WhatsApp Us</span>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
            {success ? (
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-green-600">
                  Form Submitted Successfully ✅
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting RB IIT NEET Academy.
                  <br />
                  Our academic counsellor will call you shortly.
                </p>

                <p className="text-sm text-gray-500">
                  For faster response, you can also reach us directly on
                  WhatsApp.
                </p>

                <a
                  href={SOCIAL_LINKS.WHATSAPP}
                  target="_blank"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME */}
                <div>
                  <label className="text-sm font-semibold">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-3 mt-1"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>

                {/* MOBILE */}
                <div>
                  <label className="text-sm font-semibold">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full border rounded-lg px-4 py-3 mt-1"
                    value={form.mobile}
                    onChange={(e) =>
                      setForm({ ...form, mobile: e.target.value })
                    }
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs">{errors.mobile}</p>
                  )}
                </div>

                {/* CLASS */}
                <div>
                  <label className="text-sm font-semibold">
                    Current Class *
                  </label>
                  <select
                    className="w-full border rounded-lg px-4 py-3 mt-1"
                    value={form.studentClass}
                    onChange={(e) =>
                      setForm({ ...form, studentClass: e.target.value })
                    }
                  >
                    <option value="">Select Class</option>
                    <option>Class 6</option>
                    <option>Class 7</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                    <option>Class 11</option>
                    <option>Class 12</option>
                    <option>Dropper</option>
                  </select>
                  {errors.studentClass && (
                    <p className="text-red-500 text-xs">
                      {errors.studentClass}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-semibold">
                    Message (optional)
                  </label>
                  <textarea
                    rows="3"
                    className="w-full border rounded-lg px-4 py-3 mt-1"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#8B0E12] text-white py-3 rounded-lg font-bold text-lg hover:opacity-90 transition disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Book Free Demo Class"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
