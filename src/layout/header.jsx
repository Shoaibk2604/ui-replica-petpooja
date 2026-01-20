import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowCta(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full text-white">
      <div className="relative w-full ">
        <div className="mx-auto flex h-14 items-center justify-between px-8">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Petpooja Tasks"
              className="h-7 w-auto shrink-0 object-contain sm:h-8 md:h-9"
            />
          </a>

          <nav className="hidden md:flex">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white/85 backdrop-blur-md">
              <a
                href="#features"
                className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-white"
              >
                Features
              </a>
              <a
                href="#industries"
                className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-white"
              >
                Industries
              </a>
              <a
                href="#why-us"
                className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-white"
              >
                Why Us
              </a>
              <a
                href="#faqs"
                className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-white"
              >
                FAQs
              </a>
            </div>
          </nav>

          <a
            href="#get-started"
            className={`rounded-md bg-[#008745] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#006d38] ${
              showCta
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-1 opacity-0"
            }`}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
