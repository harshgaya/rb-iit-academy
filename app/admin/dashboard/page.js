"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/form-data")
      .then((res) => {
        if (res.status === 401) {
          router.push("/");
          return null;
        }
        return res.json();
      })
      .then((json) => {
        if (json) setLeads(json.data || []);
      })
      .catch(() => setError("Failed to load leads."))
      .finally(() => setLoading(false));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  };

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            F
          </div>
          <span className="font-semibold text-gray-800">Leads</span>
          {!loading && (
            <span className="text-xs bg-indigo-50 text-indigo-600 font-medium px-2 py-0.5 rounded-full">
              {leads.length}
            </span>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-400 hover:text-gray-700 transition"
        >
          Sign out
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Error */}
        {error && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-6">
            {error}
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-5 animate-pulse"
              >
                <div className="h-4 bg-gray-100 rounded w-1/3 mb-3" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && leads.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-sm">
            No leads yet.
          </div>
        )}

        {/* Lead Cards */}
        {!loading && leads.length > 0 && (
          <div className="space-y-3">
            {leads.map((lead) => (
              <div
                key={lead._id}
                className="bg-white rounded-xl border border-gray-100 px-5 py-4 flex items-start gap-4"
              >
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm flex items-center justify-center flex-shrink-0 uppercase">
                  {lead.name?.[0] || "?"}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-gray-800 text-sm">
                      {lead.name}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      {lead.class}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-xs text-gray-400">{lead.mobile}</span>
                    {lead.message && (
                      <span className="text-xs text-gray-500 truncate max-w-xs">
                        {lead.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                  {formatDate(lead.created_at)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
