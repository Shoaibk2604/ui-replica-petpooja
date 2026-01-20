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
        <div className="mx-auto flex items-center justify-between px-[112px] py-[16px]">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Petpooja Tasks"
              className="h-7 w-auto shrink-0 object-contain sm:h-8 md:h-11"
            />
          </a>

          <nav className="hidden md:flex">
            <div className="flex items-center gap-4 rounded-full bg-[#0006] px-2 py-1 font-['DM_Sans'] text-[16px] font-medium text-[#d1d5db] backdrop-blur-md">
              <a
                href="#features"
                className="rounded-full px-2 py-1 transition-colors hover:bg-white/5 text-[#d1d5db]"
              >
                Features
              </a>
              <a
                href="#industries"
                className="rounded-full px-2 py-1 transition-colors hover:bg-white/5 text-[#d1d5db]"
              >
                Industries
              </a>
              <a
                href="#why-us"
                className="rounded-full px-2 py-1 transition-colors hover:bg-white/5 text-[#d1d5db]"
              >
                Why Us
              </a>
              <a
                href="#faqs"
                className="rounded-full px-2 py-1 transition-colors hover:bg-white/5 text-[#d1d5db]"
              >
                FAQs
              </a>
            </div>
          </nav>

          <a
            href="#get-started"
            className={`cursor-pointer rounded-[8px] bg-[#008745] px-[24px] py-[10px] text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#008745] hover:font-bold ${
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
