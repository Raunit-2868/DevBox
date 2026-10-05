"use client";

import { useState } from "react";

type CodeEditorProps = {
  selectedFile: string;
};

export default function CodeEditor({
  selectedFile,
}: CodeEditorProps) {
  const [code, setCode] = useState(
    `function hello() {
  console.log("Hello from DevBox!");
}

hello();`
  );

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-gray-800 px-4 py-2 text-sm text-gray-400">
        {selectedFile}
      </div>

      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        className="flex-1 resize-none bg-gray-950 p-4 font-mono text-sm text-gray-300 outline-none"
        spellCheck={false}
      />
    </main>
  );
}