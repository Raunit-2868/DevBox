type DashboardProps = {
  username: string;
  onNewProject: () => void;
};

export default function Dashboard({
  username,
  onNewProject,
}: DashboardProps) {
  return (
    <section className="flex flex-1 items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-sm font-medium text-blue-400">
          Welcome, {username}
        </p>

        <h2 className="text-4xl font-bold tracking-tight">
          Your development environment in the browser.
        </h2>

        <p className="mt-4 text-gray-400">
          Create projects, write code, run applications, and use AI
          assistance—all from one workspace.
        </p>

        <button
  onClick={onNewProject}
  className="mt-8 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200"
>
  + New Project
</button>
      </div>
    </section>
  );
}