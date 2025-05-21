import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CrewAI Playground" },
    { name: "description", content: "Build and manage AI agents, tools, crews, and flows" },
  ];
}

export default function Home() {
  const routes = [
    { path: "/agents", label: "Agents", description: "Create and manage your AI agents", icon: "👤" },
    { path: "/tools", label: "Tools", description: "Build tools for your agents to use", icon: "🔧" },
    { path: "/crews", label: "Crews", description: "Organize agents into collaborative crews", icon: "👥" },
    { path: "/flows", label: "Flows", description: "Design complex workflows for your crews", icon: "📊" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">CrewAI Playground</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          Build, manage, and deploy AI agent crews for complex tasks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="flex-shrink-0 mr-4 text-3xl">{route.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{route.label}</h2>
              <p className="text-gray-600 dark:text-gray-300">{route.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
