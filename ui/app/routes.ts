import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "components/Layout.tsx",
    children: [
      { index: true, file: "routes/index.tsx" },
      { path: "agents", file: "routes/agents.tsx" },
      { path: "tools", file: "routes/tools.tsx" },
      { path: "crews", file: "routes/crews.tsx" },
      { path: "flows", file: "routes/flows.tsx" },
    ],
  },
] satisfies RouteConfig;
