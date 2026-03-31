export const metadata = {
  title: "Privacy Policy | RB IIT NEET Academy",
  description:
    "Read the privacy policy of RB IIT NEET Academy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>

        <p className="mb-6 text-gray-600 leading-relaxed">
          At <span className="font-semibold">RB IIT NEET Academy</span>, we
          respect your privacy. This policy explains how we collect, use, and
          protect your information.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mt-1">
              We may collect personal details such as your name, phone number,
              and email when you fill out forms on our website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mt-1">
              Your information is used to provide services, respond to
              inquiries, and share updates or offers related to our courses.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              3. Cookies & Tracking Technologies
            </h2>
            <p className="text-gray-600 mt-1">
              We use cookies to improve user experience and analyze traffic.
              Third-party services like Google Ads may use cookies to show
              relevant ads.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              4. Google Ads & Third-Party Services
            </h2>
            <p className="text-gray-600 mt-1">
              We use Google Ads and similar platforms that may collect data
              using cookies to deliver personalized advertisements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              5. Data Protection
            </h2>
            <p className="text-gray-600 mt-1">
              We take appropriate security measures to safeguard your personal
              information against unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              6. Your Consent
            </h2>
            <p className="text-gray-600 mt-1">
              By using our website, you agree to the terms outlined in this
              Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              7. Contact Us
            </h2>
            <p className="text-gray-600 mt-1">
              Email:{" "}
              <span className="font-medium text-blue-600">
                info@rbiitacademy.com
              </span>
            </p>
          </div>
        </div>

        <div className="border-t mt-10 pt-4 text-sm text-gray-400">
          Last updated: {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
