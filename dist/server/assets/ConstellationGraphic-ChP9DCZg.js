import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
function ConstellationGraphic({
  shape,
  size = 200,
  glow = true,
  showName = false,
  name,
  starColor = "#fff4cc"
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative pointer-events-none select-none",
      style: { width: size, height: size },
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "0 0 200 200",
            width: size,
            height: size,
            className: "overflow-visible",
            children: [
              shape.lines.map(([a, b], i) => {
                const p1 = shape.points[a];
                const p2 = shape.points[b];
                return /* @__PURE__ */ jsx(
                  motion.line,
                  {
                    x1: p1.x,
                    y1: p1.y,
                    x2: p2.x,
                    y2: p2.y,
                    stroke: starColor,
                    strokeWidth: 0.9,
                    strokeLinecap: "round",
                    strokeDasharray: "2.5 3.5",
                    opacity: 0.7,
                    animate: { opacity: [0.5, 0.85, 0.5] },
                    transition: { duration: 5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }
                  },
                  i
                );
              }),
              shape.points.map((p, i) => /* @__PURE__ */ jsxs(
                motion.g,
                {
                  animate: { opacity: [0.6, 1, 0.6] },
                  transition: { duration: 3 + i % 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" },
                  children: [
                    glow && /* @__PURE__ */ jsx(
                      "circle",
                      {
                        cx: p.x,
                        cy: p.y,
                        r: 6,
                        fill: starColor,
                        opacity: 0.18,
                        style: { filter: "blur(4px)" }
                      }
                    ),
                    /* @__PURE__ */ jsx("circle", { cx: p.x, cy: p.y, r: 2.2, fill: starColor }),
                    /* @__PURE__ */ jsx("line", { x1: p.x - 4.5, y1: p.y, x2: p.x + 4.5, y2: p.y, stroke: starColor, strokeWidth: 0.5, opacity: 0.75, strokeLinecap: "round" }),
                    /* @__PURE__ */ jsx("line", { x1: p.x, y1: p.y - 4.5, x2: p.x, y2: p.y + 4.5, stroke: starColor, strokeWidth: 0.5, opacity: 0.75, strokeLinecap: "round" })
                  ]
                },
                i
              ))
            ]
          }
        ),
        showName && (name || shape.name) && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-1/2 -translate-x-1/2 font-serif italic text-[15px] sm:text-base whitespace-nowrap",
            style: {
              top: "-0.6rem",
              color: "rgba(248, 240, 218, 0.92)",
              letterSpacing: "0.01em",
              textShadow: "0 0 14px rgba(0,0,0,0.75), 0 1px 2px rgba(0,0,0,0.6)"
            },
            children: name || shape.name
          }
        )
      ]
    }
  );
}
export {
  ConstellationGraphic as C
};
