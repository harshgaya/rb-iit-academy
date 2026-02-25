"use client";

import { addLead } from "@/lib/api";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactUs() {
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
    <section className="bg-[#F5F5F7] py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Contact RB IIT NEET Academy
          </h1>
          <p className="mt-4 text-gray-600">
            Get in touch with our academic counsellors for admissions and
            enquiries.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-[#8B0E12]">
                Our Contact Details
              </h3>

              <div className="space-y-5 text-gray-700">
                <div className="flex gap-4">
                  <FaPhoneAlt className="text-[#8B0E12] mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href={SOCIAL_LINKS.MOBILE_LINK}
                      className="hover:text-[#8B0E12]"
                    >
                      {SOCIAL_LINKS.MOBILE}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope className="text-[#8B0E12] mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={SOCIAL_LINKS.EMAIL_LINK}
                      className="hover:text-[#8B0E12]"
                    >
                      {SOCIAL_LINKS.EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-[#8B0E12] mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>
                      I FLOOR, ABR ARCADE, above TELANGANA GRAMEENA BANK, near
                      Fever Hospital Main Road, New Nallakunta, Hyderabad,
                      Telangana 500044
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/55UdouyVZbXe7XD9A"
                  target="_blank"
                  className="inline-block mt-4 bg-[#8B0E12] text-white px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Find Us on Google Maps
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.299185527072!2d78.50169207516517!3d17.397423883491516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99bbcf6e45bf%3A0xda0236449a8e7847!2sRB%20IIT%20NEET%20ACADEMY!5e0!3m2!1sen!2sin!4v1772000347494!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-[#8B0E12]">
              Send Us a Message
            </h3>

            {success ? (
              <div className="text-center space-y-4">
                <h4 className="text-lg font-bold text-green-600">
                  Message Submitted Successfully ✅
                </h4>
                <p className="text-gray-600">
                  Thank you for contacting RB IIT NEET Academy. Our counsellor
                  will call you shortly.
                </p>

                <p className="text-sm text-gray-500">
                  For faster response, you can also WhatsApp us directly.
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
                </div>

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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#8B0E12] text-white py-3 rounded-lg font-bold text-lg hover:opacity-90 transition disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
