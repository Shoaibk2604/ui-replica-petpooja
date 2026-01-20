import "./App.css";
import { useEffect, useState } from "react";
import Dashboard from "./pages/dashboard";

function App() {
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const next = Math.max(0, Math.min(1, 1 - y / 1000));
        setBgOpacity(next);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
        style={{ opacity: bgOpacity }}
      >
        <div
          className="absolute -left-40 top-28 h-[920px] w-[920px] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,135,69,0.55) 0%, rgba(0,135,69,0) 62%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[-260px] h-[960px] w-[960px] -translate-x-1/2 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,135,69,0.50) 0%, rgba(0,135,69,0) 64%)",
          }}
        />
        <div
          className="absolute -right-40 top-36 h-[940px] w-[940px] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,135,69,0.55) 0%, rgba(0,135,69,0) 62%)",
          }}
        />
      </div>

      <div className="pt-14">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
