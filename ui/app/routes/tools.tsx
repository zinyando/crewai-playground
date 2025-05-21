import type { Route } from "./+types/tools";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tools | CrewAI Playground" },
    { name: "description", content: "Manage your CrewAI tools" },
  ];
}

export default function Tools() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-5">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Tools</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Create and manage tools for your CrewAI agents
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Your tools will appear here. Create your first tool to get started.
        </p>
      </div>
    </div>
  );
}
