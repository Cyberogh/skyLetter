import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { C as CornerLabel, S as StarIcon } from "./AtmosphereUI-DNAJABp7.js";
const bgImage = "/assets/bg-BlCRPWSI.jpg";
function Landing() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen w-full overflow-hidden", style: {
    background: "#080c16"
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
      background: "rgba(0,0,0,0.22)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
      background: "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(5,8,16,0.55) 100%)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "grain absolute inset-0 pointer-events-none" }),
    /* @__PURE__ */ jsxs(CornerLabel, { position: "tl", children: [
      "a handmade",
      /* @__PURE__ */ jsx("br", {}),
      "constellation tool"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx(motion.h1, { initial: {
        opacity: 0,
        y: 20,
        filter: "blur(10px)"
      }, animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }, transition: {
        duration: 2.4,
        ease: "easeOut"
      }, className: "display-distressed text-[clamp(3.5rem,14vw,10rem)] relative z-10", style: {
        lineHeight: 1.15,
        paddingBottom: "0.15em",
        paddingTop: "0.1em"
      }, children: "SKYLETTER" }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 2,
        delay: 1
      }, className: "font-serif italic text-[clamp(1.3rem,2.4vw,1.9rem)] mt-6 text-foreground/90", children: "I made you a sky." }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 2,
        delay: 1.6
      }, className: "font-mono text-xs sm:text-sm mt-10 text-foreground/70 leading-relaxed max-w-md", children: [
        "build constellations,",
        /* @__PURE__ */ jsx("br", {}),
        "hide messages in stars,",
        /* @__PURE__ */ jsx("br", {}),
        "and send someone a universe",
        /* @__PURE__ */ jsx("br", {}),
        "that exists only for them."
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 2,
        delay: 2.2
      }, className: "mt-14 flex flex-col items-center gap-6", children: /* @__PURE__ */ jsxs(Link, { to: "/choose-night", className: "paper-button group", children: [
        "Build a Sky ",
        /* @__PURE__ */ jsx(StarIcon, { size: 11, color: "#1a1a1a" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 label-mono opacity-70", children: "made slowly on earth" })
  ] });
}
export {
  Landing as component
};
