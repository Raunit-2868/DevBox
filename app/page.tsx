import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Header />

      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}