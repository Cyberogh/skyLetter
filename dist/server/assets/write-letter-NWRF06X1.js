import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { S as SkyAtmosphere } from "./SkyAtmosphere-lbbyx0ML.js";
import { g as getDraft, s as saveDraft, c as clearDraft } from "./sky-store-BH8JQbgX.js";
import { s as supabase } from "./router-0wEPfggM.js";
import { Music } from "lucide-react";
import { toast } from "sonner";
import { S as SupportTip } from "./SupportTip-LV_3T2G-.js";
import "./themes-Bg09rqa3.js";
import "@tanstack/react-query";
import "@supabase/supabase-js";
function WriteLetter() {
  const navigate = useNavigate();
  const [draft] = useState(getDraft());
  const [letterTo, setLetterTo] = useState(draft.letterTo);
  const [letterFrom, setLetterFrom] = useState(draft.letterFrom);
  const [letterBody, setLetterBody] = useState(draft.letterBody);
  const [musicUrl, setMusicUrl] = useState(draft.musicUrl ?? "");
  const [sealing, setSealing] = useState(false);
  useEffect(() => {
    saveDraft({
      letterTo,
      letterFrom,
      letterBody,
      musicUrl: musicUrl || void 0
    });
  }, [letterTo, letterFrom, letterBody, musicUrl]);
  const handleSeal = async () => {
    setSealing(true);
    const shareId = nanoid(8).toUpperCase();
    const current = getDraft();
    const {
      error
    } = await supabase.from("skies").insert({
      share_id: shareId,
      sky_name: current.skyName.slice(0, 120) || "a sky for you",
      theme: current.theme,
      constellations: current.constellations,
      letter_to: letterTo.slice(0, 120),
      letter_body: letterBody.slice(0, 5e3),
      letter_from: letterFrom.slice(0, 120),
      music_url: musicUrl ? musicUrl.slice(0, 500) : null
    });
    if (error) {
      console.error(error);
      toast.error("the stars couldn't catch your sky. try again.");
      setSealing(false);
      return;
    }
    setTimeout(() => {
      clearDraft();
      navigate({
        to: "/sky/$shareId",
        params: {
          shareId
        }
      });
    }, 2400);
  };
  return /* @__PURE__ */ jsx("div", { className: "relative w-full h-[100svh] min-h-[640px] overflow-hidden", children: /* @__PURE__ */ jsxs(SkyAtmosphere, { theme: draft.theme, starCount: 120, dim: true, children: [
    /* @__PURE__ */ jsx(TypingStars, { typingKey: letterBody.length }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-5 left-0 right-0 z-30 flex items-start justify-between px-5 sm:px-6", children: [
      /* @__PURE__ */ jsx(Link, { to: "/build-sky", className: "label-mono hover:text-star transition-colors mt-1", children: "← back" }),
      /* @__PURE__ */ jsxs("div", { className: "text-center shrink-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-1 opacity-60", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-foreground/40" }),
          /* @__PURE__ */ jsx("span", { className: "text-[9px]", children: "✦" }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-foreground/40" })
        ] }),
        /* @__PURE__ */ jsx(motion.h1, { initial: {
          opacity: 0,
          y: -10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1.2
        }, className: "display-distressed", style: {
          fontSize: "clamp(3.4rem,4.6vw,7rem)",
          lineHeight: "1.02",
          paddingTop: "14px",
          color: "#F4EBD4"
        }, children: "WRITE YOUR LETTER" }),
        /* @__PURE__ */ jsx("p", { className: "font-serif italic text-foreground/75", style: {
          marginTop: "-4px",
          fontSize: "clamp(1rem,1.1vw,1.2rem)"
        }, children: "some things are easier beneath the stars" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-12 sm:w-16" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full flex items-center justify-center px-4 pt-45 pb-24 sm:pb-20", children: /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 24,
      rotate: -1
    }, animate: {
      opacity: 1,
      y: 0,
      rotate: -1.2
    }, transition: {
      duration: 1.4,
      ease: "easeOut"
    }, className: "paper-letter w-full max-w-xl p-6 sm:p-10 relative", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mb-3", children: [
        /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest opacity-70", children: "To:" }),
        /* @__PURE__ */ jsx("input", { value: letterTo, onChange: (e) => setLetterTo(e.target.value), placeholder: "you", className: "flex-1 bg-transparent handwritten outline-none border-b border-[#5a4a32]/40 focus:border-[#5a4a32] pb-1", style: {
          fontStyle: "italic"
        } })
      ] }),
      /* @__PURE__ */ jsx("textarea", { value: letterBody, onChange: (e) => setLetterBody(e.target.value), placeholder: "there were things i wanted to tell you,\nbut i never knew how.\nso i made you a sky instead.", rows: 6, className: "w-full bg-transparent handwritten outline-none resize-none placeholder:italic placeholder:opacity-50", style: {
        backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 29px, rgba(90,74,50,0.18) 30px)",
        lineHeight: "30px",
        paddingTop: "2px"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mt-3 justify-end", children: [
        /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest opacity-70", children: "From:" }),
        /* @__PURE__ */ jsx("input", { value: letterFrom, onChange: (e) => setLetterFrom(e.target.value), placeholder: "me", className: "bg-transparent handwritten outline-none border-b border-[#5a4a32]/40 focus:border-[#5a4a32] pb-1 text-right w-32", style: {
          fontStyle: "italic"
        } })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-3 border-t border-[#5a4a32]/20 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Music, { size: 12, className: "opacity-60 shrink-0", style: {
          color: "#5a4a32"
        } }),
        /* @__PURE__ */ jsx("input", { value: musicUrl, onChange: (e) => setMusicUrl(e.target.value), placeholder: "add a song — Spotify or YouTube link (optional)", className: "flex-1 bg-transparent outline-none font-mono text-[11px] placeholder:opacity-40", style: {
          color: "#3d2f1f"
        } })
      ] }),
      /* @__PURE__ */ jsxs("svg", { className: "absolute bottom-1 right-1 opacity-50", width: "48", height: "48", viewBox: "0 0 60 60", children: [
        /* @__PURE__ */ jsx("path", { d: "M30,55 Q28,40 30,25 Q32,15 30,5", stroke: "#5a4a32", strokeWidth: "0.6", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M30,40 Q22,35 18,28", stroke: "#5a4a32", strokeWidth: "0.5", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M30,30 Q38,26 42,18", stroke: "#5a4a32", strokeWidth: "0.5", fill: "none" }),
        /* @__PURE__ */ jsx("ellipse", { cx: "18", cy: "28", rx: "3", ry: "1.5", fill: "#5a4a32", opacity: "0.5", transform: "rotate(-30 18 28)" }),
        /* @__PURE__ */ jsx("ellipse", { cx: "42", cy: "18", rx: "3", ry: "1.5", fill: "#5a4a32", opacity: "0.5", transform: "rotate(30 42 18)" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 sm:bottom-5 left-0 right-0 z-30 flex items-center justify-center gap-3 sm:gap-5 px-4 flex-wrap", children: [
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline font-serif italic text-xs text-foreground/60", children: "take your time. there's no rush here." }),
      /* @__PURE__ */ jsxs("button", { onClick: handleSeal, disabled: sealing, className: "paper-button gap-2 disabled:opacity-50 text-sm", children: [
        /* @__PURE__ */ jsx("span", { children: "SEAL THE LETTER" }),
        /* @__PURE__ */ jsx("span", { className: "wax-seal", style: {
          width: 22,
          height: 22,
          fontSize: 8
        }, children: "★" })
      ] }),
      /* @__PURE__ */ jsx(SupportTip, {})
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: sealing && /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, transition: {
      duration: 1.2
    }, className: "absolute inset-0 z-50 bg-black/95 flex items-center justify-center", children: /* @__PURE__ */ jsx(motion.p, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 1.5,
      delay: 0.6
    }, className: "font-serif italic text-2xl sm:text-3xl text-foreground/80", children: "your sky is ready…" }) }) })
  ] }) });
}
function TypingStars({
  typingKey
}) {
  const [bursts, setBursts] = useState([]);
  useEffect(() => {
    if (typingKey === 0) return;
    if (typingKey % 8 !== 0) return;
    const id = Date.now();
    setBursts((b) => [...b.slice(-6), {
      id,
      x: Math.random() * 90 + 5,
      y: Math.random() * 80 + 5
    }]);
    setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 4e3);
  }, [typingKey]);
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none z-[5]", children: bursts.map((b) => /* @__PURE__ */ jsx(motion.span, { initial: {
    opacity: 0,
    scale: 0
  }, animate: {
    opacity: [0, 1, 0],
    scale: [0, 1.6, 1]
  }, transition: {
    duration: 4,
    ease: "easeOut"
  }, className: "absolute rounded-full", style: {
    left: `${b.x}%`,
    top: `${b.y}%`,
    width: 4,
    height: 4,
    background: "#fff4cc",
    boxShadow: "0 0 16px #fff4cc, 0 0 32px rgba(255,244,204,0.4)"
  } }, b.id)) });
}
export {
  WriteLetter as component
};
