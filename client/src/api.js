const BASE = import.meta.env.VITE_API_URL || '';

export async function getProfile() {
  const res = await fetch(`${BASE}/api/profile`);
  if (!res.ok) throw new Error('Failed to load profile');
  return res.json();
}

export async function sendMessage(data) {
  const res = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Failed to send message');
  return json;
}
