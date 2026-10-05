export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-800 px-8">
      <h1 className="text-xl font-semibold">DevBox</h1>

      <nav className="flex gap-6 text-sm text-gray-400">
        <a href="#" className="hover:text-white">
          Projects
        </a>

        <a href="#" className="hover:text-white">
          Settings
        </a>
      </nav>
    </header>
  );
}