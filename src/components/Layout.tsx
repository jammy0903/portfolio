import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fef7fa' }}>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
