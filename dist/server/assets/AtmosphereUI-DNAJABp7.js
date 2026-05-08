import { jsx, jsxs } from "react/jsx-runtime";
function CornerLabel({
  position,
  children
}) {
  const pos = {
    tl: "top-6 left-6",
    tr: "top-6 right-6 text-right",
    bl: "bottom-6 left-6",
    br: "bottom-6 right-6 text-right"
  }[position];
  return /* @__PURE__ */ jsxs("div", { className: `absolute ${pos} z-20 label-mono`, children: [
    children,
    /* @__PURE__ */ jsx("div", { className: "mt-1 h-px w-12 bg-foreground/30" })
  ] });
}
function StarIcon({ size = 14, color = "#fff4cc" }) {
  return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M8 0 L9 7 L16 8 L9 9 L8 16 L7 9 L0 8 L7 7 Z",
      fill: color,
      opacity: "0.9"
    }
  ) });
}
export {
  CornerLabel as C,
  StarIcon as S
};
