import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { createClient } from "@supabase/supabase-js";
const appCss = "/assets/styles-B5Dd0qQO.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SKYLETTER" },
      { name: "description", content: "A handmade constellation tool. I made you a sky." },
      { name: "author", content: "SkyLetter" },
      { property: "og:title", content: "SKYLETTER — I made you a sky" },
      { property: "og:description", content: "Build constellations, hide messages in stars, and send someone a universe that exists only for them." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$4 = () => import("./write-letter-NWRF06X1.js");
const Route$4 = createFileRoute("/write-letter")({
  head: () => ({
    meta: [{
      title: "Write your letter — SKYLETTER"
    }, {
      name: "description",
      content: "Some things are easier beneath the stars."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  ssr: false
});
const $$splitComponentImporter$3 = () => import("./choose-night-DPuJ1qzD.js");
const Route$3 = createFileRoute("/choose-night")({
  head: () => ({
    meta: [{
      title: "Choose your night — SKYLETTER"
    }, {
      name: "description",
      content: "Every sky carries a different feeling. Choose the one that matches yours."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./build-sky-CDp-KvoF.js");
const Route$2 = createFileRoute("/build-sky")({
  head: () => ({
    meta: [{
      title: "Build the Sky — SKYLETTER"
    }, {
      name: "description",
      content: "Drag constellations into your sky and hide messages in the stars."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  ssr: false
});
const $$splitComponentImporter$1 = () => import("./index-CF_XAp8F.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SKYLETTER — I made you a sky"
    }, {
      name: "description",
      content: "Build constellations, hide messages in stars, and send someone a universe that exists only for them."
    }, {
      property: "og:title",
      content: "SKYLETTER — I made you a sky"
    }, {
      property: "og:description",
      content: "A handmade constellation tool. For people who still feel things deeply."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
function createSupabaseClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Connect Supabase in Lovable Cloud.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
const $$splitComponentImporter = () => import("./sky._shareId-CRyOsNp0.js");
const Route = createFileRoute("/sky/$shareId")({
  loader: async ({
    params
  }) => {
    const {
      data,
      error
    } = await supabase.from("skies").select("*").eq("share_id", params.shareId).maybeSingle();
    if (error || !data) throw notFound();
    return {
      sky: data
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.sky.sky_name ?? "a sky"} — SKYLETTER`
    }, {
      name: "description",
      content: "someone made you a sky."
    }, {
      property: "og:title",
      content: `${loaderData?.sky.sky_name ?? "a sky"} — SKYLETTER`
    }, {
      property: "og:description",
      content: "made slowly, for you."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  ssr: false
});
const WriteLetterRoute = Route$4.update({
  id: "/write-letter",
  path: "/write-letter",
  getParentRoute: () => Route$5
});
const ChooseNightRoute = Route$3.update({
  id: "/choose-night",
  path: "/choose-night",
  getParentRoute: () => Route$5
});
const BuildSkyRoute = Route$2.update({
  id: "/build-sky",
  path: "/build-sky",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const SkyShareIdRoute = Route.update({
  id: "/sky/$shareId",
  path: "/sky/$shareId",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  BuildSkyRoute,
  ChooseNightRoute,
  WriteLetterRoute,
  SkyShareIdRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r,
  supabase as s
};
