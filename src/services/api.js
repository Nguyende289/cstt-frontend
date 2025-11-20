const BACKEND_URL = "PASTE_APPS_SCRIPT_WEBAPP_URL_HERE";

export async function apiRequest(action, payload = {}) {
  const res = await fetch(BACKEND_URL, {
    method: "POST",
    body: JSON.stringify({ action, payload })
  });

  return await res.json();
}
