import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { S as SkyAtmosphere } from "./SkyAtmosphere-lbbyx0ML.js";
import { C as ConstellationGraphic } from "./ConstellationGraphic-ChP9DCZg.js";
import { C as CONSTELLATION_LIBRARY, a as THEMES } from "./themes-Bg09rqa3.js";
import { X, Music, Check, Share2 } from "lucide-react";
import { toast } from "sonner";
import { S as SupportTip } from "./SupportTip-LV_3T2G-.js";
import { R as Route } from "./router-0wEPfggM.js";
import "@tanstack/react-query";
import "@supabase/supabase-js";
const REVEAL_LINES = [
  "someone made you a sky",
  "made slowly,\nfor you"
  // Only one \n here
];
function Reveal() {
  const data = Route.useLoaderData();
  const sky = data.sky;
  const [phase, setPhase] = useState("intro");
  const [letterOpen, setLetterOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState(null);
  useEffect(() => {
    const t = setTimeout(() => setPhase("sky"), 8500);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: phase === "intro" && /* @__PURE__ */ jsx(Intro, {}) }),
    phase !== "intro" && /* @__PURE__ */ jsx(SkyAtmosphere, { theme: sky.theme, starCount: 220, children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 3
    }, className: "absolute inset-0 z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-8 left-1/2 -translate-x-1/2 text-center z-20 px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "label-mono opacity-60", children: "— made for you —" }),
        /* @__PURE__ */ jsx("h1", { className: "display-distressed text-[clamp(2rem,6vw,4.5rem)] mt-2 leading-tight", children: sky.sky_name.toUpperCase() }),
        /* @__PURE__ */ jsx("p", { className: "font-serif italic text-foreground/70 mt-1", children: "a handmade sky" })
      ] }),
      sky.constellations.map((item) => {
        const shape = CONSTELLATION_LIBRARY.find((s) => s.id === item.shapeId);
        if (!shape) return null;
        return /* @__PURE__ */ jsx(motion.button, { initial: {
          opacity: 0,
          scale: 0.9
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 2,
          delay: 1 + Math.random() * 1.5
        }, className: "absolute z-10", style: {
          left: `${item.x}%`,
          top: `${item.y}%`,
          transform: `translate(-50%, -50%) scale(${item.scale})`
        }, onClick: () => item.hiddenMessage && setActiveMessage(item.hiddenMessage), children: /* @__PURE__ */ jsxs("div", { className: `relative ${item.hiddenMessage ? "cursor-pointer" : "pointer-events-none"}`, children: [
          /* @__PURE__ */ jsx(ConstellationGraphic, { shape, size: 180, showName: true, name: item.name, starColor: THEMES[sky.theme].starColor }),
          item.hiddenMessage && /* @__PURE__ */ jsx("span", { className: "absolute -top-2 -right-2 rounded-full glow-pulse", style: {
            width: 8,
            height: 8,
            background: "#fff4cc",
            boxShadow: "0 0 14px #fff4cc, 0 0 28px rgba(255,244,204,0.5)"
          } })
        ] }) }, item.id);
      }),
      /* @__PURE__ */ jsx(AnimatePresence, { children: activeMessage && /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "absolute inset-0 bg-black/70 z-40 flex items-center justify-center px-6", onClick: () => setActiveMessage(null), children: /* @__PURE__ */ jsx(motion.p, { initial: {
        y: 20,
        opacity: 0
      }, animate: {
        y: 0,
        opacity: 1
      }, transition: {
        duration: 1.2
      }, className: "font-serif italic text-2xl sm:text-3xl text-foreground max-w-xl text-center leading-relaxed", style: {
        textShadow: "0 0 30px rgba(255,244,204,0.3)"
      }, children: activeMessage }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute right-6 top-1/3 z-20 max-w-[160px] text-right", children: [
        /* @__PURE__ */ jsx("div", { className: "label-mono opacity-70", children: "explore the stars" }),
        /* @__PURE__ */ jsx("p", { className: "font-serif italic text-sm opacity-70 mt-2 leading-snug", children: "click on the bright stars to find hidden messages." })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        y: 100,
        opacity: 0
      }, animate: {
        y: 0,
        opacity: 1
      }, transition: {
        duration: 2.4,
        delay: 3,
        ease: "easeOut"
      }, className: "absolute bottom-24 left-1/2 -translate-x-1/2 z-20", children: !letterOpen ? /* @__PURE__ */ jsx("button", { onClick: () => setLetterOpen(true), className: "paper-button", children: "open letter" }) : /* @__PURE__ */ jsx(LetterPanel, { sky, onClose: () => setLetterOpen(false) }) }),
      sky.music_url && /* @__PURE__ */ jsx(CassettePlayer, { url: sky.music_url }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-0 right-0 z-30 flex items-center justify-between px-6 flex-wrap gap-4", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => window.location.reload(), className: "paper-button-outline", children: "↻ replay the reveal" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 flex-wrap justify-center", children: [
          /* @__PURE__ */ jsx(SupportTip, {}),
          /* @__PURE__ */ jsx(ShareButton, {})
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "paper-button-outline", children: "make a sky of your own →" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-1 left-0 right-0 text-center font-serif italic text-xs opacity-50 z-[100] pointer-events-none", style: {
      color: "#dcccb2"
    }, children: "for people who still feel things deeply — SkyLetter" })
  ] });
}
function Intro() {
  const [lineIdx, setLineIdx] = useState(0);
  useEffect(() => {
    const timers = REVEAL_LINES.map((_, i) => setTimeout(() => setLineIdx(i + 1), 500 + i * 2400));
    return () => timers.forEach(clearTimeout);
  }, []);
  return /* @__PURE__ */ jsxs(motion.div, { exit: {
    opacity: 0
  }, transition: {
    duration: 2
  }, className: "fixed inset-0 z-50 bg-[#050810] flex items-center justify-center text-center px-6 overflow-hidden", children: [
    Array.from({
      length: 80
    }).map((_, i) => /* @__PURE__ */ jsx("span", { className: "absolute rounded-full", style: {
      left: `${i * 17 % 100}%`,
      top: `${i * 31 % 100}%`,
      width: i % 7 === 0 ? 2 : 1,
      height: i % 7 === 0 ? 2 : 1,
      background: "#fff4cc",
      opacity: 0.5,
      boxShadow: i % 7 === 0 ? "0 0 6px #fff4cc" : "none",
      animation: `star-twinkle ${3 + i % 5}s ease-in-out ${i * 0.1}s infinite`
    } }, i)),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      scale: 0.8
    }, animate: {
      opacity: 1,
      scale: 1
    }, transition: {
      duration: 4
    }, className: "absolute pointer-events-none", style: {
      width: "70vmin",
      height: "70vmin",
      borderRadius: "50%",
      background: "radial-gradient(circle at 50% 50%, rgba(255,244,204,0.12) 0%, rgba(255,244,204,0.04) 35%, transparent 65%)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-24 flex items-center justify-center", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: REVEAL_LINES.map((line, i) => lineIdx === i + 1 ? /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: {
          opacity: 0,
          y: 20,
          filter: "blur(12px)"
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        },
        exit: {
          opacity: 0,
          y: -20,
          filter: "blur(12px)"
        },
        transition: {
          duration: 2.8,
          ease: [0.22, 1, 0.36, 1]
        },
        className: "font-serif italic text-2xl sm:text-4xl text-foreground/90 absolute whitespace-pre-line text-center min-w-[300px] sm:min-w-[600px]",
        style: {
          textShadow: "0 0 30px rgba(255,244,204,0.25)",
          lineHeight: "1.4"
          // Helps with the vertical spacing between the two lines
        },
        children: line
      },
      line
    ) : null) }) })
  ] });
}
function LetterPanel({
  sky,
  onClose
}) {
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    rotateX: -90,
    opacity: 0
  }, animate: {
    rotateX: 0,
    opacity: 1
  }, transition: {
    duration: 1.6,
    ease: "easeOut"
  }, className: "paper-letter w-[min(620px,90vw)] p-8 sm:p-12 relative origin-top", style: {
    transformPerspective: 1e3
  }, children: [
    /* @__PURE__ */ jsx("button", { onClick: onClose, className: "absolute top-3 right-3 opacity-60 hover:opacity-100 z-10", style: {
      color: "#1a1a1a"
    }, children: /* @__PURE__ */ jsx(X, { size: 16 }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-4", children: /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest opacity-60", style: {
        color: "#3d2f1f"
      }, children: "⋆ open letter ⋆" }) }),
      sky.letter_to && /* @__PURE__ */ jsxs("p", { className: "handwritten mb-3", style: {
        fontStyle: "italic"
      }, children: [
        "To: ",
        /* @__PURE__ */ jsx("span", { className: "border-b border-[#5a4a32]/40 px-2", children: sky.letter_to })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 2,
        delay: 0.6
      }, className: "handwritten whitespace-pre-wrap", children: sky.letter_body || "(no words — only stars)" }),
      sky.letter_from && /* @__PURE__ */ jsxs("p", { className: "handwritten mt-6 text-right", style: {
        fontStyle: "italic"
      }, children: [
        "from, ",
        /* @__PURE__ */ jsx("span", { className: "border-b border-[#5a4a32]/40 px-2", children: sky.letter_from })
      ] })
    ] })
  ] });
}
function CassettePlayer({
  url
}) {
  const copy = () => {
    navigator.clipboard?.writeText(url);
    toast("song link copied", {
      duration: 2e3
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6 z-30", children: /* @__PURE__ */ jsxs("button", { onClick: copy, className: "flex items-center gap-2 px-3 py-2 text-xs font-mono", style: {
    background: "var(--paper-deep)",
    color: "#1a1a1a",
    clipPath: "polygon(2% 8%, 8% 0%, 92% 2%, 100% 12%, 98% 88%, 92% 100%, 8% 98%, 0% 90%)",
    boxShadow: "inset 0 0 0 1px rgba(80,60,30,0.4)"
  }, title: url, children: [
    /* @__PURE__ */ jsx(Music, { size: 12 }),
    /* @__PURE__ */ jsx("span", { className: "hidden sm:inline uppercase tracking-widest", children: "our song" }),
    /* @__PURE__ */ jsx("span", { className: "w-6 h-3 bg-[#1a1a1a]/20 rounded-sm" })
  ] }) });
}
function ShareButton() {
  const [copied, setCopied] = useState(false);
  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "I made you a sky.",
          url
        });
        return;
      }
    } catch {
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast("link copied — send it to them", {
        duration: 2400
      });
      setTimeout(() => setCopied(false), 2400);
    } catch {
      toast.error("couldn't copy the link");
    }
  };
  return /* @__PURE__ */ jsxs("button", { onClick: handleShare, className: "paper-button gap-2", children: [
    copied ? /* @__PURE__ */ jsx(Check, { size: 12 }) : /* @__PURE__ */ jsx(Share2, { size: 12 }),
    /* @__PURE__ */ jsx("span", { children: copied ? "link copied" : "share this sky" })
  ] });
}
export {
  Reveal as component
};
