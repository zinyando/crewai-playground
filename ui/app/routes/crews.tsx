import type { Route } from "./+types/crews";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Crews | CrewAI Playground" },
    { name: "description", content: "Manage your CrewAI crews" },
  ];
}

export default function Crews() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-5">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Crews</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Create and manage crews of AI agents for collaborative tasks
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Your crews will appear here. Create your first crew to get started.
        </p>
      </div>
    </div>
  );
}
