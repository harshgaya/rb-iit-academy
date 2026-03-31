export const metadata = {
  title: "Terms & Conditions | RB IIT NEET Academy",
  description:
    "Read the terms and conditions of RB IIT NEET Academy regarding the use of our website and services.",
};

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold">RB IIT NEET Academy</span>.
          By accessing or using our website, you agree to comply with the
          following terms.
        </p>

        {/* Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              1. Use of Website
            </h2>
            <p className="text-gray-600 mt-1">
              You agree to use this website only for lawful purposes and not
              engage in any activity that may harm the platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              2. Intellectual Property
            </h2>
            <p className="text-gray-600 mt-1">
              All content including text, images, and logos belongs to RB IIT
              NEET Academy and cannot be used without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              3. Course Information
            </h2>
            <p className="text-gray-600 mt-1">
              We strive to keep information accurate, but we do not guarantee
              completeness or accuracy at all times.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              4. Payments & Fees
            </h2>
            <p className="text-gray-600 mt-1">
              All fees must be paid as agreed. We reserve the right to update
              pricing without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              5. Refund Policy
            </h2>
            <p className="text-gray-600 mt-1">
              Fees once paid are non-refundable unless explicitly stated
              otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 mt-1">
              We are not liable for any damages arising from the use of our
              website or services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              7. Third-Party Links
            </h2>
            <p className="text-gray-600 mt-1">
              We are not responsible for content or practices of third-party
              websites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              8. Changes to Terms
            </h2>
            <p className="text-gray-600 mt-1">
              These terms may be updated anytime. Continued use means
              acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              9. Contact Us
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
