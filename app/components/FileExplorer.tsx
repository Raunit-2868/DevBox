"use client";

import { useState } from "react";

type FileExplorerProps = {
  onFileSelect: (fileName: string) => void;
};

export default function FileExplorer({
  onFileSelect,
}: FileExplorerProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="w-60 border-r border-gray-800 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        Explorer
      </p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 flex w-full items-center gap-2 rounded px-2 py-1 text-left text-sm text-gray-300 hover:bg-gray-900"
      >
        <span>{isOpen ? "▼" : "▶"}</span>
        <span>📁 src</span>
      </button>

      {isOpen && (
        <div className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
          <button
            onClick={() => onFileSelect("page.tsx")}
            className="block w-full rounded px-2 py-1 text-left hover:bg-gray-900"
          >
            📄 page.tsx
          </button>

          <button
            onClick={() => onFileSelect("layout.tsx")}
            className="block w-full rounded px-2 py-1 text-left hover:bg-gray-900"
          >
            📄 layout.tsx
          </button>

          <button
            onClick={() => onFileSelect("globals.css")}
            className="block w-full rounded px-2 py-1 text-left hover:bg-gray-900"
          >
            📄 globals.css
          </button>
        </div>
      )}
    </aside>
  );
}