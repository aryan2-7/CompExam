// Thin wrapper around localStorage so all persistence lives in one place.
const KEYS = {
  solved: "lateexe_solved",
  current: "lateexe_current",
  tab: "lateexe_tab",
};

export const codeKey = (id) => `lateexe_code_${id}`;

export function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or unavailable — ignore
  }
}

export function loadCode(id) {
  try {
    return localStorage.getItem(codeKey(id));
  } catch {
    return null;
  }
}

export function saveCode(id, code) {
  try {
    localStorage.setItem(codeKey(id), code);
  } catch {
    // ignore
  }
}

export { KEYS };
