import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { a as THEMES } from "./themes-Bg09rqa3.js";
function SkyAtmosphere({
  theme,
  starCount = 120,
  showMoon = true,
  children,
  dim = false
}) {
  const cfg = THEMES[theme];
  const stars = useMemo(() => {
    const arr = [];
    let seed = theme.length * 13;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < starCount; i++) {
      arr.push({
        x: rand() * 100,
        y: rand() * 100,
        size: rand() * 2 + 0.4,
        delay: rand() * 6,
        dur: 3 + rand() * 5,
        bright: rand() > 0.85
      });
    }
    return arr;
  }, [theme, starCount]);
  const clouds = useMemo(() => {
    let seed = theme.length * 27 + 5;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: 5 }).map(() => ({
      x: rand() * 100,
      y: rand() * 80,
      size: 200 + rand() * 350,
      delay: rand() * 10
    }));
  }, [theme]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative min-h-screen w-full overflow-hidden",
      style: {
        background: cfg.bgImage ? `${cfg.gradient}` : cfg.gradient
      },
      children: [
        cfg.bgImage && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                backgroundImage: `url(${cfg.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.85
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.28) 80%, rgba(0,0,0,0.42) 100%)"
              }
            }
          )
        ] }),
        clouds.map((c, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "watercolor-cloud",
            style: {
              left: `${c.x}%`,
              top: `${c.y}%`,
              width: `${c.size}px`,
              height: `${c.size * 0.6}px`,
              background: cfg.cloudColor
            },
            animate: {
              x: [0, 30, -10, 0],
              y: [0, -10, 15, 0]
            },
            transition: {
              duration: 40 + i * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: c.delay
            }
          },
          i
        )),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: stars.map((s, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute rounded-full",
            style: {
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              background: cfg.starColor,
              boxShadow: s.bright ? `0 0 ${s.size * 4}px ${cfg.starColor}, 0 0 ${s.size * 8}px rgba(255,244,204,0.3)` : `0 0 ${s.size * 2}px ${cfg.starColor}`,
              opacity: s.bright ? 0.9 : 0.5,
              animation: `star-twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`
            }
          },
          i
        )) }),
        showMoon && cfg.moon !== "none" && !cfg.bgImage && /* @__PURE__ */ jsx(Moon, { variant: cfg.moon }),
        cfg.rain && /* @__PURE__ */ jsx(Rain, {}),
        !cfg.bgImage && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none",
              style: {
                background: "linear-gradient(180deg, transparent 0%, rgba(8,12,22,0.3) 40%, rgba(5,8,18,0.85) 80%, #050810 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsx(MountainSilhouette, {})
        ] }),
        dim && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "grain absolute inset-0 pointer-events-none" }),
        children
      ]
    }
  );
}
function Moon({ variant }) {
  const isCrescent = variant === "crescent";
  const size = variant === "small-full" ? 90 : 200;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute moon-breathe drift-slow",
      style: {
        right: variant === "small-full" ? "12%" : "8%",
        top: variant === "small-full" ? "8%" : "10%",
        width: size,
        height: size
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "w-full h-full rounded-full relative",
          style: {
            background: isCrescent ? "radial-gradient(circle at 70% 50%, #f3ebd3 0%, #c9b89a 40%, #5a4a32 80%)" : "radial-gradient(circle at 35% 30%, #fff4cc 0%, #e6d4a8 35%, #a08a64 75%, #4a3d28 100%)",
            boxShadow: "0 0 80px rgba(255,244,204,0.15), inset -20px -20px 40px rgba(0,0,0,0.4)"
          },
          children: [
            isCrescent && /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute rounded-full",
                style: {
                  inset: "0",
                  background: "radial-gradient(circle at 30% 50%, #131827 0%, #131827 45%, transparent 55%)"
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 rounded-full opacity-30 mix-blend-multiply",
                style: {
                  backgroundImage: "radial-gradient(circle at 25% 35%, #4a3d28 2%, transparent 4%), radial-gradient(circle at 60% 60%, #4a3d28 1.5%, transparent 3%), radial-gradient(circle at 70% 30%, #4a3d28 2%, transparent 4%)"
                }
              }
            )
          ]
        }
      )
    }
  );
}
function MountainSilhouette() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "absolute bottom-0 left-0 w-full pointer-events-none",
      viewBox: "0 0 1440 200",
      preserveAspectRatio: "none",
      style: { height: "20vh", opacity: 0.7 },
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M0,200 L0,140 L80,110 L160,130 L220,90 L310,120 L400,80 L500,110 L590,70 L680,100 L780,60 L880,95 L980,75 L1080,105 L1180,80 L1280,110 L1360,90 L1440,120 L1440,200 Z",
            fill: "#080c16"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M0,200 L0,170 L100,150 L200,165 L320,140 L450,160 L580,135 L720,158 L860,140 L1000,162 L1140,145 L1280,165 L1440,150 L1440,200 Z",
            fill: "#040608",
            opacity: "0.9"
          }
        ),
        [120, 280, 420, 580, 740, 920, 1100, 1280].map((x, i) => /* @__PURE__ */ jsx("g", { transform: `translate(${x}, ${145 + i % 3 * 5})`, opacity: "0.85", children: /* @__PURE__ */ jsx("path", { d: "M0,0 L-6,15 L-3,15 L-7,25 L7,25 L3,15 L6,15 Z", fill: "#020306" }) }, i))
      ]
    }
  );
}
function Rain() {
  const [drops, setDrops] = useState([]);
  useEffect(() => {
    setDrops(
      Array.from({ length: 60 }).map(() => ({
        x: Math.random() * 100,
        delay: Math.random() * 2,
        dur: 0.6 + Math.random() * 0.8
      }))
    );
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
    drops.map((d, i) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute w-px bg-gradient-to-b from-transparent via-white/20 to-transparent",
        style: {
          left: `${d.x}%`,
          top: "-10%",
          height: "60px",
          animation: `rain-fall ${d.dur}s linear ${d.delay}s infinite`
        }
      },
      i
    )),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes rain-fall {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(120vh); opacity: 0; }
        }
      ` })
  ] });
}
export {
  SkyAtmosphere as S
};
