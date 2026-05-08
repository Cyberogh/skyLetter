const KEY = "skyletter:draft";
function getDraft() {
  if (typeof window === "undefined") return defaultDraft();
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return defaultDraft();
    return { ...defaultDraft(), ...JSON.parse(raw) };
  } catch {
    return defaultDraft();
  }
}
function saveDraft(d) {
  if (typeof window === "undefined") return;
  const next = { ...getDraft(), ...d };
  sessionStorage.setItem(KEY, JSON.stringify(next));
}
function clearDraft() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(KEY);
}
function defaultDraft() {
  return {
    theme: "quiet-night",
    skyName: "the sky for you",
    constellations: [],
    letterTo: "",
    letterBody: "",
    letterFrom: ""
  };
}
export {
  clearDraft as c,
  getDraft as g,
  saveDraft as s
};
