// Thin wrapper around localStorage so all persistence lives in one place.
const KEYS = {
  solved: "compexamexe_solved",
  current: "compexamexe_current",
  year: "compexamexe_year",
  difficulty: "compexamexe_difficulty",
  theoryYear: "compexamexe_theory_year",
  theoryTopic: "compexamexe_theory_topic",
  theoryCurrent: "compexamexe_theory_current",
  mcqSession: "compexamexe_mcq_session",
  mcqAnswers: "compexamexe_mcq_answers",
};

export const codeKey = (id) => `compexamexe_code_${id}`;

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
