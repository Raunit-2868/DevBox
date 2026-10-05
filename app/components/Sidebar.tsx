export default function Sidebar() {
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

        <a
          href="#"
          className="block rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-gray-900 hover:text-white"
        >
          Projects
        </a>
      </nav>
    </aside>
  );
}