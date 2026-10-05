"use client";

import { useState } from "react";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar, { Project } from "./components/Sidebar";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: "CreatorFlow" },
    { id: 2, name: "Weather App" },
    { id: 3, name: "Portfolio" },
  ]);

  function addProject() {
    const newProject: Project = {
      id: projects.length + 1,
      name: `Project ${projects.length + 1}`,
    };

    setProjects([...projects, newProject]);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Header />

      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar projects={projects} />

        <Dashboard
          username="Raunit"
          onNewProject={addProject}
        />
      </div>
    </main>
  );
}