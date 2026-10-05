"use client";

import { useState } from "react";

import FileExplorer from "./FileExplorer";
import CodeEditor from "./CodeEditor";

export default function IDEWorkspace() {
  const [selectedFile, setSelectedFile] = useState("page.tsx");

  return (
    <section className="flex flex-1 flex-col bg-gray-950">
      <div className="flex flex-1">
        <FileExplorer onFileSelect={setSelectedFile} />

        <CodeEditor selectedFile={selectedFile} />

        <aside className="w-80 border-l border-gray-800 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Preview
          </p>
        </aside>
      </div>

      <div className="h-48 border-t border-gray-800 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Terminal
        </p>
      </div>
    </section>
  );
}