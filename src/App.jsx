import "./App.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Dashboard from "./pages/dashboard";

function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const next = Math.max(0, Math.min(1, 1 - y / 1000));
        if (bgRef.current)
          gsap.to(bgRef.current, { opacity: next, duration: 0 });
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      <div
        ref={bgRef}
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        <div className="absolute -left-40 top-128 h-[500px] w-[500px] md:h-[960px] md:w-[960px] blur-3xl bg-[radial-gradient(circle,rgba(0,135,69,0.55)_0%,rgba(0,135,69,0)_62%)]" />
        <div className="absolute left-1/2 top-[10px] h-[500px] w-[500px] md:h-[960px] md:w-[960px] -translate-x-1/2 blur-3xl bg-[radial-gradient(circle,rgba(0,135,69,0.50)_0%,rgba(0,135,69,0)_64%)]" />
        <div className="absolute -right-40 top-128 h-[500px] w-[500px] md:h-[960px] md:w-[960px] blur-3xl bg-[radial-gradient(circle,rgba(0,135,69,0.55)_0%,rgba(0,135,69,0)_62%)]" />
      </div>

      <div className="pt-14">
        <Dashboard />
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed right-10 cursor-pointer bottom-10 z-50 flex h-10 w-10 px-5 items-center justify-center rounded-[10px] border border-white/20 bg-white text-[#4B5563] transition-colors hover:border-[#008745] hover:bg-[#008745] hover:text-white"
          aria-label="Back to top"
        >
          <span className="inline-block -rotate-90 text-2xl">{">"}</span>
        </button>
      </div>
    </div>
  );
}

export default App;
