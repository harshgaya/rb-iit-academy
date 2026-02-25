import { API_URL } from "./constants";

export async function websiteTrack({ type }) {
  const res = await fetch(`${API_URL}website-track-rb-academy/${type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const err = await res.json();
    return null;
  }

  const json = await res.json();

  return json.data;
}
export async function addLead(data) {
  const res = await fetch(`${API_URL}add-lead-rb-academy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) {
    const err = await res.json();
    return null;
  }

  const json = await res.json();

  return json.data;
}
