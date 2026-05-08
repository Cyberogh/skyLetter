import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X } from "lucide-react";
const AMOUNTS = [1, 3, 10];
const PAYMENT_METHODS = [
  { label: "PayPal", href: "https://paypal.me/skyletter" },
  { label: "UPI", href: "upi://pay?pa=skyletter@upi&pn=SkyLetter" },
  { label: "Crypto", href: "https://commerce.coinbase.com/" }
];
function SupportTip() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(null);
  const [showMethods, setShowMethods] = useState(false);
  const close = () => {
    setOpen(false);
    setShowMethods(false);
    setAmount(null);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "group inline-flex items-center gap-2 font-serif italic text-xs sm:text-sm text-foreground/60 hover:text-foreground/90 transition-colors",
        children: [
          /* @__PURE__ */ jsx(Heart, { size: 11, className: "opacity-70 group-hover:opacity-100" }),
          /* @__PURE__ */ jsx("span", { className: "border-b border-foreground/20 group-hover:border-foreground/50 pb-[1px]", children: "leave a small tip" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
        className: "fixed inset-0 z-[80] bg-black/65 flex items-center justify-center px-5",
        onClick: close,
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { y: 18, opacity: 0, rotate: -1.2 },
            animate: { y: 0, opacity: 1, rotate: -1 },
            exit: { y: 12, opacity: 0 },
            transition: { duration: 0.7, ease: "easeOut" },
            onClick: (e) => e.stopPropagation(),
            className: "paper-letter w-full max-w-sm p-7 sm:p-9 relative",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: close,
                  className: "absolute top-2 right-2 opacity-60 hover:opacity-100",
                  style: { color: "#3d2f1f" },
                  "aria-label": "close",
                  children: /* @__PURE__ */ jsx(X, { size: 15 })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-center", style: { color: "#3d2f1f" }, children: [
                /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] opacity-70", children: "⋆ support skyletter ⋆" }),
                /* @__PURE__ */ jsxs("p", { className: "font-serif italic text-base mt-2 leading-snug", children: [
                  "if this made you feel something,",
                  /* @__PURE__ */ jsx("br", {}),
                  "you can leave a small tip."
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 mt-5", children: AMOUNTS.map((a) => /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setAmount(a),
                    className: "px-4 py-2 font-serif italic text-base transition-all",
                    style: {
                      color: "#3d2f1f",
                      background: amount === a ? "rgba(61,47,31,0.12)" : "transparent",
                      border: `1px solid ${amount === a ? "rgba(61,47,31,0.7)" : "rgba(61,47,31,0.3)"}`,
                      borderRadius: 2
                    },
                    children: [
                      "$",
                      a
                    ]
                  },
                  a
                )) }),
                !showMethods ? /* @__PURE__ */ jsx(
                  "button",
                  {
                    disabled: !amount,
                    onClick: () => setShowMethods(true),
                    className: "mt-6 paper-button text-xs disabled:opacity-40 disabled:cursor-not-allowed",
                    children: "Make Payment"
                  }
                ) : /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6 },
                    className: "mt-6",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "font-mono text-[10px] uppercase tracking-widest opacity-60 mb-3", children: [
                        "choose a way to send $",
                        amount
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-4 font-serif italic text-sm", children: PAYMENT_METHODS.map((m, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-4", children: [
                        /* @__PURE__ */ jsx(
                          "a",
                          {
                            href: m.href,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "border-b border-[#3d2f1f]/30 hover:border-[#3d2f1f] pb-[1px]",
                            children: m.label
                          }
                        ),
                        i < PAYMENT_METHODS.length - 1 && /* @__PURE__ */ jsx("span", { className: "opacity-40", children: "·" })
                      ] }, m.label)) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[11px] opacity-55 mt-5 leading-relaxed", children: "entirely optional. thank you for being here." })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}
export {
  SupportTip as S
};
