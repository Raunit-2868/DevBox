export type Project = {
  id: number;
  name: string;
};

type SidebarProps = {
  projects: Project[];
};

export default function Sidebar({ projects }: SidebarProps)  {
  return (
    <aside className="w-64 border-r border-gray-800 p-6">
      <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
        Workspace
      </p>

      <nav className="space-y-2">
        <a
          href="#"
          className="block rounded-lg bg-gray-800 px-4 py-3 text-sm"
        >
          Dashboard
        </a>
      </nav>

      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Projects
        </p>

        <div className="space-y-1">
          {projects.map((project) => (
            <a
              key={project.id}
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-900 hover:text-white"
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}