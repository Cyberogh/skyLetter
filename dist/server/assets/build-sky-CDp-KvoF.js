import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import { S as SkyAtmosphere } from "./SkyAtmosphere-lbbyx0ML.js";
import { C as ConstellationGraphic } from "./ConstellationGraphic-ChP9DCZg.js";
import { a as THEMES, C as CONSTELLATION_LIBRARY } from "./themes-Bg09rqa3.js";
import { g as getDraft, s as saveDraft } from "./sky-store-BH8JQbgX.js";
import { Pencil, X, Trash2 } from "lucide-react";
function BuildSky() {
  const navigate = useNavigate();
  const [draft] = useState(getDraft());
  const [skyName, setSkyName] = useState(draft.skyName);
  const [placed, setPlaced] = useState(draft.constellations);
  const [selectedId, setSelectedId] = useState(null);
  const stageRef = useRef(null);
  useEffect(() => {
    saveDraft({
      skyName,
      constellations: placed
    });
  }, [skyName, placed]);
  const themeCfg = THEMES[draft.theme];
  const addConstellation = (shapeId) => {
    const shape = CONSTELLATION_LIBRARY.find((s) => s.id === shapeId);
    const newOne = {
      id: nanoid(8),
      shapeId,
      name: shape.name,
      x: 30 + Math.random() * 40,
      y: 25 + Math.random() * 40,
      scale: 1,
      hiddenMessage: ""
    };
    setPlaced((p) => [...p, newOne]);
    setSelectedId(newOne.id);
  };
  const updatePlaced = (id, patch) => {
    setPlaced((p) => p.map((it) => it.id === id ? {
      ...it,
      ...patch
    } : it));
  };
  const removePlaced = (id) => {
    setPlaced((p) => p.filter((it) => it.id !== id));
    setSelectedId(null);
  };
  const selected = placed.find((p) => p.id === selectedId);
  const handleDragStart = (e, id) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    const stage = stageRef.current.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const item = placed.find((p) => p.id === id);
    const origX = item.x;
    const origY = item.y;
    const move = (ev) => {
      const dx = (ev.clientX - startX) / stage.width * 100;
      const dy = (ev.clientY - startY) / stage.height * 100;
      updatePlaced(id, {
        x: Math.max(2, Math.min(95, origX + dx)),
        y: Math.max(5, Math.min(90, origY + dy))
      });
    };
    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
  };
  return /* @__PURE__ */ jsxs(SkyAtmosphere, { theme: draft.theme, starCount: 200, children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 right-0 z-30 px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Link, { to: "/choose-night", className: "label-mono hover:text-star transition-colors z-10", children: "← back to choose night" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 translate-y-2.5 -translate-x-1/2 text-center pointer-events-none", children: [
        "    ",
        /* @__PURE__ */ jsx("div", { className: "label-mono opacity-70 tracking-[0.35em] uppercase", children: "name your sky" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 z-10", children: [
        /* @__PURE__ */ jsxs("span", { className: "label-mono opacity-60", children: [
          "stars: ",
          placed.length,
          " / ∞"
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => navigate({
          to: "/write-letter"
        }), className: "paper-button-outline", children: "next: write a letter →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-16 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("input", { value: skyName, onChange: (e) => setSkyName(e.target.value.slice(0, 80)), className: "bg-transparent text-center font-serif italic text-2xl sm:text-3xl text-foreground/90 outline-none border-b border-foreground/20 focus:border-foreground/60 transition-colors px-4 pb-1 min-w-[280px]" }),
      /* @__PURE__ */ jsx("button", { className: "opacity-30 hover:opacity-70 transition-opacity mb-1", "aria-label": "Edit sky name", children: /* @__PURE__ */ jsx(Pencil, { size: 15, strokeWidth: 1.5 }) })
    ] }),
    /* @__PURE__ */ jsx("div", { ref: stageRef, className: "absolute inset-0 z-10", onClick: (e) => {
      if (e.target === e.currentTarget) setSelectedId(null);
    }, children: placed.map((item) => {
      const shape = CONSTELLATION_LIBRARY.find((s) => s.id === item.shapeId);
      const isSelected = selectedId === item.id;
      return /* @__PURE__ */ jsx("div", { onPointerDown: (e) => {
        e.stopPropagation();
        setSelectedId(item.id);
        handleDragStart(e, item.id);
      }, className: "absolute cursor-grab active:cursor-grabbing", style: {
        left: `${item.x}%`,
        top: `${item.y}%`,
        transform: `translate(-50%, -50%) scale(${item.scale})`,
        touchAction: "none"
      }, children: /* @__PURE__ */ jsx("div", { className: `relative ${isSelected ? "ring-1 ring-foreground/30 rounded-lg" : ""}`, children: /* @__PURE__ */ jsx(ConstellationGraphic, { shape, size: 180, showName: true, name: item.name, starColor: themeCfg.starColor }) }) }, item.id);
    }) }),
    /* @__PURE__ */ jsx(ToolsPanel, { onAdd: addConstellation }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selected && /* @__PURE__ */ jsx(Inspector, { item: selected, onUpdate: (patch) => updatePlaced(selected.id, patch), onRemove: () => removePlaced(selected.id), onClose: () => setSelectedId(null) }, selected.id) }),
    placed.length === 0 && /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0
    }, transition: {
      duration: 1.2
    }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "label-mono opacity-60 text-center", children: "drag constellations · click them to hide messages" }) })
  ] });
}
function ToolsPanel({
  onAdd
}) {
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    x: -20
  }, animate: {
    opacity: 1,
    x: 0
  }, transition: {
    duration: 1.2,
    delay: 0.3
  }, className: "absolute left-4 top-32 bottom-32 z-20 w-44 sm:w-52 overflow-y-auto", style: {
    background: "radial-gradient(ellipse at center, var(--paper-light), var(--paper-deep))",
    clipPath: "polygon(2% 1%, 98% 0%, 100% 99%, 1% 98%)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    color: "#1a1a1a",
    padding: "1rem 0.75rem"
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "text-center label-mono mb-3", style: {
      color: "#3d2f1f"
    }, children: "Constellations" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: CONSTELLATION_LIBRARY.map((s) => /* @__PURE__ */ jsxs("button", { onClick: () => onAdd(s.id), className: "aspect-square bg-[#1a2035]/90 rounded p-1 hover:bg-[#1a2035] transition-colors group relative", title: s.name, children: [
      /* @__PURE__ */ jsx(ConstellationGraphic, { shape: s, size: 70, glow: false }),
      /* @__PURE__ */ jsx("span", { className: "absolute bottom-1 left-1 right-1 text-[8px] text-center font-mono opacity-0 group-hover:opacity-100 transition-opacity text-foreground", children: s.name })
    ] }, s.id)) }),
    /* @__PURE__ */ jsx("p", { className: "font-serif italic text-xs mt-4 opacity-60 text-center", style: {
      color: "#3d2f1f"
    }, children: "tap to drop into your sky" })
  ] });
}
function Inspector({
  item,
  onUpdate,
  onRemove,
  onClose
}) {
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    x: 30
  }, animate: {
    opacity: 1,
    x: 0
  }, exit: {
    opacity: 0,
    x: 30
  }, transition: {
    duration: 0.4
  }, className: "absolute right-4 top-32 z-30 w-72", style: {
    background: "radial-gradient(ellipse at center, var(--paper-light), var(--paper-deep))",
    clipPath: "polygon(2% 1%, 98% 0%, 100% 99%, 1% 98%)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    color: "#1a1a1a",
    padding: "1.25rem",
    opacity: "0.92",
    backdropFilter: "blur(3px)"
    // CamelCase and wrapped in quotes
  }, children: [
    /* @__PURE__ */ jsx("button", { onClick: onClose, className: "absolute top-2 right-2 opacity-60 hover:opacity-100", children: /* @__PURE__ */ jsx(X, { size: 16 }) }),
    /* @__PURE__ */ jsx("div", { className: "label-mono", style: {
      color: "#3d2f1f"
    }, children: "⋆ constellation" }),
    /* @__PURE__ */ jsx("input", { value: item.name, onChange: (e) => onUpdate({
      name: e.target.value.slice(0, 60)
    }), className: "w-full bg-transparent border-b border-[#3d2f1f]/30 font-serif italic text-lg mt-2 pb-1 outline-none focus:border-[#3d2f1f]/70" }),
    /* @__PURE__ */ jsx("div", { className: "label-mono mt-5", style: {
      color: "#3d2f1f"
    }, children: "hidden message" }),
    /* @__PURE__ */ jsx("textarea", { value: item.hiddenMessage, onChange: (e) => onUpdate({
      hiddenMessage: e.target.value.slice(0, 280)
    }), rows: 4, placeholder: "something only the stars know…", className: "w-full mt-2 bg-[#f5ecd3]/60 border border-[#3d2f1f]/20 p-2 font-serif italic text-sm outline-none focus:border-[#3d2f1f]/60 resize-none placeholder:italic placeholder:opacity-50", style: {
      color: "#1a1a1a"
    } }),
    /* @__PURE__ */ jsx("div", { className: "label-mono mt-5", style: {
      color: "#3d2f1f"
    }, children: "size" }),
    /* @__PURE__ */ jsx("input", { type: "range", min: 0.5, max: 1.8, step: 0.05, value: item.scale, onChange: (e) => onUpdate({
      scale: parseFloat(e.target.value)
    }), className: "w-full mt-1 accent-[#3d2f1f]" }),
    /* @__PURE__ */ jsxs("button", { onClick: onRemove, className: "mt-5 flex items-center gap-2 text-xs font-mono opacity-70 hover:opacity-100", style: {
      color: "#3d2f1f"
    }, children: [
      /* @__PURE__ */ jsx(Trash2, { size: 12 }),
      " delete constellation"
    ] })
  ] });
}
export {
  BuildSky as component
};
